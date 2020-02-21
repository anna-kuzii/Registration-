import React from 'react';
import { history } from '../utils/history';
import { Router, Route, Switch } from 'react-router-dom';
import RegisterForm from '../containers/RegisterForm';
import infoContent from '../components/infoContent';
import { LoginForm } from '../components/LoginForm';
import PrivateRoute from './PrivateRoute';

export const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path='/signin' component={RegisterForm} />
      <Route exact path='/login' component={LoginForm} />
      <PrivateRoute exact path='/check-your-email' component={infoContent} />
    </Switch>
  </Router>
);
