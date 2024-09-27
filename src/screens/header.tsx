/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


function Header(): React.JSX.Element {

  return (
    <View style={styles.container}>
      <Text>Header</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});

export default Header;
