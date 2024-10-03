import React, { useState } from "react";
import "../utils/Assets/CSS/SignUp.css";
import Header from "../Reusables/Header";
import Footer from "../Reusables/Footer";


const SignUp = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmedPassword: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmedPassword) {
      setMessage("Successfully submitted the form!");
    } else {
      setMessage("Passwords do not match!");
    }

    setFormData({
      userName: "",
      email: "",
      password: "",
      confirmedPassword: "",
    });
  };

  return (
    <div className="main">
    <Header/>
      <div className="container">
        <div className="image"></div>
        <div className="form-container">
          <h2>Create Account</h2>
          <p>
            Welcome! Enter Your Details And Start
            <br /> Creating, Collecting And Bidding Artwork.
          </p>
          {message && (
            <p
              style={{
                color: message.includes("Successfully") ? "green" : "red",
              }}
            >
              {message}
            </p>
          )}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="userName"
              placeholder="Username"
              value={formData.userName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength="8"
            />
            <input
              type="password"
              name="confirmedPassword"
              placeholder="Confirm Password"
              value={formData.confirmedPassword}
              onChange={handleChange}
              required
              minLength="8"
            />
            <button type="submit">Create account</button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default SignUp;
