import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import TabNavigator from './TabNavigator';
import ProfileScreen from '../screens/ProfileScreen';
import HelpScreen from '../screens/HelpScreen';
import {SCREENS} from './screens';

const Drawer = createDrawerNavigator();

// Drawer Navigator wraps the main app and provides access
// to secondary screens such as Profile and Help

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#1C1C1C',
        drawerInactiveTintColor: '#6F6F6F',
        drawerActiveBackgroundColor: '#F2F2F2',
        drawerLabelStyle: {
          fontFamily: 'PlusJakartaSans-SemiBold',
          fontSize: 15,
        },
        drawerStyle: {
          backgroundColor: '#FFFFFF',
          width: 280,
        },
      }}>
      <Drawer.Screen
        name={SCREENS.MAIN_TABS}
        component={TabNavigator}
        options={{title: 'Home'}}
/>

      <Drawer.Screen
        name={SCREENS.PROFILE}
        component={ProfileScreen}
        options={{title: 'Profile'}}
      />

      <Drawer.Screen
        name={SCREENS.HELP}
        component={HelpScreen}
        options={{title: 'Help'}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;