import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Base = () => {
  return (
    <Router>
      <Route path="/" exact component={App} />
      {/* <Route path="/:id" exact component={Article} />
      <Route path="/post" exact component={Post} />
      <Route path="/signin" exact component={Signin} />
      <Route path="/signup" exact component={Signup} /> */}
    </Router>
  );
};

ReactDOM.render(<Base />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
