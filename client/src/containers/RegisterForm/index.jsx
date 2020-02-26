import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormField } from '../../components/Field';
import Loader from '../../components/Loader';
import { submitRegister } from './actions';
import { errors, inputRules } from '../../constants/formValidation';
import './style.scss';

const RegisterForm = ({ submitRegister, loading }) => {
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
    <Fragment>
      { !loading ?
      <form className="unreg-user-form">
        <h3 className="form-title">Create Account</h3>
        <div className="social-network-block">
          <div className="facebook-icon" />
          <div className="google-icon" />
        </div>
        <h4 className="form-desc">Or use your email for registration:</h4>
        <FormField
          label="First name"
          name="name"
          type="text"
          placeholder="John"
          value={formData.name}
          onChangeInput={onHandleChange}
          error={error.name}
        />
        <FormField
          label="Last name"
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
          className="submit-form fill-in-btn"
          onClick={(e) => onHandleRegistration(e)}
          disabled={!checkValidation()}
        >Sign Up
        </button>
      </form> :
      <Loader /> }
    </Fragment>
  );
};

const mapDispatchToProps = {
  submitRegister,
};

const mapStateToProps = ({ user: { loading }}) => ({
  loading,
});

RegisterForm.propTypes = {
  submitRegister: PropTypes.func,
  loading: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
