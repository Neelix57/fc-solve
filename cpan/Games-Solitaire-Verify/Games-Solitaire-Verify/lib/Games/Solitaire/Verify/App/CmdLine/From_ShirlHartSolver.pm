package Games::Solitaire::Verify::App::CmdLine::From_ShirlHartSolver;

use strict;
use warnings;
use autodie;

use parent 'Games::Solitaire::Verify::Base';

use Games::Solitaire::Verify::VariantsMap      ();
use Games::Solitaire::Verify::Solution         ();
use Games::Solitaire::Verify::State::LaxParser ();
use Games::Solitaire::Verify::Move             ();

use List::Util qw(first);
use List::MoreUtils qw(firstidx);

use Getopt::Long qw(GetOptionsFromArray);

__PACKAGE__->mk_acc_ref(
    [
        qw(
            _input_move_index
            _st
            _filename
            _sol_filename
            _variant_params
            _buffer_ref
            )
    ]
);

sub _init
{
    my ( $self, $args ) = @_;

    my $argv = $args->{'argv'};

    my $variant_map = Games::Solitaire::Verify::VariantsMap->new();

    my $variant_params = $variant_map->get_variant_by_id("freecell");

    GetOptionsFromArray(
        $argv,
        'g|game|variant=s' => sub {
            my ( undef, $game ) = @_;

            $variant_params = $variant_map->get_variant_by_id($game);

            if ( !defined($variant_params) )
            {
                die "Unknown variant '$game'!\n";
            }
        },
        'freecells-num=i' => sub {
            my ( undef, $n ) = @_;
            $variant_params->num_freecells($n);
        },
        'stacks-num=i' => sub {
            my ( undef, $n ) = @_;
            $variant_params->num_columns($n);
        },
        'decks-num=i' => sub {
            my ( undef, $n ) = @_;

            if ( !( ( $n == 1 ) || ( $n == 2 ) ) )
            {
                die "Decks should be 1 or 2.";
            }

            $variant_params->num_decks($n);
        },
        'sequences-are-built-by=s' => sub {
            my ( undef, $val ) = @_;

            my %seqs_build_by = (
                ( map { $_ => $_ } (qw(alt_color suit rank)) ),
                "alternate_color" => "alt_color",
            );

            my $proc_val = $seqs_build_by{$val};

            if ( !defined($proc_val) )
            {
                die "Unknown sequences-are-built-by '$val'!";
            }

            $variant_params->seqs_build_by($proc_val);
        },
        'empty-stacks-filled-by=s' => sub {
            my ( undef, $val ) = @_;

            my %empty_stacks_filled_by_map =
                ( map { $_ => 1 } (qw(kings any none)) );

            if ( !exists( $empty_stacks_filled_by_map{$val} ) )
            {
                die "Unknown empty stacks filled by '$val'!";
            }

            $variant_params->empty_stacks_filled_by($val);
        },
        'sequence-move=s' => sub {
            my ( undef, $val ) = @_;

            my %seq_moves = ( map { $_ => 1 } (qw(limited unlimited)) );

            if ( !exists( $seq_moves{$val} ) )
            {
                die "Unknown sequence move '$val'!";
            }

            $variant_params->sequence_move($val);
        },
    ) or die "Cannot process command line arguments";

    my $filename = shift(@$argv);

    if ( !defined($filename) )
    {
        $filename = "-";
    }

    my $sol_filename = shift(@$argv);

    if ( !defined($sol_filename) )
    {
        die "Solution filename not specified.";
    }

    $self->_variant_params($variant_params);
    $self->_filename($filename);
    $self->_sol_filename($sol_filename);

    my $s = '';
    $self->_buffer_ref( \$s );

    return;
}

sub _append
{
    my ( $self, $text ) = @_;

    ${ $self->_buffer_ref } .= $text;

    return;
}

sub _get_buffer
{
    my ($self) = @_;

    return ${ $self->_buffer_ref };
}

sub _slurp
{
    my $filename = shift;

    open my $in, '<', $filename
        or die "Cannot open '$filename' for slurping - $!";

    local $/;
    my $contents = <$in>;

    close($in);

    return $contents;
}

sub _read_initial_state
{
    my $self = shift;

    $self->_st(
        Games::Solitaire::Verify::State::LaxParser->new(
            {
                string           => scalar( _slurp( $self->_filename ) ),
                variant          => 'custom',
                'variant_params' => $self->_variant_params(),
            }
        )
    );

    $self->_append("-=-=-=-=-=-=-=-=-=-=-=-\n\n");

    $self->_out_running_state;

    return;
}

sub _out_running_state
{
    my ($self) = @_;

    $self->_append( $self->_st->to_string() . "\n\n====================\n\n" );

    return;
}

sub _perform_and_output_move
{
    my ( $self, $move_s ) = @_;

    $self->_append("$move_s\n\n");

    $self->_st->verify_and_perform_move(
        Games::Solitaire::Verify::Move->new(
            {
                fcs_string => $move_s,
                game       => $self->_st->_variant(),
            },
        )
    );
    $self->_out_running_state;

    return;
}

sub _find_col_card
{
    my ( $self, $card_s ) = @_;

    return firstidx
    {
        my $col = $self->_st->get_column($_);
        ( $col->len == 0 ) ? 0 : $col->top->fast_s eq $card_s
    }
    ( 0 .. $self->_st->num_columns - 1 );
}

sub _find_empty_col
{
    my ($self) = @_;

    return firstidx
    {
        $self->_st->get_column($_)->len == 0
    }
    ( 0 .. $self->_st->num_columns - 1 );
}

sub _find_fc_card
{
    my ( $self, $card_s ) = @_;
    my $dest_fc_idx = firstidx
    {
        my $card = $self->_st->get_freecell($_);
        defined($card) ? ( $card->fast_s eq $card_s ) : 0;
    }
    ( 0 .. $self->_st->num_freecells - 1 );
}

sub _find_card_src_string
{
    my ( $self, $src_card_s ) = @_;

    my $src_col_idx = $self->_find_col_card($src_card_s);

    # TODO : try to find a freecell card.
    if ( $src_col_idx < 0 )
    {
        my $src_fc_idx = $self->_find_fc_card($src_card_s);
        if ( $src_fc_idx < 0 )
        {
            die "Cannot find card <$src_card_s>.";
        }
        return ( "a card", "freecell $src_fc_idx" );
    }
    else
    {
        return ( "1 cards", "stack $src_col_idx" );
    }
}

sub _perform_move
{
    my ( $self, $move_line ) = @_;

    my @fields = ( split /\|/, $move_line, -1 );
    if ( @fields != 5 )
    {
        die "Wrong $move_line";
    }
    my $idx = shift @fields;
    if ( $idx ne $self->_input_move_index )
    {
        die "wrong move index - $move_line";
    }

    my ( $move_s, $src_card, $dest, $found_moves ) = @fields;

    my %fc = ( a => 0, b => 1, c => 2, d => 3 );
DETECT_MOVE:
    {
        if ( my ( $src_col_idx, $dest_fc_idx ) =
            $move_s =~ /\A([1-8])([abcd])\z/ )
        {
            --$src_col_idx;
            $dest_fc_idx = $fc{$dest_fc_idx};
            if ( $dest ne 'f' )
            {
                die "wrong move to freecell - $move_line";
            }
            if ( $src_card ne
                $self->_st->get_column($src_col_idx)->top->to_string )
            {
                die "wrong move to freecell - $move_line";
            }

            $self->_perform_and_output_move(
                sprintf(
                    "Move a card from stack %d to freecell %d",
                    $src_col_idx, $dest_fc_idx,
                ),
            );
            last DETECT_MOVE;
        }
        if ( my ( $src_col_idx, $dest_col_idx ) =
            $move_s =~ /\A([1-8])([1-8])\z/ )
        {
            --$src_col_idx;
            --$dest_col_idx;
            $src_card = substr( $src_card, 0, 2 );
            my $col = $self->_st->get_column($src_col_idx);
            my $idx = first { $col->pos($_)->to_string eq $src_card }
            ( 0 .. $col->len - 1 );
            if ( !defined $idx )
            {
                die "wrong move stack to stack - $move_line";
            }
            my $dcol = $self->_st->get_column($dest_col_idx);
            if (
                $dest eq 'e'
                ? ( $dcol->len() > 0 )
                : ( $dest ne $dcol->top->to_string )
                )
            {
                die "wrong move stack to stack - $move_line";
            }

            $self->_perform_and_output_move(
                sprintf(
                    "Move %d cards from stack %d to stack %d",
                    $col->len() - $idx,
                    $src_col_idx, $dest_col_idx,
                ),
            );
            last DETECT_MOVE;
        }

        if ( my ( $src_col_idx, ) = $move_s =~ /\A([1-8])(?:h)\z/ )
        {
            --$src_col_idx;
            if ( $src_card ne
                $self->_st->get_column($src_col_idx)->top->to_string )
            {
                die "wrong move stack to foundations - $move_line";
            }
            if ( $dest ne 'h' )
            {
                die "wrong move stack to foundations - $move_line";
            }

            $self->_perform_and_output_move(
                sprintf( "Move a card from stack %d to the foundations",
                    $src_col_idx ),
            );
            last DETECT_MOVE;
        }

        if ( my ( $src_fc_idx, ) = $move_s =~ /\A([a-d])(?:h)\z/ )
        {
            $src_fc_idx = $fc{$src_fc_idx};
            if ( $src_card ne $self->_st->get_freecell($src_fc_idx)->to_string )
            {
                die "wrong move fc to foundations - $move_line";
            }
            if ( $dest ne 'h' )
            {
                die "wrong move fc to foundations - $move_line";
            }

            $self->_perform_and_output_move(
                sprintf( "Move a card from freecell %d to the foundations",
                    $src_fc_idx ),
            );
            last DETECT_MOVE;
        }

        if ( my ( $src_fc_idx, $dest_col_idx ) =
            $move_s =~ /\A([a-d])([1-8])\z/ )
        {
            $src_fc_idx = $fc{$src_fc_idx};
            --$dest_col_idx;
            if ( $src_card ne $self->_st->get_freecell($src_fc_idx)->to_string )
            {
                die "wrong move freecell to stack - $move_line";
            }
            if (
                $dest ne $self->_st->get_column($dest_col_idx)->top->to_string )
            {
                die "wrong move freecell to stack - $move_line";
            }

            $self->_perform_and_output_move(
                sprintf(
                    "Move a card from freecell %d to stack %d",
                    $src_fc_idx, $dest_col_idx,
                ),
            );
            last DETECT_MOVE;
        }
        die "wrong move - $move_line";
    }

    if ( length $found_moves )
    {
        my $map;
        my %suits;
        $map = sub {
            my $s = shift;
            if ( length($s) == 2 )
            {
                return $map->("$s-$s");
            }
            my ( $start, $end ) = $s =~ /\A(\S\S)-(\S\S)\z/;
            my $sc =
                Games::Solitaire::Verify::Card->new( { string => $start } );
            my $ec = Games::Solitaire::Verify::Card->new( { string => $end } );
            if ( $sc->suit ne $ec->suit )
            {
                die "uiui";
            }
            if ( exists $suits{ $sc->suit } )
            {
                die "duplicate";
            }
            if ( $sc->rank > $ec->rank )
            {
                die "foo";
            }
            $suits{ $sc->suit } = { start => $sc, end => $ec };
            return;
        };
        foreach my $f ( split /;/, $found_moves, -1 )
        {
            $map->($f);
        }
        my $count = 1;
    FOUNDATION:
        while ( $count > 0 )
        {
            $count = 0;
            foreach my $suit ( keys %suits )
            {
                my @src_s;
                eval {
                    @src_s =
                        $self->_find_card_src_string(
                        $suits{$suit}->{start}->to_string );
                };
                if ( !$@ )
                {
                    ++$count;
                    my $rank = $suits{$suit}->{start}->rank;
                    if ( $rank == $suits{$suit}->{end}->rank )
                    {
                        delete $suits{$suit};
                    }
                    else
                    {
                        $suits{$suit}->{start}->rank( 1 + $rank );
                    }
                    $self->_perform_and_output_move(
                        sprintf( "Move a card from %s to the foundations",
                            $src_s[1] ),
                    );
                    next FOUNDATION;
                }
            }
        }
        if (%suits)
        {
            die "cannot move to foundations - $move_line";
        }
    }
    $self->_input_move_index( $self->_input_move_index + 1 );
    return;
    if ( my ($src_card_s) = $move_line =~ /\A(.[HCDS]) to temp\z/ )
    {
        my $src_col_idx = $self->_find_col_card($src_card_s);
        if ( $src_col_idx < 0 )
        {
            die "Cannot find card.";
        }

        my $dest_fc_idx = firstidx
        {
            !defined( $self->_st->get_freecell($_) )
        }
        ( 0 .. $self->_st->num_freecells - 1 );

        if ( $dest_fc_idx < 0 )
        {
            die "No empty freecell.";
        }

        $self->_perform_and_output_move(
            sprintf(
                "Move a card from stack %d to freecell %d",
                $src_col_idx, $dest_fc_idx,
            ),
        );

    }
    elsif ( ($src_card_s) = $move_line =~ /\A(.[HCDS]) out\z/ )
    {
        my @src_s = $self->_find_card_src_string($src_card_s);
        $self->_perform_and_output_move(
            sprintf( "Move a card from %s to the foundations", $src_s[1] ),
        );
    }
    elsif ( ($src_card_s) = $move_line =~ /\A(.[HCDS]) to empty pile\z/ )
    {
        my $dest_col_idx = $self->_find_empty_col;
        if ( $dest_col_idx < 0 )
        {
            die "Cannot find empty col.";
        }
        my @src_s = $self->_find_card_src_string($src_card_s);

        $self->_perform_and_output_move(
            sprintf( "Move %s from %s to stack %d", @src_s, $dest_col_idx ),
        );
    }
    elsif ( ( $src_card_s, ( my $dest_card_s ) ) =
        $move_line =~ /\A(.[HCDS]) to (.[HCDS])\z/ )
    {
        my $dest_col_idx = $self->_find_col_card($dest_card_s);
        if ( $dest_col_idx < 0 )
        {
            die "Cannot find card <$dest_card_s>.";
        }

        my @src_s = $self->_find_card_src_string($src_card_s);
        $self->_perform_and_output_move(
            sprintf( "Move %s from %s to stack %d", @src_s, $dest_col_idx ) );
    }
    else
    {
        die "Unrecognised move_line <$move_line>";
    }
}

sub _process_main
{
    my $self = shift;

    $self->_read_initial_state;
    $self->_input_move_index(1);

    open my $in_fh, '<', $self->_sol_filename;

    my $l;
FIRST_lines:
    while ( $l = <$in_fh> )
    {
        chomp($l);
        last FIRST_lines if ( $l =~ /\|/ );
    }

    while ( $l =~ /\|/ )
    {
        $self->_perform_move($l);
        $l = <$in_fh>;
        chomp $l;
    }
    close($in_fh);

    $self->_append("This game is solveable.\n");

    return;
}

sub run
{
    my ($self) = @_;

    $self->_process_main;

    print $self->_get_buffer;

    return;
}

1;

=head1 NAME

Games::Solitaire::Verify::App::CmdLine::From_Patsolve - a modulino for
converting from patsolve solutions to fc-solve ones.

=head1 SYNOPSIS

    $ perl -MGames::Solitaire::Verify::App::CmdLine::From_Patsolve -e 'Games::Solitaire::Verify::App::CmdLine::From_Patsolve->new({argv => \@ARGV})->run()' -- [ARGS]

=head1 DESCRIPTION

This is a a modulino for
converting from patsolve solutions to fc-solve ones.

=head1 METHODS

=head2 run()

Actually execute the command-line application.

=cut
