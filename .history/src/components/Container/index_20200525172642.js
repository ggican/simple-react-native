import React from 'react';
import {View} from 'react-native';
import containerStyle from './index.style';

const Container = (props) => {
  const {children, style = {}} = props;

  return <View style={{...containerStyle, ...style}}>{children}</View>;
};

export default Container;
