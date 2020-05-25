import * as React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';

// navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// reducer
import {useStore} from './src/reducers';
import {StoreProvider} from './src/reducers/index';
import {servicesAction} from './src/reducers';

import {NavigationTab} from './src/navigations';

// pages
import Login from './src/screens/Login';
import SplashScreen from './src/screens/SplashScreen';

// variable navigation
const Stack = createStackNavigator();

const ApplicationScreen = () => {
  const [states, setState] = React.useState({
    isLoading: false,
    isSignout: false,
    userToken: null,
  });
  const {dispatch, state} = useStore();
  let status = false;
  React.useEffect(() => {
    const checkAuth = async () => {
      let userToken = false;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {}
      if (userToken) {
        console.log(JSON.parse(userToken));

        servicesAction(dispatch).reduxSetToken({
          value: JSON.parse(userToken),
        });
      }
    };
    checkAuth();
  }, []);
  return (
    <Stack.Navigator>
      {states.isLoading ? (
        <Stack.Screen name="Splash" component={SplashScreen} />
      ) : !state.user.token ? (
        <Stack.Screen
          name="SignIn"
          component={Login}
          options={{
            title: 'Sign in',
            animationTypeForReplace: state.isSignout ? 'pop' : 'push',
          }}
        />
      ) : (
        <Stack.Screen name="Simple Screen" component={NavigationTab} />
      )}
    </Stack.Navigator>
  );
};

export default function App({navigation}) {
  return (
    <StoreProvider>
      <NavigationContainer>
        <ApplicationScreen></ApplicationScreen>
      </NavigationContainer>
    </StoreProvider>
  );
}
