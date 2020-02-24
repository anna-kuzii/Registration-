import React from 'react';
import { history } from '../utils/history';
import { Router, Route, Switch } from 'react-router-dom';
import RegisterForm from '../containers/RegisterForm';
import infoContent from '../components/InfoContent';
import CallComponent from '../containers/CallComponent';
import { LoginForm } from '../components/LoginForm';
import Error from '../containers/Error';
import PrivateRoute from './PrivateRoute';

export const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path='/signin' component={RegisterForm} />
      <Route exact path='/user/:token' component={CallComponent} />
      <Route exact path='/login' component={LoginForm} />
      <Route exact path='/error' component={Error} />
      <PrivateRoute exact path='/check-your-email' component={infoContent} />
    </Switch>
  </Router>
);
