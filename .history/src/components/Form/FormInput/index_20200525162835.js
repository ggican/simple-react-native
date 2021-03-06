import React from 'react';
import {AsyncStorage, Button, Text, TextInput, View} from 'react-native';
// import formInputStyle from './index.style';

const FormInput = (props) => {
  const {value = '', onChangeText = () => {}, placeholder = ''} = props;
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default FormInput;
