import React from 'react';
import PropTypes from 'prop-types';

const TextInputGroup = (props) => {
  const { label, name, value, placeholder, type, onChange } = props;
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input 
        className="form-control form-control-lg" 
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}/>    
    </div>
  );
};

TextInputGroup.defaultProps = {
  type: 'text'
}

TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired, 
  name: PropTypes.string.isRequired, 
  value: PropTypes.string.isRequired, 
  placeholder: PropTypes.string.isRequired, 
  type: PropTypes.string.isRequired, 
  onChange: PropTypes.func.isRequired
}

export default TextInputGroup;
