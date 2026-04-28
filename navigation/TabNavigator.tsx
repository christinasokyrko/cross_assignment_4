import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ExploreScreen from '../screens/ExploreScreen';
import {HomeStackNavigator, CartStackNavigator} from './StackNavigator';
import {SCREENS} from './screens';

import HomeIcon from '../assets/icons/stash_home-light.svg';
import ExploreIcon from '../assets/icons/circum_menu-burger.svg';
import CartIcon from '../assets/icons/mdi-light_cart.svg';

const Tab = createBottomTabNavigator();

// Bottom Tab Navigator provides quick access to main app sections
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#1C1C1C',
        tabBarInactiveTintColor: '#6F6F6F',
        tabBarStyle: {
          height: 72,
          backgroundColor: '#FFFFFF',
          borderTopColor: '#D9D9D9',
        },
        tabBarLabelStyle: {
          fontSize: 13,
          fontFamily: 'PlusJakartaSans-SemiBold',
          marginBottom: 8,
        },
      }}>
      <Tab.Screen
        name={SCREENS.HOME}
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <HomeIcon width={24} height={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name={SCREENS.EXPLORE}
        component={ExploreScreen}
        options={{
          tabBarIcon: ({color}) => (
            <ExploreIcon width={24} height={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name={SCREENS.CART}
        component={CartStackNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <CartIcon width={24} height={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

// import React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import HomeScreen from '../screens/HomeScreen';
// import ExploreScreen from '../screens/ExploreScreen';
// import CartScreen from '../screens/CartScreen';
// import {SCREENS} from './screens';

// import HomeIcon from '../assets/icons/stash_home-light.svg';
// import ExploreIcon from '../assets/icons/circum_menu-burger.svg';
// import CartIcon from '../assets/icons/mdi-light_cart.svg';

// const Tab = createBottomTabNavigator();

// // Bottom Tab Navigator provides quick access to main app sections:
// // Home, Explore, and Cart

// const TabNavigator = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarActiveTintColor: '#1C1C1C',
//         tabBarInactiveTintColor: '#6F6F6F',
//         tabBarStyle: {
//           height: 72,
//           backgroundColor: '#FFFFFF',
//           borderTopColor: '#D9D9D9',
//         },
//         tabBarLabelStyle: {
//           fontSize: 13,
//           fontFamily: 'PlusJakartaSans-SemiBold',
//           marginBottom: 8,
//         },
//       }}>
//       <Tab.Screen
//         name={SCREENS.HOME}
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({color}) => (
//             <HomeIcon width={24} height={24} color={color} />
//           ),
//         }}
//       />

//       <Tab.Screen
//         name={SCREENS.EXPLORE}
//         component={ExploreScreen}
//         options={{
//           tabBarIcon: ({color}) => (
//             <ExploreIcon width={24} height={24} color={color} />
//           ),
//         }}
//       />

//       <Tab.Screen
//         name={SCREENS.CART}
//         component={CartScreen}
//         options={{
//           tabBarIcon: ({color}) => (
//             <CartIcon width={24} height={24} color={color} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default TabNavigator;