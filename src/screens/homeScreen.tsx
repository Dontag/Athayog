import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBarHeight, colors, height, images, width } from '../utilities/utilities';
import Ionicons from '@expo/vector-icons/Ionicons';

const HomeScreen = () => {
    return (
        <View style={styles.__container}>
            <ImageBackground source={images.homeScreenbg1} style={StyleSheet.absoluteFill} />
            {/* have to create a Header */}
            {/* <View style={styles.__header}>
                <Image />
                <Ionicons name="md-checkmark-circle" size={32} color="green" />
            </View> */}
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    __container: {
        flex: 1,
        backgroundColor: colors.white,
        // alignItems: 'center',
        // justifyContent: 'center'
    },
})