import React from "react";
import { Block, Link, Image } from "./Builtin";
import { cx } from "./utils";
import styles from "./SavedLocations.module.css";

export function SavedLocations({ as: Component = Block }) {
  return (
    <Component className={cx(styles, "block")} tag="div">
      <Block className={cx(styles, "title")} tag="div">
        {"Saved Locations"}
      </Block>
      <Block className={cx(styles, "list")} tag="div">
        <Link
          className={cx(styles, "card")}
          block="inline"
          button={false}
          link={{
            mode: "external",
            url: "#",
          }}
        >
          <Block className={cx(styles, "flex")} tag="div">
            <Block tag="div">
              <Block className={cx(styles, "label-highlight")} tag="div">
                {"Atlanta - Mostly Cloudy"}
              </Block>
              <Block className={cx(styles, "label")} tag="div">
                {"2:17pm"}
              </Block>
            </Block>
            <Block className={cx(styles, "flex")} tag="div">
              <Image
                className={cx(styles, "image-small")}
                img={{
                  src: "https://d1otoma47x30pg.cloudfront.net/6362a8b8e1a1d011667bc671/6362a8b8e1a1d011667bc667_Group%201287.png",

                  sizes: [
                    {
                      max: 479,
                      size: "12vw",
                    },
                    {
                      max: 10000,
                      size: "50px",
                    },
                  ],
                }}
                src="https://d1otoma47x30pg.cloudfront.net/6362a8b8e1a1d011667bc671/6362a8b8e1a1d011667bc667_Group%201287.png"
                loading="lazy"
                width="auto"
                height="auto"
              />
              <Block className={cx(styles, "temp-small")} tag="div">
                {"74º"}
              </Block>
            </Block>
          </Block>
        </Link>
        <Link
          className={cx(styles, "card")}
          block="inline"
          button={false}
          link={{
            mode: "external",
            url: "#",
          }}
        >
          <Block className={cx(styles, "flex")} tag="div">
            <Block tag="div">
              <Block className={cx(styles, "label-highlight")} tag="div">
                {"New York - Drizzle"}
              </Block>
              <Block className={cx(styles, "label")} tag="div">
                {"2:17pm"}
              </Block>
            </Block>
            <Block className={cx(styles, "flex")} tag="div">
              <Image
                className={cx(styles, "image-small")}
                img={{
                  src: "https://d1otoma47x30pg.cloudfront.net/6362a8b8e1a1d011667bc671/6362a8b8e1a1d011667bc668_Group%201263.png",

                  sizes: [
                    {
                      max: 479,
                      size: "12vw",
                    },
                    {
                      max: 10000,
                      size: "50px",
                    },
                  ],
                }}
                src="https://d1otoma47x30pg.cloudfront.net/6362a8b8e1a1d011667bc671/6362a8b8e1a1d011667bc668_Group%201263.png"
                loading="lazy"
                width="auto"
                height="auto"
              />
              <Block className={cx(styles, "temp-small")} tag="div">
                {"65º"}
              </Block>
            </Block>
          </Block>
        </Link>
        <Link
          className={cx(styles, "card")}
          block="inline"
          button={false}
          link={{
            mode: "external",
            url: "#",
          }}
        >
          <Block className={cx(styles, "flex")} tag="div">
            <Block tag="div">
              <Block className={cx(styles, "label-highlight")} tag="div">
                {"Amsterdam - Severe storms"}
              </Block>
              <Block className={cx(styles, "label")} tag="div">
                {"8:17pm"}
              </Block>
            </Block>
            <Block className={cx(styles, "flex")} tag="div">
              <Image
                className={cx(styles, "image-small")}
                img={{
                  src: "https://d1otoma47x30pg.cloudfront.net/6362a8b8e1a1d011667bc671/6362a8b8e1a1d011667bc669_Group%201273.png",

                  sizes: [
                    {
                      max: 479,
                      size: "10vw",
                    },
                    {
                      max: 10000,
                      size: "50px",
                    },
                  ],
                }}
                src="https://d1otoma47x30pg.cloudfront.net/6362a8b8e1a1d011667bc671/6362a8b8e1a1d011667bc669_Group%201273.png"
                loading="lazy"
                width="auto"
                height="auto"
              />
              <Block className={cx(styles, "temp-small")} tag="div">
                {"80º"}
              </Block>
            </Block>
          </Block>
        </Link>
      </Block>
    </Component>
  );
}
