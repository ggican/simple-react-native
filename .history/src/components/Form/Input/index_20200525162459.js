import React from 'react';

const Input = ({value = '', onChangeText = () => {}, placeholder = ''}) => {
  return (
    <TextInput
      style={forntInputStyle.formInput}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default Input;
