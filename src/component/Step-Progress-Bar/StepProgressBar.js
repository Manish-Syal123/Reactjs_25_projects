import React, { useState } from "react";
import TestProgress from "./TestProgress.jsx";
import "./progress.css";

const StepProgressBar = () => {
  const [activeStep, SetActiveStep] = useState(0);
  const data = ["Step-1", "Step-2", "Step-3", "Step-4", "Step-5"];
  return (
    <div className="'step-progress-bar-container">
      <h1>Step progress Bar</h1>
      <TestProgress
        data={data}
        activeStep={activeStep}
        SetActiveStep={SetActiveStep}
      />
    </div>
  );
};

export default StepProgressBar;
