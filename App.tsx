import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, SafeAreaView } from 'react-native';
const data = [
  { id: '1', title:  'Speedometer', price: 'Rp. 350.000', imageUrl: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2022/10/1/9f133852-c7b6-41b4-aa9f-07adb9975885.jpg' },
  { id: '2', title:  'Reflektor', price: 'Rp. 250.000', imageUrl: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2022/7/19/ee65777a-aaf1-4d3a-a0fe-3b71ce5fcdeb.jpg' },
  { id: '3', title:  'katengkas', price: 'Rp. 150.000', imageUrl: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2021/7/21/d039ddbf-c35d-4e8c-9e71-9d875172d2f3.png' },
  { id: '4', title:  'Tangki', price: 'Rp. 850.000', imageUrl: 'https://img.lazcdn.com/g/p/1dc21982278f607e2525ccbf50ea01bc.jpg_720x720q80.jpg' },
  { id: '5', title:  'Sadel', price: 'Rp. 250.000', imageUrl: 'https://id-test-11.slatic.net/p/c9806bbd93c3c1a466d721969cb4edeb.jpg' },
  { id: '6', title:  'Swing Arm', price: 'Rp. 200.000', imageUrl: 'https://down-id.img.susercontent.com/file/8b151bacc4cba9bcb2b97bef7e1b784e' },
  { id: '7', title:  'Rangka', price: 'Rp. 1.250.000', imageUrl: 'https://s1.bukalapak.com/img/61410347692/large/data.jpeg' },
  { id: '8', title:  'Knalpot', price: 'Rp. 350.000', imageUrl: 'https://down-id.img.susercontent.com/file/id-11134207-7r98o-lkouswzm2gq782' },
  { id: '9', title:  'Kaliper', price: 'Rp. 250.000', imageUrl: 'https://down-id.img.susercontent.com/file/2d150e1a7504a7a133ac16b7abd7602e' },
  { id: '10', title: 'Spion', price: 'Rp. 150.000', imageUrl: 'https://s3.bukalapak.com/img/34366323982/s-400-400/data.jpeg.webp' },
  { id: '11', title: 'Klakson', price: 'Rp. 650.000', imageUrl: 'https://id-live-01.slatic.net/p/438d7acccbfc795be2bb3db7044a23c5.png' },
  { id: '12', title: 'Tepong', price: 'Rp. 250.000', imageUrl: 'https://images.tokopedia.net/img/cache/500-square/hDjmkQ/2022/11/2/8f700056-25d1-4128-994b-4ba82a68c4ae.jpg' },
]

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.largeHeaderContainer}>
        <Image source={{ uri: 'https://newpolishdesign.pl/wp-content/uploads/2017/07/astra-logo.png' }} style={styles.largeHeaderImage} />
        <Text style={styles.largeHeaderText}>KLASIK OTOPART</Text>
      </View>
      
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        )}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  largeHeaderContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: 'lightblue',
    borderRadius: 20,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

  },
  largeHeaderImage: {
    width: 100, 
    height: 100, 
  },
  largeHeaderText: {
    fontStyle: 'italic',
    fontSize: 28, 
    fontWeight: '900',
    color: 'navy',
    textAlign: 'center',
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 15,
    fontWeight: '900',
    marginTop: 8,
    textAlign: 'center',
    color: 'black'
  },
  price: {
    fontSize: 13,
    fontWeight: '500',
    color: '#888',
    marginTop: 4,
    textAlign: 'center',
  },
});