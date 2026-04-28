import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Header from '../components/Header';
import CustomButton from '../components/CustomButton';
import {SCREENS} from '../navigation/screens';

const CheckoutScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.screen}>
      <Header />

      <View style={styles.content}>
        <Text style={styles.title}>CHECKOUT</Text>
        <Text style={styles.label}>Shipping address</Text>
        <Text style={styles.text}>
          Emily Carter{'\n'}742 Evergreen Terrace{'\n'}Springfield, IL 62704
        </Text>

        <Text style={styles.label}>Order summary</Text>
        <Text style={styles.text}>Subtotal: $149.96</Text>
        <Text style={styles.text}>Delivery: $5.99</Text>
        <Text style={styles.total}>Total: $155.95</Text>

        <CustomButton
          title="Place order"
          onPress={() => navigation.navigate(SCREENS.SUCCESS)}
        />
      </View>
    </View>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  screen: {flex: 1, backgroundColor: '#FFFFFF'},
  content: {padding: 20},
  title: {
    fontSize: 24,
    color: '#6F6F6F',
    fontFamily: 'PlusJakartaSans-SemiBold',
    marginBottom: 24,
  },
  label: {
    fontSize: 18,
    color: '#1C1C1C',
    fontFamily: 'PlusJakartaSans-SemiBold',
    marginTop: 20,
  },
  text: {
    marginTop: 8,
    fontSize: 15,
    color: '#6F6F6F',
    fontFamily: 'PlusJakartaSans-SemiBold',
    lineHeight: 22,
  },
  total: {
    marginTop: 12,
    marginBottom: 24,
    fontSize: 20,
    color: '#1C1C1C',
    fontFamily: 'PlusJakartaSans-SemiBold',
  },
});