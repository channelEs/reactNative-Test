import React from 'react';
import { Text, View, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import colors from './colors';
import { useNavigation } from '@react-navigation/native';

function ObjSerie({img, vid}) {
    const navigation = useNavigation(); 
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("Video", { vid })}
        >
            <ImageBackground source={img} style={styles.ImgBack}>
            <View
                style={{
                backgroundColor:'blue',
                width: 50,
                height: 50,
                }}
            />
            <Text style={styles.Text}>nom foto</Text>
            <Text style={styles.Text}>rate 0/5</Text>
            </ImageBackground>
        </TouchableOpacity>
    );
}

export default ObjSerie;

const styles = StyleSheet.create({
    Text: {
      padding: 10,
      color: 'white',
      },
      ImgBack : {
      width: 150,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 20,
      backgroundColor: colors.primary,
      borderRadius: 20,
      overflow: 'hidden'
      },
  });