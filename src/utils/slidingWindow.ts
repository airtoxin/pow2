export const slidingWindow = (size: number) => <T>(ts: T[]): T[][] => {
  const result: T[][] = [];

  for (let i = 0; i < ts.length - size + 1; i++) {
    result.push(ts.slice(i, i + size));
  }

  return result;
};
