import React from 'react';
import {TextInput} from 'react-native';
import formInputStyle from './index.style';
import FormGroup from '../FormGroup';

const FormInput = (props) => {
  const {
    value = '',
    onChangeText = () => {},
    placeholder = '',
    label = '',
    secureTextEntry = false,
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
      {error && <Text></Text>}
    </FormGroup>
  );
};

export default FormInput;
