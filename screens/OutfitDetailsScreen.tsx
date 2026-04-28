import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';

import Header from '../components/Header';
import CustomButton from '../components/CustomButton';

type Props = {
  route?: {
    params?: {
      outfitId?: number;
      title?: string;
      price?: string;
    };
  };
};

const OutfitDetailsScreen = ({route}: Props) => {
  const title = route?.params?.title ?? 'Soft Weekend Ease';
  const price = route?.params?.price ?? '$229.97';
  const outfitId = route?.params?.outfitId ?? 'Not provided';

  return (
    <View style={styles.screen}>
      <Header />

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.pageTitle}>OUTFIT DETAILS</Text>

        <Image source={require('../assets/images/outfit-details/soft-weekend-ease.png')} style={styles.heroImage} />

        <Text style={styles.title}>{title}</Text>

        <Text style={styles.description}>
          A relaxed yet refined outfit designed for effortless weekends. Soft
          neutrals paired with classic denim create a balanced look that feels
          both comfortable and put-together.
        </Text>

        <Text style={styles.price}>{price}</Text>

        <Text style={styles.smallInfo}>Outfit ID: {outfitId}</Text>

        <Text style={styles.sectionTitle}>Items in this look</Text>

        <View style={styles.item}>
          <Image source={require('../assets/images/outfit-details/straight-leg-denim-jeans.jpg')} style={styles.itemImage} />
          <View>
            <Text style={styles.itemName}>Straight-Leg Denim Jeans</Text>
            <Text style={styles.itemPrice}>$89.99</Text>
          </View>
        </View>

        <View style={styles.item}>
          <Image source={require('../assets/images/outfit-details/relaxed-fit-cotton-tee.jpg')} style={styles.itemImage} />
          <View>
            <Text style={styles.itemName}>Relaxed Fit Cotton Tee</Text>
            <Text style={styles.itemPrice}>$39.99</Text>
          </View>
        </View>
        <View style={styles.item}>
          <Image source={require('../assets/images/outfit-details/minimal-leather-sandals.jpg')} style={styles.itemImage} />
          <View>
            <Text style={styles.itemName}>Minimal Leather Sandals</Text>
            <Text style={styles.itemPrice}>$39.99</Text>
          </View>
        </View>

        <CustomButton title="Add all to cart" />
      </ScrollView>
    </View>
  );
};

export default OutfitDetailsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  content: {
    paddingHorizontal: 20,
    paddingBottom: 24,
  },

  pageTitle: {
    fontSize: 22,
    color: '#6F6F6F',
    fontFamily: 'PlusJakartaSans-SemiBold',
    marginVertical: 20,
    letterSpacing: 1,
  },

  heroImage: {
    width: '100%',
    height: 260,
    resizeMode: 'contain',
    backgroundColor: '#F2F2F2',
  },

  title: {
    marginTop: 18,
    fontSize: 24,
    color: '#1C1C1C',
    fontFamily: 'PlusJakartaSans-SemiBold',
  },

  description: {
    marginTop: 10,
    fontSize: 15,
    color: '#6F6F6F',
    lineHeight: 22,
    fontFamily: 'PlusJakartaSans-SemiBold',
  },

  price: {
    marginTop: 14,
    fontSize: 26,
    color: '#1C1C1C',
    fontFamily: 'PlusJakartaSans-SemiBold',
  },

  smallInfo: {
    marginTop: 8,
    fontSize: 13,
    color: '#6F6F6F',
  },

  sectionTitle: {
    marginTop: 32,
    marginBottom: 14,
    fontSize: 18,
    color: '#1C1C1C',
    fontFamily: 'PlusJakartaSans-SemiBold',
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },

  itemImage: {
    width: 110,
    height: 80,
    resizeMode: 'contain',
    backgroundColor: '#F2F2F2',
    marginRight: 16,
  },

  itemName: {
    fontSize: 15,
    color: '#1C1C1C',
    fontFamily: 'PlusJakartaSans-SemiBold',
  },

  itemPrice: {
    marginTop: 4,
    fontSize: 14,
    color: '#6F6F6F',
    fontFamily: 'PlusJakartaSans-SemiBold',
  },
});