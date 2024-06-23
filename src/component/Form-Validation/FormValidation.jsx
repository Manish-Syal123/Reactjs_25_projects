import React, { useState } from "react";
import "./formvalidation.css";
const FormValidation = () => {
  const [formData, setFormdata] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormdata({
      ...formData,
      [event.target.name]: event.target.value, //or [name]: value  // as we have already these from event
    });

    validateInput(name, value);
  };

  const validateInput = (getName, getValue) => {
    switch (getName) {
      case "username":
        setErrorMsg((prevErrors) => ({
          ...prevErrors,
          username:
            getValue.length < 3
              ? "UserName must be of Atleast 3 Characters!"
              : "",
        }));
        break;
      case "email":
        setErrorMsg((prevErrors) => ({
          ...prevErrors,
          email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(getValue)
            ? ""
            : "Invalid email Address",
        }));
        break;
      case "password":
        setErrorMsg((prevErrors) => ({
          ...prevErrors,
          password:
            getValue.length < 5 ? "Password must be atleast 5 Characters!" : "",
        }));
        break;

      default:
        break;
    }
  };

  //   console.log(formData);
  console.log(errorMsg);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const validateErrors = {};

    Object.keys(formData).forEach((dataItem) => {
      validateInput(dataItem, formData[dataItem]);
      if (errorMsg[dataItem]) {
        validateErrors[dataItem] = errorMsg[dataItem];
      }
    });

    setErrorMsg((prevErrors) => ({
      ...prevErrors,
      ...validateErrors,
    }));

    if (Object.values(validateErrors).every((error) => error === " ")) {
      //perform your form submition logic
    } else {
      //   console.log("Error is Present Please fix");
      alert("Error is Present Please fix");
    }
  };
  return (
    <div className="form-validation-container">
      <h1>Simple Form validation</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username"> User Name: </label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            placeholder="Enter your UserName"
            onChange={handleFormChange}
          />

          <span>{errorMsg.username}</span>
        </div>
        <div className="input-wrapper">
          <label htmlFor="email"> User Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            placeholder="Enter your Email"
            onChange={handleFormChange}
          />
          <span>{errorMsg.email}</span>
        </div>
        <div className="input-wrapper">
          <label htmlFor="password"> User Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            placeholder="Enter your Password"
            onChange={handleFormChange}
          />
          <span>{errorMsg.password}</span>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormValidation;
