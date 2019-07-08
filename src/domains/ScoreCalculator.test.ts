import "jest";
import { ScoreCalculator } from "./ScoreCalculator";

describe("ScoreCalculator", () => {
  describe("calculateScore", () => {
    it("should calculate score", () => {
      const dataset = [
        /**
         * A = 2,2,4,4
         * B = 4,8
         * B-A = 8 -> (4,4)
         * B' = 4,4,4
         * B'-A = 4 -> (2,2)
         * B'' = 2,2,4,4
         * B''-A = none;
         * (2,2)(4,4)
         */
        {
          prevTable: [[2, 2], [4, 4]],
          numberTable: [[4, 0], [8, 0]],
          expected: 4 + 8
        },
        /**
         * A = 2,2,2,4,4,4,8,8,8
         * B = 2,4,4,8,8,16
         * B-A = 16 -> (8,8)
         * B' = 2,4,4,8,8,8,8
         * B'-A = 8 -> (4,4)
         * B'' = 2,4,4,4,4,8,8,8
         * B''-A = 4 -> (2,2)
         * B''' = 2,2,2,4,4,4,8,8,8
         * B'''-A = none
         * (2,2)(4,4)(8,8)
         */
        {
          prevTable: [[2, 2, 2], [4, 4, 4], [8, 8, 8]],
          numberTable: [[4, 2, 0], [8, 4, 0], [16, 8, 0]],
          expected: 4 + 8 + 16
        },
        /**
         * A = 2,2,2,2,2,2,4,4,4
         * B = 2,2,4,4,4,8
         * B-A = 8 -> (4,4)
         * B' = 2,2,4,4,4,4,4
         * B'-A = 4,4 -> (2,2)(2,2)
         * B'' = 2,2,2,2,2,2,4,4,4
         * B''-A = none
         * (2,2)(2,2)(4,4)
         */
        {
          prevTable: [[2, 2, 2], [2, 2, 2], [4, 4, 4]],
          numberTable: [[4, 2, 0], [4, 2, 0], [8, 4, 0]],
          expected: 4 + 4 + 8
        }
      ];

      for (const { prevTable, numberTable, expected } of dataset) {
        expect(ScoreCalculator.calculateScore(numberTable, prevTable)).toEqual(
          expected
        );
      }
    });
  });
});
