/* Copyright (c) 2000 Justin Heyes Jones
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
/*
 * pqueue.h - header file for the priority queue implementation.
 *
 * Originally written by Justin-Heyes Jones
 * Modified by Shlomi Fish, 2000
 *
 * This file is available under either the MIT/X11 license (see above)
 * or the public domain.
 *
 * Check out Justin-Heyes Jones' A* page from which this code has
 * originated:
 *
 * http://www.heyes-jones.com/astar.html
*/
#pragma once

#ifdef __cplusplus
extern "C" {
#endif

#include <limits.h>
#include "state.h"

/* manage a priority queue as a heap
   the heap is implemented as a fixed size array of pointers to your data */

#define FC_SOLVE_PQUEUE_MaxRating INT_MAX

typedef int pq_rating_t;

typedef struct
{
    fcs_collectible_state_t *val;
    pq_rating_t rating;
} pq_element_t;

static inline pq_rating_t fcs_pq_rating(const pq_element_t elem)
{
    return elem.rating;
}

typedef struct
{
    size_t max_size;
    size_t current_size;
    pq_element_t *Elements; /* pointer to void pointers */
} pri_queue_t;

/* given an index to any element in a binary tree stored in a linear array with
   the root at 1 and
   a "sentinel" value at 0 these macros are useful in making the code clearer */

/* the parent is always given by index/2 */
#define PQ_PARENT_INDEX(i) ((i) >> 1)
#define PQ_FIRST_ENTRY (1)

/* left and right children are index * 2 and (index * 2) +1 respectively */
#define PQ_LEFT_CHILD_INDEX(i) ((i) << 1)
/* initialise the priority queue with a maximum size of maxelements. maxrating
   is the highest or lowest value of an
   entry in the pqueue depending on whether it is ascending or descending
   respectively. Finally the bool32 tells you whether
   the list is sorted ascending or descending... */

static inline void fc_solve_pq_init(pri_queue_t *const pq)
{
    pq->current_size = 0;
    pq->Elements = SMALLOC(pq->Elements, (pq->max_size = 1024) + 1);
}

static inline void fc_solve_PQueueFree(pri_queue_t *pq)
{
    free(pq->Elements);
    pq->Elements = NULL;
}

/* Join a priority queue
   "r" is the rating of the item you're adding for sorting purposes */

static inline void fc_solve_pq_push(pri_queue_t *const pq,
    fcs_collectible_state_t *const val, const pq_rating_t r)
{
    var_AUTO(i, ++(pq->current_size));

    if (i > pq->max_size)
    {
        pq->Elements =
            (pq_element_t *)SREALLOC(pq->Elements, (pq->max_size += 256) + 1);
    }

    const_SLOT(Elements, pq);
    /* set i to the first unused element and increment current_size */
    /* while the parent of the space we're putting the new node into is
       worse than
       our new node, swap the space with the worse node. We keep doing that
       until we
       get to a worse node or until we get to the top

       note that we also can sort so that the minimum elements bubble up so
       we need to loops
       with the comparison operator flipped... */

    while ((i == PQ_FIRST_ENTRY
                   ? (FC_SOLVE_PQUEUE_MaxRating) /* return biggest
                                                    possible rating if
                                                    first element */
                   : (fcs_pq_rating(Elements[PQ_PARENT_INDEX(i)]))) < r)
    {
        Elements[i] = Elements[PQ_PARENT_INDEX(i)];

        i = PQ_PARENT_INDEX(i);
    }

    /* then add the element at the space we created. */
    Elements[i].val = val;
    Elements[i].rating = r;
}

static inline fcs_bool_t fc_solve_is_pqueue_empty(pri_queue_t *pq)
{
    return (pq->current_size == 0);
}

/* remove the first node from the pqueue and provide a pointer to it
 *
 * Returns 0 if found.
 * Returns 1 if not found.
 *
 * */

static inline void fc_solve_pq_pop(
    pri_queue_t *const pq, fcs_collectible_state_t **const val)
{
    if (fc_solve_is_pqueue_empty(pq))
    {
        *val = NULL;
        return;
    }
    const_SLOT(Elements, pq);
    const_SLOT(current_size, pq);
    *val = Elements[PQ_FIRST_ENTRY].val;

    /* get pointer to last element in tree */
    const_AUTO(last_elem, Elements[current_size]);

    const_AUTO(new_current_size, current_size - 1);
    /* code to pop an element from an ascending (top to bottom) pqueue */

    /*  UNTESTED */

    size_t i;
    size_t child;
    for (i = PQ_FIRST_ENTRY;
         (child = PQ_LEFT_CHILD_INDEX(i)) <= new_current_size; i = child)
    {
        /* set child to the smaller of the two children... */

        if ((child != new_current_size) && (fcs_pq_rating(Elements[child + 1]) >
                                               fcs_pq_rating(Elements[child])))
        {
            child++;
        }

        if (fcs_pq_rating(last_elem) < fcs_pq_rating(Elements[child]))
        {
            Elements[i] = Elements[child];
        }
        else
        {
            break;
        }
    }

    Elements[i] = last_elem;
    pq->current_size = new_current_size;

    return;
}

#ifdef __cplusplus
}
#endif
