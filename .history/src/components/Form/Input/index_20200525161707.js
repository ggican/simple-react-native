import React from 'react';

const Input = ({value = ''}) => {
  return (
    <TextInput
      placeholder="Username"
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default Input;
