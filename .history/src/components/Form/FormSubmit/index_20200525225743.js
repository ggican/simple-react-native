import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import formSubmitStyle from './index.style';

const FormSubmit = ({title = '', onSubmit = () => {}, isDisabled = false}) => {
  return (
    <TouchableOpacity
      onPress={onSubmit}
      style={{
        backgroundColor: '#007bff',
        padding: 12,
        width: '100%',
        display: 'flex',
        opacity: isDisabled ? 0.7 : 1,
        justifyContent: 'center',
      }}>
      <Text
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#fff',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default FormSubmit;
