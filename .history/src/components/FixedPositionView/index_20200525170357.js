import React from 'react';
import {View} from 'react-native';

const FixedPositionView = (props) => {
  const {children, style} = props;
  return (
    <View style={{width: '100%', position: 'fixed', ...style}}>{children}</View>
  );
};

export default FixedPositionView;
