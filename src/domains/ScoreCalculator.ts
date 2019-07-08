const difference = <T>(a1: T[], a2: T[]): T[] => {
  let result = [...a1];

  for (const n of a2) {
    const idx = result.indexOf(n);
    if (idx === -1) continue;

    result.splice(idx, 1);
  }

  return result;
};

export class ScoreCalculator {
  static calculateScore = (
    numberTable: number[][],
    prevTable: number[][]
  ): number => {
    let target = numberTable.flat().filter(n => n !== 0);
    const prev = prevTable.flat();
    let score = 0;

    let cnt = 0;
    while (1) {
      cnt++;
      if (cnt > 100) throw new Error("Infinity loop");

      const diffs = difference(target, prev);
      if (diffs.length === 0) break;

      for (const n of diffs) {
        score += n;
        target.splice(target.indexOf(n), 1, n / 2, n / 2);
      }
    }
    return score;
  };
}
