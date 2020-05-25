import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {useStore} from '../../reducers';
import service from './index.service.js';

const SettingScreen = () => {
  const {dispatch, state} = useStore();
  const onLogout = () => {
    service.logout({
      dispatch,
    });
  };
  return (
    <View>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: '#fff',
            padding: 12,
            borderBottomWidth: 1,
            letterSpacing: '1em',
            borderBottomColor: '#d8d8d8',
          }}
          onPress={onLogout}>
          <Text style={{fontSize: 16}}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingScreen;
