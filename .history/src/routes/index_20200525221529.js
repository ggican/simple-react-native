import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationTab} from '../navigations';

import Login from '../screens/Login';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';

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

const NavigationTabs = () => <NavigationTab route={routeTabs}></NavigationTab>;

export {NavigationTabs};
