import React from "react";
import useLocalStorage from "./useLocalStorage";
import "./theme.css";
const LightDarkMode = () => {
  //custom Hook
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const handletoggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  console.log(theme);
  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello world!</p>
        <button onClick={handletoggleTheme}>Change Theam</button>
      </div>
    </div>
  );
};

export default LightDarkMode;
