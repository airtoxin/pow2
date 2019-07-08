import { useCallback, useEffect, useMemo, useState } from "react";
import { Pow2Service } from "../domains/Pow2Service";
import usePrevious from "react-use/lib/usePrevious";
import { ScoreCalculator } from "../domains/ScoreCalculator";

export const usePow2 = (size: number) => {
  const createInitialNumberTable = useCallback(
    () =>
      [...Array(size)].map((_, i) =>
        [...Array(size)].map((_, j) =>
          i === j && Math.floor(size / 2) === i ? 2 : 0
        )
      ),
    [size]
  );
  const [numberTable, setNumberTable] = useState<number[][]>(
    createInitialNumberTable()
  );
  const prevTable = usePrevious(numberTable);
  const pow2Service = useMemo(() => new Pow2Service(numberTable, 2), [
    numberTable
  ]);
  const [score, setScore] = useState(0);
  const scoreDiff = useMemo(
    () =>
      prevTable ? ScoreCalculator.calculateScore(numberTable, prevTable) : 0,
    [numberTable, prevTable]
  );

  useEffect(() => {
    setScore(score + scoreDiff);
  });

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
