package FC_Solve::Solve;

use strict;
use warnings;

use lib '../Games-Solitaire-Verify/lib';

use Inline (
    C                 => 'DATA',
    CLEAN_AFTER_BUILD => 0,
    INC =>
"-I$ENV{FCS_PATH} -I$ENV{FCS_SRC_PATH} -I$ENV{FCS_SRC_PATH}/patsolve/patsolve",
    LIBS    => "-L" . $ENV{FCS_PATH} . " -lfreecell-solver",
    CCFLAGS => "-std=gnu99",

    # LDDLFLAGS => "$Config{lddlflags} -L$FindBin::Bin -lfcs_delta_states_test",
    # CCFLAGS => "-L$FindBin::Bin -lfcs_delta_states_test",
    # MYEXTLIB => "$FindBin::Bin/libfcs_delta_states_test.so",
);

use parent 'Exporter';

our @EXPORT_OK = qw(solve fc_solve_init);

use autodie;

use List::MoreUtils qw/ true /;

use Games::Solitaire::Verify::Solution     ();
use Games::Solitaire::Verify::App::CmdLine ();

sub solve
{
    my ( $game_params, $board_idx ) = @_;

    my $ret = "== $board_idx ==\n";

# my $fc_solve_output = `pi-make-microsoft-freecell-board -t $board_idx | fc-solve -p -t -sam -sel @fc_solve_args`;
    my $fc_solve_output = fc_solve_solve($board_idx);

    my $_line_found = sub {
        my ($s) = @_;

        return ( index( $fc_solve_output, $s ) >= 0 );
    };

    my $is_solvable = $_line_found->('This game is solveable');
    my $unsolved    = $_line_found->('I could not solve');
    my $intractable = $_line_found->('Iterations count exceeded');

    if ( 1 != true { $_ } ( $is_solvable, $unsolved, $intractable ) )
    {
        die "Game is more than one of solved, unsolvable or intractable!";
    }

    my $sol_len = 0;

    if ($is_solvable)
    {
        open my $input_fh, "<", ( \$fc_solve_output )
            or die "Cannnot open fc_solve_output.";
        my $varianter = Games::Solitaire::Verify::App::CmdLine->new(
            {
                argv => $game_params,
            },
        );
        my $solution = Games::Solitaire::Verify::Solution->new(
            {
                input_fh       => $input_fh,
                variant        => "custom",
                variant_params => $varianter->_variant_params(),
            },
        );

        my $verdict = $solution->verify();

        close($input_fh);

        if ($verdict)
        {
            # require Data::Dumper;
            # die "Verdict == " . Dumper($verdict);
            die "Invalid solution!";
        }

        $sol_len = () = ( $fc_solve_output =~ m{^Move}msg );
    }

    my ($num_iters) = (
        $fc_solve_output =~ m{^Total number of states checked is (\d+)\.$}ms );
    return
          $ret
        . "Verdict: "
        . (
          $is_solvable ? "Solved"
        : $intractable ? "Intractable"
        :                "Unsolved"
        ) . " ; Iters: $num_iters ; Length: $sol_len\n";
}

__DATA__
__C__

#include <string.h>
#include <stdio.h>
#include "freecell-solver/fcs_conf.h"
#include "freecell-solver/fcs_cl.h"
#include "output_to_file.h"
#include "range_solvers_gen_ms_boards.h"

static char buffer[120000];
static char board_buf[500];

static fc_solve_display_information_context my_context;

static void * fcs;

void fc_solve_init(AV * args)
{
    my_context = INITIAL_DISPLAY_CONTEXT;

    #ifndef FC_SOLVE_IMPLICIT_PARSABLE_OUTPUT
    my_context.parseable_output =
    #endif
    #ifndef FC_SOLVE_IMPLICIT_T_RANK
    my_context.display_10_as_t =
    #endif
    my_context.display_moves =
    my_context.show_exceeded_limits = TRUE;

    fcs = freecell_solver_user_alloc();

    const int argc = av_len(args) + 1;
    char * argv[argc+1];

    for (int i = 0 ; i < argc ; ++i)
    {
        SV ** sv = av_fetch(args, i, 0);
        if (!sv)
        {
            argv[i] = 0;
        }
        else
        {
            argv[i] = strdup(SvPVbyte_nolen(*sv));
        }
    }
    char * error_string;
    int arg;

    argv[argc] = NULL;

    freecell_solver_user_cmd_line_parse_args_with_file_nesting_count(
        fcs,
        argc,
        (freecell_solver_str_t *)(void *)argv,
        0,
        NULL,
        NULL,
        NULL,
        &error_string,
        &arg,
        -1,
        NULL
    );
    get_board__setup_string(board_buf);
}

SV * fc_solve_solve(int board_num)
{
    get_board_l__without_setup(board_num, board_buf);
    const int err_code = freecell_solver_user_solve_board(fcs, board_buf);
#ifdef WRITE_TO_FILE
    char fn[100];
    sprintf(fn, "/tmp/fcs%d.sol", board_num);
    FILE * const output_fh = fopen(fn, "wt");
#else
    FILE * const output_fh = fmemopen(buffer , COUNT(buffer), "wt");
#endif

    #if 1
    fc_solve_output_result_to_file(output_fh, fcs, err_code, &my_context);
    #else
    fc_solve_output_result_to_file(stdout, fcs, err_code, &my_context);
    #endif

    fclose(output_fh);

    freecell_solver_user_recycle(fcs);

#ifdef WRITE_TO_FILE
    FILE * readfh = fopen(fn, "rt");
    memset(buffer, '\0', COUNT(buffer));
    fread(buffer, 1, COUNT(buffer), readfh);
    fclose(readfh);
#endif
    SV * const ret = newSVpv(buffer, 0);

    return ret;
}
