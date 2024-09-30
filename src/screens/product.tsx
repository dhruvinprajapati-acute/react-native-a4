/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { addToCart, removeFromCart } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';

interface Product {
  name: string,
  color: string,
  price: number
}


function Product({ product }: { product: Product }): React.JSX.Element {

  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.reducer)
  const [isAdded, setIsAdded] = useState(false);


  const addToCartHandler = (product: Product) => {
    dispatch(addToCart(product));
  }

  const removeFromCarthandler = (product: Product) => {
    dispatch(removeFromCart(product.name))
  }

  useEffect(() => {
    let result = cartData.filter(el => {
      return el.name === product.name;
    })
    if(result.length){
      setIsAdded(true)
    } else {
      setIsAdded(false)
    }
  }, [cartData])

  return (
    <View style={styles.container} key={product.name}>
      <Text>{product.name}</Text>
      <Text>{product.color}</Text>
      <Text>{product.price}</Text>
      {
        isAdded ? <Button title='Remove to cart' onPress={() => { removeFromCarthandler (product) }} /> : <Button title='add to cart' onPress={() => { addToCartHandler(product) }} />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    borderWidth: 2,
    padding: 14,
    margin: 5
  }
});

export default Product;
