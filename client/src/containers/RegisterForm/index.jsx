import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormField } from '../../components/field';
import { submitRegister } from './actions';
import { errors, inputRules } from '../../constants/formValidation';
import './style.scss';

const RegisterForm = ({ submitRegister }) => {
  const formFiled = {
    name: '',
    surname: '',
    username: '',
    email: '',
    password: '',
  };

  const [formData, onSubmitReg] = useState(formFiled);

  const [error, setError] = useState(formFiled);

  const validateField = (name, value) => {
    const rule = new RegExp(inputRules[name]);

    return rule.test(value) ? '' : errors[name];
  };

  const onHandleChange = (name, value) => {
    const errMsg = validateField(name, value);

    if (errMsg) {
      setError({
        ...error,
        [name]: errMsg,
      });
    } else {
      setError({
        ...error,
        [name]: '',
      });
      onSubmitReg({
        ...formData,
        [name]: value,
      });
    }
  };

  const checkValidation = () => {
    return Object.keys(error).every((k) => !error[k]) && Object.values(formData).every(Boolean);
  };

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
        value={formData.name}
        onChangeInput={onHandleChange}
        error={error.name}
      />
      <FormField
        label="Surname"
        name="surname"
        type="text"
        placeholder="Doe"
        value={formData.surname}
        onChangeInput={onHandleChange}
        error={error.surname}
      />
      <FormField
        label="Username"
        name="username"
        type="text"
        placeholder="JDoe"
        value={formData.username}
        onChangeInput={onHandleChange}
        error={error.username}
      />
      <FormField
        label="Email"
        name="email"
        type="email"
        placeholder="jonhdoe@gmail.com"
        value={formData.email}
        onChangeInput={onHandleChange}
        error={error.email}
      />
      <FormField
        label="Password"
        name="password"
        type="password"
        placeholder="4 + characters"
        value={formData.password}
        onChangeInput={onHandleChange}
        error={error.password}
      />

      <button
        type="submit"
        className="sign-up"
        onClick={(e) => onHandleRegistration(e)}
        disabled={!checkValidation()}
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
