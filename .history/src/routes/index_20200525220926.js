import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationTab} from '../navigations';

import Login from './src/screens/Login';
import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';
import SettingScreen from './src/screens/SettingScreen';

const Tab = createBottomTabNavigator();

const routeStack = [
  {
    component: Login,
    name: 'Login',
  },
  {
    component: SplashScreen,
    isSplashScreen: true,
    name: 'Login',
  },
  {
    component: SettingScreen,
    isTab: true,
    name: 'Login',
  },
];

const routeTabs = [
  {
    component: HomeScreen,
    name: 'Home',
  },
];

const NavigationTab = () => {
  return <NavigationTab route={routeTabs}></NavigationTab>;
};
