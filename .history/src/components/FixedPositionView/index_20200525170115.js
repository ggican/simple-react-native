import React from 'react';
import {View} from 'react-native';

const FixedPositionView = (props) => {
  const {children, bottom, left, right} = props;
  return <View style={{width: '100%', bottom: 0}}>{children}</View>;
};

export default FixedPositionView;
