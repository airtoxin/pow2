import React from "react";
import { css } from "emotion";
import { Cell } from "../../components/Cell";

export const Board: React.FunctionComponent = () => {
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
      <Cell>2</Cell>
      <Cell></Cell>
      <Cell>2</Cell>
      <Cell></Cell>
      <Cell>2</Cell>
      <Cell></Cell>
      <Cell>2</Cell>
      <Cell></Cell>
      <Cell>2</Cell>
      <Cell></Cell>
      <Cell>2</Cell>
      <Cell></Cell>
      <Cell>2</Cell>
      <Cell></Cell>
      <Cell>2</Cell>
      <Cell></Cell>
    </div>
  );
};
