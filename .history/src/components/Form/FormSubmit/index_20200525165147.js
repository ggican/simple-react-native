import React from 'react';
import {View, Text} from 'react-native';
import formGroupStyle from './index.style';

const Input = ({label = '', children}) => {
  return (
    <View style={formGroupStyle.formGroup}>
      <Button title="Sign in" onPress={() => signIn({username, password})} />
    </View>
  );
};

export default Input;
