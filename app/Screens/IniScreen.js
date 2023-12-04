import React, { useState } from 'react';
import { StyleSheet, Text, 
  SafeAreaView, TouchableOpacity,
  ScrollView, Button, View
} from 'react-native';
import Categori_1 from '../Functions/Categori_1';
import colors from '../Functions/colors';

import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation , useNavigationState } from '@react-navigation/native';

export default function IniScreen({ route }) {
  const User = route.params.Users
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={{width: '100%', height: 150}}/>
        <Categori_1
          title="Series Accio"
          desc="Series que no paran"
        />
        <Categori_1
          title="Pelis Accio"
          desc="Peliculas de alta emocion"
        />  
        <Categori_1
          title="Series Drama"
          desc="Series que no te dejaran igual"
        />        
        <Categori_1
          title="Pelis Drama"
          desc="Rapidas pero muy emocionantes"
          />
        <Categori_1
          title="Series Curtes"
          desc="Para el aburrimiento"
        />
      </ScrollView>
      <View style={styles.Header}>
        <View style={{marginTop: 10}}>
            <Icon name='home' size={40} onPress={() => navigation.navigate("Home")}/>
          <Text style={styles.InHeader}> Hello! {User.Name}</Text>
          <Text style={styles.InHeader}>Contra: {User.Password}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  InHeader: {
    marginBottom: 10,
    marginLeft: 10,
    alignSelf: 'auto',
    fontSize: 20
  },
  Header: {
    width: '100%',
    height: 150,
    backgroundColor: colors.secondary,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    //borderRadius: 25,
    position: 'absolute',
    top: 0,
    left: 0,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  container: {
    flex: 1,
    backgroundColor: colors.primary
  },
});