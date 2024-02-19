import React from "react";

const DisplayContent = ({ data, handleClick }) => {
  return (
    <ul>
      {data && data.length > 0
        ? data.map((item, index) => (
            <li onClick={handleClick} key={index} style={{ cursor: "pointer" }}>
              {item}
            </li>
          ))
        : null}
    </ul>
  );
};

export default DisplayContent;
