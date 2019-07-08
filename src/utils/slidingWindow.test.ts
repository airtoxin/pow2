import "jest";
import { slidingWindow } from "./slidingWindow";

describe("slidingWindow", () => {
  it("should return pair array when size equals to 2", () => {
    const data = [1, 2, 3, 4, 5];
    const expected = [[1, 2], [2, 3], [3, 4], [4, 5]];

    expect(slidingWindow(2)(data)).toEqual(expected);
  });

  it("should return triplet array when size equals to 3", () => {
    const data = [1, 2, 3, 4, 5];
    const expected = [[1, 2, 3], [2, 3, 4], [3, 4, 5]];

    expect(slidingWindow(3)(data)).toEqual(expected);
  });

  it("should return empty array when size is larger than array length", () => {
    const data = [1, 2, 3, 4, 5];
    const expected: number[][] = [];

    expect(slidingWindow(10)(data)).toEqual(expected);
  });
});
