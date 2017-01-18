/*
 * This file is part of Freecell Solver. It is subject to the license terms in
 * the COPYING.txt file found in the top-level directory of this distribution
 * and at http://fc-solve.shlomifish.org/docs/distro/COPYING.html . No part of
 * Freecell Solver, including this file, may be copied, modified, propagated,
 * or distributed except according to the terms contained in the COPYING file.
 *
 * Copyright (c) 2000 Shlomi Fish
 */
/*
 * main.c - the main() and related functions of the fc-solve command line
 * executable.
 *
 * It is documented in the documents "README", "USAGE", etc. in the
 * Freecell Solver distribution from http://fc-solve.shlomifish.org/ .
 */
#include "rinutils.h"
#include "config.h"

#include "game_type_params.h"
#include "fcs_enums.h"
#define FCS_MOVE_FUNCS_NUM 199

typedef struct
{
    int preset_id;

    fcs_game_type_params_t game_params;

    char tests_order[FCS_MOVE_FUNCS_NUM * 3 + 1];
    char allowed_tests[FCS_MOVE_FUNCS_NUM * 3 + 1];
} fcs_preset_t;

extern fc_solve_preset_ret_code_t fc_solve_get_preset_by_name(
    const char *const name, const fcs_preset_t **const preset_ptr);

int main(int argc, char *argv[])
{
    const fcs_preset_t *new_preset_ptr;
    const_AUTO(
        status1, fc_solve_get_preset_by_name("notexist", &new_preset_ptr));
    if (status1 != FCS_PRESET_CODE_OK)
    {
        return status1;
    }
    return 0;
}
