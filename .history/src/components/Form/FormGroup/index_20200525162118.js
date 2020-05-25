import React from 'react';
import {View} from 'react-native';

const Input = ({value = '', onChangeText = () => {}, placeholder = ''}) => {
  return (
    <View>
      <Text>{label}</Text>
    </View>
  );
};

export default Input;
