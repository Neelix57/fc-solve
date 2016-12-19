# The Freecell Solver Repository Root README

[Freecell Solver](http://fc-solve.shlomifish.org/) is an open source
(distributed under the MIT/X11 licence) library, written in C, for attempting
to solve several variants of card Solitaire/Patience, including
[Freecell](http://en.wikipedia.org/wiki/FreeCell) ,
[Baker’s Game](http://en.wikipedia.org/wiki/Baker%27s_Game) ,
[Seahaven Towers](http://en.wikipedia.org/wiki/Seahaven_Towers_%28solitaire%29)
, and
[Simple Simon](http://en.wikipedia.org/wiki/Simple_Simon_%28solitaire) .
Also contained are several command-line programs that use it, and the original
project also span some other code for testing and for support.

[![Travis-CI Build Status](https://travis-ci.org/shlomif/fc-solve.svg?branch=master)](https://travis-ci.org/shlomif/fc-solve)
[![AppVeyor Build status](https://ci.appveyor.com/api/projects/status/ondu214y43paykp5/branch/master?svg=true)](https://ci.appveyor.com/project/shlomif/fc-solve/branch/master)

# Screenshots

![PySol FC Running Freecell Solver](<http://i.imgur.com/thImObN.png>)

# Repository structure

## fc-solve/source/

This contains the source of the solver itself. One can use CMake to build it.

## Games-Solitaire-Verify/Games-Solitaire-Verify

This is the Games-Solitaire-Verify CPAN module. For more information see:

[https://metacpan.org/release/Games-Solitaire-Verify](https://metacpan.org/release/Games-Solitaire-Verify)

## Task-FreecellSolver-Testing

This is a CPAN module for installing the various test dependencies that
are found on CPAN.

## fc-solve/arch\_doc

The Freecell Solver Architecture Document. Somewhat out-of-date, but may
be studied for general enlightenment.

## fc-solve/presets

Some code that is used in order to calculate the built-in command-line
presets, like “-l good-intentions” or “-l maliciously-obscure”. Not very
documented. This code is written in parts in Perl, Bash and Mono.NET.

## fc-solve/rejects

Contains code that is no longer used.

## fc-solve/docs

Contains various documents that are not part of the main source distribution.
Mostly specifications and planning documents.

## fc-solve/benchmarks

Logs of various benchmarks of the code.
