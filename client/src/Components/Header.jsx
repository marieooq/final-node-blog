import React from "react";
import "./Header.scss";
import bloggu_logo from "../images/bloggu_logo.png";

const Header =() =>{
    return(
        <nav>
            <div className="wrapper">
                <img className="logo" src={bloggu_logo}/>
                <div>Search</div>
            </div>
        </nav>
    );
}

export default Header;