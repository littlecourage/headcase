import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root';
import configureStore from "./store/store";


document.addEventListener("DOMContentLoaded", () => {

  const root = document.getElementById("root");
  const store = configureStore();
  ReactDOM.render(<h1>Welcome to headcase</h1>, root);

  window.getState = store.getState;
  window.dispatch = store.dispatch;
}); 