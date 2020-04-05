#!/usr/bin/perl

use strict;
use warnings;

use utf8;

use Getopt::Long;

use List::Util qw(min);

use Text::Table;

use FC_Solve::TimePresets;

my $with_len = 0;

binmode STDOUT, ':utf8';

my $num_scans_limit = -1;

GetOptions(
    "l!"          => \$with_len,
    'max-scans=i' => \$num_scans_limit,
);

my ( $scan_id, $board_idx ) = @ARGV;

my @guessed_quotas = ( (350) x 300 );

my @final_quotas;

my $input_obj       = FC_Solve::TimePresets->new;
my $scans_lens_data = $input_obj->calc_scans_lens_data;

my $num_total_scans = @{ $input_obj->selected_scans() };

my @results;
my $selected_scans = $input_obj->selected_scans();
SELECTED_SCANS:
while ( my ( $scan_index, $scan ) = each(@$selected_scans) )
{
    if ( $scan_index == $num_scans_limit )
    {
        last SELECTED_SCANS;
    }

    my $scan_id  = $scan->id();
    my $cmd_line = $scan->cmd_line();

    my $vec = $scans_lens_data->slice(":,$scan_index,0");
    $vec = $vec->where( $vec > 0 );

    my $sorted = $vec->flat()->qsort();

    # The step should be the 90% percentile, but not higher than
    # 10,000 iterations.
    my $quota =
        min( $sorted->at( int( ( $sorted->dims() )[0] * 0.9 ) ), 10_000 );

    push @results, { cmd_line => $cmd_line, id => $scan_id, quota => $quota };
}

# Flair is our temporary name for these independently evaluated instances
# print join(" \\\n--next-flair ", map { "--flair-id $_->{id} --flair-quota $_->{quota} $_->{cmd_line}" } @results);
if (0)
{
    print(
        join( " \\\n-nf ",
            map { "--flare-name $_->{id} $_->{cmd_line} -opt" } @results ),
        " \\\n --flares-plan '",
        join( ",", map { "Run:$_->{quota}\@$_->{id}" } @results ),
        "'\n",
    );
}

{
    my $x = $scans_lens_data->slice(":,:,1")->clump( 1 .. 2 );

    $x = ( $x >= 0 ) * $x + ( $x < 0 ) * PDL->ones( $x->dims() ) * 100_000;

    my $z = $x->xchg( 0, 1 );

    my $s = $z->qsort();

    #my $histograms =
    #    $x->xchg(0,1)->qsorti()->xchg(0,1)->histogram(1,0,scalar(@results));

    # print $histograms;

    # my $sep = \'|';
    my $sep = \'│';

    # my $major_sep = \'||';
    my $major_sep = \'║';
    my $tb        = Text::Table->new( $sep, " Place ", $major_sep,
        ( map { +( " $_->{id} ", $sep ) } @results ) );

    my $num_scans = @results;

    my $get_place = sub {
        my ($idx) = @_;
        return (
            $s->slice("$idx,:")->clump( 0, 1 )->dummy( 0, $num_total_scans ) ==
                $z );
    };

    foreach my $idx ( 0 .. $num_scans - 1 )
    {
        # $tb->load([$idx+1, $histograms->slice(":,$idx")->list()]);
        $tb->load(
            [
                map { " $_ " } (
                    $idx + 1,
                    (
                        ( $idx == 0 )
                        ? $get_place->($idx)
                        : ( $get_place->($idx) & ( ~$get_place->( $idx - 1 ) ) )
                    )->xchg( 0, 1 )->sumover()->list()
                )
            ]
        );
    }

    my $make_rule = sub {
        my ($args) = @_;

        my $left      = $args->{left};
        my $right     = $args->{right};
        my $main_left = $args->{main_left};
        my $middle    = $args->{middle};

        return $tb->rule(
            sub {
                my ( $index, $len ) = @_;

                return ( '─' x $len );
            },
            sub {
                my ( $index, $len ) = @_;

                my $char = (
                      ( $index == 0 )              ? $left
                    : ( $index == 1 )              ? $main_left
                    : ( $index == $num_scans + 1 ) ? $right
                    :                                $middle
                );

                return $char x $len;
            },
        );
    };

    my $start_rule = $make_rule->(
        {
            left      => '┌',
            main_left => '╥',
            right     => '┐',
            middle    => '┬',
        }
    );

    # my $rule = $tb->rule('-', '+');
    my $mid_rule = $make_rule->(
        {
            left      => '├',
            main_left => '╫',
            right     => '┤',
            middle    => '┼',
        }
    );

    my $end_rule = $make_rule->(
        {
            left      => '└',
            main_left => '╨',
            right     => '┘',
            middle    => '┴',
        }
    );

    print $start_rule, $tb->title,
        ( map { $mid_rule, $_, } $tb->body() ), $end_rule;

=begin Foo
    print map { $results[$_]->{id} . ": " . $histogram[$_] . "\n" }
        reverse sort { $histogram[$a] <=> $histogram[$b] }
        (0 .. $#histogram)
        ;

=cut

}
