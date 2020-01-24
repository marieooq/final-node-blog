import React from "react";
import "./Header.scss";
import bloggu_logo from "../images/bloggu_logo.png";

const Header =() =>{
    return(
        <nav>
            <div className="wrapper">
                <a href="/"><img className="logo" src={bloggu_logo}/></a>
                <div><a href="/signin">Login</a>/ <a href="/signup">Register</a></div>
            </div>
        </nav>
    );
}

export default Header;