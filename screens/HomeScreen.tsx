import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import SectionHeader from '../components/SectionHeader';
import {SCREENS} from '../navigation/screens';

const HomeScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.screen}>
      <Header />

      <ScrollView contentContainerStyle={styles.content}>
        <SectionHeader title="Recommended outfits" />

        <View style={styles.grid}>
          <ProductCard
            title="Tailored Summer Edit"
            price="$138"
            image={require('../assets/images/home-screen/tailored-summer-edit.png')}
            onPress={() =>
              navigation.navigate(SCREENS.OUTFIT_DETAILS, {
                outfitId: 1,
                title: 'Tailored Summer Edit',
                price: '$138',
              })
            }
          />

          <ProductCard
           title="Tailored Summer Edit"
            price="$138"
            image={require('../assets/images/home-screen/tailored-summer-edit.png')}
            onPress={() =>
              navigation.navigate(SCREENS.OUTFIT_DETAILS, {
                outfitId: 1,
                title: 'Tailored Summer Edit',
                price: '$138',
              })
            }
          />
        </View>

        <SectionHeader title="Trending now" />

        <View style={styles.grid}>
          <ProductCard
            title="Tailored Summer Edit"
            price="$138"
            image={require('../assets/images/home-screen/tailored-summer-edit.png')}
            onPress={() =>
              navigation.navigate(SCREENS.OUTFIT_DETAILS, {
                outfitId: 1,
                title: 'Tailored Summer Edit',
                price: '$138',
              })
            }
          />

          <ProductCard
            title="Tailored Summer Edit"
            price="$138"
            image={require('../assets/images/home-screen/tailored-summer-edit.png')}
            onPress={() =>
              navigation.navigate(SCREENS.OUTFIT_DETAILS, {
                outfitId: 1,
                title: 'Tailored Summer Edit',
                price: '$138',
              })
            }
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});


// import React from 'react';
// import {ScrollView, StyleSheet, View} from 'react-native';

// import Header from '../components/Header';
// import ProductCard from '../components/ProductCard';
// import SectionHeader from '../components/SectionHeader';

// const HomeScreen = () => {
//   return (
//     <View style={styles.screen}>
//       <Header />

//       <ScrollView contentContainerStyle={styles.content}>
//         <SectionHeader title="Recommended outfits" />

//         <View style={styles.grid}>
//           <ProductCard
//             title="Tailored Summer Edit"
//             price="$138"
//             image={require('../assets/images/home-screen/tailored-summer-edit.png')}
//           />
//           <ProductCard
//             title="Tailored Summer Edit"
//             price="$138"
//             image={require('../assets/images/home-screen/tailored-summer-edit.png')}
//           />
//         </View>

//         <SectionHeader title="Trending now" />

//         <View style={styles.grid}>
//           <ProductCard
//             title="Tailored Summer Edit"
//             price="$138"
//             image={require('../assets/images/home-screen/tailored-summer-edit.png')}
//           />
//           <ProductCard
//             title="Tailored Summer Edit"
//             price="$138"
//             image={require('../assets/images/home-screen/tailored-summer-edit.png')}
//           />
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   content: {
//     paddingHorizontal: 20,
//     paddingBottom: 24,
//   },
//   grid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
// });