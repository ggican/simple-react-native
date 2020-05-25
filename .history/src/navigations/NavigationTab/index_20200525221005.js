import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const NavigationTab = (routeTabList) => {
  return (
    <Tab.Navigator>
      {routeTabList.map((item, key) => {
        return (
          <Tab.Screen name={item.name} key={key} component={item.component} />
        );
      })}
    </Tab.Navigator>
  );
};

export default NavigationTab;
