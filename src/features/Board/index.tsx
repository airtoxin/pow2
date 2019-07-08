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
        gridTemplateColumns: Array(props.numberTable.length)
          .fill("1fr")
          .join(" "),
        gridTemplateRows: Array(props.numberTable.length)
          .fill("1fr")
          .join(" "),
        gridTemplateAreas: Array(props.numberTable.length)
          .fill(
            `"${Array(props.numberTable.length)
              .fill(".")
              .join(" ")}"`
          )
          .join(" "),
        gridGap: "1em"
      })}
    >
      {props.numberTable.flat().map((n, i) => (
        <Cell key={Math.random()}>{n === 0 ? null : n}</Cell>
      ))}
    </div>
  );
};
