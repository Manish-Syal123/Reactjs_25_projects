import React, { useState } from "react";
import "./bmi.css";
const BMICalculator = () => {
  const [weight, setWeight] = useState(null);
  const [height, setheight] = useState(null);
  const [bmi, setBMI] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const calculateBMI = () => {
    if (!height || !weight) {
      setErrorMsg("Please enter both Height and Weight");
      return;
    }

    const numericHeight = parseFloat(height);
    const numericweight = parseFloat(weight);

    if (
      isNaN(numericHeight) ||
      isNaN(numericweight) ||
      numericHeight <= 0 ||
      numericweight <= 0
    ) {
      setErrorMsg(
        "Please Enter valid numeric values for both height and weight"
      );
      return;
    }

    const calculateHeightInMeters = numericHeight / 100;
    const calculateBmiValue = (
      numericweight /
      (calculateHeightInMeters * calculateHeightInMeters)
    ).toFixed(2);

    setBMI(calculateBmiValue);
    setErrorMsg("");
  };

  console.log(bmi);
  return (
    <div className="bmi-calculator-container">
      <h1>BMI Calculator</h1>
      <div className="input-container">
        <label> Height (cm): </label>
        <input
          onChange={(e) => setheight(e.target.value)}
          type="number"
          value={height}
        />
      </div>
      <div className="input-container">
        <label>Weight (kg):</label>
        <input
          onChange={(e) => setWeight(e.target.value)}
          type="number"
          value={weight}
        />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>
      {errorMsg ? <p className="error-msg-text">{errorMsg}</p> : null}
      {errorMsg !== "" ? null : (
        <p className="bmi-result-text">
          {bmi < 18.5
            ? "Under_Weight"
            : bmi >= 18.5 && bmi < 24.9
            ? "Normal Weight"
            : bmi >= 25 && bmi < 29.9
            ? "OverWeight"
            : "Obese"}
        </p>
      )}
    </div>
  );
};

export default BMICalculator;
