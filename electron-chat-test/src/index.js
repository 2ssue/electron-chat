import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./router/Login";
import Signup from "./router/Signup";
import Rooms from "./router/Rooms";
// import Room from "./router/Rooms";

const appRouting = (
  <Router>
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/rooms">
        <Rooms />
      </Route>
      <Route path="/">
        <App />
      </Route>
    </Switch>
  </Router>
);

ReactDOM.render(appRouting, document.getElementById("root"));
