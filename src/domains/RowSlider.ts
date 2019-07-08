import { slidingWindow } from "../utils/slidingWindow";

export class RowSlider {
  constructor(private row: number[]) {}

  slideRow = (): number[] => {
    let slided = false;
    const resultRow: number[] = [];

    const pairs = slidingWindow(2)(this.row);
    for (const [n1, n2] of pairs) {
      if (slided) {
        resultRow.push(n2);
        continue;
      }

      if (n1 === 0 || n1 === n2) {
        slided = true;
        resultRow.push(n1 + n2);
      } else {
        resultRow.push(n1);
      }
    }

    // push last element
    if (slided) {
      resultRow.push(0);
    } else {
      resultRow.push(this.row[this.row.length - 1]);
    }

    return resultRow;
  };
}
