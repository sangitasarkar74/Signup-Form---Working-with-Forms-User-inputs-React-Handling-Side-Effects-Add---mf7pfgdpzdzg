import React, { Component, useState } from "react";
import "../styles/App.css";
import useForm from "./useForm";
import validate from "./ValidateForm";

const SignUpForm = (props) => {
    const { handleChange, values, handleSubmit, errors } = useForm(
        props.submitForm,
    /* props.emailProfile, */ validate
    );

    /* Form must have the following Input Fields with given attributes:
  1) Name | data-testid = 'name'
  2) Email address | data-testid = 'email'
  3) Gender | data-testid = 'gender'
  4) Phone Number | data-testid = 'phoneNumber'
  5) Password | data-testid = 'password', type='password'
  6) Submit button | data-testid = 'submit' */

    return (
        <div id="main">
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    data-testid="name"
                />{" "}
                {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
                <br />
                <label>Email: </label>
                <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    data-testid="email"
                />{" "}
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                <br />
                <label>Gender: </label>
                <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={handleChange}
                    checked={values.gender === "male"}
                    data-testid="gender"
                />
                Male
                {errors.gender && <p style={{ color: "red" }}>{errors.gender}</p>}
                <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={handleChange}
                    checked={values.gender === "female"}
                    data-testid="gender"
                />
                Female
                {errors.gender && <p style={{ color: "red" }}>{errors.gender}</p>}
                <input
                    type="radio"
                    name="gender"
                    value="other"
                    onChange={handleChange}
                    checked={values.gender === "other"}
                    data-testid="gender"
                />
                Others
                {errors.gender && <p style={{ color: "red" }}>{errors.gender}</p>}
                <br />
                <label>Ph Number: </label>
                <input
                    type="text"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    data-testid="phoneNumber"
                />{" "}
                {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
                <br />
                <label>Password: </label>
                <input
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    data-testid="password"
                />{" "}
                {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
                <br />
                <button data-testid="submit">Submit</button>
            </form>
        </div>
    );
};

export default SignUpForm;