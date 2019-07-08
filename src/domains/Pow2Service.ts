import { RowSlider } from "./RowSlider";
import { isEqual, unzip, sample, reverse } from "lodash/fp";

const transpose = unzip;

export class Pow2Service {
  private tNumberTable: number[][];
  constructor(
    private numberTable: number[][],
    private nextNumber: number,
    private randomSampler: typeof sample = sample
  ) {
    this.tNumberTable = transpose(numberTable);
  }

  private new = (numberTable: number[][]): Pow2Service =>
    new Pow2Service(numberTable, this.nextNumber, this.randomSampler);

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
    this.new(this.numberTable.map(reverse))
      .slideLeft()
      .map(reverse);

  slideUp = (): number[][] =>
    transpose(this.new(this.tNumberTable).slideLeft());

  slideDown = (): number[][] =>
    transpose(this.new(this.tNumberTable).slideRight());

  isGameOver = (): boolean =>
    isEqual(this.numberTable, this.slideLeft()) &&
    isEqual(this.numberTable, this.slideRight()) &&
    isEqual(this.numberTable, this.slideUp()) &&
    isEqual(this.numberTable, this.slideDown());
}
