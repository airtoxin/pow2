import React from "react";
import { css } from "emotion";

export const GameHeader: React.FunctionComponent = props => {
  return (
    <div
      className={css({
        width: "27rem",
        margin: "1rem 0",
        display: "flex",
        justifyContent: "space-between"
      })}
    >
      <div className={headerElementStyle} />
      <div className={headerElementStyle}>next</div>
      <div className={headerElementStyle}>score</div>
    </div>
  );
};

const headerElementStyle = css({
  width: "6rem",
  height: "4rem"
});
