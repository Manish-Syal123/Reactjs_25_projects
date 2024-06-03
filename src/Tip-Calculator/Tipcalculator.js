import React, { useState } from "react";
import "./tip.css";
const Tipcalculator = () => {
  const [input, setInputs] = useState({
    billAmount: 0,
    tipPercentage: 10,
    noOfPeoples: 1,
    tipAmount: 0,
  });
  const [erorMsg, setErrorMsg] = useState("");

  const handleOnchange = (text, inputType) => {
    setInputs((prevState) => ({ ...prevState, [inputType]: text }));
  };

  const handleCalculateTip = () => {
    if (
      !input.billAmount ||
      input.billAmount <= 0 ||
      !input.tipPercentage ||
      input.tipPercentage <= 0
    ) {
      setErrorMsg(
        "please enter valid values for Bill amount and Tip Percentage "
      );
      return;
    }

    const bill = parseFloat(input.billAmount);
    const tip = (bill * input.tipPercentage) / 100;
    const totalAmount = bill + tip;
    const tipAmountPerPerson = tip / input.noOfPeoples;
    const totalAmountPerPerson = totalAmount / input.noOfPeoples;
    setInputs((prevState) => ({
      ...prevState,
      ["tipAmount"]: {
        totalAmount: totalAmount.toFixed(2),
        tipPerPerson: tipAmountPerPerson.toFixed(2),
        totalPerPerson: totalAmountPerPerson.toFixed(2),
      },
    }));
    // console.log(input.tipAmount.totalAmount);
  };

  return (
    <div className="tip-calculator">
      <h1>Tip calculator</h1>
      <div className="input-container">
        <label>Bill Amount: </label>
        <input
          type="number"
          value={input.billAmount}
          onChange={(event) => handleOnchange(event.target.value, "billAmount")}
        />
      </div>
      <div className="input-container">
        <label>Tip Percentage: </label>
        <input
          type="number"
          value={input.tipPercentage}
          onChange={(event) =>
            handleOnchange(event.target.value, "tipPercentage")
          }
        />
      </div>
      <div className="input-container">
        <label>Number of Peoples: </label>
        <input
          type="number"
          value={input.noOfPeoples}
          onChange={(event) =>
            handleOnchange(event.target.value, "noOfPeoples")
          }
        />
      </div>
      <button onClick={handleCalculateTip}>Calculate Tip</button>
      {input.tipAmount ? (
        <div className="tip-result">
          <p>Total Amount: {input.tipAmount.totalAmount}</p>
          <p>Tip Per Person: {input.tipAmount.tipPerPerson}</p>
          <p>Total Amount per Person: {input.tipAmount.totalPerPerson}</p>
        </div>
      ) : (
        <p>{erorMsg}</p>
      )}
    </div>
  );
};

export default Tipcalculator;
