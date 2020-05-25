import React from 'react';
import {View} from 'react-native';

const Container = () => {
  const {children} = props;
  return <View>{children}</View>;
};

export default Container;
