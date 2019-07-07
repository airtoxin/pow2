import React from "react";
import { css } from "emotion";
import { center } from "../classNames/center";

export const Cell: React.FunctionComponent = props => (
  <div
    className={[
      center,
      css({
        width: "6rem",
        height: "8rem",
        backgroundColor: "azure",
        borderRadius: "10%",
        boxShadow: "0.2rem 0.2rem 0.2rem",
        fontSize: "3rem"
      })
    ].join(" ")}
  >
    {props.children}
  </div>
);
