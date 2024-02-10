import React, { useState } from "react";
import MenuList from "./menu-list";
import { FaMinus, FaPlus } from "react-icons/fa";
import "./styles.css";
//this component will receive a single block of item from data or single object holding multiple chiels in it.
const MenuItem = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  const handelToggleChildren = (getCurrentLable) => {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLable]: !displayCurrentChildren[getCurrentLable],
      //   above line--->if current lable already exist then remove it from displayCurrentChildren else add it.
    });
  };
  console.log(displayCurrentChildren);
  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length > 0 ? (
          <span onClick={() => handelToggleChildren(item.label)}>
            {displayCurrentChildren[item.label] ? (
              <FaMinus color="#fff" size={25} />
            ) : (
              <FaPlus color="#fff" size={25} />
            )}
          </span>
        ) : null}
      </div>

      {/* As children is again a array of object so we will recursevely call the MenuList component which is taking a array of object. */}
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
