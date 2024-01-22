import React, { useState } from "react";
import data from "../Dumydata/data";

const Home = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiselection, setEnableMultiselection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function singleSelection(getDataID) {
    setSelected(getDataID === selected ? null : getDataID);
  }
  function multiSelection(getDataID) {
    let cpyarr = [...multiple];
    const findindex = cpyarr.indexOf(getDataID);

    if (findindex === -1) {
      cpyarr.push(getDataID);
    } else {
      cpyarr.splice(findindex, 1);
    }
    setMultiple(cpyarr);
  }
  console.log(selected);

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiselection(!enableMultiselection)}>
        Enable Multiselection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataitem) => (
            <div
              className="item"
              key={dataitem.id}
              style={{ cursor: "pointer" }}
            >
              <div
                className="title"
                onClick={
                  enableMultiselection
                    ? () => multiSelection(dataitem.id)
                    : () => singleSelection(dataitem.id)
                }
              >
                <h3>{dataitem.title}</h3>
                <span>+</span>
              </div>
              {enableMultiselection
                ? multiple.indexOf(dataitem.id) !== -1 && (
                    <div className="content">{dataitem.description}</div>
                  )
                : selected === dataitem.id && (
                    <div className="content">{dataitem.description}</div>
                  )}
            </div>
          ))
        ) : (
          <div>data not found</div>
        )}
      </div>
    </div>
  );
};

export default Home;
