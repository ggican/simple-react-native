import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Login from './src/screens/Login';
import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';
import SettingScreen from './src/screens/SettingScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Main} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
}

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
