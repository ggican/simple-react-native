import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import formInputStyle from './index.style';
import FormGroup from '../FormGroup';

const FormInput = (props) => {
  const {
    value = '',
    onChangeText = () => {},
    placeholder = '',
    label = '',
  } = props;
  return (
    <FormGroup label={label}>
      <TextInput
        style={formInputStyle.style}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </FormGroup>
  );
};

export default FormInput;
