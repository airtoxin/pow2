import { RowSlider } from "./RowSlider";
import { isEqual, unzip, sample, reverse } from "lodash";

const transpose = unzip;

export class Pow2Service {
  constructor(
    private numberTable: number[][],
    private nextNumber: number,
    private randomSampler: typeof sample = sample
  ) {}

  slideLeft = (): number[][] => {
    const slidedTable = this.numberTable.map(row =>
      new RowSlider(row).slideRow()
    );
    const isSlided = !isEqual(this.numberTable, slidedTable);

    if (!isSlided) return slidedTable;

    let tNumberTable = transpose(slidedTable);
    const lastCol = tNumberTable[tNumberTable.length - 1];
    const zeroIndices = [];
    for (let i = 0; i < lastCol.length; i++) {
      if (lastCol[i] === 0) zeroIndices.push(i);
    }
    lastCol[this.randomSampler(zeroIndices) as number] = this.nextNumber;

    tNumberTable[tNumberTable.length - 1] = lastCol;

    return transpose(tNumberTable);
  };

  slideRight = (): number[][] =>
    new Pow2Service(
      this.numberTable.map(reverse),
      this.nextNumber,
      this.randomSampler
    )
      .slideLeft()
      .map(reverse);

  slideUp = (): number[][] =>
    transpose(
      new Pow2Service(
        transpose(this.numberTable),
        this.nextNumber,
        this.randomSampler
      ).slideLeft()
    );

  slideDown = (): number[][] =>
    transpose(
      new Pow2Service(
        transpose(this.numberTable),
        this.nextNumber,
        this.randomSampler
      ).slideRight()
    );
}
