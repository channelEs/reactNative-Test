import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView, Image} from 'react-native';
import Category from '../Components/Category';


import { Category_Info } from '../src/Info';
import { SerieData } from '../src/Data_Info';


function Inicial_Screen() {
    const [Data, setData] = useState(SerieData);
    const [Cats, setCats] = useState(Category_Info);

    
    return (
        <View>
            <SafeAreaView>
                <Text>Here goes the data:</Text>
                <FlatList
                    style={styles.List}
                    data={Cats}
                    keyExtractor={( item ) => item.id}
                    renderItem={({ item }) => (
                        <View>
                            <Category title={item.name}/>
                        </View>
                    )}
                />
            </SafeAreaView>
            <Text>Hello INI</Text>
        </View>
    );
}

export default Inicial_Screen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    List: {
        width: '100%',
    }
})