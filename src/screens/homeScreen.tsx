import { ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { colors, images, } from '../utilities/utilities';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useFonts } from 'expo-font';
import Animated, { FadeInDown, FadeInRight, } from 'react-native-reanimated';
import BasicHeader from '../components/BasicHeader';

const HomeScreen = ({ navigation }: any) => {
    const [fontsLoaded] = useFonts({
        'Nunito-Bold': require('../../assets/fonts/Nunito-Bold.ttf'),
        'Nunito-Light': require('../../assets/fonts/Nunito-Light.ttf'),
    });

    return (
        <View style={styles.__container}>
            <ImageBackground source={images.homeScreenbg1} style={StyleSheet.absoluteFill} />
            <BasicHeader showLogo showRightButton />
            <View style={styles.__bottomContents}>
                <View style={styles.__textArea}>
                    <Animated.Text entering={FadeInDown.duration(800).delay(500)} style={styles.__textHeader}>Personalize Yoga</Animated.Text>
                    <Animated.Text entering={FadeInDown.duration(800).delay(600)} style={styles.__subHeader}>{`Meditate and learn yoga\nanytime at home or\non the go`}</Animated.Text>
                </View>
            </View>
            <View style={styles.__bottomRightButtonWrapper}>
                <Animated.View entering={FadeInRight.duration(800).delay(700)}>
                    <TouchableOpacity onPress={() => navigation.navigate('ScheduleSessions')} style={styles.__bottomRightButton}>
                        <Ionicons size={32} name='calendar' color={colors.verySoftOrange} />
                    </TouchableOpacity>
                </Animated.View>
            </View>
            <StatusBar style='light' backgroundColor={colors.black} />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    __container: {
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: 'space-between'
    },
    __bottomContents: {
        justifyContent: 'flex-end',
        marginHorizontal: 15,
        paddingVertical: 15,
        marginBottom: 50,
    },
    __textArea: {
        paddingHorizontal: 15
    },
    __textHeader: {
        color: colors.lightGrayishOrange,
        fontFamily: 'Nunito-Bold',
        fontSize: 25
    },
    __subHeader: {
        fontFamily: 'Nunito-Light',
        fontSize: 18,
        marginTop: 5,
        color: colors.verySoftOrange
    },
    __bottomRightButtonWrapper: {
        position: 'absolute',
        bottom: 15,
        right: 15
    },
    __bottomRightButton: {
        alignSelf: 'flex-end',
        padding: 10,
        borderRadius: 60,
        borderColor: colors.verySoftOrange,
        borderWidth: 1
    },
})