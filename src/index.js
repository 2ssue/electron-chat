import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './router/Login';
import Signup from './router/Signup';
import Rooms from './router/Rooms';
import firebase from 'firebase';
import dotenv from 'dotenv';
dotenv.config();

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
    </Switch>
  </Router>
);

if (!window.location.hash || window.location.hash === '#/') {
  window.location.hash = '#/login';
}

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: `${process.env.REACT_APP_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${process.env.REACT_APP_PROJECT_ID}.firebaseio.com`,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: `${process.env.REACT_APP_PROJECT_ID}.appspot.com`,
  messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(appRouting, document.getElementById('root'));
