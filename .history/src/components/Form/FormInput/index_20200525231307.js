import React, {useState} from 'react';
import {TextInput, Text} from 'react-native';
import formInputStyle from './index.style';
import FormGroup from '../FormGroup';

const FormInput = (props) => {
  const {
    placeholder = '',
    label = '',
    secureTextEntry = false,
    name = 'input-name',
    onGetValue = () => {},
  } = props;
  const [isError, setError] = useState(false);
  const onChangeTextValue = (text) => {
    let isError = text.length < 1;
    setError(isError);
    onGetValue({
      value: text,
      isError: isError,
      name,
    });
  };
  return (
    <FormGroup label={label}>
      <TextInput
        secureTextEntry={secureTextEntry}
        style={formInputStyle.style}
        placeholder={placeholder}
        onChangeText={onChangeTextValue}
      />
      {isError && <Text style={{color: 'red'}}>Is Required</Text>}
    </FormGroup>
  );
};

export default FormInput;
