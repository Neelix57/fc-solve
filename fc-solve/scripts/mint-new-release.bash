#! /bin/bash
#
# mint-new-release.bash
# Copyright (C) 2018 shlomif <shlomif@cpan.org>
#
# Distributed under terms of the MIT license.
#

set -x
set -e
set -u
src="$(pwd)"
build="$src/../prerel-build"
mkdir "$build"
cd "$build"
"$src/Tatzer" -l n2t
make
FCS_TEST_BUILD=1 perl "$src"/run-tests.pl
cd "$src"
perl ../scripts/multi_config_tests.pl
rm -fr "$build"
