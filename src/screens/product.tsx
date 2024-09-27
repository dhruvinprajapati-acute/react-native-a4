/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
    Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface Product {
    name: string,
    color: string,
    price: number
}


function Product({product}: {product: Product}): React.JSX.Element {

  return (
    <View style={styles.container} key={product.name}>
      <Text>{product.name}</Text>
      <Text>{product.color}</Text>
      <Text>{product.price}</Text>
      <Button title='add to cart' onPress={() => {console.log('press')}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    borderWidth:2,
    padding: 14,
    margin: 5
  }
});

export default Product;
