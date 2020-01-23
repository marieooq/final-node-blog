import React from "react";
import "./Navigation.scss";

const categoriesArr = ["Lifestyle","Food","Travel","Movie","Photography","Social Media","Pets","Technology","Fashion","Beauty"];
const categories = categoriesArr.map(cat => (
    <div>{cat}</div>
));

const Navigation =() =>{
    return(
        <div className="nav_wrapper">
            {categories}
        </div>
    );
}

export default Navigation;