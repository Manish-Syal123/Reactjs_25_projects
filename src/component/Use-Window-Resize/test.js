import React from "react";
import UseWindowResize from "./UseWindowResize";

const UseWindowResizeTest = () => {
  const windowSize = UseWindowResize();
  const { width, height } = windowSize;

  return (
    <div>
      <h3>Use Window Resize Hook</h3>
      <p>width is {width}</p>
      <p>height is {height}</p>
    </div>
  );
};

export default UseWindowResizeTest;
