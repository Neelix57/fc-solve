package Shlomif::FCS::CalcMetaScan::Base;

use strict;
use warnings;

=head1 NAME

Shlomif::FCS::CalcMetaScan::Base - a base class.

=cut

use vars qw($VERSION);

$VERSION = '0.0.1';

use Class::XSAccessor;

=head1 SYNOPSIS

    use base 'Shlomif::FCS::CalcMetaScan::Base';

    sub _init
    {
        my ($self, $args) = @_;

        $self->address($args->{address});

        if (!exists($args->{name}))
        {
            die "No name - no cry.";
        }

        return;
    }

=head1 DESCRIPTION

This is the base class for L<Shlomif::FCS::CalcMetaScan> classes.
Everything is subject to change.

=cut

=head1 FUNCTIONS

=head2 new($args)

The constructor. Blesses and calls _init() .

=cut

sub new
{
    my $class = shift;
    my $self = {};
    bless $self, $class;

    # May throw an exception.
    $self->_init(@_);

    return $self;
}

=head2 __PACKAGE__->mk_accessors(qw(method1 method2 method3))

Equivalent to L<Class::Accessor>'s mk_accessors only using Class::XSAccessor.
It beats running an ugly script on my code, and can be done at run-time.

Gotta love dynamic languages like Perl 5.

=cut

sub mk_accessors
{
    my $package = shift;
    return $package->mk_acc_ref([@_]);
}

=head2 __PACKAGE__->mk_acc_ref([qw(method1 method2 method3)])

Creates the accessors in the array-ref of names at run-time.

=cut

sub mk_acc_ref
{
    my $package = shift;
    my $names = shift;

    my $mapping = +{ map { $_ => $_ } @$names };

    eval <<"EOF";
package $package;

Class::XSAccessor->import(
    accessors => \$mapping,
);
EOF

}

1; # End of Shlomif::FCS::CalcMetaScan::Move

__END__

=head1 AUTHOR

Shlomi Fish, L<http://www.shlomifish.org/> .

=head1 SUPPORT

You can find documentation for this module with the perldoc command.

    perldoc Shlomif::FCS::CalcMetaScan


You can also look for information at:

=over 4

=item * RT: CPAN's request tracker

L<http://rt.cpan.org/NoAuth/Bugs.html?Dist=Shlomif-FCS-CalcMetaScan>

=item * AnnoCPAN: Annotated CPAN documentation

L<http://annocpan.org/dist/Shlomif-FCS-CalcMetaScan>

=item * CPAN Ratings

L<http://cpanratings.perl.org/d/Shlomif-FCS-CalcMetaScan>

=item * Search CPAN

L<http://search.cpan.org/dist/Shlomif-FCS-CalcMetaScan>

=back


=head1 ACKNOWLEDGEMENTS

=head1 COPYRIGHT AND LICENSE

This file is part of Freecell Solver. It is subject to the license terms in
the COPYING.txt file found in the top-level directory of this distribution
and at http://fc-solve.shlomifish.org/docs/distro/COPYING.html . No part of
Freecell Solver, including this file, may be copied, modified, propagated,
or distributed except according to the terms contained in the COPYING file.

Copyright (c) 2010 Shlomi Fish

=cut

