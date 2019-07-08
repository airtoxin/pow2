import "jest";
import { Pow2Service } from "./Pow2Service";

describe("Pow2Service", () => {
  describe("slideLeft", () => {
    it("should slide and fill", () => {
      const randomSampler: any = (samples: any[]) => samples[0];
      const dataset = [
        {
          nextNumber: 64,
          numberTable: [[2, 2, 2], [2, 4, 8], [4, 8, 16]],
          expected: [[4, 2, 64], [2, 4, 8], [4, 8, 16]]
        },
        {
          nextNumber: 64,
          numberTable: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
          expected: [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
        },
        {
          nextNumber: 64,
          numberTable: [[0, 0, 0], [2, 0, 0], [0, 0, 0]],
          expected: [[0, 0, 0], [2, 0, 0], [0, 0, 0]]
        },
        {
          nextNumber: 64,
          numberTable: [[0, 0, 0], [0, 0, 2], [0, 0, 0]],
          expected: [[0, 0, 64], [0, 2, 0], [0, 0, 0]]
        },
        {
          nextNumber: 64,
          numberTable: [[2, 2, 2], [2, 2, 2], [2, 2, 2]],
          expected: [[4, 2, 64], [4, 2, 0], [4, 2, 0]]
        },
        {
          nextNumber: 2,
          numberTable: [
            [2, 4, 8, 2],
            [2, 16, 4, 2],
            [16, 8, 4, 2],
            [2, 16, 8, 2]
          ],
          expected: [[2, 4, 8, 2], [2, 16, 4, 2], [16, 8, 4, 2], [2, 16, 8, 2]]
        }
      ];

      for (const { nextNumber, numberTable, expected } of dataset) {
        expect(
          new Pow2Service(numberTable, nextNumber, randomSampler).slideLeft()
        ).toEqual(expected);
      }
    });
  });
});
