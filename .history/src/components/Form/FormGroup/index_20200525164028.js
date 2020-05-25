import React from 'react';
import {View, Text} from 'react-native';
import formGroupStyle from './index.style';

const Input = ({label = '', children}) => {
  return (
    <View style={formGroupStyle.style}>
      <View style={formGroupStyle.label}>
        {label.length > 0 && <Text>{label}</Text>}
      </View>
      <View>{children}</View>
    </View>
  );
};

export default Input;
