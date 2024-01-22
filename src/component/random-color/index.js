import React, { useEffect, useState } from "react";

const RandomColor = () => {
  const [typeofcolor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const generterandom = (length) => {
    return Math.floor(Math.random() * length);
  };
  const handelRandomHexColor = () => {
    //#678765 ===> starting with # and reset are 6 length of alphanumeric combination
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    let hexcode = "#";
    for (let i = 0; i < 6; i++) {
      hexcode += hex[generterandom(hex.length)];
    }

    setColor(hexcode);
  };
  const handelRandomRgbColor = () => {
    let r = generterandom(256);
    let g = generterandom(256);
    let b = generterandom(256);

    let rgbcode = `rgb(${r},${g},${b})`;

    setColor(rgbcode);
  };

  useEffect(() => {
    if (typeofcolor === "hex") handelRandomHexColor();
    else handelRandomRgbColor();
  }, [typeofcolor]);
  return (
    <div
      className="container"
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Grenerate Hex Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Grenerate RGB Color</button>
      <button
        onClick={
          typeofcolor === "hex" ? handelRandomHexColor : handelRandomRgbColor
        }
      >
        Generate Random Color
      </button>

      <div
        style={{
          color: "white",
          fontWeight: "bolder",
          fontSize: "40px",
          position: "relative",
          top: "20rem",
        }}
      >
        {typeofcolor === "hex" ? "Hex code: " : "rgb code: "}
        {color}
      </div>
    </div>
  );
};

export default RandomColor;
