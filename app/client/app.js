import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import { DashBoardMain } from './container/DashBoardMain';

const browserHistory = createBrowserHistory();

const App = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={DashBoardMain} />
    </Switch>
  </Router>
);

export default App;
