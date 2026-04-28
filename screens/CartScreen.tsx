import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Header from '../components/Header';
import CustomButton from '../components/CustomButton';
import {SCREENS} from '../navigation/screens';

const CartScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.screen}>
      <Header />

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>CART</Text>

        <View style={styles.cartItem}>
          <Image source={require('../assets/images/outfit-details/straight-leg-denim-jeans.jpg')} style={styles.image} />

          <View style={styles.info}>
            <Text style={styles.name}>Straight-Leg Denim Jeans</Text>
            <Text style={styles.price}>$89.99</Text>

            <View style={styles.quantityRow}>
              <Text style={styles.qtyButton}>-</Text>
              <Text style={styles.qty}>1</Text>
              <Text style={styles.qtyButton}>+</Text>
            </View>
          </View>

          <Text style={styles.remove}>×</Text>
        </View>

        <View style={styles.summary}>
          <View style={styles.row}>
            <Text style={styles.summaryText}>Subtotal</Text>
            <Text style={styles.summaryText}>$149.96</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.summaryText}>Delivery</Text>
            <Text style={styles.summaryText}>$5.99</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.total}>Total</Text>
            <Text style={styles.total}>$155.95</Text>
          </View>
        </View>

        <CustomButton
          title="Proceed to checkout"
          onPress={() => navigation.navigate(SCREENS.CHECKOUT)}
        />
      </ScrollView>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  content: {
    paddingHorizontal: 20,
    paddingBottom: 24,
  },

  title: {
    textAlign: 'center',
    fontSize: 24,
    marginVertical: 28,
    color: '#6F6F6F',
    fontFamily: 'PlusJakartaSans-SemiBold',
    letterSpacing: 1,
  },

  cartItem: {
    flexDirection: 'row',
    marginBottom: 28,
    alignItems: 'flex-start',
  },

  image: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    backgroundColor: '#F2F2F2',
  },

  info: {
    flex: 1,
    marginLeft: 16,
  },

  name: {
    fontSize: 16,
    color: '#1C1C1C',
    fontFamily: 'PlusJakartaSans-SemiBold',
  },

  price: {
    marginTop: 4,
    fontSize: 15,
    color: '#6F6F6F',
    fontFamily: 'PlusJakartaSans-SemiBold',
  },

  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
    gap: 20,
  },

  qtyButton: {
    width: 42,
    height: 42,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 12,
    textAlign: 'center',
    lineHeight: 40,
    fontSize: 18,
    color: '#1C1C1C',
  },

  qty: {
    fontSize: 16,
    color: '#1C1C1C',
  },

  remove: {
    fontSize: 28,
    color: '#6F6F6F',
  },

  summary: {
    borderTopWidth: 1,
    borderTopColor: '#D9D9D9',
    paddingTop: 24,
    marginTop: 20,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },

  summaryText: {
    fontSize: 15,
    color: '#6F6F6F',
    fontFamily: 'PlusJakartaSans-SemiBold',
  },

  divider: {
    height: 1,
    backgroundColor: '#D9D9D9',
    marginBottom: 18,
  },

  total: {
    fontSize: 16,
    color: '#1C1C1C',
    fontFamily: 'PlusJakartaSans-SemiBold',
  },
});

// import React from 'react';
// import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';

// import Header from '../components/Header';
// import CustomButton from '../components/CustomButton';

// const CartScreen = () => {
//   return (
//     <View style={styles.screen}>
//       <Header />

//       <ScrollView contentContainerStyle={styles.content}>
//         <Text style={styles.title}>CART</Text>

//         <View style={styles.cartItem}>
//           <Image source={require('../assets/images/outfit-details/straight-leg-denim-jeans.jpg')} style={styles.image} />

//           <View style={styles.info}>
//             <Text style={styles.name}>Straight-Leg Denim Jeans</Text>
//             <Text style={styles.price}>$89.99</Text>

//             <View style={styles.quantityRow}>
//               <Text style={styles.qtyButton}>-</Text>
//               <Text style={styles.qty}>1</Text>
//               <Text style={styles.qtyButton}>+</Text>
//             </View>
//           </View>

//           <Text style={styles.remove}>×</Text>
//         </View>

//         <View style={styles.summary}>
//           <View style={styles.row}>
//             <Text style={styles.summaryText}>Subtotal</Text>
//             <Text style={styles.summaryText}>$149.96</Text>
//           </View>

//           <View style={styles.row}>
//             <Text style={styles.summaryText}>Delivery</Text>
//             <Text style={styles.summaryText}>$5.99</Text>
//           </View>

//           <View style={styles.divider} />

//           <View style={styles.row}>
//             <Text style={styles.total}>Total</Text>
//             <Text style={styles.total}>$155.95</Text>
//           </View>
//         </View>

//         <CustomButton title="Proceed to checkout" />
//       </ScrollView>
//     </View>
//   );
// };

// export default CartScreen;

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },

//   content: {
//     paddingHorizontal: 20,
//     paddingBottom: 24,
//   },

//   title: {
//     textAlign: 'center',
//     fontSize: 24,
//     marginVertical: 28,
//     color: '#6F6F6F',
//     fontFamily: 'PlusJakartaSans-SemiBold',
//     letterSpacing: 1,
//   },

//   cartItem: {
//     flexDirection: 'row',
//     marginBottom: 28,
//     alignItems: 'flex-start',
//   },

//   image: {
//     width: 120,
//     height: 120,
//     resizeMode: 'contain',
//     backgroundColor: '#F2F2F2',
//   },

//   info: {
//     flex: 1,
//     marginLeft: 16,
//   },

//   name: {
//     fontSize: 16,
//     color: '#1C1C1C',
//     fontFamily: 'PlusJakartaSans-SemiBold',
//   },

//   price: {
//     marginTop: 4,
//     fontSize: 15,
//     color: '#6F6F6F',
//     fontFamily: 'PlusJakartaSans-SemiBold',
//   },

//   quantityRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 24,
//     gap: 20,
//   },

//   qtyButton: {
//     width: 42,
//     height: 42,
//     borderWidth: 1,
//     borderColor: '#D9D9D9',
//     borderRadius: 12,
//     textAlign: 'center',
//     lineHeight: 40,
//     fontSize: 18,
//     color: '#1C1C1C',
//   },

//   qty: {
//     fontSize: 16,
//     color: '#1C1C1C',
//   },

//   remove: {
//     fontSize: 28,
//     color: '#6F6F6F',
//   },

//   summary: {
//     borderTopWidth: 1,
//     borderTopColor: '#D9D9D9',
//     paddingTop: 24,
//     marginTop: 20,
//   },

//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 18,
//   },

//   summaryText: {
//     fontSize: 15,
//     color: '#6F6F6F',
//     fontFamily: 'PlusJakartaSans-SemiBold',
//   },

//   divider: {
//     height: 1,
//     backgroundColor: '#D9D9D9',
//     marginBottom: 18,
//   },

//   total: {
//     fontSize: 16,
//     color: '#1C1C1C',
//     fontFamily: 'PlusJakartaSans-SemiBold',
//   },
// });