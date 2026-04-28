import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Header from '../components/Header';
import CustomButton from '../components/CustomButton';
import {SCREENS} from '../navigation/screens';

const SuccessScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.screen}>
      <Header />

      <View style={styles.content}>
        <Text style={styles.title}>Order placed successfully</Text>

        <Text style={styles.message}>
          Your order has been confirmed and will be shipped soon. You’ll receive
          a tracking number via email.
        </Text>

        <CustomButton
          title="Continue shopping"
          onPress={() => navigation.navigate(SCREENS.HOME)}
        />
      </View>
    </View>
  );
};

export default SuccessScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    color: '#1C1C1C',
    fontFamily: 'PlusJakartaSans-SemiBold',
    textAlign: 'center',
    marginBottom: 16,
  },
  message: {
    fontSize: 15,
    color: '#6F6F6F',
    fontFamily: 'PlusJakartaSans-SemiBold',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 28,
  },
});