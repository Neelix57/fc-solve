/* Copyright (c) 2012 Shlomi Fish
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
 * dbm_move_to_string.h - the move_to_string function.
 */
#pragma once

#include "rinutils.h"

#ifdef __cplusplus
extern "C" {
#endif

static const char *move_to_string(unsigned char move, char *const move_buffer)
{
    char *s = move_buffer;

    for (int iter = 0; iter < 2; iter++)
    {
        int inspect = (move & 0xF);
        move >>= 4;

        if (inspect < 8)
        {
            s += sprintf(s, "Column %d", inspect);
        }
        else
        {
            inspect -= 8;
            if (inspect < 4)
            {
                s += sprintf(s, "Freecell %d", inspect);
            }
            else
            {
                inspect -= 4;
                s += sprintf(s, "Foundation %d", inspect);
            }
        }
        if (iter == 0)
        {
            s += sprintf(s, "%s", " -> ");
        }
    }

    return move_buffer;
}

#ifdef __cplusplus
}
#endif
