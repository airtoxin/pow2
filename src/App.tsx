import React from "react";
import { css } from "emotion";
import { Board } from "./features/Board";
import { GameHeader } from "./components/GameHeader";
import useKey from "react-use/lib/useKey";
import { usePow2 } from "./hooks/usePow2";

const App: React.FC = () => {
  const {
    numberTable,
    moveLeft,
    moveRight,
    moveUp,
    moveDown,
    isGameOver
  } = usePow2();
  useKey("ArrowLeft", moveLeft, {}, [moveLeft]);
  useKey("ArrowRight", moveRight, {}, [moveRight]);
  useKey("ArrowUp", moveUp, {}, [moveUp]);
  useKey("ArrowDown", moveDown, {}, [moveDown]);

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
      <GameHeader />
      {isGameOver && "Game Over"}
      <Board numberTable={numberTable} />
    </div>
  );
};

export default App;
