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
 * fcs_move.h - header file for the move structure and enums of
 * Freecell Solver. This file is common to the main code and to the
 * library headers.
 *
 */

/* #define FCS_DEBUG_MOVES */


#ifdef FCS_DEBUG_MOVES
struct fcs_move_struct
{
    /* The index of the foundation, in case there are more than one decks */
    int foundation;
    /* Used in the case of a stack to stack move */
    int num_cards_in_sequence;
    /* There are two freecells, one for the source and the other
     * for the destination */
    int src_freecell;
    int dest_freecell;
    /* Ditto for the stacks */
    int src_stack;
    int dest_stack;
    /* The type of the move see the enum fcs_move_types */
    int type;
};

#define fcs_move_set_src_stack(move,value)         (move).src_stack = (value);
#define fcs_move_set_src_freecell(move,value)      (move).src_freecell = (value);
#define fcs_move_set_dest_stack(move,value)        (move).dest_stack = (value);
#define fcs_move_set_dest_freecell(move,value)     (move).dest_freecell = (value);
#define fcs_move_set_foundation(move,value)        (move).foundation = (value);
#define fcs_move_set_type(move,value)              (move).type = (value);
#define fcs_move_set_num_cards_in_seq(move,value)  (move).num_cards_in_sequence = (value);

#define fcs_move_get_src_stack(move)               ((move).src_stack)
#define fcs_move_get_src_freecell(move)            ((move).src_freecell)
#define fcs_move_get_dest_stack(move)              ((move).dest_stack)
#define fcs_move_get_dest_freecell(move)           ((move).dest_freecell)
#define fcs_move_get_foundation(move)              ((move).foundation)
#define fcs_move_get_type(move)                    ((move).type)
#define fcs_move_get_num_cards_in_seq(move)        ((move).num_cards_in_sequence)

#endif
