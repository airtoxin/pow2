import React from "react";
import { css } from "emotion";
import { center } from "../classNames/center";

export type Props = {
  className?: string;
};

export const Cell: React.FunctionComponent<Props> = props => (
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
      }),
      props.className
    ].join(" ")}
  >
    {props.children}
  </div>
);
