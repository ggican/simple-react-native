import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const formInputStyle = StyleSheet.create({
  style: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#d8d8d8',
    backgroundColor: '#fff',
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 16,
  },
});

// export default forntInputStyle;

const FormInput = (props) => {
  const {value = '', onChangeText = () => {}, placeholder = ''} = props;
  return (
    <TextInput
      style={formInputStyle.style}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default FormInput;
