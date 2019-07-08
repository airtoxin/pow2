import { useCallback, useEffect, useMemo, useState } from "react";
import { Pow2Service } from "../domains/Pow2Service";
import usePrevious from "react-use/lib/usePrevious";
import { ScoreCalculator } from "../domains/ScoreCalculator";
import { pullAt } from "lodash/fp";

const NEXT_NUMBER = 2;

export const usePow2 = (size: number) => {
  const createInitialNumberTable = useCallback(
    () =>
      [...Array(size)].map((_, i) =>
        [...Array(size)].map((_, j) =>
          i === j && Math.floor(size / 2) === i ? NEXT_NUMBER : 0
        )
      ),
    [size]
  );
  const [numberTable, setNumberTable] = useState<number[][]>(
    createInitialNumberTable()
  );
  const prevTable = usePrevious(numberTable);
  const pow2Service = useMemo(() => new Pow2Service(numberTable, NEXT_NUMBER), [
    numberTable
  ]);
  const [score, setScore] = useState(0);
  const [scoreDiff, setScoreDiff] = useState(0);
  useEffect(() => {
    const sd = prevTable
      ? ScoreCalculator.calculateScore(
          pullAt(numberTable.flat().indexOf(NEXT_NUMBER), numberTable.flat()),
          prevTable.flat()
        )
      : 0;
    setScoreDiff(sd);
    setScore(score + sd);
    // eslint-disable-next-line
  }, [numberTable]);

  const moveLeft = useCallback(() => {
    setNumberTable(pow2Service.slideLeft());
  }, [pow2Service]);

  const moveRight = useCallback(() => {
    setNumberTable(pow2Service.slideRight());
  }, [pow2Service]);

  const moveUp = useCallback(() => {
    setNumberTable(pow2Service.slideUp());
  }, [pow2Service]);

  const moveDown = useCallback(() => {
    setNumberTable(pow2Service.slideDown());
  }, [pow2Service]);

  const isGameOver = useMemo(() => pow2Service.isGameOver(), [pow2Service]);

  const reset = useCallback(() => {
    setNumberTable(createInitialNumberTable());
    setScore(0);
  }, [createInitialNumberTable]);

  return {
    numberTable,
    moveLeft,
    moveRight,
    moveUp,
    moveDown,
    isGameOver,
    reset,
    score,
    scoreDiff
  };
};
