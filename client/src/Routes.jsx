import React from 'react';
import { history } from './helpers/history';
import { Router, Route, Switch } from 'react-router-dom';
import RegisterForm from './containers/RegisterForm';
import infoContent from './components/infoContent';

export const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path='/' component={RegisterForm} />
      <Route exact path='/check-your-email' component={infoContent} />
    </Switch>
  </Router>
);
