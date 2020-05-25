import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import formInputStyle from './index.style';

const FormInput = (props) => {
  const {value = '', onChangeText = () => {}, placeholder = ''} = props;
  return (
    <TextInput
      style={formInputStyle.style}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default FormInput;
