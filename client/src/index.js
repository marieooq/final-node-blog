import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import HomePage from "./Components/HomePage";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import Article from "./Components/Article";
import Post from "./Components/Post";
import Profile from "./Components/Profile";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
 
library.add(faCheckSquare, faCoffee)

const Base = () => {
  return (
    <Router>
      <Route path="/post" exact component={Post} />
      <Route path="/signin" exact component={Signin} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/article/:id" exact component={Article} />
      <Route path="/u/:userid" exact component={Profile} />
      <Route path="/" exact component={HomePage} />
    </Router>
  );
};

ReactDOM.render(<Base />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
