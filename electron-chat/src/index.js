import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./router/Login";
import Signup from "./router/Signup";
import Rooms from "./router/Rooms";
import firebase from "firebase";
require("dotenv").config();

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

if (window.location.href.slice(7, -1) === window.location.host) {
  window.location = "/login";
}

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: `${process.env.PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${process.env.PROJECT_ID}.firebaseio.com`,
  projectId: process.env.PROJECT_ID,
  storageBucket: `${process.env.PROJECT_ID}.appspot.com`,
  messagingSenderId: process.env.MESSAGE_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(appRouting, document.getElementById("root"));
