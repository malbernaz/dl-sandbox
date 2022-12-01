import React from "react";
import { Block, Container } from "./Builtin";
import { useInteractions } from "./interactions";
import { TopNav } from "./TopNav";
import { cx } from "./utils";
import styles from "./Layout.module.css";

const InteractionsData = JSON.parse(
  '{"events":{"e-84":{"id":"e-84","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-85"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"14c00b34-85e6-b001-1694-019459164c8b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"14c00b34-85e6-b001-1694-019459164c8b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1666826948719}},"actionLists":{"a":{"id":"a","title":"Fade in animation","actionItemGroups":[{"actionItems":[{"id":"a-n-25","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"6362a8b8e1a1d011667bc672|22cd5f33-5ab3-9f56-8379-746f1ec51f55"},"value":0,"unit":""}},{"id":"a-n-23","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"95ee82c6-38e8-5b6a-1c90-af0bc260ab95"},"value":0,"unit":""}},{"id":"a-n-17","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"6362a8b8e1a1d011667bc672|5770baaf-e603-65b1-8fab-218aa24894be"},"value":0,"unit":""}},{"id":"a-n-15","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"6362a8b8e1a1d011667bc672|b0bef92a-2b78-9ac2-73c3-fb74bfe0d46b"},"value":0,"unit":""}},{"id":"a-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"6362a8b8e1a1d011667bc672|654cc3f7-921a-0760-4f57-9b53a1450e1c"},"value":0,"unit":""}},{"id":"a-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"6362a8b8e1a1d011667bc672|18b32fbb-c384-b89b-d2c5-f9d4bc60fa14"},"value":0,"unit":""}},{"id":"a-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"6362a8b8e1a1d011667bc672|c9b320e0-72ea-c32b-87f2-7744826d2ca8"},"value":0,"unit":""}},{"id":"a-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"6362a8b8e1a1d011667bc672|e1de801e-655c-c09f-d0f5-101a21266664"},"value":0,"unit":""}},{"id":"a-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"6362a8b8e1a1d011667bc672|22cd5f33-5ab3-9f56-8379-746f1ec51f55"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"","duration":500,"target":{"id":"6362a8b8e1a1d011667bc672|e1de801e-655c-c09f-d0f5-101a21266664"},"value":1,"unit":""}},{"id":"a-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"","duration":500,"target":{"id":"6362a8b8e1a1d011667bc672|22cd5f33-5ab3-9f56-8379-746f1ec51f55"},"value":1,"unit":""}},{"id":"a-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"","duration":500,"target":{"id":"95ee82c6-38e8-5b6a-1c90-af0bc260ab95"},"value":1,"unit":""}},{"id":"a-n-16","actionTypeId":"STYLE_OPACITY","config":{"delay":500,"easing":"","duration":500,"target":{"id":"6362a8b8e1a1d011667bc672|b0bef92a-2b78-9ac2-73c3-fb74bfe0d46b"},"value":1,"unit":""}},{"id":"a-n-18","actionTypeId":"STYLE_OPACITY","config":{"delay":600,"easing":"","duration":500,"target":{"id":"6362a8b8e1a1d011667bc672|5770baaf-e603-65b1-8fab-218aa24894be"},"value":1,"unit":""}},{"id":"a-n-20","actionTypeId":"STYLE_OPACITY","config":{"delay":700,"easing":"","duration":500,"target":{"id":"6362a8b8e1a1d011667bc672|150bd48f-4d38-214b-6274-da18015c2f6c"},"value":1,"unit":""}},{"id":"a-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":800,"easing":"","duration":500,"target":{"id":"6362a8b8e1a1d011667bc672|18b32fbb-c384-b89b-d2c5-f9d4bc60fa14"},"value":1,"unit":""}},{"id":"a-n-22","actionTypeId":"STYLE_OPACITY","config":{"delay":800,"easing":"","duration":500,"target":{"id":"6362a8b8e1a1d011667bc672|dc6b2600-5bca-e580-f744-dabc8782ef5d"},"value":1,"unit":""}},{"id":"a-n-24","actionTypeId":"STYLE_OPACITY","config":{"delay":900,"easing":"","duration":500,"target":{"id":"6362a8b8e1a1d011667bc672|ea1ffd23-f51a-00a1-ec03-c0b83538c62d"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1637118496510}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Layout({ as: Component = Block, sidebar, main }) {
  useInteractions(
    InteractionsData,
    styles,
    "14c00b34-85e6-b001-1694-019459164c8b",
    "6362a8b8e1a1d011667bc672|22cd5f33-5ab3-9f56-8379-746f1ec51f55",
    "95ee82c6-38e8-5b6a-1c90-af0bc260ab95",
    "6362a8b8e1a1d011667bc672|5770baaf-e603-65b1-8fab-218aa24894be",
    "6362a8b8e1a1d011667bc672|b0bef92a-2b78-9ac2-73c3-fb74bfe0d46b",
    "6362a8b8e1a1d011667bc672|654cc3f7-921a-0760-4f57-9b53a1450e1c",
    "6362a8b8e1a1d011667bc672|18b32fbb-c384-b89b-d2c5-f9d4bc60fa14",
    "6362a8b8e1a1d011667bc672|c9b320e0-72ea-c32b-87f2-7744826d2ca8",
    "6362a8b8e1a1d011667bc672|e1de801e-655c-c09f-d0f5-101a21266664",
    "6362a8b8e1a1d011667bc672|150bd48f-4d38-214b-6274-da18015c2f6c",
    "6362a8b8e1a1d011667bc672|dc6b2600-5bca-e580-f744-dabc8782ef5d",
    "6362a8b8e1a1d011667bc672|ea1ffd23-f51a-00a1-ec03-c0b83538c62d"
  );

  return (
    <Component
      data-w-id="14c00b34-85e6-b001-1694-019459164c8b"
      className={cx(styles, "page-wrapper")}
      tag="div"
    >
      {sidebar}
      <Block className={cx(styles, "dashboard-main")} tag="div">
        <Block className={cx(styles, "dashboard-content")} tag="div">
          <Block className={cx(styles, "top-nav")} tag="div">
            <TopNav />
          </Block>
          <Block className={cx(styles, "main-dashboard")} tag="div">
            <Container
              className={cx(styles, "container")}
              grid={{
                type: "container",
              }}
              tag="div"
            >
              {main}
            </Container>
          </Block>
        </Block>
      </Block>
    </Component>
  );
}
