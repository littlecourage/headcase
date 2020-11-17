import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';

const App = () => (
  <div>
    <header>
      <h1>Headcase</h1>
      <GreetingContainer />
    </header>

  </div>
);

export default App;