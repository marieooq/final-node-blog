import React, { useState } from "react";
import Header from "./Header";
// import "./Signin.scss";
import { api } from "../api";

const Signin = () => {
  const [userEmail, setUserEmail] = useState();
  const [userPass, setUserPass] = useState();

  const signinForm = async event => {
    event.preventDefault();
    if (userEmail !== undefined && userEmail !== "") {
      //handleSubmit(userEmail,userPass);
      const user = await api.post("/signin", {
        email: userEmail,
        password: userPass
      });
      localStorage.setItem("user", user.data.user._id);

      setUserEmail("");
      setUserPass("");
    }
  };

  const handleEmailChange = value => {
    setUserEmail(value);
  };

  const handlePasswordChange = value => {
    setUserPass(value);
  };

  return (
    <div className="signin_main">
      <div className="signin_header"></div>
      <div className="signin_section">
        <Header />
        <div className="main_wrapper">
          <form onSubmit={signinForm}>
            <div className="group">
              <input
                type="text"
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

export default Signin;
