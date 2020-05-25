import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StoreProvider} from './src/reducers/index';
import Login from './src/screens/Login';
import SplashScreen from './src/screens/SplashScreen';
import Main from './src/screens/Main';
import SettingScreen from './src/screens/SettingScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const NavigationTab = (routeTabList) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Main} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
};

export default NavigationTab;
