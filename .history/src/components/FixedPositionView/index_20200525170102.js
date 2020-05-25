import React from 'react';
import {View} from 'react-native';

const FixedPositionView = (props) => {
  const {children, bottom, left, right} = props;
  return <View>{children}</View>;
};

export default FixedPositionView;
