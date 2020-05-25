import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StoreProvider} from './src/reducers/index';
import Login from './src/screens/Login';
import SplashScreen from './src/screens/SplashScreen';
import Main from './src/screens/Main';

const Stack = createStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Main} />
      <Tab.Screen name="Settings" component={Main} />
    </Tab.Navigator>
  );
}

export default function App({navigation}) {
  const [state, setState] = React.useState({
    isLoading: false,
    isSignout: false,
    userToken: true,
  });

  return (
    <>
      <StoreProvider>
        <NavigationContainer>
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
              <MyTabs></MyTabs>
              // <Stack.Screen name="Home" component={Main} />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </StoreProvider>
    </>
  );
}
