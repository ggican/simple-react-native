import React from 'react';

const Input = () => {
  return (
    <TextInput
      placeholder="Username"
      value={value}
      onChangeText={setUsername}
    />
  );
};

export default Input;
