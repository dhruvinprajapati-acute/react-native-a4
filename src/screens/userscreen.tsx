import { StyleSheet, Text, View } from "react-native";


function UserScreen(){
    return(
        <View style={styles.container}>
            <Text>
                user List
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
      flex:1
    }
  });

export default UserScreen