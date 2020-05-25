import React from 'react';
import {View, Text} from 'react-native';
import formGroupStyle from './index.style';

const Input = ({label = '', children}) => {
  return (
    <Button title="Sign in" onPress={() => signIn({username, password})} />
  );
};

export default Input;
