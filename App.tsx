/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from './src/screens/header';
import Product from './src/screens/product';


function App(): React.JSX.Element {

  const product = [
    {
      name: 'samsung',
      color: 'red',
      price: 30000
    },
    {
      name: 'Nokia',
      color: 'blue',
      price: 40000
    },
    {
      name: 'HTC',
      color: 'green',
      price: 50000
    }
  ]

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        {
          product.map((item) => <Product product={item} />)
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});

export default App;
