import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    gender: "male",
    phoneNumber: "",
    password: "",
    message: ""
  });
  function handleChange(el) {
    let name = el.target.name;
    let value = el.target.value;

    setInputs((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function handleClick(el) {
    let name = inputs.name.trim();
    let email = inputs.email.trim();
    let gender = inputs.gender.trim();
    let phoneNumber = inputs.phoneNumber.trim();
    let password = inputs.password.trim();
    console.log(gender);

    if (
      name === "" ||
      email === "" ||
      gender === "" ||
      phoneNumber === "" ||
      password === ""
    ) {
      setInputs((prevValue) => {
        return {
          ...prevValue,
          message: "All fields are mandatory"
        };
      });
      return;
    }

    if (!/^[\w\-\s]+$/.test(name)) {
      //for alpha numeric name
      setInputs((prevValue) => {
        return {
          ...prevValue,
          message: "Name is not alphanumeric"
        };
      });
      return;
    }

    if (!email.includes("@")) {
      setInputs((prevValue) => {
        return {
          ...prevValue,
          message: "Email must contain @"
        };
      });
      return;
    }

    if (gender !== "male" && gender !== "female" && gender !== "others") {
      setInputs((prevValue) => {
        return {
          ...prevValue,
          message: "Please identify as male, female or others"
        };
      });
      return;
    }

    if (isNaN(phoneNumber)) {
      setInputs((prevValue) => {
        return {
          ...prevValue,
          message: "Phone Number must contain only numbers"
        };
      });
      return;
    }

    if (password.length < 6) {
      setInputs((prevValue) => {
        return {
          ...prevValue,
          message: "Password must contain atleast 6 letters"
        };
      });
      return;
    }

    let msg = inputs.email.split("@");
    msg = msg[0];
    setInputs((prevValue) => {
      return {
        ...prevValue,
        message: `Hello ${msg}`
      };
    });
  }

  return (
    <div id="main">
      <div>
        <label>Name</label>
        <input data-testid='name' type="text" name="name" onChange={handleChange} value={inputs.name}></input>
      </div>
      <div>
        <label>Email Address</label>
        <input data-testid='email' type="text" onChange={handleChange} value={inputs.email}></input>
      </div>
      <div>
        <label>Gender</label>
        <select data-testid='gender' default="Male" value={inputs.gender} name="gender" onChange={handleChange}>
          <option value="male" >Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div>
        <label>Phone Number</label>
        <input data-testid='phoneNumber' type="text" onChange={handleChange} value={inputs.phoneNumber}></input>
      </div>
      <div>
        <label>Password</label>
        <input data-testid='password' type="password" onChange={handleChange} value={inputs.password}></input>
      </div>
      <div>
        <button type="submit" data-testid='submit' onClick={handleClick}>Submit</button>
      </div>
    </div>
  )
}
export default App;
