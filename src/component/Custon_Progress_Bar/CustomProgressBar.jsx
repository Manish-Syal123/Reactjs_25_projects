import React from "react";
import { useState } from "react";
import "./progress.css";

const CustomProgressBar = () => {
  const [progressPercent, setProgressPercent] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");

  const handleProgressPercentage = (e) => {
    const Value = e.target.value;
    setProgressPercent(Value);

    if (Value > 100) {
      setErrorMsg("Please enter value >=0 and <= 100.");
    } else {
      setErrorMsg("");
      setProgressPercent(Value);
    }
  };
  return (
    <div className="progress-bar-container">
      <h1>Custom progress Bar</h1>
      <div className="progress-bar">
        <div className="wrapper">
          {progressPercent >= 0 && progressPercent <= 100 ? (
            <div
              style={{ width: `${Math.min(progressPercent, 100)}%` }}
              className="innerWrapper"
            >
              {progressPercent}
            </div>
          ) : (
            <p>{errorMsg}</p>
          )}
        </div>
      </div>
      <div className="input-container">
        <label> Input Percentage : </label>
        <input
          type="number"
          value={progressPercent}
          onChange={handleProgressPercentage}
        />
      </div>
    </div>
  );
};

export default CustomProgressBar;
