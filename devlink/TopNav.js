import React from "react";
import {
  Block,
  DropdownWrapper,
  DropdownToggle,
  Icon,
  DropdownList,
  Link,
} from "./Builtin";
import { cx } from "./utils";
import styles from "./TopNav.module.css";

export function TopNav({ as: Component = Block }) {
  return (
    <Component className={cx(styles, "top-nav-container")} tag="div">
      <Block className={cx(styles, "dashboard-nav-container")} tag="div">
        <DropdownWrapper
          className={cx(styles, "dropdown")}
          dropdown={{
            type: "wrapper",
          }}
          tag="div"
          data-hover={false}
          data-delay={0}
        >
          <DropdownToggle
            className={cx(styles, "dropdown-toggle")}
            dropdown={{
              type: "toggle",
            }}
            tag="div"
          >
            <Icon
              className={cx(styles, "arrow-down")}
              widget={{
                type: "icon",
                icon: "dropdown-toggle",
              }}
            />
            <Block className={cx(styles, "title-large")} tag="div">
              {"San Francisco"}
            </Block>
          </DropdownToggle>
          <DropdownList
            className={cx(styles, "dropdown-list")}
            dropdown={{
              type: "list",
            }}
            tag="nav"
          >
            <Link
              className={cx(styles, "dropdown-card")}
              block="inline"
              button={false}
              link={{
                mode: "external",
                url: "#",
              }}
            >
              <Block className={cx(styles, "wrapper")} tag="div">
                <Block className={cx(styles, "label-highlight")} tag="div">
                  {"Atlanta - Mostly Cloudy"}
                </Block>
                <Block className={cx(styles, "label")} tag="div">
                  {"2:17pm"}
                </Block>
              </Block>
              <Block className={cx(styles, "temp-small")} tag="div">
                {"74º"}
              </Block>
            </Link>
            <Link
              className={cx(styles, "dropdown-card", "middle")}
              block="inline"
              button={false}
              link={{
                mode: "external",
                url: "#",
              }}
            >
              <Block className={cx(styles, "wrapper")} tag="div">
                <Block className={cx(styles, "label-highlight")} tag="div">
                  {"New York - Drizzle"}
                </Block>
                <Block className={cx(styles, "label")} tag="div">
                  {"2:17pm"}
                </Block>
              </Block>
              <Block className={cx(styles, "temp-small")} tag="div">
                {"65º"}
              </Block>
            </Link>
            <Link
              className={cx(styles, "dropdown-card", "middle")}
              block="inline"
              button={false}
              link={{
                mode: "external",
                url: "#",
              }}
            >
              <Block className={cx(styles, "wrapper")} tag="div">
                <Block className={cx(styles, "label-highlight")} tag="div">
                  {"Amsterdam - Severe storms"}
                </Block>
                <Block className={cx(styles, "label")} tag="div">
                  {"8:17pm"}
                </Block>
              </Block>
              <Block className={cx(styles, "temp-small")} tag="div">
                {"80º"}
              </Block>
            </Link>
            <Link
              className={cx(styles, "dropdown-card")}
              block="inline"
              button={false}
              link={{
                mode: "external",
                url: "#",
              }}
            >
              <Block className={cx(styles, "wrapper")} tag="div">
                <Block className={cx(styles, "label-highlight")} tag="div">
                  {"Add location"}
                </Block>
              </Block>
            </Link>
          </DropdownList>
        </DropdownWrapper>
      </Block>
    </Component>
  );
}
