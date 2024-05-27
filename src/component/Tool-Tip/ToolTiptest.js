import React from "react";
import ToolTip from "./ToolTip";

const ToolTiptest = () => {
  return (
    <div>
      <h1>ToolTip</h1>
      <ToolTip
        content={"This is ToolTip Content"}
        children={<p>Hover me</p>}
        delay={550}
      />
    </div>
  );
};

export default ToolTiptest;
