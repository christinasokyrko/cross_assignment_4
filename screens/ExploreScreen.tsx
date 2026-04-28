import React from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';

import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

const ExploreScreen = () => {
  return (
    <View style={styles.screen}>
      <Header />

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Explore</Text>

        <View style={styles.grid}>
          <ProductCard
            title="Tailored Summer Edit"
            price="$138"
            image={require('../assets/images/home-screen/tailored-summer-edit.png')}
          />

          <ProductCard
            title="Tailored Summer Edit"
            price="$138"
            image={require('../assets/images/home-screen/tailored-summer-edit.png')}
          />

          <ProductCard
            title="Tailored Summer Edit"
            price="$138"
            image={require('../assets/images/home-screen/tailored-summer-edit.png')}
          />

          <ProductCard
            title="Tailored Summer Edit"
            price="$138"
            image={require('../assets/images/home-screen/tailored-summer-edit.png')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ExploreScreen;

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
    fontSize: 42,
    color: '#6F6F6F',
    fontFamily: 'PlusJakartaSans-SemiBold',
    marginTop: 20,
    marginBottom: 16,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});