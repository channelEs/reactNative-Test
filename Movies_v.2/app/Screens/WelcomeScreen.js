import React, { useState } from 'react';
import { TouchableOpacity ,
  SafeAreaView , StyleSheet ,
  Image, View, Text, Dimensions,
  TextInput, Pressable
} from 'react-native';
import colors from '../Functions/colors';
import Animated, { useSharedValue, useAnimatedStyle, interpolate, withTiming } from 'react-native-reanimated';


const { width, height } = Dimensions.get( 'window' );

export default function WelcomeScreen({ navigation }) {
  const  [User, setUser] = useState({
    Name: '',
    Password: ''
  });

  const [isRegister, setisRegister] = useState(false);
  const imagePos = useSharedValue(1);

  const imageAnimated = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePos.value, [0, 1], [-height / 2, 0])
    return {
      transform: [{translateY: withTiming(interpolation, {duration: 1000})}]
    }
  })
  const bottsAnimated = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePos.value, [0, 1], [height / 2, 0])
    return {
      opacity: withTiming(imagePos.value, {duration: 500}),
      transform: [{translateY: withTiming(interpolation, {duration: 1000})}]
    }
  })
  const LogAnimated = useAnimatedStyle(() => {
    return {
      opacity: withTiming(imagePos.value === 1 ? 0 : 1, {duration: 500}),
    }
  })

  const logHandler = () => {
    imagePos.value = 0.225
    if (isRegister) {
      setisRegister(false);
    }
  }
  const RegHandler = () => {
    imagePos.value = 0
    if (!isRegister) {
      setisRegister(true);
    }
  }
  const LogToRegHandler = () => {
    imagePos.value = 0.225
    if (isRegister) {
      setisRegister(false);
    }
  }

  const backHandler = () => {
    imagePos.value = 1
  }

  const LogINcomplete = () => {
    imagePos.value = 1
    navigation.navigate("Second", { Users: User })
  }
  

  return (
    <View style={styles.container}>
      <Animated.View style={[StyleSheet.absoluteFill, imageAnimated]}>
        <Image 
          source={require('../assets/WelcomeImg.jpg')}
          style={{
            width: width,
            height: height,
            preserveAspectRatio: 'xMidYMid slice'              
          }}
        />
        <Pressable style={styles.Xbott}
          onPress={backHandler}
        >
          <Text style={{fontWeight: 'bold', color: 'black'}}>X</Text>
        </Pressable>
      </Animated.View>
      <View style={styles.StartLog}>
        <Animated.View style={bottsAnimated}>
          <Pressable 
            style={[styles.LogBott, {backgroundColor: colors.primary}]}
            onPress={logHandler}
          >
            <Text style={{fontSize: 25, fontWeight: 'bold', color: 'black'}}>LOG IN</Text>
          </Pressable>
          <Pressable 
            style={[styles.LogBott, {backgroundColor: colors.secondary}]}
            onPress={RegHandler}
          >
            <Text style={{fontSize: 25, fontWeight: 'bold', color: 'black'}}>REGISTER</Text>
          </Pressable>
        </Animated.View>
        <Animated.View style={[{
          position: 'absolute',
          bottom: 30,
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: -1
        }, LogAnimated]}
        >
          <TextInput placeholder='Username' placeholderTextColor='black' style={styles.TextINstyle}
            value={User.Name}
            onChangeText={(text) => {setUser({
              ...User,
              Name: text,
            })}}
            onSubmitEditing={() => alert(User.Name)}
          />  
          {isRegister && (
            <TextInput placeholder='mail' placeholderTextColor='black' style={styles.TextINstyle}/>
          )}
          <TextInput placeholder='Password' placeholderTextColor='black' style={styles.TextINstyle}
            value={User.Password}
            onChangeText={(text) => {setUser({
              ...User,
              Password: text
            })}}
            onSubmitEditing={() => alert(User.Password)}
          />
          <Pressable style={[{
            width: width * 0.9,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 15,
            margin: 15
          }, isRegister ? {backgroundColor: colors.secondary} : {backgroundColor: colors.primary}]}
            onPress={ isRegister ? LogToRegHandler : LogINcomplete}
          >
            <Text style={{fontSize: 25, fontWeight: 'bold', color: 'black'}}>{isRegister ? 'REGISTER' : 'LOG IN'}</Text>
          </Pressable>
        </Animated.View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  Xbott: {
    width: 40,
    height: 40,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  TextINstyle: {
    width: width * 0.9,
    height: 60,
    margin: 15,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 15,
    paddingLeft: 10
  },
  LogBott: {
    //backgroundColor: colors.primary,
    height: 70,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  StartLog: {
    width: width,
    height: height / 3 ,
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
})