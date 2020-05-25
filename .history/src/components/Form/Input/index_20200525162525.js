import React from 'react';
import formInputStyle from './index.style';

const Input = ({value = '', onChangeText = () => {}, placeholder = ''}) => {
  return (
    <TextInput
      style={formInputStyle.formInput}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default Input;
