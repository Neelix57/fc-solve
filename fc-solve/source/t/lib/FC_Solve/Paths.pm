package FC_Solve::Paths;

use strict;
use warnings;
use String::ShellQuote qw/shell_quote/;

use parent 'Exporter';

our @EXPORT_OK = qw($FC_SOLVE_EXE $FC_SOLVE__RAW bin_board bin_exe_raw bin_file data_file is_freecell_only samp_board samp_preset samp_sol);

use File::Spec ();

my $DATA_DIR = File::Spec->catdir($ENV{FCS_SRC_PATH}, qw(t data));
my $BOARDS_DIR = File::Spec->catdir($DATA_DIR, 'sample-boards');
my $SOLS_DIR = File::Spec->catdir($DATA_DIR, 'sample-solutions');
my $PRESETS_DIR = File::Spec->catdir($DATA_DIR, 'presets');
my $FCS_PATH = $ENV{FCS_PATH};
our $FC_SOLVE__RAW = "$FCS_PATH/fc-solve";
our $FC_SOLVE_EXE = shell_quote($FC_SOLVE__RAW);

my $FC_ONLY = ($ENV{FCS_TEST_TAGS} =~ /\bfc_only\b/);

# A file in the output/binaries directory where fc-solve was compiled.
sub bin_file
{
    return File::Spec->catfile($FCS_PATH, @{shift@_});
}

sub bin_exe_raw
{
    return bin_file(@_);
}

# A board file in the binary directory.
sub bin_board
{
    return File::Spec->catfile($FCS_PATH, shift);
}

sub data_file
{
    return File::Spec->catfile($DATA_DIR, @{shift@_});
}

sub is_freecell_only
{
    return $FC_ONLY;
}

# Returns a board from the sample-boards directory.
sub samp_board
{
    return File::Spec->catfile($BOARDS_DIR, shift);
}

# Returns a board from the sample-boards directory.
sub samp_sol
{
    return File::Spec->catfile($SOLS_DIR, shift);
}

sub samp_preset
{
    return File::Spec->catfile($PRESETS_DIR, shift);
}

1;
