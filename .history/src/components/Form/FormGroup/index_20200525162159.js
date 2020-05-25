import React from 'react';
import {View} from 'react-native';

const Input = ({label = '', children}) => {
  return (
    <View>
      <View>{label.length > 0 && <Text>{label}</Text>}</View>
      <View>{children}</View>
    </View>
  );
};

export default Input;
