import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native';

const carData = [
  { id: '1', name: 'Ferrari F8', image: require('@/assets/images/gallery/img1.jpeg') },
  { id: '2', name: 'Lamborghini Huracán', image: require('@/assets/images/gallery/img2.jpg') },
  { id: '3', name: 'McLaren 720S', image: require('@/assets/images/gallery/img3.jpg') },
  { id: '4', name: 'Porsche 911', image: require('@/assets/images/gallery/img4.jpg') },
  { id: '5', name: 'Bugatti Chiron', image: require('@/assets/images/gallery/img5.jpeg') },
  { id: '6', name: 'Bugatti Chiron', image: require('@/assets/images/gallery/img5.jpeg') },
  { id: '7', name: 'Bugatti Chiron', image: require('@/assets/images/gallery/img5.jpeg') },
  { id: '8', name: 'Bugatti Chiron', image: require('@/assets/images/gallery/img5.jpeg') },
];

const ExplorePage = () => {
  const [search, setSearch] = useState('');
  const { width } = useWindowDimensions();

  // Set number of columns based on screen width
  const numColumns = width > 768 ? 4 : 2; // 4 columns for laptops, 2 for phones

  // Filter cars based on search input
  const filteredCars = carData.filter(car =>
    car.name.toLowerCase().includes(search.toLowerCase())
  );

  const renderItem = ({ item }: { item: { id: string; name: string; image: any } }) => (
    <TouchableOpacity style={[styles.card, { width: (width / numColumns) - 40 }]}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.carName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Explore Cars</Text>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search cars..."
        placeholderTextColor="#aaa"
        value={search}
        onChangeText={setSearch}
      />

      {/* Car List */}
      <FlatList
        data={filteredCars}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={numColumns} // Display cars in a grid
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />
    </View>
  );
};

export default ExplorePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 15,
    width: '100%',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 15,
  },
  searchBar: {
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    padding: 10,
    color: '#fff',
    fontSize: 16,
    marginBottom: 20,
  },
  list: {
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#222',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    alignItems: 'center',
    width: '45%',
    overflow: 'hidden',
  },
  image: {
    width: '100%', // Increased width for better visibility
    height: 180, // Increased height for better aspect ratio
    borderRadius: 8,
  },
  carName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
});
