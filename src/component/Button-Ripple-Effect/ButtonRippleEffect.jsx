import React, { useEffect, useState } from "react";
import "./ripple.css";
const ButtonRippleEffect = () => {
  const [isRipplingEffect, setIsRipplingEffect] = useState(false);
  const [coordinates, setCoordinates] = useState({ x: -1, y: -1 });

  const handleRippleEffect = (e) => {
    console.log(e.target.getBoundingClientRect(), e.clientX, e.clientY);
    const rect = e.target.getBoundingClientRect();
    setCoordinates({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  useEffect(() => {
    if (coordinates.x !== -1 && coordinates.y !== -1) {
      setIsRipplingEffect(true);
      setTimeout(() => setIsRipplingEffect(false), 300);
    } else {
      setIsRipplingEffect(false);
    }
  }, [coordinates]);

  useEffect(() => {
    if (!isRipplingEffect) setCoordinates({ x: -1, y: -1 });
  }, [isRipplingEffect]);

  console.log(coordinates, isRipplingEffect);

  return (
    <div className="ripple-effect-container">
      <h1>Button Ripple Effect</h1>
      <button onClick={handleRippleEffect} className="ripple-btn">
        {isRipplingEffect ? (
          <span
            className="ripple-inner-span"
            style={{ left: coordinates.x, top: coordinates.y }}
          ></span>
        ) : null}
        Click Me for Ripple Effect
      </button>
    </div>
  );
};

export default ButtonRippleEffect;
