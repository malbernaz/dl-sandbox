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
        <ForecastCard />
        <ForecastCard
          weatherDesc={forecastCardWeatherDesc2}
          dayOfWeek={<>{"Tuesday"}</>}
          iconImage={{
            src: "https://d1otoma47x30pg.cloudfront.net/6362a8b8e1a1d011667bc671/6362a8b8e1a1d011667bc668_Group%201263.png",

            sizes: [
              {
                max: 767,
                size: "90px",
              },
              {
                max: 991,
                size: "11vw",
              },
              {
                max: 10000,
                size: "90px",
              },
            ],
          }}
          temp={<>{"65º"}</>}
          high={<>{"H: 68°"}</>}
          low={<>{"L: 47°"}</>}
        />
        <ForecastCard
          high={forecastCardHigh}
          low={forecastCardLow}
          dayOfWeek={<>{"Wednesday"}</>}
          iconImage={{
            src: "https://d1otoma47x30pg.cloudfront.net/6362a8b8e1a1d011667bc671/6362a8b8e1a1d011667bc667_Group%201287.png",

            sizes: [
              {
                max: 767,
                size: "90px",
              },
              {
                max: 991,
                size: "11vw",
              },
              {
                max: 10000,
                size: "90px",
              },
            ],
          }}
          temp={<>{"72º"}</>}
          weatherDesc={<>{"Partly cloudy"}</>}
        />
        <ForecastCard
          weatherDesc={forecastCardWeatherDesc}
          low={forecastCardLow2}
          high={forecastCardHigh2}
          dayOfWeek={<>{"Thursday"}</>}
          iconImage={{
            src: "https://d1otoma47x30pg.cloudfront.net/6362a8b8e1a1d011667bc671/6362a8b8e1a1d011667bc668_Group%201263.png",

            sizes: [
              {
                max: 767,
                size: "90px",
              },
              {
                max: 991,
                size: "11vw",
              },
              {
                max: 10000,
                size: "90px",
              },
            ],
          }}
          temp={<>{"68º"}</>}
        />
        <ForecastCard
          high={forecastCardHigh3}
          low={forecastCardLow3}
          dayOfWeek={<>{"Friday"}</>}
          iconImage={{
            src: "https://d1otoma47x30pg.cloudfront.net/6362a8b8e1a1d011667bc671/6362a8b8e1a1d011667bc669_Group%201273.png",

            sizes: [
              {
                max: 767,
                size: "90px",
              },
              {
                max: 991,
                size: "11vw",
              },
              {
                max: 10000,
                size: "90px",
              },
            ],
          }}
          temp={<>{"70º"}</>}
          weatherDesc={
            <>
              {"Thunderstorms"}
              <br />
            </>
          }
        />
        <ForecastCard
          high={forecastCardHigh4}
          low={forecastCardLow4}
          dayOfWeek={<>{"Saturday"}</>}
          iconImage={{
            src: "https://d1otoma47x30pg.cloudfront.net/6362a8b8e1a1d011667bc671/6362a8b8e1a1d011667bc667_Group%201287.png",

            sizes: [
              {
                max: 767,
                size: "90px",
              },
              {
                max: 991,
                size: "11vw",
              },
              {
                max: 10000,
                size: "90px",
              },
            ],
          }}
          temp={<>{"68º"}</>}
          weatherDesc={<>{"Partly cloudy"}</>}
        />
        <ForecastCard
          dayOfWeek={<>{"Sunday"}</>}
          iconImage={{
            src: "https://d1otoma47x30pg.cloudfront.net/6362a8b8e1a1d011667bc671/6362a8b8e1a1d011667bc668_Group%201263.png",

            sizes: [
              {
                max: 767,
                size: "90px",
              },
              {
                max: 991,
                size: "11vw",
              },
              {
                max: 10000,
                size: "90px",
              },
            ],
          }}
          temp={<>{"68º"}</>}
          weatherDesc={<>{"Rain"}</>}
          high={<>{"H: 72°"}</>}
          low={<>{"L: 55°"}</>}
        />
      </Block>
    </Component>
  );
}
