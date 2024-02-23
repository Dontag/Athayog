import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Colors } from '../utilities/colors';
import { images } from '../utilities/images';
import { height, width } from '../utilities/utilities';
import { useFocusEffect } from '@react-navigation/native';

const SplashScreen = ({ navigation }: any) => {

    useFocusEffect(() => {
        const unsubscribe = setTimeout(() => {
            navigation.reset({
                index: 0,
                routes: [{ name: 'HomeScreen' }]
            })
        }, 1000);
        return () => unsubscribe;
    });


    return (
        <View style={styles.__container}>
            <ImageBackground source={images?.splashBottom} style={StyleSheet.absoluteFill} />
            <Image source={images.logo} style={styles.__logo} />
            <StatusBar style='dark' backgroundColor={Colors.white} />
        </View>
    )
}

export default SplashScreen;

const styles = StyleSheet.create({
    __container: {
        flex: 1,
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center'
    },
    __backgroundImage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    __logo: {
        width: width - 20,
        height: width - 20,
        alignSelf: 'center',
        marginBottom: 50
    }
}) 