import React, { useContext } from "react";
import { FeatureFlagsContext } from "./context";
import LightDarkMode from "../Light-Dark-Mode";
import TickTacToe from "../Tick-Tac-Toe";
import RandomColor from "../random-color";
import Home from "../Accordian/Home";
import TreeView from "../Tree-View";
import menus from "../Tree-View/data";
import TabTest from "../CustomTabs/tab-test";

const FeatureFlags = () => {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TickTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },
    {
      key: "showAccordian",
      component: <Home />,
    },
    {
      key: "showTreeView",
      component: <TreeView menus={menus} />,
    },
    {
      key: "showTabs",
      component: <TabTest />,
    },
  ];

  const checkEnabledFlags = (getCurrentKey) => {
    return enabledFlags[getCurrentKey];
  };

  if (loading) return <h1>Loading data ! Please wait</h1>;

  return (
    <div>
      <h1>Feature flags</h1>
      {componentsToRender.map((item) =>
        checkEnabledFlags(item.key) ? item.component : null
      )}
    </div>
  );
};

export default FeatureFlags;
