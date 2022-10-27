import React from "react";
import { Block, Image } from "./Builtin";
import { useInteractions } from "./interactions";
import { cx } from "./utils";
import styles from "./ForecastCard.module.css";

const InteractionsData = JSON.parse(
  '{"events":{"e-86":{"id":"e-86","name":"","animationType":"preset","eventTypeId":"MOUSE_MOVE","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-35","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"95ee82c6-38e8-5b6a-1c90-af0bc260ab95","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"95ee82c6-38e8-5b6a-1c90-af0bc260ab95","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-35-p","selectedAxis":"X_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":80,"restingState":50},{"continuousParameterGroupId":"a-35-p-2","selectedAxis":"Y_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":80,"restingState":50}],"createdOn":1666826948719}},"actionLists":{"a-35":{"id":"a-35","title":"Forecast card animation","continuousParameterGroups":[{"id":"a-35-p","type":"MOUSE_X","parameterLabel":"Mouse X","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-35-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6359c92cf2be5b638644b944|654cc3f7-921a-0760-4f57-9b53a1450e1c"},"yValue":-20,"xUnit":"DEG","yUnit":"deg","zUnit":"DEG"}}]},{"keyframe":100,"actionItems":[{"id":"a-35-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6359c92cf2be5b638644b944|654cc3f7-921a-0760-4f57-9b53a1450e1c"},"yValue":20,"xUnit":"DEG","yUnit":"deg","zUnit":"DEG"}}]}]},{"id":"a-35-p-2","type":"MOUSE_Y","parameterLabel":"Mouse Y","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-35-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6359c92cf2be5b638644b944|654cc3f7-921a-0760-4f57-9b53a1450e1c"},"xValue":20,"xUnit":"deg","yUnit":"DEG","zUnit":"DEG"}}]},{"keyframe":100,"actionItems":[{"id":"a-35-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6359c92cf2be5b638644b944|654cc3f7-921a-0760-4f57-9b53a1450e1c"},"xValue":-20,"xUnit":"deg","yUnit":"DEG","zUnit":"DEG"}}]}]}],"createdOn":1666809351933}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ForecastCard({
  as: Component = Block,
  dayOfWeek = <>Monday</>,

  iconImage = {
    src: "https://d1otoma47x30pg.cloudfront.net/6359c92cf2be5b638644b943/6359c92cf2be5b638644b97e_Group%201287.png",

    sizes: [
      {
        max: 767,
        size: "100px",
      },
      {
        max: 991,
        size: "12vw",
      },
      {
        max: 10000,
        size: "100px",
      },
    ],
  },

  temp = <>63º</>,
  weatherDesc = <>Partially cloudy</>,
  high = <>H:°</>,
  low = <>L:°</>,
}) {
  useInteractions(
    InteractionsData,
    styles,
    "95ee82c6-38e8-5b6a-1c90-af0bc260ab95"
  );

  return (
    <Component
      data-w-id="95ee82c6-38e8-5b6a-1c90-af0bc260ab95"
      className={cx(styles, "card-forecast")}
      tag="div"
    >
      <Block className={cx(styles, "forecast-day")} tag="div">
        <Block tag="div">{dayOfWeek}</Block>
      </Block>
      <Block className={cx(styles, "image-wrapper")} tag="div">
        <Image
          className={cx(styles, "image-large")}
          img={iconImage}
          src="https://d1otoma47x30pg.cloudfront.net/6359c92cf2be5b638644b943/6359c92cf2be5b638644b97e_Group%201287.png"
          loading="lazy"
          width="auto"
          height="auto"
        />
      </Block>
      <Block className={cx(styles, "forecast-info")} tag="div">
        <Block className={cx(styles, "temp")} tag="div">
          {temp}
        </Block>
        <Block className={cx(styles, "label")} tag="div">
          {weatherDesc}
        </Block>
        <Block className={cx(styles, "flex")} tag="div">
          <Block className={cx(styles, "highest-temp")} tag="div">
            {high}
          </Block>
          <Block className={cx(styles, "lowest-temp")} tag="div">
            {low}
          </Block>
        </Block>
      </Block>
    </Component>
  );
}
