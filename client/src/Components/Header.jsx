import React from "react";
import "./Header.scss";
import bloggu_logo from "../images/bloggu_logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  let user;
  if (localStorage.getItem("user")) {
    user = JSON.parse(localStorage.getItem("user"));
  }
  console.log(user);
  return (
    <nav>
      <div className="wrapper">
        <a href="/">
          <img className="logo" src={bloggu_logo} />
        </a>
        <div>
          {user === undefined ? (
            <div>
              <Link to="/signin">Login</Link> /{" "}
              <Link to="/signup">Register</Link>
            </div>
          ) : (
            <div>
              <Link className="header_link" to={`/u/${user.userName}`}>{user.userName}</Link> / <Link className="header_link" to="/post">Create a New Post</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
