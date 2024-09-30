/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';


function Header(): React.JSX.Element {

  const cartData = useSelector((state)=>state.reducer)
  const [cartItems, setCartItems] = useState(0)
  useEffect(()=>{
    setCartItems(cartData.length)
  },[cartData])

  return (
    <View style={styles.container}>
      <Text style={{padding:14, fontSize: 40}}>{cartItems}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});

export default Header;
