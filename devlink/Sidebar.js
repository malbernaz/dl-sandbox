import React from "react";
import {
  NavbarWrapper,
  Block,
  Image,
  NavbarBrand,
  NavbarMenu,
  Link,
  NavbarButton,
} from "./Builtin";
import { cx } from "./utils";
import styles from "./Sidebar.module.css";

export function Sidebar({ as: Component = NavbarWrapper }) {
  return (
    <Component
      className={cx(styles, "sidebar-wrapper")}
      navbar={{
        animation: "over-left",
        collapse: "medium",
        docHeight: true,
        duration: 400,
        easing: "ease",
        easing2: "ease",
        noScroll: false,
        type: "wrapper",
      }}
      tag="div"
    >
      <Block className={cx(styles, "brand-bar")} tag="div">
        <Block className={cx(styles, "brand-container")} tag="div">
          <Image
            className={cx(styles, "icon")}
            img={{
              src: "https://d1otoma47x30pg.cloudfront.net/635ab486b2de12c30f76638f/635ab486b2de12c30f7663bf_Logo.svg",
            }}
            src="https://d1otoma47x30pg.cloudfront.net/635ab486b2de12c30f76638f/635ab486b2de12c30f7663bf_Logo.svg"
            loading="lazy"
            width="auto"
            height="auto"
          />
          <NavbarBrand
            className={cx(styles, "logo-wrapper")}
            navbar={{
              type: "brand",
            }}
            link={{
              mode: "external",
            }}
            href="#"
          >
            <Block className={cx(styles, "titlel")} tag="div">
              {"WeatherApp"}
            </Block>
          </NavbarBrand>
          <Block className={cx(styles, "sidebar-logo-icon-wrapper")} tag="div">
            <Image
              img={{
                src: "https://d1otoma47x30pg.cloudfront.net/635ab486b2de12c30f76638f/635ab486b2de12c30f7663a9_sidebar-icon-dashboardly-webflow-template.svg",
              }}
              src="https://d1otoma47x30pg.cloudfront.net/635ab486b2de12c30f76638f/635ab486b2de12c30f7663a9_sidebar-icon-dashboardly-webflow-template.svg"
              loading="eager"
              width="auto"
              height="auto"
            />
          </Block>
        </Block>
        <Block className={cx(styles, "sidebar-links")} tag="div">
          <NavbarMenu
            className={cx(styles, "sidebar-nav-menu")}
            navbar={{
              type: "menu",
            }}
            tag="nav"
            role="navigation"
          >
            <Block className={cx(styles, "sidebar-menu-wrapper")} tag="div">
              <Block className={cx(styles, "sidebar-menu-content")} tag="div">
                <Link
                  className={cx(styles, "nav-link-current")}
                  block="inline"
                  button={false}
                  link={{
                    mode: "external",
                    url: "#",
                  }}
                >
                  <Image
                    className={cx(styles, "icon")}
                    img={{
                      src: "https://d1otoma47x30pg.cloudfront.net/635ab486b2de12c30f76638f/635ab486b2de12c30f7663b6_home-icon.svg",
                    }}
                    src="https://d1otoma47x30pg.cloudfront.net/635ab486b2de12c30f76638f/635ab486b2de12c30f7663b6_home-icon.svg"
                    loading="lazy"
                    width="auto"
                    height="auto"
                  />
                  <Block tag="div">{"Dashboard"}</Block>
                </Link>
                <Link
                  className={cx(styles, "nav-link")}
                  block="inline"
                  button={false}
                  link={{
                    mode: "external",
                    url: "#",
                  }}
                >
                  <Image
                    className={cx(styles, "icon")}
                    img={{
                      src: "https://d1otoma47x30pg.cloudfront.net/635ab486b2de12c30f76638f/635ab486b2de12c30f7663b5_Like-icon.svg",
                    }}
                    src="https://d1otoma47x30pg.cloudfront.net/635ab486b2de12c30f76638f/635ab486b2de12c30f7663b5_Like-icon.svg"
                    loading="lazy"
                    width="auto"
                    height="auto"
                  />
                  <Block tag="div">{"Favorites"}</Block>
                </Link>
                <Link
                  className={cx(styles, "nav-link")}
                  block="inline"
                  button={false}
                  link={{
                    mode: "external",
                    url: "#",
                  }}
                >
                  <Image
                    className={cx(styles, "icon")}
                    img={{
                      src: "https://d1otoma47x30pg.cloudfront.net/635ab486b2de12c30f76638f/635ab486b2de12c30f7663ba_reporting-icon.svg",
                    }}
                    src="https://d1otoma47x30pg.cloudfront.net/635ab486b2de12c30f76638f/635ab486b2de12c30f7663ba_reporting-icon.svg"
                    loading="lazy"
                    width="auto"
                    height="auto"
                  />
                  <Block tag="div">{"Reporting"}</Block>
                </Link>
                <Link
                  className={cx(styles, "nav-link")}
                  block="inline"
                  button={false}
                  link={{
                    mode: "external",
                    url: "#",
                  }}
                >
                  <Image
                    className={cx(styles, "icon")}
                    img={{
                      src: "https://d1otoma47x30pg.cloudfront.net/635ab486b2de12c30f76638f/635ab486b2de12c30f7663b9_map-icon.svg",
                    }}
                    src="https://d1otoma47x30pg.cloudfront.net/635ab486b2de12c30f76638f/635ab486b2de12c30f7663b9_map-icon.svg"
                    loading="lazy"
                    width="auto"
                    height="auto"
                  />
                  <Block tag="div">{"Weather map"}</Block>
                </Link>
                <Link
                  className={cx(styles, "nav-link")}
                  block="inline"
                  button={false}
                  link={{
                    mode: "external",
                    url: "#",
                  }}
                >
                  <Image
                    className={cx(styles, "icon")}
                    img={{
                      src: "https://d1otoma47x30pg.cloudfront.net/635ab486b2de12c30f76638f/635ab486b2de12c30f7663b8_Calendar-icon.svg",
                    }}
                    src="https://d1otoma47x30pg.cloudfront.net/635ab486b2de12c30f76638f/635ab486b2de12c30f7663b8_Calendar-icon.svg"
                    loading="lazy"
                    width="auto"
                    height="auto"
                  />
                  <Block tag="div">{"Calendar"}</Block>
                </Link>
                <Link
                  className={cx(styles, "nav-link")}
                  block="inline"
                  button={false}
                  link={{
                    mode: "external",
                    url: "#",
                  }}
                >
                  <Image
                    className={cx(styles, "icon")}
                    img={{
                      src: "https://d1otoma47x30pg.cloudfront.net/635ab486b2de12c30f76638f/635ab486b2de12c30f7663b7_settings-icon.svg",
                    }}
                    src="https://d1otoma47x30pg.cloudfront.net/635ab486b2de12c30f76638f/635ab486b2de12c30f7663b7_settings-icon.svg"
                    loading="lazy"
                    width="auto"
                    height="auto"
                  />
                  <Block tag="div">{"Settings"}</Block>
                </Link>
              </Block>
            </Block>
            <Block
              className={cx(styles, "sidebar-menu-collapsed-overlay")}
              tag="div"
            />
          </NavbarMenu>
          <Block className={cx(styles, "collapse-icon-container")} tag="div">
            <Block className={cx(styles, "collapse-icon-wrapper")} tag="div">
              <Image
                className={cx(styles, "arrow")}
                img={{
                  src: "https://d1otoma47x30pg.cloudfront.net/635ab486b2de12c30f76638f/635ab486b2de12c30f7663bb_arrow.svg",
                }}
                src="https://d1otoma47x30pg.cloudfront.net/635ab486b2de12c30f76638f/635ab486b2de12c30f7663bb_arrow.svg"
                loading="lazy"
                width={10}
                height="auto"
              />
            </Block>
          </Block>
          <NavbarButton
            className={cx(styles, "hamburger-menu-wrapper", "sidebar")}
            navbar={{
              type: "button",
            }}
            tag="div"
          >
            <Block
              className={cx(styles, "hamburger-menu-bar", "top", "sidebar")}
              tag="div"
            />
            <Block
              className={cx(styles, "hamburger-menu-bar", "bottom", "sidebar")}
              tag="div"
            />
          </NavbarButton>
        </Block>
      </Block>
    </Component>
  );
}
