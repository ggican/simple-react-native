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

const Stack = createStackNavigator();

export default function App({navigation}) {
  const [state, dispatch] = React.useState({
    isLoading: true,
    isSignout: false,
    userToken: null,
  });

  return (
    <>
      <StoreProvider>
        <NavigationContainer>
          <Stack.Navigator>
            {state.isLoading ? (
              // We haven't finished checking for the token yet
              <Stack.Screen name="Splash" component={SplashScreen} />
            ) : state.userToken == null ? (
              // No token found, user isn't signed in
              <Stack.Screen
                name="SignIn"
                component={Login}
                options={{
                  title: 'Sign in',
                  // When logging out, a pop animation feels intuitive
                  animationTypeForReplace: state.isSignout ? 'pop' : 'push',
                }}
              />
            ) : (
              // User is signed in
              <Stack.Screen name="Home" component={HomeScreen} />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </StoreProvider>
    </>
  );
}
