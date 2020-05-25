import React from 'react';
import formInputStyle from './index.style';

const FormInput = ({value = '', onChangeText = () => {}, placeholder = ''}) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default FormInput;
