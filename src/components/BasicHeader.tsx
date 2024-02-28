import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { StatusBarHeight, colors, images } from '../utilities/utilities'
import Animated, { FadeIn, FadeInLeft, FadeInRight } from 'react-native-reanimated'
import Ionicons from '@expo/vector-icons/Ionicons';

interface Props {
    showLogo?: boolean;
    leftIconName?: any;
    showRightButton?: boolean;
    onPressLeftIcon?: any;
    onPressRightIcon?: any;
    rightIconColor?: string;
    leftIconColor?: string;
    leftIconBackDrop?: string;
}

const BasicHeader = ({
    showLogo = false,
    showRightButton = false,
    leftIconName = "arrow-back",
    onPressLeftIcon = () => { },
    leftIconColor = colors.lightGrayishOrange,
    leftIconBackDrop = '',
    onPressRightIcon = () => { },
    rightIconColor = colors.lightGrayishOrange
}: Props) => {
    return (
        <View style={[styles.__header, { justifyContent: showRightButton ? 'space-between' : 'flex-start' }]}>
            {showLogo ? <Animated.Image entering={FadeInLeft.duration(800).delay(700)} sharedTransitionTag='logo' source={images.whiteLogo} style={styles.__logo} />
                : <Animated.View entering={FadeInLeft.duration(800).delay(700)}>
                    <TouchableOpacity onPress={onPressLeftIcon} style={[styles.__leftButton, { borderColor: leftIconColor, backgroundColor: !!leftIconBackDrop ? leftIconBackDrop : '' }]}>
                        <Ionicons name={leftIconName} size={32} color={leftIconColor} />
                    </TouchableOpacity>
                </Animated.View>
            }
            {showRightButton && <View>
                <Animated.View entering={FadeInRight.duration(800).delay(700)}>
                    <TouchableOpacity onPress={onPressRightIcon} style={[styles.__rightButton, { borderColor: rightIconColor }]}>
                        <Ionicons name="settings" size={32} color={rightIconColor} />
                    </TouchableOpacity>
                </Animated.View>
            </View>}
        </View>
    )
}

export default BasicHeader

const styles = StyleSheet.create({
    __header: {
        marginTop: StatusBarHeight,
        paddingHorizontal: 15,
        height: 80,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    __logo: {
        width: 50,
        height: 50
    },
    __rightButton: {
        padding: 5,
        borderRadius: 60,
    },
    __leftButton: {
        padding: 10,
        borderRadius: 60,
        borderWidth: 1,
        borderColor: colors.lightGrayishOrange,
    }
})