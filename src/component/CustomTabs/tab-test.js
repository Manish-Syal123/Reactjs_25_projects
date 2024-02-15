import React from "react";
import TabComp from "./TabComp";
import "./tab.css";
import LoadMoreData from "../LoadMoreData";

const TabTest = () => {
  const DummyComponent = () => {
    return <div>Some random content for tab 3</div>;
  };

  const tab = [
    {
      label: "tab-1",
      content: "content for tab 1",
    },
    {
      label: "tab-2",
      //   content: "content for tab 2",
      content: <LoadMoreData />,
    },
    {
      label: "tab-3",
      content: <DummyComponent />,
    },
  ];

  const handleChange = (getCurrentTabIndex) => {
    console.log(getCurrentTabIndex);
  };
  return <TabComp tabsContent={tab} onChange={handleChange} />;
};

export default TabTest;
