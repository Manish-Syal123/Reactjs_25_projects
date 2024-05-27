import React from "react";

const TestProgress = ({ data, activeStep, SetActiveStep }) => {
  //following 0 based indexing
  const handlePrevStep = () => {
    SetActiveStep((prevStep) => Math.max(prevStep - 1, 0)); // prevent it from going to negative indexing
  };
  const handleNextStep = () => {
    SetActiveStep((prevStep) => Math.min(prevStep + 1, data.length - 1));
  };

  function calculateCurrStepWidth() {
    return `${(100 / (data.length - 1)) * activeStep}%`;
  }
  return (
    <>
      <div className="steps">
        {data.map((item, index) => (
          <div
            className={`step ${index <= activeStep ? "active" : ""}`}
            key={index}
            style={{ width: calculateCurrStepWidth() }}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="step-button-wrapper">
        <button disabled={activeStep === 0} onClick={handlePrevStep}>
          Previous
        </button>
        <button
          disabled={activeStep === data.length - 1}
          onClick={handleNextStep}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default TestProgress;
