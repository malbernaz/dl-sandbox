import React from "react";
import { Block, Image } from "./Builtin";
import { useInteractions } from "./interactions";
import { cx } from "./utils";
import styles from "./CurrentForecast.module.css";

const InteractionsData = JSON.parse(
  '{"events":{},"actionLists":{},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function CurrentForecast({
  as: Component = Block,
  currentTemp = <>63º</>,
  feelsLikeTemp = <>67º</>,
  humidity = <>51%</>,
  precipitation = <>.75"</>,
  aqi = <>70</>,
  sunset = <>6:50pm</>,
}) {
  useInteractions(
    InteractionsData,
    styles,
    "6b29cadb-85e1-c6aa-61dc-296170e735c9"
  );

  return (
    <Component
      data-w-id="6b29cadb-85e1-c6aa-61dc-296170e735c9"
      className={cx(styles, "block")}
      tag="div"
    >
      <Block className={cx(styles, "title")} tag="div">
        {"Current"}
      </Block>
      <Block className={cx(styles, "grid-03")} tag="div">
        <Block className={cx(styles, "card")} tag="div">
          <Block className={cx(styles, "flex")} tag="div">
            <Block className={cx(styles, "current-content")} tag="div">
              <Image
                className={cx(styles, "icon")}
                img={{
                  src: "https://d1otoma47x30pg.cloudfront.net/6362a8b8e1a1d011667bc671/6362a8b8e1a1d011667bc665_Temp.svg",
                }}
                src="https://d1otoma47x30pg.cloudfront.net/6362a8b8e1a1d011667bc671/6362a8b8e1a1d011667bc665_Temp.svg"
                loading="lazy"
                width="auto"
                height="auto"
              />
              <Block className={cx(styles, "label")} tag="div">
                {"Temperature"}
              </Block>
            </Block>
            <Block className={cx(styles, "label-highlight")} tag="div">
              {currentTemp}
            </Block>
          </Block>
        </Block>
        <Block className={cx(styles, "card")} tag="div">
          <Block className={cx(styles, "flex")} tag="div">
            <Block className={cx(styles, "current-content")} tag="div">
              <Image
                className={cx(styles, "icon")}
                img={{
                  src: "https://d1otoma47x30pg.cloudfront.net/6362a8b8e1a1d011667bc671/6362a8b8e1a1d011667bc665_Temp.svg",
                }}
                src="https://d1otoma47x30pg.cloudfront.net/6362a8b8e1a1d011667bc671/6362a8b8e1a1d011667bc665_Temp.svg"
                loading="lazy"
                width="auto"
                height="auto"
              />
              <Block className={cx(styles, "label")} tag="div">
                {"Feels like"}
              </Block>
            </Block>
            <Block className={cx(styles, "label-highlight")} tag="div">
              {feelsLikeTemp}
            </Block>
          </Block>
        </Block>
        <Block className={cx(styles, "card")} tag="div">
          <Block className={cx(styles, "flex")} tag="div">
            <Block className={cx(styles, "current-content")} tag="div">
              <Image
                className={cx(styles, "icon")}
                img={{
                  src: "https://d1otoma47x30pg.cloudfront.net/6362a8b8e1a1d011667bc671/6362a8b8e1a1d011667bc660_humidity.svg",
                }}
                src="https://d1otoma47x30pg.cloudfront.net/6362a8b8e1a1d011667bc671/6362a8b8e1a1d011667bc660_humidity.svg"
                loading="lazy"
                width="auto"
                height="auto"
              />
              <Block className={cx(styles, "label")} tag="div">
                {"Humidity"}
              </Block>
            </Block>
            <Block className={cx(styles, "label-highlight")} tag="div">
              {humidity}
            </Block>
          </Block>
        </Block>
        <Block className={cx(styles, "card")} tag="div">
          <Block className={cx(styles, "flex")} tag="div">
            <Block className={cx(styles, "current-content")} tag="div">
              <Image
                className={cx(styles, "icon")}
                img={{
                  src: "https://d1otoma47x30pg.cloudfront.net/6362a8b8e1a1d011667bc671/6362a8b8e1a1d011667bc661_Precipitation.svg",
                }}
                src="https://d1otoma47x30pg.cloudfront.net/6362a8b8e1a1d011667bc671/6362a8b8e1a1d011667bc661_Precipitation.svg"
                loading="lazy"
                width="auto"
                height="auto"
              />
              <Block className={cx(styles, "label")} tag="div">
                {"Precipitation"}
              </Block>
            </Block>
            <Block className={cx(styles, "label-highlight")} tag="div">
              {precipitation}
            </Block>
          </Block>
        </Block>
        <Block className={cx(styles, "card")} tag="div">
          <Block className={cx(styles, "flex")} tag="div">
            <Block className={cx(styles, "current-content")} tag="div">
              <Image
                className={cx(styles, "icon")}
                img={{
                  src: "https://d1otoma47x30pg.cloudfront.net/6362a8b8e1a1d011667bc671/6362a8b8e1a1d011667bc666_AQI.svg",
                }}
                src="https://d1otoma47x30pg.cloudfront.net/6362a8b8e1a1d011667bc671/6362a8b8e1a1d011667bc666_AQI.svg"
                loading="lazy"
                width="auto"
                height="auto"
              />
              <Block className={cx(styles, "label")} tag="div">
                {"Outdoor AQI"}
              </Block>
            </Block>
            <Block className={cx(styles, "label-highlight")} tag="div">
              {aqi}
            </Block>
          </Block>
        </Block>
        <Block className={cx(styles, "card")} tag="div">
          <Block className={cx(styles, "flex")} tag="div">
            <Block className={cx(styles, "current-content")} tag="div">
              <Image
                className={cx(styles, "icon")}
                img={{
                  src: "https://d1otoma47x30pg.cloudfront.net/6362a8b8e1a1d011667bc671/6362a8b8e1a1d011667bc662_sunset.svg",
                }}
                src="https://d1otoma47x30pg.cloudfront.net/6362a8b8e1a1d011667bc671/6362a8b8e1a1d011667bc662_sunset.svg"
                loading="lazy"
                width="auto"
                height="auto"
              />
              <Block className={cx(styles, "label")} tag="div">
                {"Sunset"}
              </Block>
            </Block>
            <Block className={cx(styles, "label-highlight")} tag="div">
              {sunset}
            </Block>
          </Block>
        </Block>
      </Block>
    </Component>
  );
}
