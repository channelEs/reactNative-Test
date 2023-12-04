import React from 'react';
import { StyleSheet, Text, 
  View , ScrollView ,
  ImageBackground, 
  TouchableOpacity,
} from 'react-native';
import colors from './colors';
import ObjSerie from './ObjSerie';

import V1 from '../assets/TLOU_trailer.mp4';

import S1 from '../assets/Cat1_1_TheLast.jpg';
import S2 from '../assets/Cat1_2_GoT.jpeg';
import S3 from '../assets/Cat1_3_HP.jpeg';

export default function Categori_1({title, desc}) {
    return (
      <View style={styles.Scroll} >
        <Text style={styles.TextTop}> {title} </Text>
        <Text style={{color: colors.tercery, fontFamily:'Arial', marginLeft: 7}}>{desc}</Text>
        <ScrollView 
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{backgroundColor: colors.primary, marginTop: 15}}
        >
          <ObjSerie img={S1} vid={V1} />
          <ObjSerie img={S2} vid={V1} />
          <ObjSerie img={S3} vid={V1} />
        </ScrollView> 
      </View>
    );
}


const styles = StyleSheet.create({
  TextTop: {
    fontFamily: 'Arial',
    fontSize: 25,
    color: colors.secondary,
    //textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 15
  },
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
    ViewObj: {
        backgroundColor: 'black',
        width: 150,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Scroll: {
      flex: 1,
      height: 250,
      marginBottom: 30
    },
});