import React, { useState } from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import "./Signup.scss";
import { api } from "../api";

const Signup = () => {
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userPass, setUserPass] = useState();

  const signupForm = async event => {
    event.preventDefault();
    if (userEmail !== undefined && userEmail !== "") {
      //handleSubmit(userEmail,userPass);
      const user = await api.post("/signup", {
        userName,
        email: userEmail,
        password: userPass
      });
      localStorage.setItem("user", user.data.user._id);
      setUserEmail("");
      setUserPass("");
    }
  };

  const handleNameChange = value => {
    setUserName(value);
  };

  const handleEmailChange = value => {
    setUserEmail(value);
  };

  const handlePasswordChange = value => {
    setUserPass(value);
  };

  return (
    <div className="signup_main">
      <div className="signup_header"></div>
      <div className="signup_section">
        <Header />
        <div className="signup_main_wrapper">
          <form onSubmit={signupForm}>
            <div className="group">
              <input
                type="text"
                placeholder="Enter your name"
                value={userName}
                onChange={e => handleNameChange(e.target.value)}
              />
              <br />
              <input
                type="email"
                placeholder="Enter your Email Address"
                value={userEmail}
                onChange={e => handleEmailChange(e.target.value)}
              />
              <br />
              <input
                type="password"
                placeholder="Enter your Password"
                value={userPass}
                onChange={e => handlePasswordChange(e.target.value)}
              />
            </div>
            <br />
            <input type="submit" className="btn" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
