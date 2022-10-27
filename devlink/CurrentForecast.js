import React from "react";
import { Block, Image } from "./Builtin";
import { cx } from "./utils";
import styles from "./CurrentForecast.module.css";

export function CurrentForecast({
  as: Component = Block,
  currentTemp = <>63º</>,
  feelsLikeTemp = <>67º</>,
  humidity = <>51%</>,
  precipitation = <>.75"</>,
  aqi = <>70</>,
  sunset = <>6:50pm</>,
}) {
  return (
    <Component className={cx(styles, "block")} tag="div">
      <Block className={cx(styles, "title")} tag="div">
        {"Current"}
      </Block>
      <Block className={cx(styles, "grid-03")} tag="div">
        <Block className={cx(styles, "card")} tag="div">
          <Block className={cx(styles, "flex")} tag="div">
            <Block className={cx(styles, "flex")} tag="div">
              <Image
                className={cx(styles, "icon")}
                img={{
                  src: "https://d1otoma47x30pg.cloudfront.net/6359c92cf2be5b638644b943/6359c92cf2be5b638644b97c_Temp.svg",
                }}
                src="https://d1otoma47x30pg.cloudfront.net/6359c92cf2be5b638644b943/6359c92cf2be5b638644b97c_Temp.svg"
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
            <Block className={cx(styles, "flex")} tag="div">
              <Image
                className={cx(styles, "icon")}
                img={{
                  src: "https://d1otoma47x30pg.cloudfront.net/6359c92cf2be5b638644b943/6359c92cf2be5b638644b97c_Temp.svg",
                }}
                src="https://d1otoma47x30pg.cloudfront.net/6359c92cf2be5b638644b943/6359c92cf2be5b638644b97c_Temp.svg"
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
            <Block className={cx(styles, "flex")} tag="div">
              <Image
                className={cx(styles, "icon")}
                img={{
                  src: "https://d1otoma47x30pg.cloudfront.net/6359c92cf2be5b638644b943/6359c92cf2be5b638644b977_humidity.svg",
                }}
                src="https://d1otoma47x30pg.cloudfront.net/6359c92cf2be5b638644b943/6359c92cf2be5b638644b977_humidity.svg"
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
            <Block className={cx(styles, "flex")} tag="div">
              <Image
                className={cx(styles, "icon")}
                img={{
                  src: "https://d1otoma47x30pg.cloudfront.net/6359c92cf2be5b638644b943/6359c92cf2be5b638644b978_Precipitation.svg",
                }}
                src="https://d1otoma47x30pg.cloudfront.net/6359c92cf2be5b638644b943/6359c92cf2be5b638644b978_Precipitation.svg"
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
            <Block className={cx(styles, "flex")} tag="div">
              <Image
                className={cx(styles, "icon")}
                img={{
                  src: "https://d1otoma47x30pg.cloudfront.net/6359c92cf2be5b638644b943/6359c92cf2be5b638644b97d_AQI.svg",
                }}
                src="https://d1otoma47x30pg.cloudfront.net/6359c92cf2be5b638644b943/6359c92cf2be5b638644b97d_AQI.svg"
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
            <Block className={cx(styles, "flex")} tag="div">
              <Image
                className={cx(styles, "icon")}
                img={{
                  src: "https://d1otoma47x30pg.cloudfront.net/6359c92cf2be5b638644b943/6359c92cf2be5b638644b979_sunset.svg",
                }}
                src="https://d1otoma47x30pg.cloudfront.net/6359c92cf2be5b638644b943/6359c92cf2be5b638644b979_sunset.svg"
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
