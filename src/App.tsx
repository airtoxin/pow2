import React, { useEffect } from "react";
import { css } from "emotion";
import { Board } from "./features/Board";
import { GameHeader } from "./components/GameHeader";
import useKey from "react-use/lib/useKey";
import { usePow2 } from "./hooks/usePow2";
import { useAutoPlay } from "./hooks/useAutoPlay";

const App: React.FC = () => {
  const pow2 = usePow2(4);
  const {
    numberTable,
    moveLeft,
    moveRight,
    moveUp,
    moveDown,
    isGameOver
  } = pow2;
  useKey("ArrowLeft", moveLeft, {}, [moveLeft]);
  useKey("ArrowRight", moveRight, {}, [moveRight]);
  useKey("ArrowUp", moveUp, {}, [moveUp]);
  useKey("ArrowDown", moveDown, {}, [moveDown]);

  useAutoPlay(pow2, 5);

  return (
    <div
      className={css({
        userSelect: "none",
        backgroundColor: "blanchedalmond",
        textAlign: "center",
        color: "darkblue",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      })}
    >
      <h1>Pow2</h1>
      <GameHeader nextNumber={2} />
      {isGameOver && "Game Over"}
      <Board numberTable={numberTable} />
    </div>
  );
};

export default App;
