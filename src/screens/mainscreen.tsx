import { Button, ScrollView, StyleSheet, View } from "react-native";
import Header from "./header";
import Product from "./product";


function MainScreen({navigation}){
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
            <Button title="User List" onPress={() => navigation.navigate('UserScreen')} />
      <Header />
      <ScrollView>
        {
          product.map((item) => <Product product={item} key={item.name} />)
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

  export default MainScreen