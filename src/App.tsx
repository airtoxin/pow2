import React from "react";
import { css } from "emotion";
import { Board } from "./features/Board";
import { GameHeader } from "./components/GameHeader";

const App: React.FC = () => {
  return (
    <div
      className={css({
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
      <Board
        numbers={[[2, 4, 0, 0], [4, 0, 0, 0], [0, 0, 0, 0], [2, 0, 2, 0]]}
      />
    </div>
  );
};

export default App;
