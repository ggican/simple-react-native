import React from 'react';
import {TextInput, Text} from 'react-native';
import formInputStyle from './index.style';
import FormGroup from '../FormGroup';

const FormInput = (props) => {
  const {
    value = '',
    onChangeText = () => {},
    placeholder = '',
    label = '',
    secureTextEntry = false,
    error = false,
  } = props;
  return (
    <FormGroup label={label}>
      <TextInput
        secureTextEntry={secureTextEntry}
        style={formInputStyle.style}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
      {error && <Text>Is Required</Text>}
    </FormGroup>
  );
};

export default FormInput;
