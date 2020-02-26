import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormField } from '../Field';
import { errors, inputRules } from '../../constants/formValidation';

export const ForgotPasswordForm = () => {
  const formFiled = {
    email: '',
  };

  const [formData, onSubmitLogin] = useState(formFiled);
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
      onSubmitLogin({
        ...formData,
        [name]: value,
      });
    }
  };

  const checkValidation = () => {
    return Object.keys(error).every((k) => !error[k]) && Object.values(formData).every(Boolean);
  };

  const onHandlePassRestore = (e) => {
    e.preventDefault();

    // submitLogin(formData);
  };

  return (
    <form className="unreg-user-form">
      <h3 className="form-title">Forgot your password?</h3>
      <h4 className="form-desc">Enter your email address below and we’ll get you back on track.</h4>
      <FormField
        label="Email address"
        name="email"
        type="email"
        placeholder="jonhdoe@gmail.com"
        value={formData.email}
        onChangeInput={onHandleChange}
        error={error.email}
      />
      <button
        type="submit"
        className="submit-form fill-in-btn"
        onClick={(e) => onHandlePassRestore(e)}
        disabled={!checkValidation()}
      >Request resent link
      </button>
      <Link to="/signin" className="link">Back to Sign in</Link>
    </form>
  );
};
