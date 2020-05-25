import * as React from 'react';
import {AsyncStorage, Button, Text, TextInput, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FormInput from './src/components/Form/FormInput';
import FormSubmit from './src/components/Form/FormSubmit';
import Login from './src/scenes/Login';

const AuthContext = React.createContext();

function SplashScreen() {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}
