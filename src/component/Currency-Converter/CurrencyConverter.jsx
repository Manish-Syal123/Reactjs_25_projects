import React, { useEffect, useState } from "react";
const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [exchangeRate, setExchangeRate] = useState(0);
  const [convertedAmount, setConvertedAmont] = useState("");

  const fetchExchangeRate = async () => {
    const apiResponse = await fetch(
      `https://open.er-api.com/v6/latest/${fromCurrency}`,
      {
        method: "GET",
      }
    );
    const result = await apiResponse.json();
    console.log(result);

    const getExchangeRate = result?.rates[toCurrency];
    setExchangeRate(getExchangeRate);
    setConvertedAmont((amount * getExchangeRate).toFixed(2));
  };

  useEffect(() => {
    fetchExchangeRate();
  }, [fromCurrency, toCurrency, amount]);

  return (
    <div>
      <h1>Crrency-converter</h1>
      <div>
        <input
          type="number"
          onChange={(event) => setAmount(event.target.value)}
          value={amount}
          name="amount"
          placeholder="Enter your Amount"
        />

        <select
          value={fromCurrency}
          onChange={(event) => setFromCurrency(event.target.value)}
        >
          <option value={"USD"}>USD</option>
          <option value={"INR"}>INR</option>
          <option value={"EUR"}>EUR</option>
        </select>
        <p>TO</p>
        <div>
          <input type="text" value={convertedAmount} readOnly />
          <select
            value={toCurrency}
            onChange={(event) => setToCurrency(event.target.value)}
          >
            <option value={"EUR"}>EUR</option>
            <option value={"INR"}>INR</option>
            <option value={"USD"}>USD</option>
          </select>
        </div>
        <p>
          exchange rate: 1 {fromCurrency} = {exchangeRate} {toCurrency}{" "}
        </p>
      </div>
    </div>
  );
};

export default CurrencyConverter;
