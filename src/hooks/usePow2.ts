import { useCallback, useState } from "react";
import { Pow2Service } from "../domains/Pow2Service";

export const usePow2 = () => {
  const [numberTable, setNumberTable] = useState([
    [2, 4, 8, 2],
    [4, 4, 2, 0],
    [4, 2, 2, 0],
    [2, 0, 2, 0]
  ]);

  const moveLeft = useCallback(() => {
    setNumberTable(new Pow2Service(numberTable, 2).slideLeft());
  }, [numberTable, setNumberTable]);

  const moveRight = useCallback(() => {
    setNumberTable(new Pow2Service(numberTable, 2).slideRight());
  }, [numberTable, setNumberTable]);

  const moveUp = useCallback(() => {
    setNumberTable(new Pow2Service(numberTable, 2).slideUp());
  }, [numberTable, setNumberTable]);

  const moveDown = useCallback(() => {
    setNumberTable(new Pow2Service(numberTable, 2).slideDown());
  }, [numberTable, setNumberTable]);

  return {
    numberTable,
    moveLeft,
    moveRight,
    moveUp,
    moveDown
  };
};
