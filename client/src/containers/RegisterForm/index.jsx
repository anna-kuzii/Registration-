import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormField } from '../../components/field';
import { submitRegister } from './actions';
import './style.scss';

const RegisterForm = ({ submitRegister }) => (
  <form className="registration-form">
    <FormField label="Name" type="text" placeholder="John" />
    <FormField label="Surname" type="text" placeholder="Doe" />
    <FormField label="Username" type="text" placeholder="JDoe" />
    <FormField label="Email" type="email" placeholder="jonhdoe@gmail.com" />
    <FormField label="Password" type="password" placeholder="4 + characters" />

    <button
      type="button"
      className="sign-up"
      onClick={() => submitRegister()}
    >Sign Up</button>
  </form>
);

const mapDispatchToProps = {
  submitRegister,
};

RegisterForm.propTypes = {
  submitRegister: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(RegisterForm);
