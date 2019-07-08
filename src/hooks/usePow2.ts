import { useCallback, useMemo, useState } from "react";
import { Pow2Service } from "../domains/Pow2Service";

export const usePow2 = (size: number) => {
  const [numberTable, setNumberTable] = useState<number[][]>(
    [...Array(size)].map((_, i) =>
      [...Array(size)].map((_, j) =>
        i === j && Math.floor(size / 2) === i ? 2 : 0
      )
    )
  );
  const pow2Service = useMemo(() => new Pow2Service(numberTable, 2), [
    numberTable
  ]);

  const moveLeft = useCallback(() => {
    setNumberTable(pow2Service.slideLeft());
  }, [pow2Service, setNumberTable]);

  const moveRight = useCallback(() => {
    setNumberTable(pow2Service.slideRight());
  }, [pow2Service, setNumberTable]);

  const moveUp = useCallback(() => {
    setNumberTable(pow2Service.slideUp());
  }, [pow2Service, setNumberTable]);

  const moveDown = useCallback(() => {
    setNumberTable(pow2Service.slideDown());
  }, [pow2Service, setNumberTable]);

  const isGameOver = useMemo(() => pow2Service.isGameOver(), [pow2Service]);

  return {
    numberTable,
    moveLeft,
    moveRight,
    moveUp,
    moveDown,
    isGameOver
  };
};
