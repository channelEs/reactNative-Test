import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text, Image, TouchableOpacity } from 'react-native';

import { SerieData } from '../src/Data_Info';
import SerieCard from './SerieCard';

function Category({title}) {
    const [Cat,setCat] = useState(SerieData)
    return (
        <View style={styles.container}>
            <Text style={styles.Text_Name}>{title}</Text>
            <FlatList 
                data={Cat}
                keyExtractor={( item ) => item.id}
                renderItem={({ item }) => (
                    <View>
                        {
                            item.category === title
                            ? <SerieCard 
                                Obj={item}
                            />
                            : <></>
                        }
                    </View>
                )}
                horizontal
            />
        </View>
    );
}

export default Category;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start'
    },
    Text_Name: {
        fontSize: 40,
        fontWeight: 'bold',
    },
})