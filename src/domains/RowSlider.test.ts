import "jest";
import { RowSlider } from "./RowSlider";

describe("RowSlider", () => {
  describe("slideRow", () => {
    it("should not slide", () => {
      const dataset = [
        [2, 4, 8, 16],
        [2, 8, 2, 4],
        [2, 4, 16, 8],
        [16, 8, 4, 2]
      ];

      for (const data of dataset) {
        expect(new RowSlider(data).slideRow()).toEqual(data);
      }
    });

    it("should slide row with merging same number", () => {
      const dataset = [
        {
          data: [2, 2, 8, 4],
          expected: [4, 8, 4, 0]
        },
        {
          data: [0, 2, 4, 8],
          expected: [2, 4, 8, 0]
        },
        {
          data: [2, 0, 4, 8],
          expected: [2, 4, 8, 0]
        },
        {
          data: [0, 0, 0, 2],
          expected: [0, 0, 2, 0]
        },
        {
          data: [2, 2, 2, 2],
          expected: [4, 2, 2, 0]
        }
      ];

      for (const { data, expected } of dataset) {
        expect(new RowSlider(data).slideRow()).toEqual(expected);
      }
    });
  });
});
