import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root';
import configureStore from "./store/store";
import { login, signup, logout } from './actions/session_actions';


document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();

  //Testing start
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.signup = signup;
  window.logout = logout;
  //Testing end

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
}); 