import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import OutfitDetailsScreen from '../screens/OutfitDetailsScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import SuccessScreen from '../screens/SuccessScreen';
import {SCREENS} from './screens';

const Stack = createNativeStackNavigator();

// Home stack keeps bottom tabs visible while opening outfit details
export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={SCREENS.HOME} component={HomeScreen} />
      <Stack.Screen
        name={SCREENS.OUTFIT_DETAILS}
        component={OutfitDetailsScreen}
      />
    </Stack.Navigator>
  );
};

// Cart stack keeps bottom tabs visible through checkout flow
export const CartStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={SCREENS.CART} component={CartScreen} />
      <Stack.Screen name={SCREENS.CHECKOUT} component={CheckoutScreen} />
      <Stack.Screen name={SCREENS.SUCCESS} component={SuccessScreen} />
    </Stack.Navigator>
  );
};

// import React from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import TabNavigator from './TabNavigator';
// import OutfitDetailsScreen from '../screens/OutfitDetailsScreen';
// import CheckoutScreen from '../screens/CheckoutScreen';
// import SuccessScreen from '../screens/SuccessScreen';
// import {SCREENS} from './screens';

// const Stack = createNativeStackNavigator();

// // Stack Navigator handles linear transitions:
// // Main tabs → outfit details → checkout → success screen

// const StackNavigator = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name={SCREENS.MAIN_TABS}
//         component={TabNavigator}
//         options={{headerShown: false}}
//       />

//       <Stack.Screen
//         name={SCREENS.OUTFIT_DETAILS}
//         component={OutfitDetailsScreen}
//         options={{
//           title: 'Outfit Details',
//           headerTintColor: '#1C1C1C',
//         }}
//       />

//       <Stack.Screen
//         name={SCREENS.CHECKOUT}
//         component={CheckoutScreen}
//         options={{
//           title: 'Checkout',
//           headerTintColor: '#1C1C1C',
//         }}
//       />

//       <Stack.Screen
//         name={SCREENS.SUCCESS}
//         component={SuccessScreen}
//         options={{
//           title: 'Success',
//           headerTintColor: '#1C1C1C',
//         }}
//       />
//     </Stack.Navigator>
//   );
// };

// export default StackNavigator;