import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import formSubmitStyle from './index.style';

const FormSubmit = ({title = '', onSubmit = () => {}, isDisabled = false}) => {
  return (
    <TouchableOpacity
      onPress={onSubmit}
      activeOpacity={isDisabled ? 1 : 0.7}
      style={{backgroundColor: 'blue', padding: 12, width: '1005'}}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default FormSubmit;
