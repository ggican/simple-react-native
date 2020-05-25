import React from 'react';
import {View} from 'react-native';

const Input = ({label = '', childreen}) => {
  return <View>{label.length > 0 && <Text>{label}</Text>}</View>;
};

export default Input;
