import * as React from 'react';
import {AsyncStorage, Button, Text, TextInput, View} from 'react-native';
const AuthContext = React.createContext();

const SplashScreen = () => {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
};
export default SplashScreen;
