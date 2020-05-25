import Login from './src/screens/Login';
import SplashScreen from './src/screens/SplashScreen';
import Main from './src/screens/Main';
import SettingScreen from './src/screens/SettingScreen';

const Routes = [
  {
    component: Login,
    name: 'Login',
  },
  {
    component: SplashScreen,
    name: 'Login',
  },
  {
    component: SettingScreen,
    isTab: true,
    name: 'Login',
  },
];
