import React from 'react';

const Input = ({value = '', onChangeText = () => {}, placeholder = ''}) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default Input;
