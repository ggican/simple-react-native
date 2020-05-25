import React from 'react';

const Input = () => {
  return (
    <TextInput
      placeholder="Username"
      value={username}
      onChangeText={setUsername}
    />
  );
};

export default Input;
