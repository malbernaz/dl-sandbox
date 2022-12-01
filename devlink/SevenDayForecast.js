import React from "react";
import { Block } from "./Builtin";
import { ForecastCard } from "./ForecastCard";
import { cx } from "./utils";
import styles from "./SevenDayForecast.module.css";

export function SevenDayForecast({
  as: Component = Block,
  forecastCardHigh4 = <>H: 72°</>,
  forecastCardWeatherDesc2 = <>Rain</>,
  forecastCardHigh = <>H: 72°</>,
  forecastCardLow = <>L: 55°</>,
  forecastCardWeatherDesc = <>Partly cloudy</>,
  forecastCardLow2 = <>L: 55°</>,
  forecastCardHigh2 = <>H: 72°</>,
  forecastCardHigh3 = <>H: 72°</>,
  forecastCardLow3 = <>L: 55°</>,
  forecastCardLow4 = <>L: 55°</>,
}) {
  return (
    <Component className={cx(styles, "block")} tag="div">
      <Block className={cx(styles, "title")} tag="div">
        {"7-Day Forecast"}
      </Block>
      <Block className={cx(styles, "grid-06")} tag="div">
        <ForecastCard weatherDesc={<>{"Partly cloudy"}</>} />
        <ForecastCard weatherDesc={<>{"Partly cloudy"}</>} />
        <ForecastCard weatherDesc={<>{"Partly cloudy"}</>} />
        <ForecastCard weatherDesc={<>{"Partly cloudy"}</>} />
        <ForecastCard weatherDesc={<>{"Partly cloudy"}</>} />
        <ForecastCard weatherDesc={<>{"Partly cloudy"}</>} />
        <ForecastCard weatherDesc={<>{"Partly cloudy"}</>} />
      </Block>
    </Component>
  );
}
