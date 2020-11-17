import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root';
import configureStore from "./store/store";
import { login, signup, logout } from './actions/session_actions';


document.addEventListener("DOMContentLoaded", () => {
  let store;

  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  //Testing start
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.login = login;
  // window.signup = signup;
  // window.logout = logout;
  //Testing end

  ReactDOM.render(<Root store={store} />, root);
}); 