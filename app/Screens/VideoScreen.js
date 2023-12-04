import React from 'react';
import { Text, View, StyleSheet, Button} from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import trailer from '../assets/TLOU_trailer.mp4';

import Icon from 'react-native-vector-icons/FontAwesome';


function VideoScreen({ navigation, vid }) {
    console.log(vid);
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    return (
        <View style={styles.container}>
            <Video
                ref={video}
                source={trailer}
                style={styles.mediaPlayer}
                useNativeControls
                resizeMode='absolute'
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
            <View style={styles.buttons}>
                <Icon 
                    style={{marginHorizontal: 15}}
                    size={30}
                    name={status.isPlaying ? 'pause' : 'play'}
                    onPress={() =>
                        status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                    }
                />
                <Icon 
                    style={{marginHorizontal: 15}}
                    size={30}
                    name='arrow-left'
                    onPress={() => navigation.navigate("Second")}
                />
            </View>
        </View>
    );
}

export default VideoScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mediaPlayer: {
        alignSelf: 'center',
        width: '100%',
        height: 400,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
})