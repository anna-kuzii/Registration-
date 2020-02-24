import React from 'react';
import { history } from '../utils/history';
import { Router, Route, Switch } from 'react-router-dom';
import CallComponent from '../containers/CallComponent';
import { RegisterLayout } from '../components/Layout';
import Error from '../containers/Error';

export const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route path='/' component={ RegisterLayout } />
      <Route exact path='/user/:token' component={CallComponent} />
      <Route exact path='/error' component={Error} />
    </Switch>
  </Router>
);
