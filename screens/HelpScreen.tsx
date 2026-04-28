import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Header from '../components/Header';

const HelpScreen = () => {
  return (
    <View style={styles.screen}>
      <Header />
      <Text style={styles.title}>Help</Text>
    </View>
  );
};

export default HelpScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  title: {
    margin: 20,
    fontSize: 28,
    color: '#1C1C1C',
    fontFamily: 'PlusJakartaSans-SemiBold',
  },
});