import React from "react";

import { createIX2Engine } from "./devlink";
import { enhanceIx2Data, debounce } from "./utils";

const IX2Context = React.createContext();

export const InteractionsProvider = ({ children }) => {
  const ixData = React.useRef();
  const ixEngine = React.useRef();
  const debouncedInit = React.useRef(
    debounce((data) => {
      if (!ixEngine.current) ixEngine.current = createIX2Engine();
      ixEngine.current.init(data);
      document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
    })
  );

  const initEngine = React.useCallback((data, styles, ...nodes) => {
    const { events, actionLists, ...rest } = enhanceIx2Data(
      data,
      styles,
      ...nodes
    );

    ixData.current = {
      events: { ...ixData.current?.events, ...events },
      actionLists: { ...ixData.current?.actionLists, ...actionLists },
      ...rest,
    };

    debouncedInit.current(ixData.current);
  }, []);

  return (
    <IX2Context.Provider value={initEngine}>{children}</IX2Context.Provider>
  );
};

export const usePageInteractions = (id) => {
  React.useEffect(() => {
    document.querySelector("html").setAttribute("data-wf-page", id);
    document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
  }, [id]);
};

export const useInteractions = (ixData, styles, ...nodes) => {
  const initEngine = React.useContext(IX2Context);

  React.useEffect(() => {
    if (initEngine) initEngine(ixData, styles, ...nodes);
  }, [initEngine, ixData, nodes, styles]);
};
