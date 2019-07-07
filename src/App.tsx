import React from "react";
import { css } from "emotion";

const App: React.FC = () => {
  return (
    <div className={css({
      backgroundColor: "blanchedalmond",
      textAlign: "center",
      color: "darkblue",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    })}>
      <h1>Pow2</h1>
    </div>
  );
};

export default App;
