import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StatusBarHeight, colors, height, images, width } from '../utilities/utilities';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useFonts } from 'expo-font';
import Animated, { FadeIn, FadeInDown, FadeInLeft, FadeInRight, FadeInUp } from 'react-native-reanimated';

const HomeScreen = ({ navigation }: any) => {

    const [fontsLoaded] = useFonts({
        'Nunito-Bold': require('../../assets/fonts/Nunito-Bold.ttf'),
        'Nunito-Light': require('../../assets/fonts/Nunito-Light.ttf'),
    });


    return (
        <View style={styles.__container}>
            <ImageBackground source={images.homeScreenbg1} style={StyleSheet.absoluteFill} />
            {/* have to create a Header component */}
            <View style={styles.__header}>
                <Animated.Image entering={FadeInLeft.duration(800).delay(500)} sharedTransitionTag='logo' source={images.whiteLogo} style={styles.__logo} />
                <Animated.View entering={FadeInRight.duration(800).delay(500)}>
                    <TouchableOpacity style={styles.__settingButton}>
                        <Ionicons name="settings" size={32} color={colors.lightGrayishOrange} />
                    </TouchableOpacity>
                </Animated.View>
            </View>
            <View style={styles.__bottomContents}>
                <View style={styles.__textArea}>
                    <Animated.Text entering={FadeInDown.duration(800).delay(500)} style={styles.__textHeader}>Personalize Yoga</Animated.Text>
                    <Animated.Text entering={FadeInDown.duration(800).delay(600)} style={styles.__subHeader}>{`Meditate and learn yoga\nanytime at home or\non the go`}</Animated.Text>
                </View>
            </View>
            <Animated.View style={{ position: 'absolute', bottom: 15, right: 15 }} entering={FadeInRight.duration(800).delay(500)}>
                <TouchableOpacity onPress={() => navigation.navigate('ScheduleSessions')} style={styles.__bottomRightButton}>
                    <Ionicons size={32} name='calendar' color={colors.verySoftOrange} />
                </TouchableOpacity>
            </Animated.View>
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
    __header: {
        marginTop: StatusBarHeight,
        marginHorizontal: 15,
        height: 80,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    __logo: {
        width: 50,
        height: 50
    },
    __settingButton: {
        padding: 10,
        borderRadius: 60,
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
    __bottomRightButton: {
        marginTop: 5,
        alignSelf: 'flex-end',
        padding: 10,
        borderRadius: 60,
        borderColor: colors.verySoftOrange,
        borderWidth: 1
    },
})