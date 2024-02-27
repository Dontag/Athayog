import { StyleSheet, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StatusBarHeight, height, width, colors, images } from '../utilities/utilities';
import { useFocusEffect } from '@react-navigation/native';
import Animated, {
    useSharedValue,
    withTiming,
    Easing,
    interpolate,
    Extrapolation,
    useAnimatedStyle,
    withDelay
} from 'react-native-reanimated';
const SplashScreen = ({ navigation }: any) => {
    const translateYShape1 = useSharedValue(height);
    const translateYShape2 = useSharedValue(height);
    const offset = useSharedValue(0);

    useFocusEffect(() => {
        translateYShape1.value = withTiming(0, { duration: 1000, easing: Easing.inOut(Easing.ease) });
        translateYShape2.value = withDelay(500, withTiming(0, { duration: 1000, easing: Easing.inOut(Easing.ease) }));
        offset.value = withDelay(1500, withTiming(1, { duration: 1000, easing: Easing.inOut(Easing.ease) }));
        const unsubscribe = setTimeout(() => {
            navigation.reset({
                index: 0,
                routes: [{ name: 'HomeScreen' }]
            })
        }, 3000);
        return () => unsubscribe;
    });

    const animatedShape1 = useAnimatedStyle(() => ({
        transform: [{ translateY: interpolate(translateYShape1.value, [0, height], [0, height], Extrapolation.CLAMP) }],
        opacity: interpolate(translateYShape1.value, [-height, height], [0, 1])
    }));
    const animatedShape2 = useAnimatedStyle(() => ({
        transform: [{ translateY: interpolate(translateYShape2.value, [0, height], [0, height], Extrapolation.CLAMP) }],
        opacity: interpolate(translateYShape2.value, [-height, height], [0, 1])
    }));
    const animatedOpacity = useAnimatedStyle(() => ({
        opacity: interpolate(offset.value, [0, 1], [0, 1])
    }))

    return (
        <View style={styles.__container}>
            <Animated.Image source={images?.splashBottomShape1} style={[styles.__backgroundShape1, animatedShape1]} />
            <Animated.Image source={images?.splashBottomShape2} style={[styles.__backgroundShape2, animatedShape2]} />
            <Animated.Image source={images.logo} style={[styles.__logo, animatedOpacity]} />
            <StatusBar style='dark' backgroundColor={colors.white} />
        </View>
    )
}

export default SplashScreen;

const styles = StyleSheet.create({
    __container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center'
    },
    __backgroundShape1: {
        width: width,
        height: height + StatusBarHeight,
        resizeMode: 'cover',
        position: 'absolute',
        zIndex: 50
    },
    __backgroundShape2: {
        width: width,
        height: height + StatusBarHeight,
        resizeMode: 'cover',
        position: 'absolute',
        zIndex: 100
    },
    __logo: {
        width: width - 20,
        height: width - 20,
        alignSelf: 'center',
        marginBottom: 50,
        zIndex: 100,
        opacity: 0
    }
}) 