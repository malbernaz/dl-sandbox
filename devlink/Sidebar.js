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
import { useInteractions } from "./interactions";
import { cx } from "./utils";
import styles from "./Sidebar.module.css";

const InteractionsData = JSON.parse(
  '{"events":{"e-111":{"id":"e-111","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-26","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-112"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"509000b4-6fad-0d5c-76f2-7145a6a4cddc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"509000b4-6fad-0d5c-76f2-7145a6a4cddc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1667413909447},"e-112":{"id":"e-112","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-32","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-111"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"509000b4-6fad-0d5c-76f2-7145a6a4cddc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"509000b4-6fad-0d5c-76f2-7145a6a4cddc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1667413909447}},"actionLists":{"a-26":{"id":"a-26","title":"Sidebar Collapse","actionItemGroups":[{"actionItems":[{"id":"a-26-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{},"value":"none"}},{"id":"a-26-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".logo-wrapper","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d65882"]},"value":"none"}},{"id":"a-26-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":0,"target":{},"value":0,"unit":""}},{"id":"a-26-n-9","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar-menu-collapsed-overlay","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d6588e"]},"value":"block"}}]},{"actionItems":[{"id":"a-26-n-10","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"PARENT","selector":".sidebar-wrapper","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d65896"]},"widthValue":46,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1650904639417},"a-32":{"id":"a-32","title":"Sidebar Expand","actionItemGroups":[{"actionItems":[{"id":"a-32-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{},"value":"block"}},{"id":"a-32-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".logo-wrapper","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d65882"]},"value":"block"}},{"id":"a-32-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".collapse-icon-container","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d658b6"]},"value":"block"}},{"id":"a-32-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar-logo-icon-wrapper","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d65889"]},"value":"none"}},{"id":"a-32-n-7","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar-menu-collapsed-overlay","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d6588e"]},"value":"none"}}]},{"actionItems":[{"id":"a-32-n-8","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"PARENT","selector":".sidebar-wrapper","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d65896"]},"widthValue":300,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-32-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1650904639417}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Sidebar({ as: Component = NavbarWrapper }) {
  useInteractions(
    InteractionsData,
    styles,
    "509000b4-6fad-0d5c-76f2-7145a6a4cddc",
    "6362a8b8e1a1d011667bc672|e1de801e-655c-c09f-d0f5-101a2126658f",
    "96b42907-275d-2a0d-c129-32ec18893f4a",
    "96b42907-275d-2a0d-c129-32ec18893f6b",
    "96b42907-275d-2a0d-c129-32ec18893f46",
    "96b42907-275d-2a0d-c129-32ec18893f6c",
    "96b42907-275d-2a0d-c129-32ec18893f4e"
  );

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
              src: "https://d1otoma47x30pg.cloudfront.net/6362a8b8e1a1d011667bc671/6362a8b8e1a1d011667bc663_Logo.svg",
            }}
            src="https://d1otoma47x30pg.cloudfront.net/6362a8b8e1a1d011667bc671/6362a8b8e1a1d011667bc663_Logo.svg"
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
                src: "https://d1otoma47x30pg.cloudfront.net/6362a8b8e1a1d011667bc671/6362a8b8e1a1d011667bc64f_sidebar-icon-dashboardly-webflow-template.svg",
              }}
              src="https://d1otoma47x30pg.cloudfront.net/6362a8b8e1a1d011667bc671/6362a8b8e1a1d011667bc64f_sidebar-icon-dashboardly-webflow-template.svg"
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
                      src: "https://d1otoma47x30pg.cloudfront.net/6362a8b8e1a1d011667bc671/6362a8b8e1a1d011667bc65a_home-icon.svg",
                    }}
                    src="https://d1otoma47x30pg.cloudfront.net/6362a8b8e1a1d011667bc671/6362a8b8e1a1d011667bc65a_home-icon.svg"
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
                      src: "https://d1otoma47x30pg.cloudfront.net/6362a8b8e1a1d011667bc671/6362a8b8e1a1d011667bc659_Like-icon.svg",
                    }}
                    src="https://d1otoma47x30pg.cloudfront.net/6362a8b8e1a1d011667bc671/6362a8b8e1a1d011667bc659_Like-icon.svg"
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
                      src: "https://d1otoma47x30pg.cloudfront.net/6362a8b8e1a1d011667bc671/6362a8b8e1a1d011667bc65e_reporting-icon.svg",
                    }}
                    src="https://d1otoma47x30pg.cloudfront.net/6362a8b8e1a1d011667bc671/6362a8b8e1a1d011667bc65e_reporting-icon.svg"
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
                      src: "https://d1otoma47x30pg.cloudfront.net/6362a8b8e1a1d011667bc671/6362a8b8e1a1d011667bc65d_map-icon.svg",
                    }}
                    src="https://d1otoma47x30pg.cloudfront.net/6362a8b8e1a1d011667bc671/6362a8b8e1a1d011667bc65d_map-icon.svg"
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
                      src: "https://d1otoma47x30pg.cloudfront.net/6362a8b8e1a1d011667bc671/6362a8b8e1a1d011667bc65c_Calendar-icon.svg",
                    }}
                    src="https://d1otoma47x30pg.cloudfront.net/6362a8b8e1a1d011667bc671/6362a8b8e1a1d011667bc65c_Calendar-icon.svg"
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
                      src: "https://d1otoma47x30pg.cloudfront.net/6362a8b8e1a1d011667bc671/6362a8b8e1a1d011667bc65b_settings-icon.svg",
                    }}
                    src="https://d1otoma47x30pg.cloudfront.net/6362a8b8e1a1d011667bc671/6362a8b8e1a1d011667bc65b_settings-icon.svg"
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
            <Block
              data-w-id="509000b4-6fad-0d5c-76f2-7145a6a4cddc"
              className={cx(styles, "collapse-icon-wrapper")}
              tag="div"
            >
              <Image
                className={cx(styles, "arrow")}
                img={{
                  src: "https://d1otoma47x30pg.cloudfront.net/6362a8b8e1a1d011667bc671/6362a8b8e1a1d011667bc65f_arrow.svg",
                }}
                src="https://d1otoma47x30pg.cloudfront.net/6362a8b8e1a1d011667bc671/6362a8b8e1a1d011667bc65f_arrow.svg"
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
