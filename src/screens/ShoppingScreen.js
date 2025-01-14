import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProductList from '../components/ProductList';

const ShoppingScreen = () => {
  return (
    <View style={styles.container}>
      <ProductList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default ShoppingScreen;
