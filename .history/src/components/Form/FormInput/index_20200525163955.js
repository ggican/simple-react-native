import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import formInputStyle from './index.style';
import formGroupStyles from '../FormGroup';

const FormInput = (props) => {
  const {value = '', onChangeText = () => {}, placeholder = ''} = props;
  return (
    <formGroupStyles>
      <TextInput
        style={formInputStyle.style}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </formGroupStyles>
  );
};

export default FormInput;
