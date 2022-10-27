import React from "react";
import { Block } from "./Builtin";
import { cx } from "./utils";
import styles from "./SevenDayForecast.module.css";

export function SevenDayForecast({ as: Component = Block, cards }) {
  return (
    <Component className={cx(styles, "block")} tag="div">
      <Block className={cx(styles, "title")} tag="div">
        {"7-Day Forecast"}
      </Block>
      <Block className={cx(styles, "grid-06")} tag="div">
        {cards}
      </Block>
    </Component>
  );
}
