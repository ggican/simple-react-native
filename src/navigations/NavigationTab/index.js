import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SettingScreen from '../../screens/SettingScreen';
import HomeScreen from '../../screens/HomeScreen';

const Tab = createBottomTabNavigator();

const NavigationTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'md-home';
          } else if (route.name === 'Settings') {
            iconName = 'md-options';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Home"
        options={{
          title: 'Home',
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Settings"
        options={{
          title: 'Your Settings',
        }}
        component={SettingScreen}
      />
    </Tab.Navigator>
  );
};

export default NavigationTab;
