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
import PackIndexContainer from './packs/pack_index_container';
import CategoryIndexContainer from './categories/category_index_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <GreetingContainer />
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/dashboard" component={UserDashContainer} />
      <Route exact path="/discover" component={CategoryIndexContainer} />
    </Switch>
  </div>
);

export default App;