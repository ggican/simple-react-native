import * as React from 'react';
import {AsyncStorage, Button, Text, TextInput, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FormInput from './src/components/Form/FormInput';
import FormSubmit from './src/components/Form/FormSubmit';
import Login from './src/screens/Login';
import SplashScreen from './src/screens/SplashScreen';
import {StoreProvider} from './src/reducers/index';

const AuthContext = React.createContext();

function HomeScreen() {
  return (
    <View>
      <Text>Signed in!</Text>
      <Button title="Sign out" />
    </View>
  );
}

export default HomeScreen;
