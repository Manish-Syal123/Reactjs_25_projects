import React, { useRef } from "react";

const ScrollToSection = () => {
  const FirstageRef = useRef(null);
  const SecondageRef = useRef(null);
  const ThirdageRef = useRef(null);

  const handleSectionScroll = (getPageIndex) => {
    if (getPageIndex === 1) {
      FirstageRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (getPageIndex === 2) {
      SecondageRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (getPageIndex === 3) {
      ThirdageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        height: "50rem",
      }}
    >
      <h4>Scroll to a particular section</h4>

      <button onClick={() => handleSectionScroll(1)}>First</button>
      <button onClick={() => handleSectionScroll(2)}>Second</button>
      <button onClick={() => handleSectionScroll(3)}>Third</button>

      <div ref={FirstageRef} style={{ height: "80%", backgroundColor: "red" }}>
        first page
      </div>
      <div
        ref={SecondageRef}
        style={{ height: "80%", backgroundColor: "green" }}
      >
        Second page
      </div>
      <div
        ref={ThirdageRef}
        style={{ height: "80%", backgroundColor: "yellow" }}
      >
        Third page
      </div>
    </div>
  );
};

export default ScrollToSection;
