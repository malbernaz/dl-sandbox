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
import styles from "./SideNav.module.css";

const InteractionsData = JSON.parse(
  '{"events":{"e-3":{"id":"e-3","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-26","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-61"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"96b42907-275d-2a0d-c129-32ec18893f6d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"96b42907-275d-2a0d-c129-32ec18893f6d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1666310694310},"e-61":{"id":"e-61","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-32","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"96b42907-275d-2a0d-c129-32ec18893f6d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"96b42907-275d-2a0d-c129-32ec18893f6d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1666310694310},"e-36":{"id":"e-36","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-27","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-60"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"96b42907-275d-2a0d-c129-32ec18893f46","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"96b42907-275d-2a0d-c129-32ec18893f46","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1666310694310},"e-60":{"id":"e-60","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-25","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-36"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"96b42907-275d-2a0d-c129-32ec18893f46","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"96b42907-275d-2a0d-c129-32ec18893f46","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1666310694310},"e-24":{"id":"e-24","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-32","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-64"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"96b42907-275d-2a0d-c129-32ec18893f4d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"96b42907-275d-2a0d-c129-32ec18893f4d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1666310694310},"e-44":{"id":"e-44","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-31","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-47"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"96b42907-275d-2a0d-c129-32ec18893f46","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"96b42907-275d-2a0d-c129-32ec18893f46","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1666310694310},"e-63":{"id":"e-63","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-32","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-31"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"96b42907-275d-2a0d-c129-32ec18893f4e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"96b42907-275d-2a0d-c129-32ec18893f4e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1666310694310},"e-74":{"id":"e-74","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-26","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-75"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6359c92cf2be5b638644b944|c3be69a4-e364-ebd4-5635-54756b1b9941","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6359c92cf2be5b638644b944|c3be69a4-e364-ebd4-5635-54756b1b9941","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1666819351186},"e-75":{"id":"e-75","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-32","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-74"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6359c92cf2be5b638644b944|c3be69a4-e364-ebd4-5635-54756b1b9941","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6359c92cf2be5b638644b944|c3be69a4-e364-ebd4-5635-54756b1b9941","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1666819351186}},"actionLists":{"a-26":{"id":"a-26","title":"Sidebar Collapse","actionItemGroups":[{"actionItems":[{"id":"a-26-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{},"value":"none"}},{"id":"a-26-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".logo-wrapper","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d65882"]},"value":"none"}},{"id":"a-26-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":0,"target":{},"value":0,"unit":""}},{"id":"a-26-n-9","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar-menu-collapsed-overlay","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d6588e"]},"value":"block"}}]},{"actionItems":[{"id":"a-26-n-10","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"PARENT","selector":".sidebar-wrapper","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d65896"]},"widthValue":84,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1650904639417},"a-32":{"id":"a-32","title":"Sidebar Expand","actionItemGroups":[{"actionItems":[{"id":"a-32-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{},"value":"block"}},{"id":"a-32-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".logo-wrapper","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d65882"]},"value":"block"}},{"id":"a-32-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".collapse-icon-container","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d658b6"]},"value":"block"}},{"id":"a-32-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar-logo-icon-wrapper","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d65889"]},"value":"none"}},{"id":"a-32-n-7","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar-menu-collapsed-overlay","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d6588e"]},"value":"none"}}]},{"actionItems":[{"id":"a-32-n-8","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"PARENT","selector":".sidebar-wrapper","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d65896"]},"widthValue":300,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-32-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1650904639417},"a-27":{"id":"a-27","title":"🍔 Sidebar Hamburger Menu - Opens 3","actionItemGroups":[{"actionItems":[{"id":"a-27-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-menu-bar.top","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d65898","e3e61be3-31f3-c611-da22-0aa230d658da"]},"zValue":135,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-27-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-menu-bar.bottom","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d65898","e3e61be3-31f3-c611-da22-0aa230d658e0"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-27-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-menu-bar.bottom","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d65898","e3e61be3-31f3-c611-da22-0aa230d658e0"]},"yValue":-6,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-27-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-menu-bar.top","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d65898","e3e61be3-31f3-c611-da22-0aa230d658da"]},"yValue":2,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1636864366516},"a-25":{"id":"a-25","title":"🍔 Hamburger Menu - Closes 3","actionItemGroups":[{"actionItems":[{"id":"a-25-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-menu-bar.top","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d65898","e3e61be3-31f3-c611-da22-0aa230d658da"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-25-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-menu-bar.bottom","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d65898","e3e61be3-31f3-c611-da22-0aa230d658e0"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-25-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-menu-bar.bottom","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d65898","e3e61be3-31f3-c611-da22-0aa230d658e0"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-25-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-menu-bar.top","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d65898","e3e61be3-31f3-c611-da22-0aa230d658da"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1636864667872},"a-31":{"id":"a-31","title":"Sidebar Nav Menu Mobile Height 3","actionItemGroups":[{"actionItems":[{"id":"a-31-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".sidebar-nav-menu","selectorGuids":["e3e61be3-31f3-c611-da22-0aa230d65873"]},"heightValue":110,"widthUnit":"PX","heightUnit":"vh","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1651501735427}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function SideNav({ as: Component = NavbarWrapper }) {
  useInteractions(
    InteractionsData,
    styles,
    "96b42907-275d-2a0d-c129-32ec18893f6d",
    "6359c92cf2be5b638644b944|e1de801e-655c-c09f-d0f5-101a2126658f",
    "96b42907-275d-2a0d-c129-32ec18893f4a",
    "96b42907-275d-2a0d-c129-32ec18893f6b",
    "96b42907-275d-2a0d-c129-32ec18893f46",
    "96b42907-275d-2a0d-c129-32ec18893f6c",
    "96b42907-275d-2a0d-c129-32ec18893f4e",
    "6351e0826cc9d8b623ccfa9d|0516f860-3058-fb54-6d73-2d818d04fa92",
    "6351e0826cc9d8b623ccfa9d|08bd3c7f-979f-e6d7-774e-f0d716e67344",
    "96b42907-275d-2a0d-c129-32ec18893f4d",
    "96b42907-275d-2a0d-c129-32ec18893f50",
    "6359c92cf2be5b638644b944|c3be69a4-e364-ebd4-5635-54756b1b9941"
  );

  return (
    <Component
      data-w-id="96b42907-275d-2a0d-c129-32ec18893f46"
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
              src: "https://d1otoma47x30pg.cloudfront.net/6359c92cf2be5b638644b943/6359c92cf2be5b638644b97a_Logo.svg",
            }}
            src="https://d1otoma47x30pg.cloudfront.net/6359c92cf2be5b638644b943/6359c92cf2be5b638644b97a_Logo.svg"
            loading="lazy"
            width="auto"
            height="auto"
          />
          <NavbarBrand
            data-w-id="96b42907-275d-2a0d-c129-32ec18893f4a"
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
          <Block
            data-w-id="96b42907-275d-2a0d-c129-32ec18893f4d"
            className={cx(styles, "sidebar-logo-icon-wrapper")}
            tag="div"
          >
            <Image
              data-w-id="96b42907-275d-2a0d-c129-32ec18893f4e"
              img={{
                src: "https://d1otoma47x30pg.cloudfront.net/6359c92cf2be5b638644b943/6359c92cf2be5b638644b966_sidebar-icon-dashboardly-webflow-template.svg",
              }}
              src="https://d1otoma47x30pg.cloudfront.net/6359c92cf2be5b638644b943/6359c92cf2be5b638644b966_sidebar-icon-dashboardly-webflow-template.svg"
              loading="eager"
              width="auto"
              height="auto"
            />
          </Block>
        </Block>
        <Block className={cx(styles, "sidebar-links")} tag="div">
          <NavbarMenu
            data-w-id="96b42907-275d-2a0d-c129-32ec18893f50"
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
                  button={false}
                  block="inline"
                  link={{
                    mode: "external",
                    url: "#",
                  }}
                >
                  <Image
                    className={cx(styles, "icon")}
                    img={{
                      src: "https://d1otoma47x30pg.cloudfront.net/6359c92cf2be5b638644b943/6359c92cf2be5b638644b971_home-icon.svg",
                    }}
                    src="https://d1otoma47x30pg.cloudfront.net/6359c92cf2be5b638644b943/6359c92cf2be5b638644b971_home-icon.svg"
                    loading="lazy"
                    width="auto"
                    height="auto"
                  />
                  <Block tag="div">{"Dashboard"}</Block>
                </Link>
                <Link
                  className={cx(styles, "nav-link")}
                  button={false}
                  block="inline"
                  link={{
                    mode: "external",
                    url: "#",
                  }}
                >
                  <Image
                    className={cx(styles, "icon")}
                    img={{
                      src: "https://d1otoma47x30pg.cloudfront.net/6359c92cf2be5b638644b943/6359c92cf2be5b638644b970_Like-icon.svg",
                    }}
                    src="https://d1otoma47x30pg.cloudfront.net/6359c92cf2be5b638644b943/6359c92cf2be5b638644b970_Like-icon.svg"
                    loading="lazy"
                    width="auto"
                    height="auto"
                  />
                  <Block tag="div">{"Favorites"}</Block>
                </Link>
                <Link
                  className={cx(styles, "nav-link")}
                  button={false}
                  block="inline"
                  link={{
                    mode: "external",
                    url: "#",
                  }}
                >
                  <Image
                    className={cx(styles, "icon")}
                    img={{
                      src: "https://d1otoma47x30pg.cloudfront.net/6359c92cf2be5b638644b943/6359c92cf2be5b638644b975_reporting-icon.svg",
                    }}
                    src="https://d1otoma47x30pg.cloudfront.net/6359c92cf2be5b638644b943/6359c92cf2be5b638644b975_reporting-icon.svg"
                    loading="lazy"
                    width="auto"
                    height="auto"
                  />
                  <Block tag="div">{"Reporting"}</Block>
                </Link>
                <Link
                  className={cx(styles, "nav-link")}
                  button={false}
                  block="inline"
                  link={{
                    mode: "external",
                    url: "#",
                  }}
                >
                  <Image
                    className={cx(styles, "icon")}
                    img={{
                      src: "https://d1otoma47x30pg.cloudfront.net/6359c92cf2be5b638644b943/6359c92cf2be5b638644b974_map-icon.svg",
                    }}
                    src="https://d1otoma47x30pg.cloudfront.net/6359c92cf2be5b638644b943/6359c92cf2be5b638644b974_map-icon.svg"
                    loading="lazy"
                    width="auto"
                    height="auto"
                  />
                  <Block tag="div">{"Weather map"}</Block>
                </Link>
                <Link
                  className={cx(styles, "nav-link")}
                  button={false}
                  block="inline"
                  link={{
                    mode: "external",
                    url: "#",
                  }}
                >
                  <Image
                    className={cx(styles, "icon")}
                    img={{
                      src: "https://d1otoma47x30pg.cloudfront.net/6359c92cf2be5b638644b943/6359c92cf2be5b638644b973_Calendar-icon.svg",
                    }}
                    src="https://d1otoma47x30pg.cloudfront.net/6359c92cf2be5b638644b943/6359c92cf2be5b638644b973_Calendar-icon.svg"
                    loading="lazy"
                    width="auto"
                    height="auto"
                  />
                  <Block tag="div">{"Calendar"}</Block>
                </Link>
                <Link
                  className={cx(styles, "nav-link")}
                  button={false}
                  block="inline"
                  link={{
                    mode: "external",
                    url: "#",
                  }}
                >
                  <Image
                    className={cx(styles, "icon")}
                    img={{
                      src: "https://d1otoma47x30pg.cloudfront.net/6359c92cf2be5b638644b943/6359c92cf2be5b638644b972_settings-icon.svg",
                    }}
                    src="https://d1otoma47x30pg.cloudfront.net/6359c92cf2be5b638644b943/6359c92cf2be5b638644b972_settings-icon.svg"
                    loading="lazy"
                    width="auto"
                    height="auto"
                  />
                  <Block tag="div">{"Settings"}</Block>
                </Link>
              </Block>
            </Block>
            <Block
              data-w-id="96b42907-275d-2a0d-c129-32ec18893f6b"
              className={cx(styles, "sidebar-menu-collapsed-overlay")}
              tag="div"
            />
          </NavbarMenu>
          <Block
            data-w-id="96b42907-275d-2a0d-c129-32ec18893f6c"
            className={cx(styles, "collapse-icon-container")}
            tag="div"
          >
            <Block
              data-w-id="96b42907-275d-2a0d-c129-32ec18893f6d"
              className={cx(styles, "collapse-icon-wrapper")}
              tag="div"
            >
              <Image
                className={cx(styles, "arrow")}
                img={{
                  src: "https://d1otoma47x30pg.cloudfront.net/6359c92cf2be5b638644b943/6359c92cf2be5b638644b976_arrow.svg",
                }}
                src="https://d1otoma47x30pg.cloudfront.net/6359c92cf2be5b638644b943/6359c92cf2be5b638644b976_arrow.svg"
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
