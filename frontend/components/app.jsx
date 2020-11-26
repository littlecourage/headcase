import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
// import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import UserDashContainer from './user_dash/user_dash_container';
import CategoryIndexContainer from './categories/category_index_container';
import PackShowContainer from './packs/pack_show_container';
import LandingPageContainer from './landing_page/landing_page_container';
import PlayPageContainer from './audio_player/play_page_container';

const App = () => (
  <div>
    <GreetingContainer />
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/dashboard" component={UserDashContainer} />
      <ProtectedRoute exact path="/discover" component={CategoryIndexContainer} />
      <ProtectedRoute exact path="/packs/:packId" component={PackShowContainer} />
      <ProtectedRoute exact path="/play/:meditationId" component={PlayPageContainer} />
      <AuthRoute exact path="/" component={LandingPageContainer} />
    </Switch>
  </div>
);

export default App;