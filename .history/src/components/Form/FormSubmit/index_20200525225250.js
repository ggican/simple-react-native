import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import formSubmitStyle from './index.style';

const FormSubmit = ({title = '', onSubmit = () => {}}) => {
  return (
    <TouchableOpacity
      onPress={onSubmit}
      style={formSubmitStyle.style}
      disabled={true}>
      <Text>I'm disabled</Text>
    </TouchableOpacity>
  );
};

export default FormSubmit;
