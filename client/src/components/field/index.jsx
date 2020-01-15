import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export const FormField = ({ label, type, name, placeholder, onChangeInput, value }) => {
  const handleChange = (e) => {
    onChangeInput({
      ...value,
      [name]: e.target.value,
    });
  };

  return (
    <fieldset className="field-form">
      <label>{label}
        <input type={type} placeholder={placeholder} onChange={handleChange} value={value[name]}/>
      </label>
    </fieldset>
  );
};

FormField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.object,
  onChangeInput: PropTypes.func,
};
