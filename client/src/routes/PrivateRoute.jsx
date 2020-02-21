import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// TODO temporary auth
const PrivateRoute = ({ component: Component, auth = true, ...rest }) => (
  <Route {...rest} render={ (props) => (
    auth ?
      <Component {...props} /> :
      <Redirect to="/signin" />
  )} />
);

const mapStateToProps = ({ isAuthenticated }) => ({
  auth: isAuthenticated,
});

PrivateRoute.propTypes = {
  component: PropTypes.elementType,
  auth: PropTypes.bool,
};

export default connect(mapStateToProps)(PrivateRoute);
