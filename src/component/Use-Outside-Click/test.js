import React, { useState, useRef } from "react";
import useOutsideClick from "./useOutsideClick";

const UseOnclickOutsideTest = () => {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, () => setShowContent(false));
  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h3>This is a random content </h3>
          <p>
            Please click outside of this to close this. It won't close if you
            click inside of this content
          </p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
};

export default UseOnclickOutsideTest;
