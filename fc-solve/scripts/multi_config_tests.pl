#!/usr/bin/perl

# The aim of this program is to run Freecell Solver’s test suite with
# several different  build-time configurations of the solver, to make sure
# they are all working fine.

use strict;
use warnings;
use autodie;
use 5.014;

package Games::Solitaire::FC_Solve::Test::Trap::Obj;

use Carp         ();
use Data::Dumper ();

use Term::ANSIColor qw(colored);

use parent 'Games::Solitaire::Verify::Base';

my @fields = qw(
    die
    exit
    leaveby
    return
    stderr
    stdout
    wantarray
    warn
);

__PACKAGE__->mk_acc_ref( [@fields] );
__PACKAGE__->mk_acc_ref( [ 'blurb', 'cmd_line', ] );

use Text::Sprintf::Named ();

use Test::Trap
    qw( trap $trap :flow:stderr(systemsafe):stdout(systemsafe):warn );

sub _init
{
    my ( $self, $args ) = @_;

    %$self = ( %$self, %$args );

    return $self;
}

sub _stringify_value
{
    my ( $self, $name ) = @_;

    my $value = $self->$name();

    if ( ( $name eq "return" ) || ( $name eq "warn" ) )
    {
        return Data::Dumper->new( [$value] )->Dump();
    }
    else
    {
        return ( defined($value) ? $value : "" );
    }
}

sub all_info
{
    my $self = shift;

    return Text::Sprintf::Named->new(
        {
            fmt => join( "",
                map { "$_ [%(blurb)s] ===\n{{{{{{\n%($_)s\n}}}}}}\n\n" }
                    (@fields) )
        }
    )->format(
        {
            args => {
                blurb => scalar( $self->blurb ),
                map {
                    my $name = $_;
                    ( $name => $self->_stringify_value($name) )
                } @fields
            }
        }
    );
}

sub emit_all
{
    my $self = shift;

    my $err_s =
        "Error with @{[$self->blurb()]} executing [@{$self->cmd_line()}].\n";

    my $out = sub {
        print $err_s;
    };

    $out->();
    print( $self->all_info() );

    Carp::cluck("Error.");
    print colored(
        "Error!", ( $ENV{'HARNESS_SUMMARY_COLOR_FAIL'} || 'bold red' )
        ),
        "\n";
    $out->();
    exit(-1);
}

sub run_cmd
{
    my ( $blurb, $args ) = @_;

    my @cmd_line = @{ $args->{'cmd'} };

    print "Running: {$blurb} @cmd_line\n";
    STDOUT->flush;

    my $error_code;

    trap { $error_code = ( system { $cmd_line[0] } @cmd_line ); };

    my $self = __PACKAGE__->new( { ( map { $_ => $trap->$_() } @fields ), } );

    $self->blurb($blurb);
    $self->cmd_line( [@cmd_line] );

    if ($error_code)
    {
        $self->emit_all();
    }
    elsif ( $ENV{FC_SOLVE__MULT_CONFIG_TESTS__TRACE} )
    {
        $self->trace_all();
    }

    return $self;
}

sub trace_all
{
    my ($self) = @_;

    print "Trace of @{[$self->blurb()]} executing [@{$self->cmd_line()}].\n";
    print( $self->all_info() );

    return;
}

package main;

use Path::Tiny qw/ path /;

use Term::ANSIColor qw(colored);

local *run_cmd = \&Games::Solitaire::FC_Solve::Test::Trap::Obj::run_cmd;

my $TEST_BASE_IDX  = 1;
my $NUM_PROCESSORS = 4;

my $FALSE = 0;

# Inline::C/etc. leave some files and dirs under restrictive file permissions
# and we need to instruct rmtree to delete them as well.
my $SAFE = $FALSE;

my %skip_indices;
my @tests;

sub reg_test
{
    my $blurb = shift;
    if ( ref $blurb ne 'HASH' )
    {
        $blurb = { blurb => $blurb, randomly_avoid => $FALSE, };
    }
    push @tests, [ $blurb, @_ ];
}

sub _calc_build_path
{
    my ($idx) = @_;

    return Path::Tiny->cwd->parent->child("build-$idx");
}

my $CWD = Path::Tiny->cwd;

sub _chdir_run
{
    my ( $DIR, $cb ) = @_;

    chdir($DIR);
    $cb->();
    chdir($CWD);

    return;
}

sub run_tests
{
    my ( $idx, $blurb_rec, $args ) = @_;

    my $blurb_base_base = $blurb_rec->{blurb};

    my $blurb_base = sprintf "%s [ idx = %d / %d ]", $blurb_base_base, $idx,
        scalar(@tests);
    my $run = sub {
        my ( $DESC, $cmd ) = @_;
        run_cmd( "$blurb_base : $DESC", { cmd => [@$cmd] } );
    };

    if ( exists $skip_indices{ $idx - $TEST_BASE_IDX } )
    {
        if ( not $blurb_rec->{randomly_avoid} )
        {
            die "foo $idx";
        }
        $run->( "SKIPPING shuffled index $idx.", ["true"] );
        return;
    }
    if ( $idx < ( $ENV{MIN} // 0 ) )
    {
        return;
    }
    my $tatzer_args       = $args->{'tatzer_args'};
    my $cmake_args        = $args->{'cmake_args'};
    my $prepare_dist_args = $args->{'prepare_dist_args'};
    my $website_args      = $args->{'website_args'};

    if ( 1 != grep { $_ }
        ( $tatzer_args, $cmake_args, $prepare_dist_args, $website_args ) )
    {
        die
"One and only one of tatzer_args or cmake_args or prepare_dist_args must be specified.";
    }

    my $build_path = _calc_build_path($idx);
    local %ENV = %ENV;
    delete( $ENV{FCS_USE_TEST_RUN} );
    $ENV{TEST_JOBS} = $NUM_PROCESSORS;
    if ( not $args->{run_perltidy} )
    {
        $ENV{FCS_TEST_SKIP_PERLTIDY} = 1;
    }

    if ($prepare_dist_args)
    {
        $run->(
            "prepare dist",
            [
                $^X,
"../scripts/prepare-self-contained-dbm-etc-solvers-packages-for-hpc-machines/$prepare_dist_args->{base}",
                @{ $prepare_dist_args->{args} }
            ],
        );
        my $DIR = path('dbm_fcs_dist');
        my $ARC = "$DIR.tar.xz";
        $run->( "untar", [ "tar", "-xvf", $ARC ] );
        _chdir_run(
            $DIR,
            sub {
                $run->( 'make', ['make'], );
            }
        );
        $DIR->remove_tree( { safe => $SAFE } );
        unlink($ARC);
    }
    elsif ($website_args)
    {
        my $DIR = "$CWD/../site/wml";
        my $PATH_PREFIX =
            $ENV{FC_SOLVE__MULT_CONFIG_TESTS__DOCKER}
            ? "$CWD/../scripts/dockerized-emscripten/:"
            : "";
        local $ENV{PATH} =
            $PATH_PREFIX . $ENV{PATH} . ":$DIR/node_modules/.bin/";
        _chdir_run(
            $DIR,
            sub {
                local $ENV{PWD} = $DIR;
                run_cmd(
                    "$blurb_base : ./gen-helpers",
                    { cmd => [ $^X, 'gen-helpers' ] }
                );

          # (
          #                 'docker', 'exec', '-it', 'emscripten', 'bash', '-c',
          #                 qq#cd "$DIR" && make#,
          #                 )
          # run_cmd( "$blurb_base : make_foo", { cmd => [ 'make', ] } );
                if ( $ENV{FC_SOLVE__MULT_CONFIG_TESTS__DOCKER} )
                {
                    foreach my $component (qw# travis emscripten #)
                    {
                        my $P =
qq#/home/$component/build/shlomif/fc-solve/fc-solve/source/../site/wml/../../source#;
                        while ( my $x = $P =~ m#(/)#g )
                        {
                            my $path = substr( $P, 0, pos($P) );
                            print "<$path>\n",
                                scalar(
`docker exec -it emscripten bash -c 'echo $path/*'`
                                ),
                                "\n";
                        }
                    }
                    exit(-1);
                }
                my $run_make = sub {
                    my ($args) = @_;
                    unshift @$args, 'make',
                        ( $ENV{DBTOEPUB} ? "DBTOEPUB=\"$ENV{DBTOEPUB}\"" : () ),
                        (
                        $ENV{DOCBOOK5_XSL_STYLESHEETS_PATH}
                        ? "DOCBOOK5_XSL_STYLESHEETS_PATH=\"$ENV{DOCBOOK5_XSL_STYLESHEETS_PATH}\""
                        : ()
                        );
                    return run_cmd(
                        "$blurb_base : @$args",
                        {
                            cmd => [
                                $ENV{FC_SOLVE__MULT_CONFIG_TESTS__DOCKER}
                                ? (@$args)
                                : (
                                    'bash',
                                    '-c',
". ~/bin/Dev-Path-Configs-Source-Me.bash ; set -o pipefail ; @$args 2>&1 | tail -300"
                                )
                            ]
                        }
                    );
                };
                $run_make->( [] );
                if ( not $args->{do_not_test} )
                {
                    $run_make->( ['test'] );
                }
            }
        );
    }
    else
    {
        mkdir($build_path);
        _chdir_run(
            $build_path,
            sub {
                if ($tatzer_args)
                {
                    $run->( "Tatzer", [ '../scripts/Tatzer', @$tatzer_args ] );
                }
                else
                {
                    $run->( "cmake", [ 'cmake', @$cmake_args, '../source' ] );
                }
                $run->( "make", [ 'make', "-j$NUM_PROCESSORS" ] );
                if ( not $args->{do_not_test} )
                {
                    $run->(
                        "test",
                        [
                            "bash",
                            "-c",
qq#$^X "$CWD/run-tests.pl" --glob="valgrind--dbm_fc*.t" || (find .. -name 'valgrind*.log' | xargs cat; exit 1)#
                        ]
                    );
                }

            }
        );
        $build_path->remove_tree( { safe => $SAFE } );
    }

    return;
}

my $AVLV = "avl-2.0.3";
if ( $ENV{FC_SOLVE_GIT_CHECKOUT} )
{
    $ENV{LIBAVL2_SOURCE_DIR} = "$ENV{HOME}/Download/unpack/prog/c/$AVLV/";

    run_cmd( 'git checkout', { cmd => [qw(git checkout master)], } );
    run_cmd( 'git pull', { cmd => [qw(git pull --ff-only origin master)], } );
}
elsif ( not exists $ENV{LIBAVL2_SOURCE_DIR} )
{
    if ( !-d $AVLV )
    {
        my $AVLT = "$AVLV.tar.gz";
        run_cmd(
            'wget avl',
            {
                cmd => [ 'wget', "https://ftp.gnu.org/pub/gnu/avl/$AVLT" ]
            }
        );
        run_cmd( 'untar avl', { cmd => [ qw(tar -xvf), $AVLT ] } );
        path($AVLV)->visit(
            sub {
                my $p = shift;
                $p->edit_raw( sub { s/[\t ]+$//gms; } ) if $p->is_file;
            },
            { recurse => 1, }
        );
    }
    $ENV{LIBAVL2_SOURCE_DIR} = Path::Tiny->cwd->child($AVLV);
    print "LIBAVL2_SOURCE_DIR = $ENV{LIBAVL2_SOURCE_DIR}\n";
}
elsif ( ( !-d $ENV{LIBAVL2_SOURCE_DIR} )
    or grep { !-f } glob( $ENV{LIBAVL2_SOURCE_DIR} . '/*.[ch]' ) )
{
    die "LIBAVL2_SOURCE_DIR is invalid.";
}

# This is just to test that the reporting is working fine.
# run_cmd('false', {cmd => [qw(false)],});
# my $ARCH = 'x64';
my $ARCH = 'n2';

# Load the b or t suffixes.
my @LB = ( '-l', $ARCH . 'b' );
my @LT = ( '-l', $ARCH . 't' );

sub reg_tatzer_test
{
    my $blurb = shift;
    return reg_test( $blurb, { tatzer_args => [@_] } );
}

sub reg_lt_test
{
    my $blurb = shift;
    return reg_tatzer_test( $blurb, @LT, @_ );
}

sub reg_prep
{
    my ( $blurb, $base ) = @_;
    return reg_test( $blurb,
        { prepare_dist_args => { base => $base, args => [] } } );
}

reg_tatzer_test( "Default", () );

sub disabling_website_build_for_now
{
    reg_test( 'Website #1', { website_args => [] } );
}
disabling_website_build_for_now();

reg_test(
    "No int128",
    { cmake_args => [ '-DFCS_AVOID_INT128=1', '-DFCS_ENABLE_DBM_SOLVER=1', ] }
);
reg_prep( "prepare_dist fcc_solver",
    'prepare_fcc_solver_self_contained_package.pl' );
reg_prep( "prepare_dist AWS",
    'prepare_aws_depth_dbm_fc_solver_self_contained_package.pl' );
reg_prep( "prepare_dist vendu",
    'prepare_vendu_depth_dbm_fc_solver_self_contained_package.pl' );
reg_prep( "prepare_dist pbs",
    'prepare_pbs_dbm_solver_self_contained_package.pl' );
reg_tatzer_test( "--fc-only wo break back compat", qw(--fc-only) );
reg_lt_test( "-l n2t with --disable-patsolve", '--disable-patsolve', );
reg_test(
    "build_only: maximum speed preset",
    {
        do_not_test => 1,
        tatzer_args => [ @LB, qw(-l extra_speed --disable-err-strs) ]
    }
);
my $TRUE = 1;
reg_test(
    { blurb => "build_only: no iter-handler", randomly_avoid => $TRUE, },
    {
        do_not_test => 1,
        tatzer_args => [ @LB, qw(-l extra_speed --without-iter-handler) ]
    }
);
reg_test( "Plain CMake Default", { cmake_args => [], run_perltidy => 1, } );
reg_test(
    { blurb      => "Non-Debondt Delta States", randomly_avoid => $TRUE, },
    { cmake_args => ['-DFCS_DISABLE_DEBONDT_DELTA_STATES=1'] }
);
reg_tatzer_test( { blurb => "--rcs", randomly_avoid => $TRUE, }, qw(--rcs) );

reg_lt_test(
    { blurb => "libavl2 with COMPACT_STATES", randomly_avoid => $TRUE, },
    qw(--states-type=COMPACT_STATES --libavl2-p=prb) );

reg_lt_test(
    {
        blurb          => "libavl2 with COMPACT_STATES and --rcs",
        randomly_avoid => $TRUE,
    },
    qw(--states-type=COMPACT_STATES --libavl2-p=prb --rcs),
);

reg_lt_test(
    { blurb => "libavl2 with INDIRECT_STATES", randomly_avoid => $TRUE, },
    qw(--libavl2-p=prb), );

reg_tatzer_test( { blurb => "without-depth-field", randomly_avoid => $TRUE, },
    qw(--without-depth-field) );
reg_tatzer_test(
    { blurb => "without-depth-field and rcs", randomly_avoid => $TRUE, },
    qw(--without-depth-field --rcs) );
reg_lt_test( { blurb => "No FCS_SINGLE_HARD_THREAD", randomly_avoid => $TRUE, },
    '--nosingle-ht' );

reg_lt_test(
    { blurb => "Break Backward Compatibility #1", randomly_avoid => $TRUE, },
    '--break-back-compat-1' );

reg_lt_test(
    {
        blurb          => "Freecell-only (as well as Break Backcompat)",
        randomly_avoid => $TRUE,
    },
    qw(--break-back-compat-1 --fc-only),
);

{
    my @found =
        grep { -e $_ }
        map  { _calc_build_path( $TEST_BASE_IDX + $_ ); } keys @tests;
    if (@found)
    {
        die
"The following build dirs exist and interfere with the build - [ @found ]. Please remove them!";
    }
}
my @l;
while ( my ( $idx, $run ) = each @tests )
{
    if ( $run->[0]->{randomly_avoid} )
    {
        push @l, $idx;

        # say Data::Dumper->new( [ $idx, $run ] )->Dump;
    }
}
use List::Util qw/ shuffle /;
%skip_indices = map { $_ => $TRUE }
    ( ( shuffle @l )[ 0 .. ( ( delete( $ENV{AVOID_NUM} ) // 0 ) - 1 ) ] );

# say Data::Dumper->new( [ \%skip_indices ] )->Dump;

if ($FALSE)
{
    _chdir_run(
        '../../',
        sub {
            run_cmd( "root tests",
                { cmd => [ qw(prove), glob('root-tests/t/*.t') ] } );
        }
    );

    _chdir_run(
        '../../cpan/Games-Solitaire-Verify/Games-Solitaire-Verify/',
        sub {
            run_cmd(
                "Games-Solitaire-Verify dzil",
                { cmd => [qw(dzil test --all)] }
            );
        }
    );
}
while ( my ( $idx, $run ) = each @tests )
{
    run_tests( $TEST_BASE_IDX + $idx, @$run );
}

my $COL  = $ENV{'HARNESS_SUMMARY_COLOR_SUCCESS'};
my $TEXT = "All tests successful.";
print $COL ? colored( $TEXT, $COL ) : $TEXT;
print "\n";
exit(0);

__END__

=head1 COPYRIGHT AND LICENSE

This file is part of Freecell Solver. It is subject to the license terms in
the COPYING.txt file found in the top-level directory of this distribution
and at http://fc-solve.shlomifish.org/docs/distro/COPYING.html . No part of
Freecell Solver, including this file, may be copied, modified, propagated,
or distributed except according to the terms contained in the COPYING file.

Copyright (c) 2012 Shlomi Fish

=cut
