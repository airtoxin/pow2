import React from "react";
import { css } from "emotion";
import { Cell } from "../../components/Cell";

export type Props = {
  numberTable: number[][];
};

export const Board: React.FunctionComponent<Props> = props => {
  return (
    <div
      className={css({
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gridTemplateRows: "1fr 1fr 1fr 1fr",
        gridTemplateAreas: `". . . ." ". . . ." ". . . ." ". . . ."`,
        gridGap: "1em"
      })}
    >
      {props.numberTable.flat().map((n, i) => (
        <Cell key={Math.random()}>{n === 0 ? null : n}</Cell>
      ))}
    </div>
  );
};
