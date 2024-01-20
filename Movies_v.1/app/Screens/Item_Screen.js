import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text, View, StyleSheet, SafeAreaView, ImageBackground, Button, TouchableOpacity } from 'react-native';


function Item_Screen() {
    const navigation = useNavigation();
    const {
        params: {
            Obj
        },
    } = useRoute();

    const Return_Handler = () => {
        navigation.navigate("Inicial")
    }

    return (
        <ImageBackground style={styles.Container} source={{uri: Obj.image.back}}>
            <TouchableOpacity style={styles.Return} onPress={Return_Handler}>
                <Text style={{ fontSize: 20, fontWeight: 'normal', color:'white', alignSelf: 'center'}}>HOME</Text>
            </TouchableOpacity>
            <View style={styles.Head}>
                <Text style={{ fontSize: 40, alignSelf: 'center', margin: 25}}>{Obj.name}</Text>
                <Text style={{ fontSize: 20, alignSelf: 'center'}}>{Obj.creator}</Text>
            </View>
        </ImageBackground>
    );
}

export default Item_Screen;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    Head: {
        width: '100%',
        height: 150,
        backgroundColor: 'white',
        borderRadius: 20,
    },
    image: {
        width: '100%',
        height: '100%'
    },
    Return: {
        position: 'absolute',
        top: 40,
        left: 20,
        width: 100,
        height: 50,
        backgroundColor: 'black',
        justifyContent: 'center',
        borderRadius: 10
    }
})