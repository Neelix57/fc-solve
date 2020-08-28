#!/bin/bash

# This is a script for PGO - Profile Guided Optimisations in gcc.
set -e -x

real_compiler="$1"
shift
mode="$1"
shift

if test "$real_compiler" = "clang" ; then
    compiler="gcc"
else
    compiler="$real_compiler"
    if test "$real_compiler" = "gcc"
    then
        p='-fprofile-update=atomic'
    fi
fi

pgo_flags=""
make_vars=()

src="$(perl -e 'use File::Basename qw(dirname); use File::Spec; print File::Spec->rel2abs(dirname(shift(@ARGV))."/../source/");' "$0")"
# echo "src_dir=$src"

# theme="-l te"
# theme="--read-from-file 4,$(pwd)/Presets/testing-presets/all-star-4.sh"
theme="$FCS_PGO_THEME"

run_make()
{
    make -r -j4 -f "$src"/../scripts/Makefile.gnu SRC_DIR="$src" "$@"
}

m_clean()
{
    run_make clean
}

run_self()
{
    local cmd="$1"
    shift

    bash "$src"/../scripts/pgo.bash "$real_compiler" "$cmd"
}

run_timing()
{
    if [ -x ~/bin/sudo_time_fcs ] ; then
        sudo ~/bin/sudo_time_fcs "$@"
    else
        sudo_renice ./freecell-solver-range-parallel-solve "$@"
    fi
}

if test "$mode" = "total" ; then

    m_clean && \
    run_self "gen" && \
    run_self "time" && \
    m_clean && \
    run_self "use"

    exit 0

elif test "$mode" = "clean" ; then

    m_clean
    exit $?

elif test "$mode" = "time" ; then

    run_timing 1 32000 4000 $theme
    exit $?

elif test "$mode" = "use" ; then

    if test "$compiler" = "gcc" ; then
        pgo_flags="-fprofile-use $p"
    elif test "$compiler" = "icc" ; then
        pgo_flags="-prof-use"
    else
        echo "Unknown compiler '$compiler'!" 1>&2
        exit -1
    fi

    make_vars=(OPT_AND_DEBUG=0 DEBUG=0)

elif test "$mode" = "gen" ; then

    rm -f *.gcda
    if test "$compiler" = "gcc" ; then
        pgo_flags="-fprofile-generate $p"
    elif test "$compiler" = "icc" ; then
        pgo_flags="-prof-gen"
    else
        echo "Unknown compiler '$compiler'!" 1>&2
        exit -1
    fi
else
    echo "Unknown mode '$mode'!" 1>&2
    exit -1
fi

if test \( "$real_compiler" = "clang" \) -a \( "$mode" = "use" \) ; then
    llvm-profdata merge -output default.profdata default*.profraw
fi

run_make FREECELL_ONLY=1 \
    EXTRA_CFLAGS="$pgo_flags" \
    COMPILER="$real_compiler" \
    $make_vars
