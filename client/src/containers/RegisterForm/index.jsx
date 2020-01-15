import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormField } from '../../components/field';
import { submitRegister } from './actions';
import './style.scss';

const RegisterForm = ({ submitRegister }) => {
  const [formData, onSubmitReg] = useState({
    name: '',
    surname: '',
    username: '',
    email: '',
    password: '',
  });

  const onHandleRegistration = (e) => {
    e.preventDefault();

    submitRegister(formData);
  };

  return (
    <form className="registration-form">
      <FormField
        label="Name"
        name="name"
        type="text"
        placeholder="John"
        value={formData}
        onChangeInput={onSubmitReg}
      />
      <FormField
        label="Surname"
        name="surname"
        type="text"
        placeholder="Doe"
        value={formData}
        onChangeInput={onSubmitReg}
      />
      <FormField
        label="Username"
        name="username"
        type="text"
        placeholder="JDoe"
        value={formData}
        onChangeInput={onSubmitReg}
      />
      <FormField
        label="Email"
        name="email"
        type="email"
        placeholder="jonhdoe@gmail.com"
        value={formData}
        onChangeInput={onSubmitReg}
      />
      <FormField
        label="Password"
        name="password"
        type="password"
        placeholder="4 + characters"
        value={formData}
        onChangeInput={onSubmitReg}
      />

      <button
        type="submit"
        className="sign-up"
        onClick={(e) => onHandleRegistration(e)}
      >Sign Up</button>
    </form>
  );
};

const mapDispatchToProps = {
  submitRegister,
};

RegisterForm.propTypes = {
  submitRegister: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(RegisterForm);
