import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';

function SerieCard({ Obj }) {
    const navigation = useNavigation();
    const Item_Handler = () => {
        navigation.navigate("Item", {Obj})
    }

    return (
        <View>
            <TouchableOpacity style={styles.Serie_Container} onPress={Item_Handler}>
                <Image 
                    style={styles.Posters}
                    source={{uri: Obj.image.poster}}
                />
                <Text>{Obj.name}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default SerieCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start'
    },
    Posters: {
        width: 100,
        height: 150
    },
    Serie_Container: {
        width: 200,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'black'
    },
})