import React, { useState } from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import "./Signin.scss";
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
    <main>
      <header></header>
      <section>
        <Header />
        <div className="main_wrapper">
          <form onSubmit={signupForm}>
            <div className="group">
              <input
                type="text"
                placeholder="Enter yourname"
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
                placeholder="Re-enter your Password"
                value={userPass}
                onChange={e => handlePasswordChange(e.target.value)}
              />
            </div>
            <br />
            <input type="submit" className="btn" value="Submit" />
          </form>
        </div>
      </section>
    </main>
  );
};

export default Signup;
