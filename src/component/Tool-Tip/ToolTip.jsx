import React, { useState } from "react";
import "./tooltip.css";
const ToolTip = ({ children, content, delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  let timeOut;
  const handleShowToolTip = () => {
    timeOut = setTimeout(() => {
      setIsVisible(true);
    }, delay || 500);
  };

  const handleHideToolTip = () => {
    clearTimeout(timeOut);
    setIsVisible(false);
  };
  return (
    <div
      className="tooltip-container"
      //   onMouseEnter={() => setIsVisible(true)} // when user will hover on this container (Mouse Cursor enters inside the container)
      //   onMouseLeave={() => setIsVisible(false)}
      onMouseEnter={handleShowToolTip}
      onMouseLeave={handleHideToolTip}
    >
      {children}
      {isVisible ? <div className="tooltip">{content}</div> : null}
    </div>
  );
};

export default ToolTip;
