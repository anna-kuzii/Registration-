import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export const FormField = ({
  label,
  type,
  name,
  placeholder,
  onChangeInput,
  value,
  error,
  intComp,
}) => {
  const handleChange = (e) => {
    onChangeInput(name, e.target.value);
  };

  return (
    <fieldset className="field-form">
      <label>
        <div>
          <p>{label}</p>
          {intComp}
        </div>
        <input type={type} placeholder={placeholder} onChange={handleChange} value={value[name]} />
      </label>
      {error && <p className="field-error">{error}</p>}
    </fieldset>
  );
};

FormField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChangeInput: PropTypes.func,
  error: PropTypes.string,
  intComp: PropTypes.elementType,
};
