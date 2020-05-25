import Login from './src/screens/Login';
import SplashScreen from './src/screens/SplashScreen';
import Main from './src/screens/Main';
import SettingScreen from './src/screens/SettingScreen';

const RoutesList = [
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
