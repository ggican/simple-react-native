import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import formSubmitStyle from './index.style';

const FormSubmit = ({title = '', onSubmit = () => {}, isDisabled = false}) => {
  return (
    <TouchableOpacity
      onPress={onSubmit}
      activeOpacity={disabled ? 1 : 0.7}
      style={formSubmitStyle.style}
      disabled={isDisabled}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default FormSubmit;
