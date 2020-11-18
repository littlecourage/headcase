import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <header className="header">
      <Link to="/">
        <img src={window.logoUrl} alt="headspace logo" className="header-logo" />
      </Link>
      <GreetingContainer  />
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
    {/* <img src={window.backgroundUrl} alt="background image"/> */}
  </div>
);

export default App;