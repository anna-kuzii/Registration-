import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export const FormField = ({ label, type, placeholder }) => (
  <fieldset className="field-form">
    <label>{label}
      <input type={type} placeholder={placeholder} />
    </label>
  </fieldset>
);

FormField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};
