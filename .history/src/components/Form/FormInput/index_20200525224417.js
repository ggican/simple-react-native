import React from 'react';
import {TextInput, Text} from 'react-native';
import formInputStyle from './index.style';
import FormGroup from '../FormGroup';

const FormInput = (props) => {
  const {
    value = '',
    placeholder = '',
    label = '',
    secureTextEntry = false,
    error = false,
    name = 'input-name',
    onGetValue = () => {},
  } = props;
  const onChangeTextValue = (text) => {
    let isError = false;
    if (error.length > 0) {
      isError = true;
    }
    onGetValue({
      value: text,
      isError,
      name,
    });
  };
  return (
    <FormGroup label={label}>
      <TextInput
        secureTextEntry={secureTextEntry}
        style={formInputStyle.style}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeTextValue}
      />
      {error && <Text style={{color: 'red'}}>Is Required</Text>}
    </FormGroup>
  );
};

export default FormInput;
