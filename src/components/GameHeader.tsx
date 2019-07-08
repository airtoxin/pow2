import React from "react";
import { css } from "emotion";
import { Cell } from "./Cell";

export type Props = {
  nextNumber: number;
  score: number;
  reset: () => void;
};

export const GameHeader: React.FunctionComponent<Props> = props => {
  return (
    <div
      className={css({
        width: "27rem",
        margin: "1rem 0",
        display: "flex",
        justifyContent: "space-between"
      })}
    >
      <button className={headerElementStyle} onClick={props.reset}>
        Reset
      </button>
      <div className={headerElementStyle}>
        <div>NEXT</div>
        <Cell
          className={css({
            width: "3rem !important",
            height: "4rem !important",
            fontSize: "1.5rem !important"
          })}
        >
          {props.nextNumber}
        </Cell>
      </div>
      <div className={headerElementStyle}>
        <div>SCORE</div>
        <div>{props.score}</div>
      </div>
    </div>
  );
};

const headerElementStyle = css({
  width: "6rem",
  height: "5rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
});
