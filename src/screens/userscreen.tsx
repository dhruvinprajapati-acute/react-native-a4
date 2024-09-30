import { FlatList, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { getUserList } from '../redux/action';
import { useEffect } from "react";


function UserScreen() {
    const dispatch = useDispatch();
    const userList = useSelector(((state)=> state.reducer))
    useEffect(() => {
        dispatch(getUserList());
    });
    return (
        <View style={styles.container}>
            <FlatList
                data={userList[0].users}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <Text style={styles.item}>{item.firstName}</Text>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default UserScreen