import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormField } from '../Field';
import { errors, inputRules } from '../../constants/formValidation';

export const RecoverPasswordForm = () => {
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
      <h3 className="form-title mb-30">Please enter your new password</h3>
      <FormField
        label="new password"
        name="email"
        type="email"
        placeholder="new password"
        value={formData.email}
        onChangeInput={onHandleChange}
        error={error.email}
      />
      <FormField
        label="Password"
        name="email"
        type="email"
        placeholder="confirm password"
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
