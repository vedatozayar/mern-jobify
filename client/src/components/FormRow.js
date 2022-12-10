import React from 'react';

const FormRow = ({ value, handleChange, type, name, labelText }) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {labelText || name}
      </label>
      <input
        value={value}
        onChange={handleChange}
        type={type}
        name={name}
        className='form-input'
      />
    </div>
  );
};

export default FormRow;
