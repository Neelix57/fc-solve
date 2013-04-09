"use strict";

var ms_deal_24 = "4C 2C 9C 8C QS 4S 2H\n" +
"5H QH 3C AC 3H 4H QD\n" +
"QC 9S 6H 9H 3S KS 3D\n" +
"5D 2S JC 5C JH 6D AS\n" +
"2D KD TH TC TD 8D\n" +
"7H JS KH TS KC 7C\n" +
"AH 5S 6S AD 8H JD\n" +
"7S 6C 7D 4D 8S 9D\n" ;

var solution_for_deal_24__default = "-=-=-=-=-=-=-=-=-=-=-=-\n" +
"\n" +
"Foundations: H-0 C-0 D-0 S-0\n" +
"Freecells:\n" +
": 4C 2C 9C 8C QS 4S 2H\n" +
": 5H QH 3C AC 3H 4H QD\n" +
": QC 9S 6H 9H 3S KS 3D\n" +
": 5D 2S JC 5C JH 6D AS\n" +
": 2D KD TH TC TD 8D\n" +
": 7H JS KH TS KC 7C\n" +
": AH 5S 6S AD 8H JD\n" +
": 7S 6C 7D 4D 8S 9D\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 3 to the foundations\n" +
"\n" +
"Foundations: H-0 C-0 D-0 S-A\n" +
"Freecells:\n" +
": 4C 2C 9C 8C QS 4S 2H\n" +
": 5H QH 3C AC 3H 4H QD\n" +
": QC 9S 6H 9H 3S KS 3D\n" +
": 5D 2S JC 5C JH 6D\n" +
": 2D KD TH TC TD 8D\n" +
": 7H JS KH TS KC 7C\n" +
": AH 5S 6S AD 8H JD\n" +
": 7S 6C 7D 4D 8S 9D\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 6 to freecell 0\n" +
"\n" +
"Foundations: H-0 C-0 D-0 S-A\n" +
"Freecells:  JD\n" +
": 4C 2C 9C 8C QS 4S 2H\n" +
": 5H QH 3C AC 3H 4H QD\n" +
": QC 9S 6H 9H 3S KS 3D\n" +
": 5D 2S JC 5C JH 6D\n" +
": 2D KD TH TC TD 8D\n" +
": 7H JS KH TS KC 7C\n" +
": AH 5S 6S AD 8H\n" +
": 7S 6C 7D 4D 8S 9D\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 6 to freecell 1\n" +
"\n" +
"Foundations: H-0 C-0 D-0 S-A\n" +
"Freecells:  JD  8H\n" +
": 4C 2C 9C 8C QS 4S 2H\n" +
": 5H QH 3C AC 3H 4H QD\n" +
": QC 9S 6H 9H 3S KS 3D\n" +
": 5D 2S JC 5C JH 6D\n" +
": 2D KD TH TC TD 8D\n" +
": 7H JS KH TS KC 7C\n" +
": AH 5S 6S AD\n" +
": 7S 6C 7D 4D 8S 9D\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 6 to the foundations\n" +
"\n" +
"Foundations: H-0 C-0 D-A S-A\n" +
"Freecells:  JD  8H\n" +
": 4C 2C 9C 8C QS 4S 2H\n" +
": 5H QH 3C AC 3H 4H QD\n" +
": QC 9S 6H 9H 3S KS 3D\n" +
": 5D 2S JC 5C JH 6D\n" +
": 2D KD TH TC TD 8D\n" +
": 7H JS KH TS KC 7C\n" +
": AH 5S 6S\n" +
": 7S 6C 7D 4D 8S 9D\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 0 to freecell 2\n" +
"\n" +
"Foundations: H-0 C-0 D-A S-A\n" +
"Freecells:  JD  8H  2H\n" +
": 4C 2C 9C 8C QS 4S\n" +
": 5H QH 3C AC 3H 4H QD\n" +
": QC 9S 6H 9H 3S KS 3D\n" +
": 5D 2S JC 5C JH 6D\n" +
": 2D KD TH TC TD 8D\n" +
": 7H JS KH TS KC 7C\n" +
": AH 5S 6S\n" +
": 7S 6C 7D 4D 8S 9D\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 0 to freecell 3\n" +
"\n" +
"Foundations: H-0 C-0 D-A S-A\n" +
"Freecells:  JD  8H  2H  4S\n" +
": 4C 2C 9C 8C QS\n" +
": 5H QH 3C AC 3H 4H QD\n" +
": QC 9S 6H 9H 3S KS 3D\n" +
": 5D 2S JC 5C JH 6D\n" +
": 2D KD TH TC TD 8D\n" +
": 7H JS KH TS KC 7C\n" +
": AH 5S 6S\n" +
": 7S 6C 7D 4D 8S 9D\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 0 to stack 0\n" +
"\n" +
"Foundations: H-0 C-0 D-A S-A\n" +
"Freecells:      8H  2H  4S\n" +
": 4C 2C 9C 8C QS JD\n" +
": 5H QH 3C AC 3H 4H QD\n" +
": QC 9S 6H 9H 3S KS 3D\n" +
": 5D 2S JC 5C JH 6D\n" +
": 2D KD TH TC TD 8D\n" +
": 7H JS KH TS KC 7C\n" +
": AH 5S 6S\n" +
": 7S 6C 7D 4D 8S 9D\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 6 to freecell 0\n" +
"\n" +
"Foundations: H-0 C-0 D-A S-A\n" +
"Freecells:  6S  8H  2H  4S\n" +
": 4C 2C 9C 8C QS JD\n" +
": 5H QH 3C AC 3H 4H QD\n" +
": QC 9S 6H 9H 3S KS 3D\n" +
": 5D 2S JC 5C JH 6D\n" +
": 2D KD TH TC TD 8D\n" +
": 7H JS KH TS KC 7C\n" +
": AH 5S\n" +
": 7S 6C 7D 4D 8S 9D\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 6 to stack 3\n" +
"\n" +
"Foundations: H-0 C-0 D-A S-A\n" +
"Freecells:  6S  8H  2H  4S\n" +
": 4C 2C 9C 8C QS JD\n" +
": 5H QH 3C AC 3H 4H QD\n" +
": QC 9S 6H 9H 3S KS 3D\n" +
": 5D 2S JC 5C JH 6D 5S\n" +
": 2D KD TH TC TD 8D\n" +
": 7H JS KH TS KC 7C\n" +
": AH\n" +
": 7S 6C 7D 4D 8S 9D\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 6 to the foundations\n" +
"\n" +
"Foundations: H-A C-0 D-A S-A\n" +
"Freecells:  6S  8H  2H  4S\n" +
": 4C 2C 9C 8C QS JD\n" +
": 5H QH 3C AC 3H 4H QD\n" +
": QC 9S 6H 9H 3S KS 3D\n" +
": 5D 2S JC 5C JH 6D 5S\n" +
": 2D KD TH TC TD 8D\n" +
": 7H JS KH TS KC 7C\n" +
":\n" +
": 7S 6C 7D 4D 8S 9D\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 2 to the foundations\n" +
"\n" +
"Foundations: H-2 C-0 D-A S-A\n" +
"Freecells:  6S  8H      4S\n" +
": 4C 2C 9C 8C QS JD\n" +
": 5H QH 3C AC 3H 4H QD\n" +
": QC 9S 6H 9H 3S KS 3D\n" +
": 5D 2S JC 5C JH 6D 5S\n" +
": 2D KD TH TC TD 8D\n" +
": 7H JS KH TS KC 7C\n" +
":\n" +
": 7S 6C 7D 4D 8S 9D\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 1 to freecell 2\n" +
"\n" +
"Foundations: H-2 C-0 D-A S-A\n" +
"Freecells:  6S  8H  QD  4S\n" +
": 4C 2C 9C 8C QS JD\n" +
": 5H QH 3C AC 3H 4H\n" +
": QC 9S 6H 9H 3S KS 3D\n" +
": 5D 2S JC 5C JH 6D 5S\n" +
": 2D KD TH TC TD 8D\n" +
": 7H JS KH TS KC 7C\n" +
":\n" +
": 7S 6C 7D 4D 8S 9D\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 1 to stack 6\n" +
"\n" +
"Foundations: H-2 C-0 D-A S-A\n" +
"Freecells:  6S  8H  QD  4S\n" +
": 4C 2C 9C 8C QS JD\n" +
": 5H QH 3C AC 3H\n" +
": QC 9S 6H 9H 3S KS 3D\n" +
": 5D 2S JC 5C JH 6D 5S\n" +
": 2D KD TH TC TD 8D\n" +
": 7H JS KH TS KC 7C\n" +
": 4H\n" +
": 7S 6C 7D 4D 8S 9D\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 1 to the foundations\n" +
"\n" +
"Foundations: H-3 C-0 D-A S-A\n" +
"Freecells:  6S  8H  QD  4S\n" +
": 4C 2C 9C 8C QS JD\n" +
": 5H QH 3C AC\n" +
": QC 9S 6H 9H 3S KS 3D\n" +
": 5D 2S JC 5C JH 6D 5S\n" +
": 2D KD TH TC TD 8D\n" +
": 7H JS KH TS KC 7C\n" +
": 4H\n" +
": 7S 6C 7D 4D 8S 9D\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 6 to the foundations\n" +
"\n" +
"Foundations: H-4 C-0 D-A S-A\n" +
"Freecells:  6S  8H  QD  4S\n" +
": 4C 2C 9C 8C QS JD\n" +
": 5H QH 3C AC\n" +
": QC 9S 6H 9H 3S KS 3D\n" +
": 5D 2S JC 5C JH 6D 5S\n" +
": 2D KD TH TC TD 8D\n" +
": 7H JS KH TS KC 7C\n" +
":\n" +
": 7S 6C 7D 4D 8S 9D\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 1 to the foundations\n" +
"\n" +
"Foundations: H-4 C-A D-A S-A\n" +
"Freecells:  6S  8H  QD  4S\n" +
": 4C 2C 9C 8C QS JD\n" +
": 5H QH 3C\n" +
": QC 9S 6H 9H 3S KS 3D\n" +
": 5D 2S JC 5C JH 6D 5S\n" +
": 2D KD TH TC TD 8D\n" +
": 7H JS KH TS KC 7C\n" +
":\n" +
": 7S 6C 7D 4D 8S 9D\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 5 to stack 6\n" +
"\n" +
"Foundations: H-4 C-A D-A S-A\n" +
"Freecells:  6S  8H  QD  4S\n" +
": 4C 2C 9C 8C QS JD\n" +
": 5H QH 3C\n" +
": QC 9S 6H 9H 3S KS 3D\n" +
": 5D 2S JC 5C JH 6D 5S\n" +
": 2D KD TH TC TD 8D\n" +
": 7H JS KH TS KC\n" +
": 7C\n" +
": 7S 6C 7D 4D 8S 9D\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 2 to stack 5\n" +
"\n" +
"Foundations: H-4 C-A D-A S-A\n" +
"Freecells:  6S  8H      4S\n" +
": 4C 2C 9C 8C QS JD\n" +
": 5H QH 3C\n" +
": QC 9S 6H 9H 3S KS 3D\n" +
": 5D 2S JC 5C JH 6D 5S\n" +
": 2D KD TH TC TD 8D\n" +
": 7H JS KH TS KC QD\n" +
": 7C\n" +
": 7S 6C 7D 4D 8S 9D\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 6 to stack 4\n" +
"\n" +
"Foundations: H-4 C-A D-A S-A\n" +
"Freecells:  6S  8H      4S\n" +
": 4C 2C 9C 8C QS JD\n" +
": 5H QH 3C\n" +
": QC 9S 6H 9H 3S KS 3D\n" +
": 5D 2S JC 5C JH 6D 5S\n" +
": 2D KD TH TC TD 8D 7C\n" +
": 7H JS KH TS KC QD\n" +
":\n" +
": 7S 6C 7D 4D 8S 9D\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 1 to freecell 2\n" +
"\n" +
"Foundations: H-4 C-A D-A S-A\n" +
"Freecells:  6S  8H  3C  4S\n" +
": 4C 2C 9C 8C QS JD\n" +
": 5H QH\n" +
": QC 9S 6H 9H 3S KS 3D\n" +
": 5D 2S JC 5C JH 6D 5S\n" +
": 2D KD TH TC TD 8D 7C\n" +
": 7H JS KH TS KC QD\n" +
":\n" +
": 7S 6C 7D 4D 8S 9D\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 1 to stack 6\n" +
"\n" +
"Foundations: H-4 C-A D-A S-A\n" +
"Freecells:  6S  8H  3C  4S\n" +
": 4C 2C 9C 8C QS JD\n" +
": 5H\n" +
": QC 9S 6H 9H 3S KS 3D\n" +
": 5D 2S JC 5C JH 6D 5S\n" +
": 2D KD TH TC TD 8D 7C\n" +
": 7H JS KH TS KC QD\n" +
": QH\n" +
": 7S 6C 7D 4D 8S 9D\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 3 to stack 1\n" +
"\n" +
"Foundations: H-4 C-A D-A S-A\n" +
"Freecells:  6S  8H  3C\n" +
": 4C 2C 9C 8C QS JD\n" +
": 5H 4S\n" +
": QC 9S 6H 9H 3S KS 3D\n" +
": 5D 2S JC 5C JH 6D 5S\n" +
": 2D KD TH TC TD 8D 7C\n" +
": 7H JS KH TS KC QD\n" +
": QH\n" +
": 7S 6C 7D 4D 8S 9D\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 1 to freecell 3\n" +
"\n" +
"Foundations: H-4 C-A D-A S-A\n" +
"Freecells:  6S  8H  3C  4S\n" +
": 4C 2C 9C 8C QS JD\n" +
": 5H\n" +
": QC 9S 6H 9H 3S KS 3D\n" +
": 5D 2S JC 5C JH 6D 5S\n" +
": 2D KD TH TC TD 8D 7C\n" +
": 7H JS KH TS KC QD\n" +
": QH\n" +
": 7S 6C 7D 4D 8S 9D\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 1 to the foundations\n" +
"\n" +
"Foundations: H-5 C-A D-A S-A\n" +
"Freecells:  6S  8H  3C  4S\n" +
": 4C 2C 9C 8C QS JD\n" +
":\n" +
": QC 9S 6H 9H 3S KS 3D\n" +
": 5D 2S JC 5C JH 6D 5S\n" +
": 2D KD TH TC TD 8D 7C\n" +
": 7H JS KH TS KC QD\n" +
": QH\n" +
": 7S 6C 7D 4D 8S 9D\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 2 cards from stack 3 to stack 4\n" +
"\n" +
"Foundations: H-5 C-A D-A S-A\n" +
"Freecells:  6S  8H  3C  4S\n" +
": 4C 2C 9C 8C QS JD\n" +
":\n" +
": QC 9S 6H 9H 3S KS 3D\n" +
": 5D 2S JC 5C JH\n" +
": 2D KD TH TC TD 8D 7C 6D 5S\n" +
": 7H JS KH TS KC QD\n" +
": QH\n" +
": 7S 6C 7D 4D 8S 9D\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 2 to stack 1\n" +
"\n" +
"Foundations: H-5 C-A D-A S-A\n" +
"Freecells:  6S  8H  3C  4S\n" +
": 4C 2C 9C 8C QS JD\n" +
": 3D\n" +
": QC 9S 6H 9H 3S KS\n" +
": 5D 2S JC 5C JH\n" +
": 2D KD TH TC TD 8D 7C 6D 5S\n" +
": 7H JS KH TS KC QD\n" +
": QH\n" +
": 7S 6C 7D 4D 8S 9D\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 6 to stack 2\n" +
"\n" +
"Foundations: H-5 C-A D-A S-A\n" +
"Freecells:  6S  8H  3C  4S\n" +
": 4C 2C 9C 8C QS JD\n" +
": 3D\n" +
": QC 9S 6H 9H 3S KS QH\n" +
": 5D 2S JC 5C JH\n" +
": 2D KD TH TC TD 8D 7C 6D 5S\n" +
": 7H JS KH TS KC QD\n" +
":\n" +
": 7S 6C 7D 4D 8S 9D\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 7 to stack 6\n" +
"\n" +
"Foundations: H-5 C-A D-A S-A\n" +
"Freecells:  6S  8H  3C  4S\n" +
": 4C 2C 9C 8C QS JD\n" +
": 3D\n" +
": QC 9S 6H 9H 3S KS QH\n" +
": 5D 2S JC 5C JH\n" +
": 2D KD TH TC TD 8D 7C 6D 5S\n" +
": 7H JS KH TS KC QD\n" +
": 9D\n" +
": 7S 6C 7D 4D 8S\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 7 to stack 6\n" +
"\n" +
"Foundations: H-5 C-A D-A S-A\n" +
"Freecells:  6S  8H  3C  4S\n" +
": 4C 2C 9C 8C QS JD\n" +
": 3D\n" +
": QC 9S 6H 9H 3S KS QH\n" +
": 5D 2S JC 5C JH\n" +
": 2D KD TH TC TD 8D 7C 6D 5S\n" +
": 7H JS KH TS KC QD\n" +
": 9D 8S\n" +
": 7S 6C 7D 4D\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 2 to stack 7\n" +
"\n" +
"Foundations: H-5 C-A D-A S-A\n" +
"Freecells:  6S  8H      4S\n" +
": 4C 2C 9C 8C QS JD\n" +
": 3D\n" +
": QC 9S 6H 9H 3S KS QH\n" +
": 5D 2S JC 5C JH\n" +
": 2D KD TH TC TD 8D 7C 6D 5S\n" +
": 7H JS KH TS KC QD\n" +
": 9D 8S\n" +
": 7S 6C 7D 4D 3C\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 2 cards from stack 7 to stack 4\n" +
"\n" +
"Foundations: H-5 C-A D-A S-A\n" +
"Freecells:  6S  8H      4S\n" +
": 4C 2C 9C 8C QS JD\n" +
": 3D\n" +
": QC 9S 6H 9H 3S KS QH\n" +
": 5D 2S JC 5C JH\n" +
": 2D KD TH TC TD 8D 7C 6D 5S 4D 3C\n" +
": 7H JS KH TS KC QD\n" +
": 9D 8S\n" +
": 7S 6C 7D\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 0 to stack 7\n" +
"\n" +
"Foundations: H-5 C-A D-A S-A\n" +
"Freecells:      8H      4S\n" +
": 4C 2C 9C 8C QS JD\n" +
": 3D\n" +
": QC 9S 6H 9H 3S KS QH\n" +
": 5D 2S JC 5C JH\n" +
": 2D KD TH TC TD 8D 7C 6D 5S 4D 3C\n" +
": 7H JS KH TS KC QD\n" +
": 9D 8S\n" +
": 7S 6C 7D 6S\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 3 to freecell 2\n" +
"\n" +
"Foundations: H-5 C-A D-A S-A\n" +
"Freecells:      8H  JH  4S\n" +
": 4C 2C 9C 8C QS JD\n" +
": 3D\n" +
": QC 9S 6H 9H 3S KS QH\n" +
": 5D 2S JC 5C\n" +
": 2D KD TH TC TD 8D 7C 6D 5S 4D 3C\n" +
": 7H JS KH TS KC QD\n" +
": 9D 8S\n" +
": 7S 6C 7D 6S\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 3 to freecell 0\n" +
"\n" +
"Foundations: H-5 C-A D-A S-A\n" +
"Freecells:  5C  8H  JH  4S\n" +
": 4C 2C 9C 8C QS JD\n" +
": 3D\n" +
": QC 9S 6H 9H 3S KS QH\n" +
": 5D 2S JC\n" +
": 2D KD TH TC TD 8D 7C 6D 5S 4D 3C\n" +
": 7H JS KH TS KC QD\n" +
": 9D 8S\n" +
": 7S 6C 7D 6S\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 3 to stack 5\n" +
"\n" +
"Foundations: H-5 C-A D-A S-A\n" +
"Freecells:  5C  8H  JH  4S\n" +
": 4C 2C 9C 8C QS JD\n" +
": 3D\n" +
": QC 9S 6H 9H 3S KS QH\n" +
": 5D 2S\n" +
": 2D KD TH TC TD 8D 7C 6D 5S 4D 3C\n" +
": 7H JS KH TS KC QD JC\n" +
": 9D 8S\n" +
": 7S 6C 7D 6S\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 3 to the foundations\n" +
"\n" +
"Foundations: H-5 C-A D-A S-2\n" +
"Freecells:  5C  8H  JH  4S\n" +
": 4C 2C 9C 8C QS JD\n" +
": 3D\n" +
": QC 9S 6H 9H 3S KS QH\n" +
": 5D\n" +
": 2D KD TH TC TD 8D 7C 6D 5S 4D 3C\n" +
": 7H JS KH TS KC QD JC\n" +
": 9D 8S\n" +
": 7S 6C 7D 6S\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 3 to stack 3\n" +
"\n" +
"Foundations: H-5 C-A D-A S-2\n" +
"Freecells:  5C  8H  JH\n" +
": 4C 2C 9C 8C QS JD\n" +
": 3D\n" +
": QC 9S 6H 9H 3S KS QH\n" +
": 5D 4S\n" +
": 2D KD TH TC TD 8D 7C 6D 5S 4D 3C\n" +
": 7H JS KH TS KC QD JC\n" +
": 9D 8S\n" +
": 7S 6C 7D 6S\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 1 to stack 3\n" +
"\n" +
"Foundations: H-5 C-A D-A S-2\n" +
"Freecells:  5C  8H  JH\n" +
": 4C 2C 9C 8C QS JD\n" +
":\n" +
": QC 9S 6H 9H 3S KS QH\n" +
": 5D 4S 3D\n" +
": 2D KD TH TC TD 8D 7C 6D 5S 4D 3C\n" +
": 7H JS KH TS KC QD JC\n" +
": 9D 8S\n" +
": 7S 6C 7D 6S\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 2 to freecell 3\n" +
"\n" +
"Foundations: H-5 C-A D-A S-2\n" +
"Freecells:  5C  8H  JH  QH\n" +
": 4C 2C 9C 8C QS JD\n" +
":\n" +
": QC 9S 6H 9H 3S KS\n" +
": 5D 4S 3D\n" +
": 2D KD TH TC TD 8D 7C 6D 5S 4D 3C\n" +
": 7H JS KH TS KC QD JC\n" +
": 9D 8S\n" +
": 7S 6C 7D 6S\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 2 to stack 1\n" +
"\n" +
"Foundations: H-5 C-A D-A S-2\n" +
"Freecells:  5C  8H  JH  QH\n" +
": 4C 2C 9C 8C QS JD\n" +
": KS\n" +
": QC 9S 6H 9H 3S\n" +
": 5D 4S 3D\n" +
": 2D KD TH TC TD 8D 7C 6D 5S 4D 3C\n" +
": 7H JS KH TS KC QD JC\n" +
": 9D 8S\n" +
": 7S 6C 7D 6S\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 2 to the foundations\n" +
"\n" +
"Foundations: H-5 C-A D-A S-3\n" +
"Freecells:  5C  8H  JH  QH\n" +
": 4C 2C 9C 8C QS JD\n" +
": KS\n" +
": QC 9S 6H 9H\n" +
": 5D 4S 3D\n" +
": 2D KD TH TC TD 8D 7C 6D 5S 4D 3C\n" +
": 7H JS KH TS KC QD JC\n" +
": 9D 8S\n" +
": 7S 6C 7D 6S\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 3 to stack 1\n" +
"\n" +
"Foundations: H-5 C-A D-A S-3\n" +
"Freecells:  5C  8H  JH\n" +
": 4C 2C 9C 8C QS JD\n" +
": KS QH\n" +
": QC 9S 6H 9H\n" +
": 5D 4S 3D\n" +
": 2D KD TH TC TD 8D 7C 6D 5S 4D 3C\n" +
": 7H JS KH TS KC QD JC\n" +
": 9D 8S\n" +
": 7S 6C 7D 6S\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 2 to freecell 3\n" +
"\n" +
"Foundations: H-5 C-A D-A S-3\n" +
"Freecells:  5C  8H  JH  9H\n" +
": 4C 2C 9C 8C QS JD\n" +
": KS QH\n" +
": QC 9S 6H\n" +
": 5D 4S 3D\n" +
": 2D KD TH TC TD 8D 7C 6D 5S 4D 3C\n" +
": 7H JS KH TS KC QD JC\n" +
": 9D 8S\n" +
": 7S 6C 7D 6S\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 0 to stack 2\n" +
"\n" +
"Foundations: H-5 C-A D-A S-3\n" +
"Freecells:      8H  JH  9H\n" +
": 4C 2C 9C 8C QS JD\n" +
": KS QH\n" +
": QC 9S 6H 5C\n" +
": 5D 4S 3D\n" +
": 2D KD TH TC TD 8D 7C 6D 5S 4D 3C\n" +
": 7H JS KH TS KC QD JC\n" +
": 9D 8S\n" +
": 7S 6C 7D 6S\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 3 to freecell 0\n" +
"\n" +
"Foundations: H-5 C-A D-A S-3\n" +
"Freecells:  3D  8H  JH  9H\n" +
": 4C 2C 9C 8C QS JD\n" +
": KS QH\n" +
": QC 9S 6H 5C\n" +
": 5D 4S\n" +
": 2D KD TH TC TD 8D 7C 6D 5S 4D 3C\n" +
": 7H JS KH TS KC QD JC\n" +
": 9D 8S\n" +
": 7S 6C 7D 6S\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 3 to the foundations\n" +
"\n" +
"Foundations: H-5 C-A D-A S-4\n" +
"Freecells:  3D  8H  JH  9H\n" +
": 4C 2C 9C 8C QS JD\n" +
": KS QH\n" +
": QC 9S 6H 5C\n" +
": 5D\n" +
": 2D KD TH TC TD 8D 7C 6D 5S 4D 3C\n" +
": 7H JS KH TS KC QD JC\n" +
": 9D 8S\n" +
": 7S 6C 7D 6S\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 3 to stack 7\n" +
"\n" +
"Foundations: H-5 C-A D-A S-4\n" +
"Freecells:  3D  8H  JH  9H\n" +
": 4C 2C 9C 8C QS JD\n" +
": KS QH\n" +
": QC 9S 6H 5C\n" +
":\n" +
": 2D KD TH TC TD 8D 7C 6D 5S 4D 3C\n" +
": 7H JS KH TS KC QD JC\n" +
": 9D 8S\n" +
": 7S 6C 7D 6S 5D\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 2 to stack 3\n" +
"\n" +
"Foundations: H-5 C-A D-A S-4\n" +
"Freecells:  3D  8H  JH  9H\n" +
": 4C 2C 9C 8C QS JD\n" +
": KS QH\n" +
": QC 9S 6H\n" +
": 5C\n" +
": 2D KD TH TC TD 8D 7C 6D 5S 4D 3C\n" +
": 7H JS KH TS KC QD JC\n" +
": 9D 8S\n" +
": 7S 6C 7D 6S 5D\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 2 to the foundations\n" +
"\n" +
"Foundations: H-6 C-A D-A S-4\n" +
"Freecells:  3D  8H  JH  9H\n" +
": 4C 2C 9C 8C QS JD\n" +
": KS QH\n" +
": QC 9S\n" +
": 5C\n" +
": 2D KD TH TC TD 8D 7C 6D 5S 4D 3C\n" +
": 7H JS KH TS KC QD JC\n" +
": 9D 8S\n" +
": 7S 6C 7D 6S 5D\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 1 to stack 2\n" +
"\n" +
"Foundations: H-6 C-A D-A S-4\n" +
"Freecells:  3D      JH  9H\n" +
": 4C 2C 9C 8C QS JD\n" +
": KS QH\n" +
": QC 9S 8H\n" +
": 5C\n" +
": 2D KD TH TC TD 8D 7C 6D 5S 4D 3C\n" +
": 7H JS KH TS KC QD JC\n" +
": 9D 8S\n" +
": 7S 6C 7D 6S 5D\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 2 cards from stack 4 to stack 3\n" +
"\n" +
"Foundations: H-6 C-A D-A S-4\n" +
"Freecells:  3D      JH  9H\n" +
": 4C 2C 9C 8C QS JD\n" +
": KS QH\n" +
": QC 9S 8H\n" +
": 5C 4D 3C\n" +
": 2D KD TH TC TD 8D 7C 6D 5S\n" +
": 7H JS KH TS KC QD JC\n" +
": 9D 8S\n" +
": 7S 6C 7D 6S 5D\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 4 to the foundations\n" +
"\n" +
"Foundations: H-6 C-A D-A S-5\n" +
"Freecells:  3D      JH  9H\n" +
": 4C 2C 9C 8C QS JD\n" +
": KS QH\n" +
": QC 9S 8H\n" +
": 5C 4D 3C\n" +
": 2D KD TH TC TD 8D 7C 6D\n" +
": 7H JS KH TS KC QD JC\n" +
": 9D 8S\n" +
": 7S 6C 7D 6S 5D\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 7 to freecell 1\n" +
"\n" +
"Foundations: H-6 C-A D-A S-5\n" +
"Freecells:  3D  5D  JH  9H\n" +
": 4C 2C 9C 8C QS JD\n" +
": KS QH\n" +
": QC 9S 8H\n" +
": 5C 4D 3C\n" +
": 2D KD TH TC TD 8D 7C 6D\n" +
": 7H JS KH TS KC QD JC\n" +
": 9D 8S\n" +
": 7S 6C 7D 6S\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 7 to the foundations\n" +
"\n" +
"Foundations: H-6 C-A D-A S-6\n" +
"Freecells:  3D  5D  JH  9H\n" +
": 4C 2C 9C 8C QS JD\n" +
": KS QH\n" +
": QC 9S 8H\n" +
": 5C 4D 3C\n" +
": 2D KD TH TC TD 8D 7C 6D\n" +
": 7H JS KH TS KC QD JC\n" +
": 9D 8S\n" +
": 7S 6C 7D\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 7 to stack 6\n" +
"\n" +
"Foundations: H-6 C-A D-A S-6\n" +
"Freecells:  3D  5D  JH  9H\n" +
": 4C 2C 9C 8C QS JD\n" +
": KS QH\n" +
": QC 9S 8H\n" +
": 5C 4D 3C\n" +
": 2D KD TH TC TD 8D 7C 6D\n" +
": 7H JS KH TS KC QD JC\n" +
": 9D 8S 7D\n" +
": 7S 6C\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 1 to stack 7\n" +
"\n" +
"Foundations: H-6 C-A D-A S-6\n" +
"Freecells:  3D      JH  9H\n" +
": 4C 2C 9C 8C QS JD\n" +
": KS QH\n" +
": QC 9S 8H\n" +
": 5C 4D 3C\n" +
": 2D KD TH TC TD 8D 7C 6D\n" +
": 7H JS KH TS KC QD JC\n" +
": 9D 8S 7D\n" +
": 7S 6C 5D\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 2 cards from stack 7 to stack 6\n" +
"\n" +
"Foundations: H-6 C-A D-A S-6\n" +
"Freecells:  3D      JH  9H\n" +
": 4C 2C 9C 8C QS JD\n" +
": KS QH\n" +
": QC 9S 8H\n" +
": 5C 4D 3C\n" +
": 2D KD TH TC TD 8D 7C 6D\n" +
": 7H JS KH TS KC QD JC\n" +
": 9D 8S 7D 6C 5D\n" +
": 7S\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 7 to the foundations\n" +
"\n" +
"Foundations: H-6 C-A D-A S-7\n" +
"Freecells:  3D      JH  9H\n" +
": 4C 2C 9C 8C QS JD\n" +
": KS QH\n" +
": QC 9S 8H\n" +
": 5C 4D 3C\n" +
": 2D KD TH TC TD 8D 7C 6D\n" +
": 7H JS KH TS KC QD JC\n" +
": 9D 8S 7D 6C 5D\n" +
":\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 2 to freecell 1\n" +
"\n" +
"Foundations: H-6 C-A D-A S-7\n" +
"Freecells:  3D  8H  JH  9H\n" +
": 4C 2C 9C 8C QS JD\n" +
": KS QH\n" +
": QC 9S\n" +
": 5C 4D 3C\n" +
": 2D KD TH TC TD 8D 7C 6D\n" +
": 7H JS KH TS KC QD JC\n" +
": 9D 8S 7D 6C 5D\n" +
":\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 2 to stack 7\n" +
"\n" +
"Foundations: H-6 C-A D-A S-7\n" +
"Freecells:  3D  8H  JH  9H\n" +
": 4C 2C 9C 8C QS JD\n" +
": KS QH\n" +
": QC\n" +
": 5C 4D 3C\n" +
": 2D KD TH TC TD 8D 7C 6D\n" +
": 7H JS KH TS KC QD JC\n" +
": 9D 8S 7D 6C 5D\n" +
": 9S\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 2 to stack 2\n" +
"\n" +
"Foundations: H-6 C-A D-A S-7\n" +
"Freecells:  3D  8H      9H\n" +
": 4C 2C 9C 8C QS JD\n" +
": KS QH\n" +
": QC JH\n" +
": 5C 4D 3C\n" +
": 2D KD TH TC TD 8D 7C 6D\n" +
": 7H JS KH TS KC QD JC\n" +
": 9D 8S 7D 6C 5D\n" +
": 9S\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 1 to stack 7\n" +
"\n" +
"Foundations: H-6 C-A D-A S-7\n" +
"Freecells:  3D          9H\n" +
": 4C 2C 9C 8C QS JD\n" +
": KS QH\n" +
": QC JH\n" +
": 5C 4D 3C\n" +
": 2D KD TH TC TD 8D 7C 6D\n" +
": 7H JS KH TS KC QD JC\n" +
": 9D 8S 7D 6C 5D\n" +
": 9S 8H\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 3 cards from stack 3 to stack 4\n" +
"\n" +
"Foundations: H-6 C-A D-A S-7\n" +
"Freecells:  3D          9H\n" +
": 4C 2C 9C 8C QS JD\n" +
": KS QH\n" +
": QC JH\n" +
":\n" +
": 2D KD TH TC TD 8D 7C 6D 5C 4D 3C\n" +
": 7H JS KH TS KC QD JC\n" +
": 9D 8S 7D 6C 5D\n" +
": 9S 8H\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 5 to freecell 2\n" +
"\n" +
"Foundations: H-6 C-A D-A S-7\n" +
"Freecells:  3D      JC  9H\n" +
": 4C 2C 9C 8C QS JD\n" +
": KS QH\n" +
": QC JH\n" +
":\n" +
": 2D KD TH TC TD 8D 7C 6D 5C 4D 3C\n" +
": 7H JS KH TS KC QD\n" +
": 9D 8S 7D 6C 5D\n" +
": 9S 8H\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 5 to freecell 1\n" +
"\n" +
"Foundations: H-6 C-A D-A S-7\n" +
"Freecells:  3D  QD  JC  9H\n" +
": 4C 2C 9C 8C QS JD\n" +
": KS QH\n" +
": QC JH\n" +
":\n" +
": 2D KD TH TC TD 8D 7C 6D 5C 4D 3C\n" +
": 7H JS KH TS KC\n" +
": 9D 8S 7D 6C 5D\n" +
": 9S 8H\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 5 to stack 3\n" +
"\n" +
"Foundations: H-6 C-A D-A S-7\n" +
"Freecells:  3D  QD  JC  9H\n" +
": 4C 2C 9C 8C QS JD\n" +
": KS QH\n" +
": QC JH\n" +
": KC\n" +
": 2D KD TH TC TD 8D 7C 6D 5C 4D 3C\n" +
": 7H JS KH TS\n" +
": 9D 8S 7D 6C 5D\n" +
": 9S 8H\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 3 to stack 5\n" +
"\n" +
"Foundations: H-6 C-A D-A S-7\n" +
"Freecells:  3D  QD  JC\n" +
": 4C 2C 9C 8C QS JD\n" +
": KS QH\n" +
": QC JH\n" +
": KC\n" +
": 2D KD TH TC TD 8D 7C 6D 5C 4D 3C\n" +
": 7H JS KH TS 9H\n" +
": 9D 8S 7D 6C 5D\n" +
": 9S 8H\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 1 to stack 3\n" +
"\n" +
"Foundations: H-6 C-A D-A S-7\n" +
"Freecells:  3D      JC\n" +
": 4C 2C 9C 8C QS JD\n" +
": KS QH\n" +
": QC JH\n" +
": KC QD\n" +
": 2D KD TH TC TD 8D 7C 6D 5C 4D 3C\n" +
": 7H JS KH TS 9H\n" +
": 9D 8S 7D 6C 5D\n" +
": 9S 8H\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 2 to stack 3\n" +
"\n" +
"Foundations: H-6 C-A D-A S-7\n" +
"Freecells:  3D\n" +
": 4C 2C 9C 8C QS JD\n" +
": KS QH\n" +
": QC JH\n" +
": KC QD JC\n" +
": 2D KD TH TC TD 8D 7C 6D 5C 4D 3C\n" +
": 7H JS KH TS 9H\n" +
": 9D 8S 7D 6C 5D\n" +
": 9S 8H\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 0 to freecell 3\n" +
"\n" +
"Foundations: H-6 C-A D-A S-7\n" +
"Freecells:  3D          JD\n" +
": 4C 2C 9C 8C QS\n" +
": KS QH\n" +
": QC JH\n" +
": KC QD JC\n" +
": 2D KD TH TC TD 8D 7C 6D 5C 4D 3C\n" +
": 7H JS KH TS 9H\n" +
": 9D 8S 7D 6C 5D\n" +
": 9S 8H\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 0 to freecell 1\n" +
"\n" +
"Foundations: H-6 C-A D-A S-7\n" +
"Freecells:  3D  QS      JD\n" +
": 4C 2C 9C 8C\n" +
": KS QH\n" +
": QC JH\n" +
": KC QD JC\n" +
": 2D KD TH TC TD 8D 7C 6D 5C 4D 3C\n" +
": 7H JS KH TS 9H\n" +
": 9D 8S 7D 6C 5D\n" +
": 9S 8H\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 0 to stack 5\n" +
"\n" +
"Foundations: H-6 C-A D-A S-7\n" +
"Freecells:  3D  QS      JD\n" +
": 4C 2C 9C\n" +
": KS QH\n" +
": QC JH\n" +
": KC QD JC\n" +
": 2D KD TH TC TD 8D 7C 6D 5C 4D 3C\n" +
": 7H JS KH TS 9H 8C\n" +
": 9D 8S 7D 6C 5D\n" +
": 9S 8H\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 0 to freecell 2\n" +
"\n" +
"Foundations: H-6 C-A D-A S-7\n" +
"Freecells:  3D  QS  9C  JD\n" +
": 4C 2C\n" +
": KS QH\n" +
": QC JH\n" +
": KC QD JC\n" +
": 2D KD TH TC TD 8D 7C 6D 5C 4D 3C\n" +
": 7H JS KH TS 9H 8C\n" +
": 9D 8S 7D 6C 5D\n" +
": 9S 8H\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 0 to the foundations\n" +
"\n" +
"Foundations: H-6 C-2 D-A S-7\n" +
"Freecells:  3D  QS  9C  JD\n" +
": 4C\n" +
": KS QH\n" +
": QC JH\n" +
": KC QD JC\n" +
": 2D KD TH TC TD 8D 7C 6D 5C 4D 3C\n" +
": 7H JS KH TS 9H 8C\n" +
": 9D 8S 7D 6C 5D\n" +
": 9S 8H\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 4 to the foundations\n" +
"\n" +
"Foundations: H-6 C-3 D-A S-7\n" +
"Freecells:  3D  QS  9C  JD\n" +
": 4C\n" +
": KS QH\n" +
": QC JH\n" +
": KC QD JC\n" +
": 2D KD TH TC TD 8D 7C 6D 5C 4D\n" +
": 7H JS KH TS 9H 8C\n" +
": 9D 8S 7D 6C 5D\n" +
": 9S 8H\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 0 to the foundations\n" +
"\n" +
"Foundations: H-6 C-4 D-A S-7\n" +
"Freecells:  3D  QS  9C  JD\n" +
":\n" +
": KS QH\n" +
": QC JH\n" +
": KC QD JC\n" +
": 2D KD TH TC TD 8D 7C 6D 5C 4D\n" +
": 7H JS KH TS 9H 8C\n" +
": 9D 8S 7D 6C 5D\n" +
": 9S 8H\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 0 to stack 0\n" +
"\n" +
"Foundations: H-6 C-4 D-A S-7\n" +
"Freecells:      QS  9C  JD\n" +
": 3D\n" +
": KS QH\n" +
": QC JH\n" +
": KC QD JC\n" +
": 2D KD TH TC TD 8D 7C 6D 5C 4D\n" +
": 7H JS KH TS 9H 8C\n" +
": 9D 8S 7D 6C 5D\n" +
": 9S 8H\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 3 to stack 1\n" +
"\n" +
"Foundations: H-6 C-4 D-A S-7\n" +
"Freecells:      QS  9C  JD\n" +
": 3D\n" +
": KS QH JC\n" +
": QC JH\n" +
": KC QD\n" +
": 2D KD TH TC TD 8D 7C 6D 5C 4D\n" +
": 7H JS KH TS 9H 8C\n" +
": 9D 8S 7D 6C 5D\n" +
": 9S 8H\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 0 to freecell 0\n" +
"\n" +
"Foundations: H-6 C-4 D-A S-7\n" +
"Freecells:  3D  QS  9C  JD\n" +
":\n" +
": KS QH JC\n" +
": QC JH\n" +
": KC QD\n" +
": 2D KD TH TC TD 8D 7C 6D 5C 4D\n" +
": 7H JS KH TS 9H 8C\n" +
": 9D 8S 7D 6C 5D\n" +
": 9S 8H\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 2 to stack 0\n" +
"\n" +
"Foundations: H-6 C-4 D-A S-7\n" +
"Freecells:  3D  QS      JD\n" +
": 9C\n" +
": KS QH JC\n" +
": QC JH\n" +
": KC QD\n" +
": 2D KD TH TC TD 8D 7C 6D 5C 4D\n" +
": 7H JS KH TS 9H 8C\n" +
": 9D 8S 7D 6C 5D\n" +
": 9S 8H\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 7 to stack 0\n" +
"\n" +
"Foundations: H-6 C-4 D-A S-7\n" +
"Freecells:  3D  QS      JD\n" +
": 9C 8H\n" +
": KS QH JC\n" +
": QC JH\n" +
": KC QD\n" +
": 2D KD TH TC TD 8D 7C 6D 5C 4D\n" +
": 7H JS KH TS 9H 8C\n" +
": 9D 8S 7D 6C 5D\n" +
": 9S\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 1 to stack 3\n" +
"\n" +
"Foundations: H-6 C-4 D-A S-7\n" +
"Freecells:  3D  QS      JD\n" +
": 9C 8H\n" +
": KS QH\n" +
": QC JH\n" +
": KC QD JC\n" +
": 2D KD TH TC TD 8D 7C 6D 5C 4D\n" +
": 7H JS KH TS 9H 8C\n" +
": 9D 8S 7D 6C 5D\n" +
": 9S\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 7 to freecell 2\n" +
"\n" +
"Foundations: H-6 C-4 D-A S-7\n" +
"Freecells:  3D  QS  9S  JD\n" +
": 9C 8H\n" +
": KS QH\n" +
": QC JH\n" +
": KC QD JC\n" +
": 2D KD TH TC TD 8D 7C 6D 5C 4D\n" +
": 7H JS KH TS 9H 8C\n" +
": 9D 8S 7D 6C 5D\n" +
":\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 0 to stack 7\n" +
"\n" +
"Foundations: H-6 C-4 D-A S-7\n" +
"Freecells:      QS  9S  JD\n" +
": 9C 8H\n" +
": KS QH\n" +
": QC JH\n" +
": KC QD JC\n" +
": 2D KD TH TC TD 8D 7C 6D 5C 4D\n" +
": 7H JS KH TS 9H 8C\n" +
": 9D 8S 7D 6C 5D\n" +
": 3D\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 3 to stack 1\n" +
"\n" +
"Foundations: H-6 C-4 D-A S-7\n" +
"Freecells:      QS  9S  JD\n" +
": 9C 8H\n" +
": KS QH JC\n" +
": QC JH\n" +
": KC QD\n" +
": 2D KD TH TC TD 8D 7C 6D 5C 4D\n" +
": 7H JS KH TS 9H 8C\n" +
": 9D 8S 7D 6C 5D\n" +
": 3D\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 7 to freecell 0\n" +
"\n" +
"Foundations: H-6 C-4 D-A S-7\n" +
"Freecells:  3D  QS  9S  JD\n" +
": 9C 8H\n" +
": KS QH JC\n" +
": QC JH\n" +
": KC QD\n" +
": 2D KD TH TC TD 8D 7C 6D 5C 4D\n" +
": 7H JS KH TS 9H 8C\n" +
": 9D 8S 7D 6C 5D\n" +
":\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 1 to stack 7\n" +
"\n" +
"Foundations: H-6 C-4 D-A S-7\n" +
"Freecells:  3D      9S  JD\n" +
": 9C 8H\n" +
": KS QH JC\n" +
": QC JH\n" +
": KC QD\n" +
": 2D KD TH TC TD 8D 7C 6D 5C 4D\n" +
": 7H JS KH TS 9H 8C\n" +
": 9D 8S 7D 6C 5D\n" +
": QS\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 3 to stack 7\n" +
"\n" +
"Foundations: H-6 C-4 D-A S-7\n" +
"Freecells:  3D      9S\n" +
": 9C 8H\n" +
": KS QH JC\n" +
": QC JH\n" +
": KC QD\n" +
": 2D KD TH TC TD 8D 7C 6D 5C 4D\n" +
": 7H JS KH TS 9H 8C\n" +
": 9D 8S 7D 6C 5D\n" +
": QS JD\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 4 to freecell 1\n" +
"\n" +
"Foundations: H-6 C-4 D-A S-7\n" +
"Freecells:  3D  4D  9S\n" +
": 9C 8H\n" +
": KS QH JC\n" +
": QC JH\n" +
": KC QD\n" +
": 2D KD TH TC TD 8D 7C 6D 5C\n" +
": 7H JS KH TS 9H 8C\n" +
": 9D 8S 7D 6C 5D\n" +
": QS JD\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 4 to the foundations\n" +
"\n" +
"Foundations: H-6 C-5 D-A S-7\n" +
"Freecells:  3D  4D  9S\n" +
": 9C 8H\n" +
": KS QH JC\n" +
": QC JH\n" +
": KC QD\n" +
": 2D KD TH TC TD 8D 7C 6D\n" +
": 7H JS KH TS 9H 8C\n" +
": 9D 8S 7D 6C 5D\n" +
": QS JD\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 6 to freecell 3\n" +
"\n" +
"Foundations: H-6 C-5 D-A S-7\n" +
"Freecells:  3D  4D  9S  5D\n" +
": 9C 8H\n" +
": KS QH JC\n" +
": QC JH\n" +
": KC QD\n" +
": 2D KD TH TC TD 8D 7C 6D\n" +
": 7H JS KH TS 9H 8C\n" +
": 9D 8S 7D 6C\n" +
": QS JD\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 6 to the foundations\n" +
"\n" +
"Foundations: H-6 C-6 D-A S-7\n" +
"Freecells:  3D  4D  9S  5D\n" +
": 9C 8H\n" +
": KS QH JC\n" +
": QC JH\n" +
": KC QD\n" +
": 2D KD TH TC TD 8D 7C 6D\n" +
": 7H JS KH TS 9H 8C\n" +
": 9D 8S 7D\n" +
": QS JD\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 6 to stack 5\n" +
"\n" +
"Foundations: H-6 C-6 D-A S-7\n" +
"Freecells:  3D  4D  9S  5D\n" +
": 9C 8H\n" +
": KS QH JC\n" +
": QC JH\n" +
": KC QD\n" +
": 2D KD TH TC TD 8D 7C 6D\n" +
": 7H JS KH TS 9H 8C 7D\n" +
": 9D 8S\n" +
": QS JD\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 6 to the foundations\n" +
"\n" +
"Foundations: H-6 C-6 D-A S-8\n" +
"Freecells:  3D  4D  9S  5D\n" +
": 9C 8H\n" +
": KS QH JC\n" +
": QC JH\n" +
": KC QD\n" +
": 2D KD TH TC TD 8D 7C 6D\n" +
": 7H JS KH TS 9H 8C 7D\n" +
": 9D\n" +
": QS JD\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 2 to the foundations\n" +
"\n" +
"Foundations: H-6 C-6 D-A S-9\n" +
"Freecells:  3D  4D      5D\n" +
": 9C 8H\n" +
": KS QH JC\n" +
": QC JH\n" +
": KC QD\n" +
": 2D KD TH TC TD 8D 7C 6D\n" +
": 7H JS KH TS 9H 8C 7D\n" +
": 9D\n" +
": QS JD\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 2 cards from stack 4 to stack 0\n" +
"\n" +
"Foundations: H-6 C-6 D-A S-9\n" +
"Freecells:  3D  4D      5D\n" +
": 9C 8H 7C 6D\n" +
": KS QH JC\n" +
": QC JH\n" +
": KC QD\n" +
": 2D KD TH TC TD 8D\n" +
": 7H JS KH TS 9H 8C 7D\n" +
": 9D\n" +
": QS JD\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 4 to freecell 2\n" +
"\n" +
"Foundations: H-6 C-6 D-A S-9\n" +
"Freecells:  3D  4D  8D  5D\n" +
": 9C 8H 7C 6D\n" +
": KS QH JC\n" +
": QC JH\n" +
": KC QD\n" +
": 2D KD TH TC TD\n" +
": 7H JS KH TS 9H 8C 7D\n" +
": 9D\n" +
": QS JD\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 4 to stack 1\n" +
"\n" +
"Foundations: H-6 C-6 D-A S-9\n" +
"Freecells:  3D  4D  8D  5D\n" +
": 9C 8H 7C 6D\n" +
": KS QH JC TD\n" +
": QC JH\n" +
": KC QD\n" +
": 2D KD TH TC\n" +
": 7H JS KH TS 9H 8C 7D\n" +
": 9D\n" +
": QS JD\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 4 to stack 2\n" +
"\n" +
"Foundations: H-6 C-6 D-A S-9\n" +
"Freecells:  3D  4D  8D  5D\n" +
": 9C 8H 7C 6D\n" +
": KS QH JC TD\n" +
": QC JH TC\n" +
": KC QD\n" +
": 2D KD TH\n" +
": 7H JS KH TS 9H 8C 7D\n" +
": 9D\n" +
": QS JD\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 6 to stack 2\n" +
"\n" +
"Foundations: H-6 C-6 D-A S-9\n" +
"Freecells:  3D  4D  8D  5D\n" +
": 9C 8H 7C 6D\n" +
": KS QH JC TD\n" +
": QC JH TC 9D\n" +
": KC QD\n" +
": 2D KD TH\n" +
": 7H JS KH TS 9H 8C 7D\n" +
":\n" +
": QS JD\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 0 to stack 6\n" +
"\n" +
"Foundations: H-6 C-6 D-A S-9\n" +
"Freecells:      4D  8D  5D\n" +
": 9C 8H 7C 6D\n" +
": KS QH JC TD\n" +
": QC JH TC 9D\n" +
": KC QD\n" +
": 2D KD TH\n" +
": 7H JS KH TS 9H 8C 7D\n" +
": 3D\n" +
": QS JD\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 2 cards from stack 5 to stack 2\n" +
"\n" +
"Foundations: H-6 C-6 D-A S-9\n" +
"Freecells:      4D  8D  5D\n" +
": 9C 8H 7C 6D\n" +
": KS QH JC TD\n" +
": QC JH TC 9D 8C 7D\n" +
": KC QD\n" +
": 2D KD TH\n" +
": 7H JS KH TS 9H\n" +
": 3D\n" +
": QS JD\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 2 cards from stack 5 to stack 7\n" +
"\n" +
"Foundations: H-6 C-6 D-A S-9\n" +
"Freecells:      4D  8D  5D\n" +
": 9C 8H 7C 6D\n" +
": KS QH JC TD\n" +
": QC JH TC 9D 8C 7D\n" +
": KC QD\n" +
": 2D KD TH\n" +
": 7H JS KH\n" +
": 3D\n" +
": QS JD TS 9H\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 5 to freecell 0\n" +
"\n" +
"Foundations: H-6 C-6 D-A S-9\n" +
"Freecells:  KH  4D  8D  5D\n" +
": 9C 8H 7C 6D\n" +
": KS QH JC TD\n" +
": QC JH TC 9D 8C 7D\n" +
": KC QD\n" +
": 2D KD TH\n" +
": 7H JS\n" +
": 3D\n" +
": QS JD TS 9H\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 5 to stack 3\n" +
"\n" +
"Foundations: H-6 C-6 D-A S-9\n" +
"Freecells:  KH  4D  8D  5D\n" +
": 9C 8H 7C 6D\n" +
": KS QH JC TD\n" +
": QC JH TC 9D 8C 7D\n" +
": KC QD JS\n" +
": 2D KD TH\n" +
": 7H\n" +
": 3D\n" +
": QS JD TS 9H\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 5 to the foundations\n" +
"\n" +
"Foundations: H-7 C-6 D-A S-9\n" +
"Freecells:  KH  4D  8D  5D\n" +
": 9C 8H 7C 6D\n" +
": KS QH JC TD\n" +
": QC JH TC 9D 8C 7D\n" +
": KC QD JS\n" +
": 2D KD TH\n" +
":\n" +
": 3D\n" +
": QS JD TS 9H\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 0 to stack 5\n" +
"\n" +
"Foundations: H-7 C-6 D-A S-9\n" +
"Freecells:  KH  4D  8D  5D\n" +
": 9C 8H 7C\n" +
": KS QH JC TD\n" +
": QC JH TC 9D 8C 7D\n" +
": KC QD JS\n" +
": 2D KD TH\n" +
": 6D\n" +
": 3D\n" +
": QS JD TS 9H\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 0 to the foundations\n" +
"\n" +
"Foundations: H-7 C-7 D-A S-9\n" +
"Freecells:  KH  4D  8D  5D\n" +
": 9C 8H\n" +
": KS QH JC TD\n" +
": QC JH TC 9D 8C 7D\n" +
": KC QD JS\n" +
": 2D KD TH\n" +
": 6D\n" +
": 3D\n" +
": QS JD TS 9H\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 0 to the foundations\n" +
"\n" +
"Foundations: H-8 C-7 D-A S-9\n" +
"Freecells:  KH  4D  8D  5D\n" +
": 9C\n" +
": KS QH JC TD\n" +
": QC JH TC 9D 8C 7D\n" +
": KC QD JS\n" +
": 2D KD TH\n" +
": 6D\n" +
": 3D\n" +
": QS JD TS 9H\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 7 to the foundations\n" +
"\n" +
"Foundations: H-9 C-7 D-A S-9\n" +
"Freecells:  KH  4D  8D  5D\n" +
": 9C\n" +
": KS QH JC TD\n" +
": QC JH TC 9D 8C 7D\n" +
": KC QD JS\n" +
": 2D KD TH\n" +
": 6D\n" +
": 3D\n" +
": QS JD TS\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 4 to the foundations\n" +
"\n" +
"Foundations: H-T C-7 D-A S-9\n" +
"Freecells:  KH  4D  8D  5D\n" +
": 9C\n" +
": KS QH JC TD\n" +
": QC JH TC 9D 8C 7D\n" +
": KC QD JS\n" +
": 2D KD\n" +
": 6D\n" +
": 3D\n" +
": QS JD TS\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 7 to the foundations\n" +
"\n" +
"Foundations: H-T C-7 D-A S-T\n" +
"Freecells:  KH  4D  8D  5D\n" +
": 9C\n" +
": KS QH JC TD\n" +
": QC JH TC 9D 8C 7D\n" +
": KC QD JS\n" +
": 2D KD\n" +
": 6D\n" +
": 3D\n" +
": QS JD\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 3 to the foundations\n" +
"\n" +
"Foundations: H-T C-7 D-A S-J\n" +
"Freecells:  KH  4D  8D  5D\n" +
": 9C\n" +
": KS QH JC TD\n" +
": QC JH TC 9D 8C 7D\n" +
": KC QD\n" +
": 2D KD\n" +
": 6D\n" +
": 3D\n" +
": QS JD\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 2 to stack 0\n" +
"\n" +
"Foundations: H-T C-7 D-A S-J\n" +
"Freecells:  KH  4D      5D\n" +
": 9C 8D\n" +
": KS QH JC TD\n" +
": QC JH TC 9D 8C 7D\n" +
": KC QD\n" +
": 2D KD\n" +
": 6D\n" +
": 3D\n" +
": QS JD\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 4 to freecell 2\n" +
"\n" +
"Foundations: H-T C-7 D-A S-J\n" +
"Freecells:  KH  4D  KD  5D\n" +
": 9C 8D\n" +
": KS QH JC TD\n" +
": QC JH TC 9D 8C 7D\n" +
": KC QD\n" +
": 2D\n" +
": 6D\n" +
": 3D\n" +
": QS JD\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 4 to the foundations\n" +
"\n" +
"Foundations: H-T C-7 D-2 S-J\n" +
"Freecells:  KH  4D  KD  5D\n" +
": 9C 8D\n" +
": KS QH JC TD\n" +
": QC JH TC 9D 8C 7D\n" +
": KC QD\n" +
":\n" +
": 6D\n" +
": 3D\n" +
": QS JD\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 6 to the foundations\n" +
"\n" +
"Foundations: H-T C-7 D-3 S-J\n" +
"Freecells:  KH  4D  KD  5D\n" +
": 9C 8D\n" +
": KS QH JC TD\n" +
": QC JH TC 9D 8C 7D\n" +
": KC QD\n" +
":\n" +
": 6D\n" +
":\n" +
": QS JD\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 1 to the foundations\n" +
"\n" +
"Foundations: H-T C-7 D-4 S-J\n" +
"Freecells:  KH      KD  5D\n" +
": 9C 8D\n" +
": KS QH JC TD\n" +
": QC JH TC 9D 8C 7D\n" +
": KC QD\n" +
":\n" +
": 6D\n" +
":\n" +
": QS JD\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 3 to the foundations\n" +
"\n" +
"Foundations: H-T C-7 D-5 S-J\n" +
"Freecells:  KH      KD\n" +
": 9C 8D\n" +
": KS QH JC TD\n" +
": QC JH TC 9D 8C 7D\n" +
": KC QD\n" +
":\n" +
": 6D\n" +
":\n" +
": QS JD\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 5 to the foundations\n" +
"\n" +
"Foundations: H-T C-7 D-6 S-J\n" +
"Freecells:  KH      KD\n" +
": 9C 8D\n" +
": KS QH JC TD\n" +
": QC JH TC 9D 8C 7D\n" +
": KC QD\n" +
":\n" +
":\n" +
":\n" +
": QS JD\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 2 to the foundations\n" +
"\n" +
"Foundations: H-T C-7 D-7 S-J\n" +
"Freecells:  KH      KD\n" +
": 9C 8D\n" +
": KS QH JC TD\n" +
": QC JH TC 9D 8C\n" +
": KC QD\n" +
":\n" +
":\n" +
":\n" +
": QS JD\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 0 to the foundations\n" +
"\n" +
"Foundations: H-T C-7 D-8 S-J\n" +
"Freecells:  KH      KD\n" +
": 9C\n" +
": KS QH JC TD\n" +
": QC JH TC 9D 8C\n" +
": KC QD\n" +
":\n" +
":\n" +
":\n" +
": QS JD\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 2 to the foundations\n" +
"\n" +
"Foundations: H-T C-8 D-8 S-J\n" +
"Freecells:  KH      KD\n" +
": 9C\n" +
": KS QH JC TD\n" +
": QC JH TC 9D\n" +
": KC QD\n" +
":\n" +
":\n" +
":\n" +
": QS JD\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 0 to the foundations\n" +
"\n" +
"Foundations: H-T C-9 D-8 S-J\n" +
"Freecells:  KH      KD\n" +
":\n" +
": KS QH JC TD\n" +
": QC JH TC 9D\n" +
": KC QD\n" +
":\n" +
":\n" +
":\n" +
": QS JD\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 2 to the foundations\n" +
"\n" +
"Foundations: H-T C-9 D-9 S-J\n" +
"Freecells:  KH      KD\n" +
":\n" +
": KS QH JC TD\n" +
": QC JH TC\n" +
": KC QD\n" +
":\n" +
":\n" +
":\n" +
": QS JD\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 2 to the foundations\n" +
"\n" +
"Foundations: H-T C-T D-9 S-J\n" +
"Freecells:  KH      KD\n" +
":\n" +
": KS QH JC TD\n" +
": QC JH\n" +
": KC QD\n" +
":\n" +
":\n" +
":\n" +
": QS JD\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 2 to the foundations\n" +
"\n" +
"Foundations: H-J C-T D-9 S-J\n" +
"Freecells:  KH      KD\n" +
":\n" +
": KS QH JC TD\n" +
": QC\n" +
": KC QD\n" +
":\n" +
":\n" +
":\n" +
": QS JD\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 1 to the foundations\n" +
"\n" +
"Foundations: H-J C-T D-T S-J\n" +
"Freecells:  KH      KD\n" +
":\n" +
": KS QH JC\n" +
": QC\n" +
": KC QD\n" +
":\n" +
":\n" +
":\n" +
": QS JD\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 7 to the foundations\n" +
"\n" +
"Foundations: H-J C-T D-J S-J\n" +
"Freecells:  KH      KD\n" +
":\n" +
": KS QH JC\n" +
": QC\n" +
": KC QD\n" +
":\n" +
":\n" +
":\n" +
": QS\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 7 to the foundations\n" +
"\n" +
"Foundations: H-J C-T D-J S-Q\n" +
"Freecells:  KH      KD\n" +
":\n" +
": KS QH JC\n" +
": QC\n" +
": KC QD\n" +
":\n" +
":\n" +
":\n" +
":\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 3 to the foundations\n" +
"\n" +
"Foundations: H-J C-T D-Q S-Q\n" +
"Freecells:  KH      KD\n" +
":\n" +
": KS QH JC\n" +
": QC\n" +
": KC\n" +
":\n" +
":\n" +
":\n" +
":\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 1 to the foundations\n" +
"\n" +
"Foundations: H-J C-J D-Q S-Q\n" +
"Freecells:  KH      KD\n" +
":\n" +
": KS QH\n" +
": QC\n" +
": KC\n" +
":\n" +
":\n" +
":\n" +
":\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 2 to the foundations\n" +
"\n" +
"Foundations: H-J C-Q D-Q S-Q\n" +
"Freecells:  KH      KD\n" +
":\n" +
": KS QH\n" +
":\n" +
": KC\n" +
":\n" +
":\n" +
":\n" +
":\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 3 to the foundations\n" +
"\n" +
"Foundations: H-J C-K D-Q S-Q\n" +
"Freecells:  KH      KD\n" +
":\n" +
": KS QH\n" +
":\n" +
":\n" +
":\n" +
":\n" +
":\n" +
":\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 1 to the foundations\n" +
"\n" +
"Foundations: H-Q C-K D-Q S-Q\n" +
"Freecells:  KH      KD\n" +
":\n" +
": KS\n" +
":\n" +
":\n" +
":\n" +
":\n" +
":\n" +
":\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 1 to the foundations\n" +
"\n" +
"Foundations: H-Q C-K D-Q S-K\n" +
"Freecells:  KH      KD\n" +
":\n" +
":\n" +
":\n" +
":\n" +
":\n" +
":\n" +
":\n" +
":\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 0 to the foundations\n" +
"\n" +
"Foundations: H-K C-K D-Q S-K\n" +
"Freecells:          KD\n" +
":\n" +
":\n" +
":\n" +
":\n" +
":\n" +
":\n" +
":\n" +
":\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 2 to the foundations\n" +
"\n" +
"Foundations: H-K C-K D-K S-K\n" +
"Freecells:\n" +
":\n" +
":\n" +
":\n" +
":\n" +
":\n" +
":\n" +
":\n" +
":\n" +
"\n" +
"\n" +
"====================\n\n";

var solution_for_deal_24__default__with_unicoded_suits =
"-=-=-=-=-=-=-=-=-=-=-=-\n" +
"\n" +
"Foundations: ♥-0 ♣-0 ♦-0 ♠-0\n" +
"Freecells:\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ 4♠ 2♥\n" +
": 5♥ Q♥ 3♣ A♣ 3♥ 4♥ Q♦\n" +
": Q♣ 9♠ 6♥ 9♥ 3♠ K♠ 3♦\n" +
": 5♦ 2♠ J♣ 5♣ J♥ 6♦ A♠\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦\n" +
": 7♥ J♠ K♥ T♠ K♣ 7♣\n" +
": A♥ 5♠ 6♠ A♦ 8♥ J♦\n" +
": 7♠ 6♣ 7♦ 4♦ 8♠ 9♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 3 to the foundations\n" +
"\n" +
"Foundations: ♥-0 ♣-0 ♦-0 ♠-A\n" +
"Freecells:\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ 4♠ 2♥\n" +
": 5♥ Q♥ 3♣ A♣ 3♥ 4♥ Q♦\n" +
": Q♣ 9♠ 6♥ 9♥ 3♠ K♠ 3♦\n" +
": 5♦ 2♠ J♣ 5♣ J♥ 6♦\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦\n" +
": 7♥ J♠ K♥ T♠ K♣ 7♣\n" +
": A♥ 5♠ 6♠ A♦ 8♥ J♦\n" +
": 7♠ 6♣ 7♦ 4♦ 8♠ 9♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 6 to freecell 0\n" +
"\n" +
"Foundations: ♥-0 ♣-0 ♦-0 ♠-A\n" +
"Freecells:  J♦\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ 4♠ 2♥\n" +
": 5♥ Q♥ 3♣ A♣ 3♥ 4♥ Q♦\n" +
": Q♣ 9♠ 6♥ 9♥ 3♠ K♠ 3♦\n" +
": 5♦ 2♠ J♣ 5♣ J♥ 6♦\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦\n" +
": 7♥ J♠ K♥ T♠ K♣ 7♣\n" +
": A♥ 5♠ 6♠ A♦ 8♥\n" +
": 7♠ 6♣ 7♦ 4♦ 8♠ 9♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 6 to freecell 1\n" +
"\n" +
"Foundations: ♥-0 ♣-0 ♦-0 ♠-A\n" +
"Freecells:  J♦  8♥\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ 4♠ 2♥\n" +
": 5♥ Q♥ 3♣ A♣ 3♥ 4♥ Q♦\n" +
": Q♣ 9♠ 6♥ 9♥ 3♠ K♠ 3♦\n" +
": 5♦ 2♠ J♣ 5♣ J♥ 6♦\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦\n" +
": 7♥ J♠ K♥ T♠ K♣ 7♣\n" +
": A♥ 5♠ 6♠ A♦\n" +
": 7♠ 6♣ 7♦ 4♦ 8♠ 9♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 6 to the foundations\n" +
"\n" +
"Foundations: ♥-0 ♣-0 ♦-A ♠-A\n" +
"Freecells:  J♦  8♥\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ 4♠ 2♥\n" +
": 5♥ Q♥ 3♣ A♣ 3♥ 4♥ Q♦\n" +
": Q♣ 9♠ 6♥ 9♥ 3♠ K♠ 3♦\n" +
": 5♦ 2♠ J♣ 5♣ J♥ 6♦\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦\n" +
": 7♥ J♠ K♥ T♠ K♣ 7♣\n" +
": A♥ 5♠ 6♠\n" +
": 7♠ 6♣ 7♦ 4♦ 8♠ 9♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 0 to freecell 2\n" +
"\n" +
"Foundations: ♥-0 ♣-0 ♦-A ♠-A\n" +
"Freecells:  J♦  8♥  2♥\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ 4♠\n" +
": 5♥ Q♥ 3♣ A♣ 3♥ 4♥ Q♦\n" +
": Q♣ 9♠ 6♥ 9♥ 3♠ K♠ 3♦\n" +
": 5♦ 2♠ J♣ 5♣ J♥ 6♦\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦\n" +
": 7♥ J♠ K♥ T♠ K♣ 7♣\n" +
": A♥ 5♠ 6♠\n" +
": 7♠ 6♣ 7♦ 4♦ 8♠ 9♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 0 to freecell 3\n" +
"\n" +
"Foundations: ♥-0 ♣-0 ♦-A ♠-A\n" +
"Freecells:  J♦  8♥  2♥  4♠\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠\n" +
": 5♥ Q♥ 3♣ A♣ 3♥ 4♥ Q♦\n" +
": Q♣ 9♠ 6♥ 9♥ 3♠ K♠ 3♦\n" +
": 5♦ 2♠ J♣ 5♣ J♥ 6♦\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦\n" +
": 7♥ J♠ K♥ T♠ K♣ 7♣\n" +
": A♥ 5♠ 6♠\n" +
": 7♠ 6♣ 7♦ 4♦ 8♠ 9♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 0 to stack 0\n" +
"\n" +
"Foundations: ♥-0 ♣-0 ♦-A ♠-A\n" +
"Freecells:      8♥  2♥  4♠\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": 5♥ Q♥ 3♣ A♣ 3♥ 4♥ Q♦\n" +
": Q♣ 9♠ 6♥ 9♥ 3♠ K♠ 3♦\n" +
": 5♦ 2♠ J♣ 5♣ J♥ 6♦\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦\n" +
": 7♥ J♠ K♥ T♠ K♣ 7♣\n" +
": A♥ 5♠ 6♠\n" +
": 7♠ 6♣ 7♦ 4♦ 8♠ 9♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 6 to freecell 0\n" +
"\n" +
"Foundations: ♥-0 ♣-0 ♦-A ♠-A\n" +
"Freecells:  6♠  8♥  2♥  4♠\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": 5♥ Q♥ 3♣ A♣ 3♥ 4♥ Q♦\n" +
": Q♣ 9♠ 6♥ 9♥ 3♠ K♠ 3♦\n" +
": 5♦ 2♠ J♣ 5♣ J♥ 6♦\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦\n" +
": 7♥ J♠ K♥ T♠ K♣ 7♣\n" +
": A♥ 5♠\n" +
": 7♠ 6♣ 7♦ 4♦ 8♠ 9♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 6 to stack 3\n" +
"\n" +
"Foundations: ♥-0 ♣-0 ♦-A ♠-A\n" +
"Freecells:  6♠  8♥  2♥  4♠\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": 5♥ Q♥ 3♣ A♣ 3♥ 4♥ Q♦\n" +
": Q♣ 9♠ 6♥ 9♥ 3♠ K♠ 3♦\n" +
": 5♦ 2♠ J♣ 5♣ J♥ 6♦ 5♠\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦\n" +
": 7♥ J♠ K♥ T♠ K♣ 7♣\n" +
": A♥\n" +
": 7♠ 6♣ 7♦ 4♦ 8♠ 9♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 6 to the foundations\n" +
"\n" +
"Foundations: ♥-A ♣-0 ♦-A ♠-A\n" +
"Freecells:  6♠  8♥  2♥  4♠\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": 5♥ Q♥ 3♣ A♣ 3♥ 4♥ Q♦\n" +
": Q♣ 9♠ 6♥ 9♥ 3♠ K♠ 3♦\n" +
": 5♦ 2♠ J♣ 5♣ J♥ 6♦ 5♠\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦\n" +
": 7♥ J♠ K♥ T♠ K♣ 7♣\n" +
":\n" +
": 7♠ 6♣ 7♦ 4♦ 8♠ 9♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 2 to the foundations\n" +
"\n" +
"Foundations: ♥-2 ♣-0 ♦-A ♠-A\n" +
"Freecells:  6♠  8♥      4♠\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": 5♥ Q♥ 3♣ A♣ 3♥ 4♥ Q♦\n" +
": Q♣ 9♠ 6♥ 9♥ 3♠ K♠ 3♦\n" +
": 5♦ 2♠ J♣ 5♣ J♥ 6♦ 5♠\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦\n" +
": 7♥ J♠ K♥ T♠ K♣ 7♣\n" +
":\n" +
": 7♠ 6♣ 7♦ 4♦ 8♠ 9♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 1 to freecell 2\n" +
"\n" +
"Foundations: ♥-2 ♣-0 ♦-A ♠-A\n" +
"Freecells:  6♠  8♥  Q♦  4♠\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": 5♥ Q♥ 3♣ A♣ 3♥ 4♥\n" +
": Q♣ 9♠ 6♥ 9♥ 3♠ K♠ 3♦\n" +
": 5♦ 2♠ J♣ 5♣ J♥ 6♦ 5♠\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦\n" +
": 7♥ J♠ K♥ T♠ K♣ 7♣\n" +
":\n" +
": 7♠ 6♣ 7♦ 4♦ 8♠ 9♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 1 to stack 6\n" +
"\n" +
"Foundations: ♥-2 ♣-0 ♦-A ♠-A\n" +
"Freecells:  6♠  8♥  Q♦  4♠\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": 5♥ Q♥ 3♣ A♣ 3♥\n" +
": Q♣ 9♠ 6♥ 9♥ 3♠ K♠ 3♦\n" +
": 5♦ 2♠ J♣ 5♣ J♥ 6♦ 5♠\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦\n" +
": 7♥ J♠ K♥ T♠ K♣ 7♣\n" +
": 4♥\n" +
": 7♠ 6♣ 7♦ 4♦ 8♠ 9♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 1 to the foundations\n" +
"\n" +
"Foundations: ♥-3 ♣-0 ♦-A ♠-A\n" +
"Freecells:  6♠  8♥  Q♦  4♠\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": 5♥ Q♥ 3♣ A♣\n" +
": Q♣ 9♠ 6♥ 9♥ 3♠ K♠ 3♦\n" +
": 5♦ 2♠ J♣ 5♣ J♥ 6♦ 5♠\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦\n" +
": 7♥ J♠ K♥ T♠ K♣ 7♣\n" +
": 4♥\n" +
": 7♠ 6♣ 7♦ 4♦ 8♠ 9♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 6 to the foundations\n" +
"\n" +
"Foundations: ♥-4 ♣-0 ♦-A ♠-A\n" +
"Freecells:  6♠  8♥  Q♦  4♠\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": 5♥ Q♥ 3♣ A♣\n" +
": Q♣ 9♠ 6♥ 9♥ 3♠ K♠ 3♦\n" +
": 5♦ 2♠ J♣ 5♣ J♥ 6♦ 5♠\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦\n" +
": 7♥ J♠ K♥ T♠ K♣ 7♣\n" +
":\n" +
": 7♠ 6♣ 7♦ 4♦ 8♠ 9♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 1 to the foundations\n" +
"\n" +
"Foundations: ♥-4 ♣-A ♦-A ♠-A\n" +
"Freecells:  6♠  8♥  Q♦  4♠\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": 5♥ Q♥ 3♣\n" +
": Q♣ 9♠ 6♥ 9♥ 3♠ K♠ 3♦\n" +
": 5♦ 2♠ J♣ 5♣ J♥ 6♦ 5♠\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦\n" +
": 7♥ J♠ K♥ T♠ K♣ 7♣\n" +
":\n" +
": 7♠ 6♣ 7♦ 4♦ 8♠ 9♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 5 to stack 6\n" +
"\n" +
"Foundations: ♥-4 ♣-A ♦-A ♠-A\n" +
"Freecells:  6♠  8♥  Q♦  4♠\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": 5♥ Q♥ 3♣\n" +
": Q♣ 9♠ 6♥ 9♥ 3♠ K♠ 3♦\n" +
": 5♦ 2♠ J♣ 5♣ J♥ 6♦ 5♠\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦\n" +
": 7♥ J♠ K♥ T♠ K♣\n" +
": 7♣\n" +
": 7♠ 6♣ 7♦ 4♦ 8♠ 9♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 2 to stack 5\n" +
"\n" +
"Foundations: ♥-4 ♣-A ♦-A ♠-A\n" +
"Freecells:  6♠  8♥      4♠\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": 5♥ Q♥ 3♣\n" +
": Q♣ 9♠ 6♥ 9♥ 3♠ K♠ 3♦\n" +
": 5♦ 2♠ J♣ 5♣ J♥ 6♦ 5♠\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦\n" +
": 7♥ J♠ K♥ T♠ K♣ Q♦\n" +
": 7♣\n" +
": 7♠ 6♣ 7♦ 4♦ 8♠ 9♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 6 to stack 4\n" +
"\n" +
"Foundations: ♥-4 ♣-A ♦-A ♠-A\n" +
"Freecells:  6♠  8♥      4♠\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": 5♥ Q♥ 3♣\n" +
": Q♣ 9♠ 6♥ 9♥ 3♠ K♠ 3♦\n" +
": 5♦ 2♠ J♣ 5♣ J♥ 6♦ 5♠\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣\n" +
": 7♥ J♠ K♥ T♠ K♣ Q♦\n" +
":\n" +
": 7♠ 6♣ 7♦ 4♦ 8♠ 9♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 1 to freecell 2\n" +
"\n" +
"Foundations: ♥-4 ♣-A ♦-A ♠-A\n" +
"Freecells:  6♠  8♥  3♣  4♠\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": 5♥ Q♥\n" +
": Q♣ 9♠ 6♥ 9♥ 3♠ K♠ 3♦\n" +
": 5♦ 2♠ J♣ 5♣ J♥ 6♦ 5♠\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣\n" +
": 7♥ J♠ K♥ T♠ K♣ Q♦\n" +
":\n" +
": 7♠ 6♣ 7♦ 4♦ 8♠ 9♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 1 to stack 6\n" +
"\n" +
"Foundations: ♥-4 ♣-A ♦-A ♠-A\n" +
"Freecells:  6♠  8♥  3♣  4♠\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": 5♥\n" +
": Q♣ 9♠ 6♥ 9♥ 3♠ K♠ 3♦\n" +
": 5♦ 2♠ J♣ 5♣ J♥ 6♦ 5♠\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣\n" +
": 7♥ J♠ K♥ T♠ K♣ Q♦\n" +
": Q♥\n" +
": 7♠ 6♣ 7♦ 4♦ 8♠ 9♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 3 to stack 1\n" +
"\n" +
"Foundations: ♥-4 ♣-A ♦-A ♠-A\n" +
"Freecells:  6♠  8♥  3♣\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": 5♥ 4♠\n" +
": Q♣ 9♠ 6♥ 9♥ 3♠ K♠ 3♦\n" +
": 5♦ 2♠ J♣ 5♣ J♥ 6♦ 5♠\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣\n" +
": 7♥ J♠ K♥ T♠ K♣ Q♦\n" +
": Q♥\n" +
": 7♠ 6♣ 7♦ 4♦ 8♠ 9♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 1 to freecell 3\n" +
"\n" +
"Foundations: ♥-4 ♣-A ♦-A ♠-A\n" +
"Freecells:  6♠  8♥  3♣  4♠\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": 5♥\n" +
": Q♣ 9♠ 6♥ 9♥ 3♠ K♠ 3♦\n" +
": 5♦ 2♠ J♣ 5♣ J♥ 6♦ 5♠\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣\n" +
": 7♥ J♠ K♥ T♠ K♣ Q♦\n" +
": Q♥\n" +
": 7♠ 6♣ 7♦ 4♦ 8♠ 9♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 1 to the foundations\n" +
"\n" +
"Foundations: ♥-5 ♣-A ♦-A ♠-A\n" +
"Freecells:  6♠  8♥  3♣  4♠\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
":\n" +
": Q♣ 9♠ 6♥ 9♥ 3♠ K♠ 3♦\n" +
": 5♦ 2♠ J♣ 5♣ J♥ 6♦ 5♠\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣\n" +
": 7♥ J♠ K♥ T♠ K♣ Q♦\n" +
": Q♥\n" +
": 7♠ 6♣ 7♦ 4♦ 8♠ 9♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 2 cards from stack 3 to stack 4\n" +
"\n" +
"Foundations: ♥-5 ♣-A ♦-A ♠-A\n" +
"Freecells:  6♠  8♥  3♣  4♠\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
":\n" +
": Q♣ 9♠ 6♥ 9♥ 3♠ K♠ 3♦\n" +
": 5♦ 2♠ J♣ 5♣ J♥\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦ 5♠\n" +
": 7♥ J♠ K♥ T♠ K♣ Q♦\n" +
": Q♥\n" +
": 7♠ 6♣ 7♦ 4♦ 8♠ 9♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 2 to stack 1\n" +
"\n" +
"Foundations: ♥-5 ♣-A ♦-A ♠-A\n" +
"Freecells:  6♠  8♥  3♣  4♠\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": 3♦\n" +
": Q♣ 9♠ 6♥ 9♥ 3♠ K♠\n" +
": 5♦ 2♠ J♣ 5♣ J♥\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦ 5♠\n" +
": 7♥ J♠ K♥ T♠ K♣ Q♦\n" +
": Q♥\n" +
": 7♠ 6♣ 7♦ 4♦ 8♠ 9♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 6 to stack 2\n" +
"\n" +
"Foundations: ♥-5 ♣-A ♦-A ♠-A\n" +
"Freecells:  6♠  8♥  3♣  4♠\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": 3♦\n" +
": Q♣ 9♠ 6♥ 9♥ 3♠ K♠ Q♥\n" +
": 5♦ 2♠ J♣ 5♣ J♥\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦ 5♠\n" +
": 7♥ J♠ K♥ T♠ K♣ Q♦\n" +
":\n" +
": 7♠ 6♣ 7♦ 4♦ 8♠ 9♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 7 to stack 6\n" +
"\n" +
"Foundations: ♥-5 ♣-A ♦-A ♠-A\n" +
"Freecells:  6♠  8♥  3♣  4♠\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": 3♦\n" +
": Q♣ 9♠ 6♥ 9♥ 3♠ K♠ Q♥\n" +
": 5♦ 2♠ J♣ 5♣ J♥\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦ 5♠\n" +
": 7♥ J♠ K♥ T♠ K♣ Q♦\n" +
": 9♦\n" +
": 7♠ 6♣ 7♦ 4♦ 8♠\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 7 to stack 6\n" +
"\n" +
"Foundations: ♥-5 ♣-A ♦-A ♠-A\n" +
"Freecells:  6♠  8♥  3♣  4♠\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": 3♦\n" +
": Q♣ 9♠ 6♥ 9♥ 3♠ K♠ Q♥\n" +
": 5♦ 2♠ J♣ 5♣ J♥\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦ 5♠\n" +
": 7♥ J♠ K♥ T♠ K♣ Q♦\n" +
": 9♦ 8♠\n" +
": 7♠ 6♣ 7♦ 4♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 2 to stack 7\n" +
"\n" +
"Foundations: ♥-5 ♣-A ♦-A ♠-A\n" +
"Freecells:  6♠  8♥      4♠\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": 3♦\n" +
": Q♣ 9♠ 6♥ 9♥ 3♠ K♠ Q♥\n" +
": 5♦ 2♠ J♣ 5♣ J♥\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦ 5♠\n" +
": 7♥ J♠ K♥ T♠ K♣ Q♦\n" +
": 9♦ 8♠\n" +
": 7♠ 6♣ 7♦ 4♦ 3♣\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 2 cards from stack 7 to stack 4\n" +
"\n" +
"Foundations: ♥-5 ♣-A ♦-A ♠-A\n" +
"Freecells:  6♠  8♥      4♠\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": 3♦\n" +
": Q♣ 9♠ 6♥ 9♥ 3♠ K♠ Q♥\n" +
": 5♦ 2♠ J♣ 5♣ J♥\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦ 5♠ 4♦ 3♣\n" +
": 7♥ J♠ K♥ T♠ K♣ Q♦\n" +
": 9♦ 8♠\n" +
": 7♠ 6♣ 7♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 0 to stack 7\n" +
"\n" +
"Foundations: ♥-5 ♣-A ♦-A ♠-A\n" +
"Freecells:      8♥      4♠\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": 3♦\n" +
": Q♣ 9♠ 6♥ 9♥ 3♠ K♠ Q♥\n" +
": 5♦ 2♠ J♣ 5♣ J♥\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦ 5♠ 4♦ 3♣\n" +
": 7♥ J♠ K♥ T♠ K♣ Q♦\n" +
": 9♦ 8♠\n" +
": 7♠ 6♣ 7♦ 6♠\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 3 to freecell 2\n" +
"\n" +
"Foundations: ♥-5 ♣-A ♦-A ♠-A\n" +
"Freecells:      8♥  J♥  4♠\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": 3♦\n" +
": Q♣ 9♠ 6♥ 9♥ 3♠ K♠ Q♥\n" +
": 5♦ 2♠ J♣ 5♣\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦ 5♠ 4♦ 3♣\n" +
": 7♥ J♠ K♥ T♠ K♣ Q♦\n" +
": 9♦ 8♠\n" +
": 7♠ 6♣ 7♦ 6♠\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 3 to freecell 0\n" +
"\n" +
"Foundations: ♥-5 ♣-A ♦-A ♠-A\n" +
"Freecells:  5♣  8♥  J♥  4♠\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": 3♦\n" +
": Q♣ 9♠ 6♥ 9♥ 3♠ K♠ Q♥\n" +
": 5♦ 2♠ J♣\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦ 5♠ 4♦ 3♣\n" +
": 7♥ J♠ K♥ T♠ K♣ Q♦\n" +
": 9♦ 8♠\n" +
": 7♠ 6♣ 7♦ 6♠\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 3 to stack 5\n" +
"\n" +
"Foundations: ♥-5 ♣-A ♦-A ♠-A\n" +
"Freecells:  5♣  8♥  J♥  4♠\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": 3♦\n" +
": Q♣ 9♠ 6♥ 9♥ 3♠ K♠ Q♥\n" +
": 5♦ 2♠\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦ 5♠ 4♦ 3♣\n" +
": 7♥ J♠ K♥ T♠ K♣ Q♦ J♣\n" +
": 9♦ 8♠\n" +
": 7♠ 6♣ 7♦ 6♠\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 3 to the foundations\n" +
"\n" +
"Foundations: ♥-5 ♣-A ♦-A ♠-2\n" +
"Freecells:  5♣  8♥  J♥  4♠\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": 3♦\n" +
": Q♣ 9♠ 6♥ 9♥ 3♠ K♠ Q♥\n" +
": 5♦\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦ 5♠ 4♦ 3♣\n" +
": 7♥ J♠ K♥ T♠ K♣ Q♦ J♣\n" +
": 9♦ 8♠\n" +
": 7♠ 6♣ 7♦ 6♠\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 3 to stack 3\n" +
"\n" +
"Foundations: ♥-5 ♣-A ♦-A ♠-2\n" +
"Freecells:  5♣  8♥  J♥\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": 3♦\n" +
": Q♣ 9♠ 6♥ 9♥ 3♠ K♠ Q♥\n" +
": 5♦ 4♠\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦ 5♠ 4♦ 3♣\n" +
": 7♥ J♠ K♥ T♠ K♣ Q♦ J♣\n" +
": 9♦ 8♠\n" +
": 7♠ 6♣ 7♦ 6♠\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 1 to stack 3\n" +
"\n" +
"Foundations: ♥-5 ♣-A ♦-A ♠-2\n" +
"Freecells:  5♣  8♥  J♥\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
":\n" +
": Q♣ 9♠ 6♥ 9♥ 3♠ K♠ Q♥\n" +
": 5♦ 4♠ 3♦\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦ 5♠ 4♦ 3♣\n" +
": 7♥ J♠ K♥ T♠ K♣ Q♦ J♣\n" +
": 9♦ 8♠\n" +
": 7♠ 6♣ 7♦ 6♠\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 2 to freecell 3\n" +
"\n" +
"Foundations: ♥-5 ♣-A ♦-A ♠-2\n" +
"Freecells:  5♣  8♥  J♥  Q♥\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
":\n" +
": Q♣ 9♠ 6♥ 9♥ 3♠ K♠\n" +
": 5♦ 4♠ 3♦\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦ 5♠ 4♦ 3♣\n" +
": 7♥ J♠ K♥ T♠ K♣ Q♦ J♣\n" +
": 9♦ 8♠\n" +
": 7♠ 6♣ 7♦ 6♠\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 2 to stack 1\n" +
"\n" +
"Foundations: ♥-5 ♣-A ♦-A ♠-2\n" +
"Freecells:  5♣  8♥  J♥  Q♥\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": K♠\n" +
": Q♣ 9♠ 6♥ 9♥ 3♠\n" +
": 5♦ 4♠ 3♦\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦ 5♠ 4♦ 3♣\n" +
": 7♥ J♠ K♥ T♠ K♣ Q♦ J♣\n" +
": 9♦ 8♠\n" +
": 7♠ 6♣ 7♦ 6♠\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 2 to the foundations\n" +
"\n" +
"Foundations: ♥-5 ♣-A ♦-A ♠-3\n" +
"Freecells:  5♣  8♥  J♥  Q♥\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": K♠\n" +
": Q♣ 9♠ 6♥ 9♥\n" +
": 5♦ 4♠ 3♦\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦ 5♠ 4♦ 3♣\n" +
": 7♥ J♠ K♥ T♠ K♣ Q♦ J♣\n" +
": 9♦ 8♠\n" +
": 7♠ 6♣ 7♦ 6♠\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 3 to stack 1\n" +
"\n" +
"Foundations: ♥-5 ♣-A ♦-A ♠-3\n" +
"Freecells:  5♣  8♥  J♥\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": K♠ Q♥\n" +
": Q♣ 9♠ 6♥ 9♥\n" +
": 5♦ 4♠ 3♦\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦ 5♠ 4♦ 3♣\n" +
": 7♥ J♠ K♥ T♠ K♣ Q♦ J♣\n" +
": 9♦ 8♠\n" +
": 7♠ 6♣ 7♦ 6♠\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 2 to freecell 3\n" +
"\n" +
"Foundations: ♥-5 ♣-A ♦-A ♠-3\n" +
"Freecells:  5♣  8♥  J♥  9♥\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": K♠ Q♥\n" +
": Q♣ 9♠ 6♥\n" +
": 5♦ 4♠ 3♦\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦ 5♠ 4♦ 3♣\n" +
": 7♥ J♠ K♥ T♠ K♣ Q♦ J♣\n" +
": 9♦ 8♠\n" +
": 7♠ 6♣ 7♦ 6♠\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 0 to stack 2\n" +
"\n" +
"Foundations: ♥-5 ♣-A ♦-A ♠-3\n" +
"Freecells:      8♥  J♥  9♥\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": K♠ Q♥\n" +
": Q♣ 9♠ 6♥ 5♣\n" +
": 5♦ 4♠ 3♦\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦ 5♠ 4♦ 3♣\n" +
": 7♥ J♠ K♥ T♠ K♣ Q♦ J♣\n" +
": 9♦ 8♠\n" +
": 7♠ 6♣ 7♦ 6♠\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 3 to freecell 0\n" +
"\n" +
"Foundations: ♥-5 ♣-A ♦-A ♠-3\n" +
"Freecells:  3♦  8♥  J♥  9♥\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": K♠ Q♥\n" +
": Q♣ 9♠ 6♥ 5♣\n" +
": 5♦ 4♠\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦ 5♠ 4♦ 3♣\n" +
": 7♥ J♠ K♥ T♠ K♣ Q♦ J♣\n" +
": 9♦ 8♠\n" +
": 7♠ 6♣ 7♦ 6♠\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 3 to the foundations\n" +
"\n" +
"Foundations: ♥-5 ♣-A ♦-A ♠-4\n" +
"Freecells:  3♦  8♥  J♥  9♥\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": K♠ Q♥\n" +
": Q♣ 9♠ 6♥ 5♣\n" +
": 5♦\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦ 5♠ 4♦ 3♣\n" +
": 7♥ J♠ K♥ T♠ K♣ Q♦ J♣\n" +
": 9♦ 8♠\n" +
": 7♠ 6♣ 7♦ 6♠\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 3 to stack 7\n" +
"\n" +
"Foundations: ♥-5 ♣-A ♦-A ♠-4\n" +
"Freecells:  3♦  8♥  J♥  9♥\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": K♠ Q♥\n" +
": Q♣ 9♠ 6♥ 5♣\n" +
":\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦ 5♠ 4♦ 3♣\n" +
": 7♥ J♠ K♥ T♠ K♣ Q♦ J♣\n" +
": 9♦ 8♠\n" +
": 7♠ 6♣ 7♦ 6♠ 5♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 2 to stack 3\n" +
"\n" +
"Foundations: ♥-5 ♣-A ♦-A ♠-4\n" +
"Freecells:  3♦  8♥  J♥  9♥\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": K♠ Q♥\n" +
": Q♣ 9♠ 6♥\n" +
": 5♣\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦ 5♠ 4♦ 3♣\n" +
": 7♥ J♠ K♥ T♠ K♣ Q♦ J♣\n" +
": 9♦ 8♠\n" +
": 7♠ 6♣ 7♦ 6♠ 5♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 2 to the foundations\n" +
"\n" +
"Foundations: ♥-6 ♣-A ♦-A ♠-4\n" +
"Freecells:  3♦  8♥  J♥  9♥\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": K♠ Q♥\n" +
": Q♣ 9♠\n" +
": 5♣\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦ 5♠ 4♦ 3♣\n" +
": 7♥ J♠ K♥ T♠ K♣ Q♦ J♣\n" +
": 9♦ 8♠\n" +
": 7♠ 6♣ 7♦ 6♠ 5♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 1 to stack 2\n" +
"\n" +
"Foundations: ♥-6 ♣-A ♦-A ♠-4\n" +
"Freecells:  3♦      J♥  9♥\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": K♠ Q♥\n" +
": Q♣ 9♠ 8♥\n" +
": 5♣\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦ 5♠ 4♦ 3♣\n" +
": 7♥ J♠ K♥ T♠ K♣ Q♦ J♣\n" +
": 9♦ 8♠\n" +
": 7♠ 6♣ 7♦ 6♠ 5♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 2 cards from stack 4 to stack 3\n" +
"\n" +
"Foundations: ♥-6 ♣-A ♦-A ♠-4\n" +
"Freecells:  3♦      J♥  9♥\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": K♠ Q♥\n" +
": Q♣ 9♠ 8♥\n" +
": 5♣ 4♦ 3♣\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦ 5♠\n" +
": 7♥ J♠ K♥ T♠ K♣ Q♦ J♣\n" +
": 9♦ 8♠\n" +
": 7♠ 6♣ 7♦ 6♠ 5♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 4 to the foundations\n" +
"\n" +
"Foundations: ♥-6 ♣-A ♦-A ♠-5\n" +
"Freecells:  3♦      J♥  9♥\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": K♠ Q♥\n" +
": Q♣ 9♠ 8♥\n" +
": 5♣ 4♦ 3♣\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦\n" +
": 7♥ J♠ K♥ T♠ K♣ Q♦ J♣\n" +
": 9♦ 8♠\n" +
": 7♠ 6♣ 7♦ 6♠ 5♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 7 to freecell 1\n" +
"\n" +
"Foundations: ♥-6 ♣-A ♦-A ♠-5\n" +
"Freecells:  3♦  5♦  J♥  9♥\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": K♠ Q♥\n" +
": Q♣ 9♠ 8♥\n" +
": 5♣ 4♦ 3♣\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦\n" +
": 7♥ J♠ K♥ T♠ K♣ Q♦ J♣\n" +
": 9♦ 8♠\n" +
": 7♠ 6♣ 7♦ 6♠\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 7 to the foundations\n" +
"\n" +
"Foundations: ♥-6 ♣-A ♦-A ♠-6\n" +
"Freecells:  3♦  5♦  J♥  9♥\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": K♠ Q♥\n" +
": Q♣ 9♠ 8♥\n" +
": 5♣ 4♦ 3♣\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦\n" +
": 7♥ J♠ K♥ T♠ K♣ Q♦ J♣\n" +
": 9♦ 8♠\n" +
": 7♠ 6♣ 7♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 7 to stack 6\n" +
"\n" +
"Foundations: ♥-6 ♣-A ♦-A ♠-6\n" +
"Freecells:  3♦  5♦  J♥  9♥\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": K♠ Q♥\n" +
": Q♣ 9♠ 8♥\n" +
": 5♣ 4♦ 3♣\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦\n" +
": 7♥ J♠ K♥ T♠ K♣ Q♦ J♣\n" +
": 9♦ 8♠ 7♦\n" +
": 7♠ 6♣\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 1 to stack 7\n" +
"\n" +
"Foundations: ♥-6 ♣-A ♦-A ♠-6\n" +
"Freecells:  3♦      J♥  9♥\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": K♠ Q♥\n" +
": Q♣ 9♠ 8♥\n" +
": 5♣ 4♦ 3♣\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦\n" +
": 7♥ J♠ K♥ T♠ K♣ Q♦ J♣\n" +
": 9♦ 8♠ 7♦\n" +
": 7♠ 6♣ 5♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 2 cards from stack 7 to stack 6\n" +
"\n" +
"Foundations: ♥-6 ♣-A ♦-A ♠-6\n" +
"Freecells:  3♦      J♥  9♥\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": K♠ Q♥\n" +
": Q♣ 9♠ 8♥\n" +
": 5♣ 4♦ 3♣\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦\n" +
": 7♥ J♠ K♥ T♠ K♣ Q♦ J♣\n" +
": 9♦ 8♠ 7♦ 6♣ 5♦\n" +
": 7♠\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 7 to the foundations\n" +
"\n" +
"Foundations: ♥-6 ♣-A ♦-A ♠-7\n" +
"Freecells:  3♦      J♥  9♥\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": K♠ Q♥\n" +
": Q♣ 9♠ 8♥\n" +
": 5♣ 4♦ 3♣\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦\n" +
": 7♥ J♠ K♥ T♠ K♣ Q♦ J♣\n" +
": 9♦ 8♠ 7♦ 6♣ 5♦\n" +
":\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 2 to freecell 1\n" +
"\n" +
"Foundations: ♥-6 ♣-A ♦-A ♠-7\n" +
"Freecells:  3♦  8♥  J♥  9♥\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": K♠ Q♥\n" +
": Q♣ 9♠\n" +
": 5♣ 4♦ 3♣\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦\n" +
": 7♥ J♠ K♥ T♠ K♣ Q♦ J♣\n" +
": 9♦ 8♠ 7♦ 6♣ 5♦\n" +
":\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 2 to stack 7\n" +
"\n" +
"Foundations: ♥-6 ♣-A ♦-A ♠-7\n" +
"Freecells:  3♦  8♥  J♥  9♥\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": K♠ Q♥\n" +
": Q♣\n" +
": 5♣ 4♦ 3♣\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦\n" +
": 7♥ J♠ K♥ T♠ K♣ Q♦ J♣\n" +
": 9♦ 8♠ 7♦ 6♣ 5♦\n" +
": 9♠\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 2 to stack 2\n" +
"\n" +
"Foundations: ♥-6 ♣-A ♦-A ♠-7\n" +
"Freecells:  3♦  8♥      9♥\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": K♠ Q♥\n" +
": Q♣ J♥\n" +
": 5♣ 4♦ 3♣\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦\n" +
": 7♥ J♠ K♥ T♠ K♣ Q♦ J♣\n" +
": 9♦ 8♠ 7♦ 6♣ 5♦\n" +
": 9♠\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 1 to stack 7\n" +
"\n" +
"Foundations: ♥-6 ♣-A ♦-A ♠-7\n" +
"Freecells:  3♦          9♥\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": K♠ Q♥\n" +
": Q♣ J♥\n" +
": 5♣ 4♦ 3♣\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦\n" +
": 7♥ J♠ K♥ T♠ K♣ Q♦ J♣\n" +
": 9♦ 8♠ 7♦ 6♣ 5♦\n" +
": 9♠ 8♥\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 3 cards from stack 3 to stack 4\n" +
"\n" +
"Foundations: ♥-6 ♣-A ♦-A ♠-7\n" +
"Freecells:  3♦          9♥\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": K♠ Q♥\n" +
": Q♣ J♥\n" +
":\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦ 5♣ 4♦ 3♣\n" +
": 7♥ J♠ K♥ T♠ K♣ Q♦ J♣\n" +
": 9♦ 8♠ 7♦ 6♣ 5♦\n" +
": 9♠ 8♥\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 5 to freecell 2\n" +
"\n" +
"Foundations: ♥-6 ♣-A ♦-A ♠-7\n" +
"Freecells:  3♦      J♣  9♥\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": K♠ Q♥\n" +
": Q♣ J♥\n" +
":\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦ 5♣ 4♦ 3♣\n" +
": 7♥ J♠ K♥ T♠ K♣ Q♦\n" +
": 9♦ 8♠ 7♦ 6♣ 5♦\n" +
": 9♠ 8♥\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 5 to freecell 1\n" +
"\n" +
"Foundations: ♥-6 ♣-A ♦-A ♠-7\n" +
"Freecells:  3♦  Q♦  J♣  9♥\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": K♠ Q♥\n" +
": Q♣ J♥\n" +
":\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦ 5♣ 4♦ 3♣\n" +
": 7♥ J♠ K♥ T♠ K♣\n" +
": 9♦ 8♠ 7♦ 6♣ 5♦\n" +
": 9♠ 8♥\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 5 to stack 3\n" +
"\n" +
"Foundations: ♥-6 ♣-A ♦-A ♠-7\n" +
"Freecells:  3♦  Q♦  J♣  9♥\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": K♠ Q♥\n" +
": Q♣ J♥\n" +
": K♣\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦ 5♣ 4♦ 3♣\n" +
": 7♥ J♠ K♥ T♠\n" +
": 9♦ 8♠ 7♦ 6♣ 5♦\n" +
": 9♠ 8♥\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 3 to stack 5\n" +
"\n" +
"Foundations: ♥-6 ♣-A ♦-A ♠-7\n" +
"Freecells:  3♦  Q♦  J♣\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": K♠ Q♥\n" +
": Q♣ J♥\n" +
": K♣\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦ 5♣ 4♦ 3♣\n" +
": 7♥ J♠ K♥ T♠ 9♥\n" +
": 9♦ 8♠ 7♦ 6♣ 5♦\n" +
": 9♠ 8♥\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 1 to stack 3\n" +
"\n" +
"Foundations: ♥-6 ♣-A ♦-A ♠-7\n" +
"Freecells:  3♦      J♣\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": K♠ Q♥\n" +
": Q♣ J♥\n" +
": K♣ Q♦\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦ 5♣ 4♦ 3♣\n" +
": 7♥ J♠ K♥ T♠ 9♥\n" +
": 9♦ 8♠ 7♦ 6♣ 5♦\n" +
": 9♠ 8♥\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 2 to stack 3\n" +
"\n" +
"Foundations: ♥-6 ♣-A ♦-A ♠-7\n" +
"Freecells:  3♦\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠ J♦\n" +
": K♠ Q♥\n" +
": Q♣ J♥\n" +
": K♣ Q♦ J♣\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦ 5♣ 4♦ 3♣\n" +
": 7♥ J♠ K♥ T♠ 9♥\n" +
": 9♦ 8♠ 7♦ 6♣ 5♦\n" +
": 9♠ 8♥\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 0 to freecell 3\n" +
"\n" +
"Foundations: ♥-6 ♣-A ♦-A ♠-7\n" +
"Freecells:  3♦          J♦\n" +
": 4♣ 2♣ 9♣ 8♣ Q♠\n" +
": K♠ Q♥\n" +
": Q♣ J♥\n" +
": K♣ Q♦ J♣\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦ 5♣ 4♦ 3♣\n" +
": 7♥ J♠ K♥ T♠ 9♥\n" +
": 9♦ 8♠ 7♦ 6♣ 5♦\n" +
": 9♠ 8♥\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 0 to freecell 1\n" +
"\n" +
"Foundations: ♥-6 ♣-A ♦-A ♠-7\n" +
"Freecells:  3♦  Q♠      J♦\n" +
": 4♣ 2♣ 9♣ 8♣\n" +
": K♠ Q♥\n" +
": Q♣ J♥\n" +
": K♣ Q♦ J♣\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦ 5♣ 4♦ 3♣\n" +
": 7♥ J♠ K♥ T♠ 9♥\n" +
": 9♦ 8♠ 7♦ 6♣ 5♦\n" +
": 9♠ 8♥\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 0 to stack 5\n" +
"\n" +
"Foundations: ♥-6 ♣-A ♦-A ♠-7\n" +
"Freecells:  3♦  Q♠      J♦\n" +
": 4♣ 2♣ 9♣\n" +
": K♠ Q♥\n" +
": Q♣ J♥\n" +
": K♣ Q♦ J♣\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦ 5♣ 4♦ 3♣\n" +
": 7♥ J♠ K♥ T♠ 9♥ 8♣\n" +
": 9♦ 8♠ 7♦ 6♣ 5♦\n" +
": 9♠ 8♥\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 0 to freecell 2\n" +
"\n" +
"Foundations: ♥-6 ♣-A ♦-A ♠-7\n" +
"Freecells:  3♦  Q♠  9♣  J♦\n" +
": 4♣ 2♣\n" +
": K♠ Q♥\n" +
": Q♣ J♥\n" +
": K♣ Q♦ J♣\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦ 5♣ 4♦ 3♣\n" +
": 7♥ J♠ K♥ T♠ 9♥ 8♣\n" +
": 9♦ 8♠ 7♦ 6♣ 5♦\n" +
": 9♠ 8♥\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 0 to the foundations\n" +
"\n" +
"Foundations: ♥-6 ♣-2 ♦-A ♠-7\n" +
"Freecells:  3♦  Q♠  9♣  J♦\n" +
": 4♣\n" +
": K♠ Q♥\n" +
": Q♣ J♥\n" +
": K♣ Q♦ J♣\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦ 5♣ 4♦ 3♣\n" +
": 7♥ J♠ K♥ T♠ 9♥ 8♣\n" +
": 9♦ 8♠ 7♦ 6♣ 5♦\n" +
": 9♠ 8♥\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 4 to the foundations\n" +
"\n" +
"Foundations: ♥-6 ♣-3 ♦-A ♠-7\n" +
"Freecells:  3♦  Q♠  9♣  J♦\n" +
": 4♣\n" +
": K♠ Q♥\n" +
": Q♣ J♥\n" +
": K♣ Q♦ J♣\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦ 5♣ 4♦\n" +
": 7♥ J♠ K♥ T♠ 9♥ 8♣\n" +
": 9♦ 8♠ 7♦ 6♣ 5♦\n" +
": 9♠ 8♥\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 0 to the foundations\n" +
"\n" +
"Foundations: ♥-6 ♣-4 ♦-A ♠-7\n" +
"Freecells:  3♦  Q♠  9♣  J♦\n" +
":\n" +
": K♠ Q♥\n" +
": Q♣ J♥\n" +
": K♣ Q♦ J♣\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦ 5♣ 4♦\n" +
": 7♥ J♠ K♥ T♠ 9♥ 8♣\n" +
": 9♦ 8♠ 7♦ 6♣ 5♦\n" +
": 9♠ 8♥\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 0 to stack 0\n" +
"\n" +
"Foundations: ♥-6 ♣-4 ♦-A ♠-7\n" +
"Freecells:      Q♠  9♣  J♦\n" +
": 3♦\n" +
": K♠ Q♥\n" +
": Q♣ J♥\n" +
": K♣ Q♦ J♣\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦ 5♣ 4♦\n" +
": 7♥ J♠ K♥ T♠ 9♥ 8♣\n" +
": 9♦ 8♠ 7♦ 6♣ 5♦\n" +
": 9♠ 8♥\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 3 to stack 1\n" +
"\n" +
"Foundations: ♥-6 ♣-4 ♦-A ♠-7\n" +
"Freecells:      Q♠  9♣  J♦\n" +
": 3♦\n" +
": K♠ Q♥ J♣\n" +
": Q♣ J♥\n" +
": K♣ Q♦\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦ 5♣ 4♦\n" +
": 7♥ J♠ K♥ T♠ 9♥ 8♣\n" +
": 9♦ 8♠ 7♦ 6♣ 5♦\n" +
": 9♠ 8♥\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 0 to freecell 0\n" +
"\n" +
"Foundations: ♥-6 ♣-4 ♦-A ♠-7\n" +
"Freecells:  3♦  Q♠  9♣  J♦\n" +
":\n" +
": K♠ Q♥ J♣\n" +
": Q♣ J♥\n" +
": K♣ Q♦\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦ 5♣ 4♦\n" +
": 7♥ J♠ K♥ T♠ 9♥ 8♣\n" +
": 9♦ 8♠ 7♦ 6♣ 5♦\n" +
": 9♠ 8♥\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 2 to stack 0\n" +
"\n" +
"Foundations: ♥-6 ♣-4 ♦-A ♠-7\n" +
"Freecells:  3♦  Q♠      J♦\n" +
": 9♣\n" +
": K♠ Q♥ J♣\n" +
": Q♣ J♥\n" +
": K♣ Q♦\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦ 5♣ 4♦\n" +
": 7♥ J♠ K♥ T♠ 9♥ 8♣\n" +
": 9♦ 8♠ 7♦ 6♣ 5♦\n" +
": 9♠ 8♥\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 7 to stack 0\n" +
"\n" +
"Foundations: ♥-6 ♣-4 ♦-A ♠-7\n" +
"Freecells:  3♦  Q♠      J♦\n" +
": 9♣ 8♥\n" +
": K♠ Q♥ J♣\n" +
": Q♣ J♥\n" +
": K♣ Q♦\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦ 5♣ 4♦\n" +
": 7♥ J♠ K♥ T♠ 9♥ 8♣\n" +
": 9♦ 8♠ 7♦ 6♣ 5♦\n" +
": 9♠\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 1 to stack 3\n" +
"\n" +
"Foundations: ♥-6 ♣-4 ♦-A ♠-7\n" +
"Freecells:  3♦  Q♠      J♦\n" +
": 9♣ 8♥\n" +
": K♠ Q♥\n" +
": Q♣ J♥\n" +
": K♣ Q♦ J♣\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦ 5♣ 4♦\n" +
": 7♥ J♠ K♥ T♠ 9♥ 8♣\n" +
": 9♦ 8♠ 7♦ 6♣ 5♦\n" +
": 9♠\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 7 to freecell 2\n" +
"\n" +
"Foundations: ♥-6 ♣-4 ♦-A ♠-7\n" +
"Freecells:  3♦  Q♠  9♠  J♦\n" +
": 9♣ 8♥\n" +
": K♠ Q♥\n" +
": Q♣ J♥\n" +
": K♣ Q♦ J♣\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦ 5♣ 4♦\n" +
": 7♥ J♠ K♥ T♠ 9♥ 8♣\n" +
": 9♦ 8♠ 7♦ 6♣ 5♦\n" +
":\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 0 to stack 7\n" +
"\n" +
"Foundations: ♥-6 ♣-4 ♦-A ♠-7\n" +
"Freecells:      Q♠  9♠  J♦\n" +
": 9♣ 8♥\n" +
": K♠ Q♥\n" +
": Q♣ J♥\n" +
": K♣ Q♦ J♣\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦ 5♣ 4♦\n" +
": 7♥ J♠ K♥ T♠ 9♥ 8♣\n" +
": 9♦ 8♠ 7♦ 6♣ 5♦\n" +
": 3♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 3 to stack 1\n" +
"\n" +
"Foundations: ♥-6 ♣-4 ♦-A ♠-7\n" +
"Freecells:      Q♠  9♠  J♦\n" +
": 9♣ 8♥\n" +
": K♠ Q♥ J♣\n" +
": Q♣ J♥\n" +
": K♣ Q♦\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦ 5♣ 4♦\n" +
": 7♥ J♠ K♥ T♠ 9♥ 8♣\n" +
": 9♦ 8♠ 7♦ 6♣ 5♦\n" +
": 3♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 7 to freecell 0\n" +
"\n" +
"Foundations: ♥-6 ♣-4 ♦-A ♠-7\n" +
"Freecells:  3♦  Q♠  9♠  J♦\n" +
": 9♣ 8♥\n" +
": K♠ Q♥ J♣\n" +
": Q♣ J♥\n" +
": K♣ Q♦\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦ 5♣ 4♦\n" +
": 7♥ J♠ K♥ T♠ 9♥ 8♣\n" +
": 9♦ 8♠ 7♦ 6♣ 5♦\n" +
":\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 1 to stack 7\n" +
"\n" +
"Foundations: ♥-6 ♣-4 ♦-A ♠-7\n" +
"Freecells:  3♦      9♠  J♦\n" +
": 9♣ 8♥\n" +
": K♠ Q♥ J♣\n" +
": Q♣ J♥\n" +
": K♣ Q♦\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦ 5♣ 4♦\n" +
": 7♥ J♠ K♥ T♠ 9♥ 8♣\n" +
": 9♦ 8♠ 7♦ 6♣ 5♦\n" +
": Q♠\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 3 to stack 7\n" +
"\n" +
"Foundations: ♥-6 ♣-4 ♦-A ♠-7\n" +
"Freecells:  3♦      9♠\n" +
": 9♣ 8♥\n" +
": K♠ Q♥ J♣\n" +
": Q♣ J♥\n" +
": K♣ Q♦\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦ 5♣ 4♦\n" +
": 7♥ J♠ K♥ T♠ 9♥ 8♣\n" +
": 9♦ 8♠ 7♦ 6♣ 5♦\n" +
": Q♠ J♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 4 to freecell 1\n" +
"\n" +
"Foundations: ♥-6 ♣-4 ♦-A ♠-7\n" +
"Freecells:  3♦  4♦  9♠\n" +
": 9♣ 8♥\n" +
": K♠ Q♥ J♣\n" +
": Q♣ J♥\n" +
": K♣ Q♦\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦ 5♣\n" +
": 7♥ J♠ K♥ T♠ 9♥ 8♣\n" +
": 9♦ 8♠ 7♦ 6♣ 5♦\n" +
": Q♠ J♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 4 to the foundations\n" +
"\n" +
"Foundations: ♥-6 ♣-5 ♦-A ♠-7\n" +
"Freecells:  3♦  4♦  9♠\n" +
": 9♣ 8♥\n" +
": K♠ Q♥ J♣\n" +
": Q♣ J♥\n" +
": K♣ Q♦\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦\n" +
": 7♥ J♠ K♥ T♠ 9♥ 8♣\n" +
": 9♦ 8♠ 7♦ 6♣ 5♦\n" +
": Q♠ J♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 6 to freecell 3\n" +
"\n" +
"Foundations: ♥-6 ♣-5 ♦-A ♠-7\n" +
"Freecells:  3♦  4♦  9♠  5♦\n" +
": 9♣ 8♥\n" +
": K♠ Q♥ J♣\n" +
": Q♣ J♥\n" +
": K♣ Q♦\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦\n" +
": 7♥ J♠ K♥ T♠ 9♥ 8♣\n" +
": 9♦ 8♠ 7♦ 6♣\n" +
": Q♠ J♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 6 to the foundations\n" +
"\n" +
"Foundations: ♥-6 ♣-6 ♦-A ♠-7\n" +
"Freecells:  3♦  4♦  9♠  5♦\n" +
": 9♣ 8♥\n" +
": K♠ Q♥ J♣\n" +
": Q♣ J♥\n" +
": K♣ Q♦\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦\n" +
": 7♥ J♠ K♥ T♠ 9♥ 8♣\n" +
": 9♦ 8♠ 7♦\n" +
": Q♠ J♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 6 to stack 5\n" +
"\n" +
"Foundations: ♥-6 ♣-6 ♦-A ♠-7\n" +
"Freecells:  3♦  4♦  9♠  5♦\n" +
": 9♣ 8♥\n" +
": K♠ Q♥ J♣\n" +
": Q♣ J♥\n" +
": K♣ Q♦\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦\n" +
": 7♥ J♠ K♥ T♠ 9♥ 8♣ 7♦\n" +
": 9♦ 8♠\n" +
": Q♠ J♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 6 to the foundations\n" +
"\n" +
"Foundations: ♥-6 ♣-6 ♦-A ♠-8\n" +
"Freecells:  3♦  4♦  9♠  5♦\n" +
": 9♣ 8♥\n" +
": K♠ Q♥ J♣\n" +
": Q♣ J♥\n" +
": K♣ Q♦\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦\n" +
": 7♥ J♠ K♥ T♠ 9♥ 8♣ 7♦\n" +
": 9♦\n" +
": Q♠ J♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 2 to the foundations\n" +
"\n" +
"Foundations: ♥-6 ♣-6 ♦-A ♠-9\n" +
"Freecells:  3♦  4♦      5♦\n" +
": 9♣ 8♥\n" +
": K♠ Q♥ J♣\n" +
": Q♣ J♥\n" +
": K♣ Q♦\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦ 7♣ 6♦\n" +
": 7♥ J♠ K♥ T♠ 9♥ 8♣ 7♦\n" +
": 9♦\n" +
": Q♠ J♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 2 cards from stack 4 to stack 0\n" +
"\n" +
"Foundations: ♥-6 ♣-6 ♦-A ♠-9\n" +
"Freecells:  3♦  4♦      5♦\n" +
": 9♣ 8♥ 7♣ 6♦\n" +
": K♠ Q♥ J♣\n" +
": Q♣ J♥\n" +
": K♣ Q♦\n" +
": 2♦ K♦ T♥ T♣ T♦ 8♦\n" +
": 7♥ J♠ K♥ T♠ 9♥ 8♣ 7♦\n" +
": 9♦\n" +
": Q♠ J♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 4 to freecell 2\n" +
"\n" +
"Foundations: ♥-6 ♣-6 ♦-A ♠-9\n" +
"Freecells:  3♦  4♦  8♦  5♦\n" +
": 9♣ 8♥ 7♣ 6♦\n" +
": K♠ Q♥ J♣\n" +
": Q♣ J♥\n" +
": K♣ Q♦\n" +
": 2♦ K♦ T♥ T♣ T♦\n" +
": 7♥ J♠ K♥ T♠ 9♥ 8♣ 7♦\n" +
": 9♦\n" +
": Q♠ J♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 4 to stack 1\n" +
"\n" +
"Foundations: ♥-6 ♣-6 ♦-A ♠-9\n" +
"Freecells:  3♦  4♦  8♦  5♦\n" +
": 9♣ 8♥ 7♣ 6♦\n" +
": K♠ Q♥ J♣ T♦\n" +
": Q♣ J♥\n" +
": K♣ Q♦\n" +
": 2♦ K♦ T♥ T♣\n" +
": 7♥ J♠ K♥ T♠ 9♥ 8♣ 7♦\n" +
": 9♦\n" +
": Q♠ J♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 4 to stack 2\n" +
"\n" +
"Foundations: ♥-6 ♣-6 ♦-A ♠-9\n" +
"Freecells:  3♦  4♦  8♦  5♦\n" +
": 9♣ 8♥ 7♣ 6♦\n" +
": K♠ Q♥ J♣ T♦\n" +
": Q♣ J♥ T♣\n" +
": K♣ Q♦\n" +
": 2♦ K♦ T♥\n" +
": 7♥ J♠ K♥ T♠ 9♥ 8♣ 7♦\n" +
": 9♦\n" +
": Q♠ J♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 6 to stack 2\n" +
"\n" +
"Foundations: ♥-6 ♣-6 ♦-A ♠-9\n" +
"Freecells:  3♦  4♦  8♦  5♦\n" +
": 9♣ 8♥ 7♣ 6♦\n" +
": K♠ Q♥ J♣ T♦\n" +
": Q♣ J♥ T♣ 9♦\n" +
": K♣ Q♦\n" +
": 2♦ K♦ T♥\n" +
": 7♥ J♠ K♥ T♠ 9♥ 8♣ 7♦\n" +
":\n" +
": Q♠ J♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 0 to stack 6\n" +
"\n" +
"Foundations: ♥-6 ♣-6 ♦-A ♠-9\n" +
"Freecells:      4♦  8♦  5♦\n" +
": 9♣ 8♥ 7♣ 6♦\n" +
": K♠ Q♥ J♣ T♦\n" +
": Q♣ J♥ T♣ 9♦\n" +
": K♣ Q♦\n" +
": 2♦ K♦ T♥\n" +
": 7♥ J♠ K♥ T♠ 9♥ 8♣ 7♦\n" +
": 3♦\n" +
": Q♠ J♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 2 cards from stack 5 to stack 2\n" +
"\n" +
"Foundations: ♥-6 ♣-6 ♦-A ♠-9\n" +
"Freecells:      4♦  8♦  5♦\n" +
": 9♣ 8♥ 7♣ 6♦\n" +
": K♠ Q♥ J♣ T♦\n" +
": Q♣ J♥ T♣ 9♦ 8♣ 7♦\n" +
": K♣ Q♦\n" +
": 2♦ K♦ T♥\n" +
": 7♥ J♠ K♥ T♠ 9♥\n" +
": 3♦\n" +
": Q♠ J♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 2 cards from stack 5 to stack 7\n" +
"\n" +
"Foundations: ♥-6 ♣-6 ♦-A ♠-9\n" +
"Freecells:      4♦  8♦  5♦\n" +
": 9♣ 8♥ 7♣ 6♦\n" +
": K♠ Q♥ J♣ T♦\n" +
": Q♣ J♥ T♣ 9♦ 8♣ 7♦\n" +
": K♣ Q♦\n" +
": 2♦ K♦ T♥\n" +
": 7♥ J♠ K♥\n" +
": 3♦\n" +
": Q♠ J♦ T♠ 9♥\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 5 to freecell 0\n" +
"\n" +
"Foundations: ♥-6 ♣-6 ♦-A ♠-9\n" +
"Freecells:  K♥  4♦  8♦  5♦\n" +
": 9♣ 8♥ 7♣ 6♦\n" +
": K♠ Q♥ J♣ T♦\n" +
": Q♣ J♥ T♣ 9♦ 8♣ 7♦\n" +
": K♣ Q♦\n" +
": 2♦ K♦ T♥\n" +
": 7♥ J♠\n" +
": 3♦\n" +
": Q♠ J♦ T♠ 9♥\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 5 to stack 3\n" +
"\n" +
"Foundations: ♥-6 ♣-6 ♦-A ♠-9\n" +
"Freecells:  K♥  4♦  8♦  5♦\n" +
": 9♣ 8♥ 7♣ 6♦\n" +
": K♠ Q♥ J♣ T♦\n" +
": Q♣ J♥ T♣ 9♦ 8♣ 7♦\n" +
": K♣ Q♦ J♠\n" +
": 2♦ K♦ T♥\n" +
": 7♥\n" +
": 3♦\n" +
": Q♠ J♦ T♠ 9♥\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 5 to the foundations\n" +
"\n" +
"Foundations: ♥-7 ♣-6 ♦-A ♠-9\n" +
"Freecells:  K♥  4♦  8♦  5♦\n" +
": 9♣ 8♥ 7♣ 6♦\n" +
": K♠ Q♥ J♣ T♦\n" +
": Q♣ J♥ T♣ 9♦ 8♣ 7♦\n" +
": K♣ Q♦ J♠\n" +
": 2♦ K♦ T♥\n" +
":\n" +
": 3♦\n" +
": Q♠ J♦ T♠ 9♥\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move 1 cards from stack 0 to stack 5\n" +
"\n" +
"Foundations: ♥-7 ♣-6 ♦-A ♠-9\n" +
"Freecells:  K♥  4♦  8♦  5♦\n" +
": 9♣ 8♥ 7♣\n" +
": K♠ Q♥ J♣ T♦\n" +
": Q♣ J♥ T♣ 9♦ 8♣ 7♦\n" +
": K♣ Q♦ J♠\n" +
": 2♦ K♦ T♥\n" +
": 6♦\n" +
": 3♦\n" +
": Q♠ J♦ T♠ 9♥\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 0 to the foundations\n" +
"\n" +
"Foundations: ♥-7 ♣-7 ♦-A ♠-9\n" +
"Freecells:  K♥  4♦  8♦  5♦\n" +
": 9♣ 8♥\n" +
": K♠ Q♥ J♣ T♦\n" +
": Q♣ J♥ T♣ 9♦ 8♣ 7♦\n" +
": K♣ Q♦ J♠\n" +
": 2♦ K♦ T♥\n" +
": 6♦\n" +
": 3♦\n" +
": Q♠ J♦ T♠ 9♥\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 0 to the foundations\n" +
"\n" +
"Foundations: ♥-8 ♣-7 ♦-A ♠-9\n" +
"Freecells:  K♥  4♦  8♦  5♦\n" +
": 9♣\n" +
": K♠ Q♥ J♣ T♦\n" +
": Q♣ J♥ T♣ 9♦ 8♣ 7♦\n" +
": K♣ Q♦ J♠\n" +
": 2♦ K♦ T♥\n" +
": 6♦\n" +
": 3♦\n" +
": Q♠ J♦ T♠ 9♥\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 7 to the foundations\n" +
"\n" +
"Foundations: ♥-9 ♣-7 ♦-A ♠-9\n" +
"Freecells:  K♥  4♦  8♦  5♦\n" +
": 9♣\n" +
": K♠ Q♥ J♣ T♦\n" +
": Q♣ J♥ T♣ 9♦ 8♣ 7♦\n" +
": K♣ Q♦ J♠\n" +
": 2♦ K♦ T♥\n" +
": 6♦\n" +
": 3♦\n" +
": Q♠ J♦ T♠\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 4 to the foundations\n" +
"\n" +
"Foundations: ♥-T ♣-7 ♦-A ♠-9\n" +
"Freecells:  K♥  4♦  8♦  5♦\n" +
": 9♣\n" +
": K♠ Q♥ J♣ T♦\n" +
": Q♣ J♥ T♣ 9♦ 8♣ 7♦\n" +
": K♣ Q♦ J♠\n" +
": 2♦ K♦\n" +
": 6♦\n" +
": 3♦\n" +
": Q♠ J♦ T♠\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 7 to the foundations\n" +
"\n" +
"Foundations: ♥-T ♣-7 ♦-A ♠-T\n" +
"Freecells:  K♥  4♦  8♦  5♦\n" +
": 9♣\n" +
": K♠ Q♥ J♣ T♦\n" +
": Q♣ J♥ T♣ 9♦ 8♣ 7♦\n" +
": K♣ Q♦ J♠\n" +
": 2♦ K♦\n" +
": 6♦\n" +
": 3♦\n" +
": Q♠ J♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 3 to the foundations\n" +
"\n" +
"Foundations: ♥-T ♣-7 ♦-A ♠-J\n" +
"Freecells:  K♥  4♦  8♦  5♦\n" +
": 9♣\n" +
": K♠ Q♥ J♣ T♦\n" +
": Q♣ J♥ T♣ 9♦ 8♣ 7♦\n" +
": K♣ Q♦\n" +
": 2♦ K♦\n" +
": 6♦\n" +
": 3♦\n" +
": Q♠ J♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 2 to stack 0\n" +
"\n" +
"Foundations: ♥-T ♣-7 ♦-A ♠-J\n" +
"Freecells:  K♥  4♦      5♦\n" +
": 9♣ 8♦\n" +
": K♠ Q♥ J♣ T♦\n" +
": Q♣ J♥ T♣ 9♦ 8♣ 7♦\n" +
": K♣ Q♦\n" +
": 2♦ K♦\n" +
": 6♦\n" +
": 3♦\n" +
": Q♠ J♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 4 to freecell 2\n" +
"\n" +
"Foundations: ♥-T ♣-7 ♦-A ♠-J\n" +
"Freecells:  K♥  4♦  K♦  5♦\n" +
": 9♣ 8♦\n" +
": K♠ Q♥ J♣ T♦\n" +
": Q♣ J♥ T♣ 9♦ 8♣ 7♦\n" +
": K♣ Q♦\n" +
": 2♦\n" +
": 6♦\n" +
": 3♦\n" +
": Q♠ J♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 4 to the foundations\n" +
"\n" +
"Foundations: ♥-T ♣-7 ♦-2 ♠-J\n" +
"Freecells:  K♥  4♦  K♦  5♦\n" +
": 9♣ 8♦\n" +
": K♠ Q♥ J♣ T♦\n" +
": Q♣ J♥ T♣ 9♦ 8♣ 7♦\n" +
": K♣ Q♦\n" +
":\n" +
": 6♦\n" +
": 3♦\n" +
": Q♠ J♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 6 to the foundations\n" +
"\n" +
"Foundations: ♥-T ♣-7 ♦-3 ♠-J\n" +
"Freecells:  K♥  4♦  K♦  5♦\n" +
": 9♣ 8♦\n" +
": K♠ Q♥ J♣ T♦\n" +
": Q♣ J♥ T♣ 9♦ 8♣ 7♦\n" +
": K♣ Q♦\n" +
":\n" +
": 6♦\n" +
":\n" +
": Q♠ J♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 1 to the foundations\n" +
"\n" +
"Foundations: ♥-T ♣-7 ♦-4 ♠-J\n" +
"Freecells:  K♥      K♦  5♦\n" +
": 9♣ 8♦\n" +
": K♠ Q♥ J♣ T♦\n" +
": Q♣ J♥ T♣ 9♦ 8♣ 7♦\n" +
": K♣ Q♦\n" +
":\n" +
": 6♦\n" +
":\n" +
": Q♠ J♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 3 to the foundations\n" +
"\n" +
"Foundations: ♥-T ♣-7 ♦-5 ♠-J\n" +
"Freecells:  K♥      K♦\n" +
": 9♣ 8♦\n" +
": K♠ Q♥ J♣ T♦\n" +
": Q♣ J♥ T♣ 9♦ 8♣ 7♦\n" +
": K♣ Q♦\n" +
":\n" +
": 6♦\n" +
":\n" +
": Q♠ J♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 5 to the foundations\n" +
"\n" +
"Foundations: ♥-T ♣-7 ♦-6 ♠-J\n" +
"Freecells:  K♥      K♦\n" +
": 9♣ 8♦\n" +
": K♠ Q♥ J♣ T♦\n" +
": Q♣ J♥ T♣ 9♦ 8♣ 7♦\n" +
": K♣ Q♦\n" +
":\n" +
":\n" +
":\n" +
": Q♠ J♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 2 to the foundations\n" +
"\n" +
"Foundations: ♥-T ♣-7 ♦-7 ♠-J\n" +
"Freecells:  K♥      K♦\n" +
": 9♣ 8♦\n" +
": K♠ Q♥ J♣ T♦\n" +
": Q♣ J♥ T♣ 9♦ 8♣\n" +
": K♣ Q♦\n" +
":\n" +
":\n" +
":\n" +
": Q♠ J♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 0 to the foundations\n" +
"\n" +
"Foundations: ♥-T ♣-7 ♦-8 ♠-J\n" +
"Freecells:  K♥      K♦\n" +
": 9♣\n" +
": K♠ Q♥ J♣ T♦\n" +
": Q♣ J♥ T♣ 9♦ 8♣\n" +
": K♣ Q♦\n" +
":\n" +
":\n" +
":\n" +
": Q♠ J♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 2 to the foundations\n" +
"\n" +
"Foundations: ♥-T ♣-8 ♦-8 ♠-J\n" +
"Freecells:  K♥      K♦\n" +
": 9♣\n" +
": K♠ Q♥ J♣ T♦\n" +
": Q♣ J♥ T♣ 9♦\n" +
": K♣ Q♦\n" +
":\n" +
":\n" +
":\n" +
": Q♠ J♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 0 to the foundations\n" +
"\n" +
"Foundations: ♥-T ♣-9 ♦-8 ♠-J\n" +
"Freecells:  K♥      K♦\n" +
":\n" +
": K♠ Q♥ J♣ T♦\n" +
": Q♣ J♥ T♣ 9♦\n" +
": K♣ Q♦\n" +
":\n" +
":\n" +
":\n" +
": Q♠ J♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 2 to the foundations\n" +
"\n" +
"Foundations: ♥-T ♣-9 ♦-9 ♠-J\n" +
"Freecells:  K♥      K♦\n" +
":\n" +
": K♠ Q♥ J♣ T♦\n" +
": Q♣ J♥ T♣\n" +
": K♣ Q♦\n" +
":\n" +
":\n" +
":\n" +
": Q♠ J♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 2 to the foundations\n" +
"\n" +
"Foundations: ♥-T ♣-T ♦-9 ♠-J\n" +
"Freecells:  K♥      K♦\n" +
":\n" +
": K♠ Q♥ J♣ T♦\n" +
": Q♣ J♥\n" +
": K♣ Q♦\n" +
":\n" +
":\n" +
":\n" +
": Q♠ J♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 2 to the foundations\n" +
"\n" +
"Foundations: ♥-J ♣-T ♦-9 ♠-J\n" +
"Freecells:  K♥      K♦\n" +
":\n" +
": K♠ Q♥ J♣ T♦\n" +
": Q♣\n" +
": K♣ Q♦\n" +
":\n" +
":\n" +
":\n" +
": Q♠ J♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 1 to the foundations\n" +
"\n" +
"Foundations: ♥-J ♣-T ♦-T ♠-J\n" +
"Freecells:  K♥      K♦\n" +
":\n" +
": K♠ Q♥ J♣\n" +
": Q♣\n" +
": K♣ Q♦\n" +
":\n" +
":\n" +
":\n" +
": Q♠ J♦\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 7 to the foundations\n" +
"\n" +
"Foundations: ♥-J ♣-T ♦-J ♠-J\n" +
"Freecells:  K♥      K♦\n" +
":\n" +
": K♠ Q♥ J♣\n" +
": Q♣\n" +
": K♣ Q♦\n" +
":\n" +
":\n" +
":\n" +
": Q♠\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 7 to the foundations\n" +
"\n" +
"Foundations: ♥-J ♣-T ♦-J ♠-Q\n" +
"Freecells:  K♥      K♦\n" +
":\n" +
": K♠ Q♥ J♣\n" +
": Q♣\n" +
": K♣ Q♦\n" +
":\n" +
":\n" +
":\n" +
":\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 3 to the foundations\n" +
"\n" +
"Foundations: ♥-J ♣-T ♦-Q ♠-Q\n" +
"Freecells:  K♥      K♦\n" +
":\n" +
": K♠ Q♥ J♣\n" +
": Q♣\n" +
": K♣\n" +
":\n" +
":\n" +
":\n" +
":\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 1 to the foundations\n" +
"\n" +
"Foundations: ♥-J ♣-J ♦-Q ♠-Q\n" +
"Freecells:  K♥      K♦\n" +
":\n" +
": K♠ Q♥\n" +
": Q♣\n" +
": K♣\n" +
":\n" +
":\n" +
":\n" +
":\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 2 to the foundations\n" +
"\n" +
"Foundations: ♥-J ♣-Q ♦-Q ♠-Q\n" +
"Freecells:  K♥      K♦\n" +
":\n" +
": K♠ Q♥\n" +
":\n" +
": K♣\n" +
":\n" +
":\n" +
":\n" +
":\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 3 to the foundations\n" +
"\n" +
"Foundations: ♥-J ♣-K ♦-Q ♠-Q\n" +
"Freecells:  K♥      K♦\n" +
":\n" +
": K♠ Q♥\n" +
":\n" +
":\n" +
":\n" +
":\n" +
":\n" +
":\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 1 to the foundations\n" +
"\n" +
"Foundations: ♥-Q ♣-K ♦-Q ♠-Q\n" +
"Freecells:  K♥      K♦\n" +
":\n" +
": K♠\n" +
":\n" +
":\n" +
":\n" +
":\n" +
":\n" +
":\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from stack 1 to the foundations\n" +
"\n" +
"Foundations: ♥-Q ♣-K ♦-Q ♠-K\n" +
"Freecells:  K♥      K♦\n" +
":\n" +
":\n" +
":\n" +
":\n" +
":\n" +
":\n" +
":\n" +
":\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 0 to the foundations\n" +
"\n" +
"Foundations: ♥-K ♣-K ♦-Q ♠-K\n" +
"Freecells:          K♦\n" +
":\n" +
":\n" +
":\n" +
":\n" +
":\n" +
":\n" +
":\n" +
":\n" +
"\n" +
"\n" +
"====================\n" +
"\n" +
"Move a card from freecell 2 to the foundations\n" +
"\n" +
"Foundations: ♥-K ♣-K ♦-K ♠-K\n" +
"Freecells:\n" +
":\n" +
":\n" +
":\n" +
":\n" +
":\n" +
":\n" +
":\n" +
":\n" +
"\n" +
"\n" +
"====================\n\n";

var fc_solve_2uni_suit_map = { 'H': '♥', 'C': '♣', 'D': '♦', 'S': '♠' };

function fc_solve_2uni_card(match, p1, p2, offset, mystring) {
    return p1 + fc_solve_2uni_suit_map[p2];
}

function fc_solve_2uni_found(match, p1, p2, offset, mystring) {
    return fc_solve_2uni_suit_map[p1] + p2;
}

function test_js_fc_solve_class()
{
    module("FC_Solve.Algorithmic");

    test("FC_Solve main test", function() {
        expect(3);

        // TEST
        ok (true, "True is, well, true.");

        var success = false;

        var instance = new FC_Solve({
            cmd_line_preset: 'default',
            set_status_callback: function () { return; },
            set_output: function (buffer) {
                success = true;
                // TEST
                equal (buffer, solution_for_deal_24__default,
                    "Solution is right"
                );
            },
        });

        var solve_err_code = instance.do_solve(ms_deal_24);

        while (solve_err_code == FCS_STATE_SUSPEND_PROCESS) {
            solve_err_code = instance.resume_solution();
        }

        // TEST
        ok (success, "do_solve was successful.");

    });

    test("FC_Solve unicoded solution", function() {
        expect(3);

        // TEST
        ok (true, "True is, well, true.");

        var success = false;

        var instance = new FC_Solve({
            cmd_line_preset: 'default',
            set_status_callback: function () { return; },
            set_output: function (buffer) {
                success = true;

                var modified_string = buffer.replace(/\b([A2-9TJQK])([HCDS])\b/g, fc_solve_2uni_card).replace(/\b([HCDS])(-[0A2-9TJQK])\b/g, fc_solve_2uni_found);
                // TEST
                equal (modified_string,
                    solution_for_deal_24__default__with_unicoded_suits,
                    "Solution is right"
                );
            },
        });

        var solve_err_code = instance.do_solve(ms_deal_24);

        while (solve_err_code == FCS_STATE_SUSPEND_PROCESS) {
            solve_err_code = instance.resume_solution();
        }

        // TEST
        ok (success, "do_solve was successful.");

    });

    return;
}
