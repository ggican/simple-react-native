import React from 'react';
import {View} from 'react-native';

const FixedPositionView = (props) => {
  const {children, styles} = props;
  return <View style={{width: '100%'}}>{children}</View>;
};

export default FixedPositionView;
