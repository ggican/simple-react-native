import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StoreProvider} from './src/reducers/index';
import Login from './src/screens/Login';
import SplashScreen from './src/screens/SplashScreen';
import SettingScreen from './src/screens/SettingScreen';
import HomeScreen from './src/screens/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
}

const ApplicationScreen = () => {
  const [state, setState] = React.useState({
    isLoading: false,
    isSignout: false,
    userToken: null,
  });
  return (
    <Stack.Navigator>
      {state.isLoading ? (
        <Stack.Screen name="Splash" component={SplashScreen} />
      ) : state.userToken == null ? (
        <Stack.Screen
          name="SignIn"
          component={Login}
          options={{
            title: 'Sign in',
            animationTypeForReplace: state.isSignout ? 'pop' : 'push',
          }}
        />
      ) : (
        <Stack.Screen name="Simple Screen" component={MyTabs} />
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
