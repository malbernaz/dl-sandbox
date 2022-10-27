import React from "react";

export const cx = (style, ...classNames) =>
  classNames.reduce((acc, c) => acc + ((style[c] ?? c) + " "), "").trim();

const replaceSelector = (selector, styles) => {
  return selector
    .split(".")
    .map((c) => styles?.[c] ?? c)
    .join(".");
};

export const enhanceIx2Data = (ix2Data, styles, ...nodes) => {
  if (!nodes.length || !styles) return ix2Data;

  const { events, actionLists, ...rest } = ix2Data;

  return {
    ...rest,
    events: Object.fromEntries(
      Object.entries(events).map(([id, event]) => {
        const { target, targets, ...newEvent } = structuredClone(event);

        if (target.appliesTo === "CLASS" && nodes.includes(target.originalId)) {
          target.selector = replaceSelector(target.selector, styles);
        }

        for (const t of targets) {
          if (t.appliesTo !== "CLASS" || !nodes.includes(t.originalId))
            continue;

          t.selector = replaceSelector(t.selector, styles);
        }

        return [id, { ...newEvent, target, targets }];
      })
    ),
    actionLists: Object.fromEntries(
      Object.entries(actionLists).map(([id, actionList]) => {
        const { actionItemGroups, ...rest } = structuredClone(actionList);

        for (const { actionItems } of actionItemGroups ?? []) {
          for (const { config } of actionItems) {
            const { selector } = config.target;
            if (!selector) continue;
            config.target.selector = replaceSelector(selector, styles);
          }
        }

        return [id, { actionItemGroups, ...rest }];
      })
    ),
  };
};

export const debounce = (func, timeout = 0) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};
