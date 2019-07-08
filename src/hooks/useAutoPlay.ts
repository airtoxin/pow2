import { usePow2 } from "./usePow2";
import { useEffect, useRef } from "react";
import usePrevious from "react-use/lib/usePrevious";
import { isEqual } from "lodash/fp";

export const useAutoPlay = (
  pow2: ReturnType<typeof usePow2>,
  speed: number
) => {
  const prevMove = useRef<null | "left" | "right" | "up" | "down">(null);
  const prevTable = usePrevious(pow2.numberTable);

  useEffect(() => {
    const id = setInterval(() => {
      if (pow2.isGameOver) {
        clearInterval(id);
      } else if (
        prevMove.current === "left" &&
        isEqual(pow2.numberTable, prevTable)
      ) {
        pow2.moveDown();
        prevMove.current = "down";
      } else {
        switch (prevMove.current) {
          case null: {
            pow2.moveUp();
            prevMove.current = "up";
            break;
          }
          case "up": {
            pow2.moveLeft();
            prevMove.current = "left";
            break;
          }
          case "left": {
            pow2.moveUp();
            prevMove.current = "up";
            break;
          }
          case "down": {
            pow2.moveLeft();
            prevMove.current = "left";
            break;
          }
          case "right": {
            pow2.moveUp();
            prevMove.current = "up";
            break;
          }
        }
      }
    }, speed);

    return () => clearInterval(id);
  }, [pow2, prevTable, speed]);
};
