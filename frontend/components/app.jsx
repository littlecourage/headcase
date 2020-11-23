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
import UserDashContainer from './user_dash/user_dash_container';
import CategoryIndexContainer from './categories/category_index_container';
import PackShowContainer from './packs/pack_show_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <GreetingContainer />
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/dashboard" component={UserDashContainer} />
      <ProtectedRoute exact path="/discover" component={CategoryIndexContainer} />
      <ProtectedRoute exact path="/packs/:packId" component={PackShowContainer} />
    </Switch>
  </div>
);

export default App;