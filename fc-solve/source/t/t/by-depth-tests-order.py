#!/usr/bin/env python3

import unittest

from FC_Solve import FreecellSolverTestSuite

# TEST:source "$^CURRENT_DIRNAME/../lib/FC_Solve/__init__.py"


class MyTests(unittest.TestCase):
    def test_1(self):
        testname = "test_1"

        fcs = FreecellSolverTestSuite(self)

        # TEST*$input_cmd_line
        fcs.input_cmd_line__test(
            "dto 1",
            ["-to", "0123456789", "-dto", "1,0132456789"]
        )

        # TEST
        fcs.num_by_depth_tests_order_is(testname, 2)

        # TEST
        fcs.by_depth_max_depth_of_depth_idx_is(testname, 0, 1)

    def test_2(self):
        testname = "test_1"

        fcs = FreecellSolverTestSuite(self)

        # TEST*$input_cmd_line
        fcs.input_cmd_line__test(
            "dto 1",
            ["-to", "0123456789", "-dto", "1,0132456789", "-dto", "50,056234"]
        )

        # TEST
        fcs.num_by_depth_tests_order_is(testname, 3)

        # TEST
        fcs.by_depth_max_depth_of_depth_idx_is(testname, 0, 1)

        # TEST
        fcs.by_depth_max_depth_of_depth_idx_is(testname, 1, 50)

    def test_unrecognized_flag(self):
        fcs = FreecellSolverTestSuite(self)

        # TEST*$unrecognized_flag
        fcs.unrecognized_flag__test(unrecognized_flag="-unrecognized")

        fcs = FreecellSolverTestSuite(self)

        # TEST*$unrecognized_flag
        fcs.unrecognized_flag__test(unrecognized_flag="fc-solve")


if __name__ == "__main__":
    # plan(7)
    from pycotap import TAPTestRunner
    suite = unittest.TestLoader().loadTestsFromTestCase(MyTests)
    TAPTestRunner().run(suite)
