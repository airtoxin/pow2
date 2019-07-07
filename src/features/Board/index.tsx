import React from "react";
import { css } from "emotion";
import { Cell } from "../../components/Cell";

export type Props = {
  numbers: number[][];
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
      {props.numbers.flat().map((n, i) => (
        <Cell key={i}>{n === 0 ? null : n}</Cell>
      ))}
    </div>
  );
};
