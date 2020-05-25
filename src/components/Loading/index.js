import React from 'react';
import {ActivityIndicator, View} from 'react-native';

const Loading = (props) => {
  const {size = 'large', color = '#0000ff', status = false} = props;
  if (!status) {
    return false;
  }
  return (
    <View
      style={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(107, 107, 107, 0.21)',
        position: 'absolute',
        elevation: 8,
      }}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default Loading;
