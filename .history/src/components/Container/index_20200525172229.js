import React from 'react';
import {View} from 'react-native';
import containerStyle from "./index.style"

const Container = () => {
  const {children} = props;
  return <View style={...containerStyle}>{children}</View>;
};

export default Container;
