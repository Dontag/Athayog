import { FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, height, images, width } from '../utilities/utilities'
import { StatusBar } from 'expo-status-bar'
import BasicHeader from '../components/BasicHeader';
import { BlurView } from 'expo-blur';
import { useFonts } from 'expo-font';
import Animated, { FadeInDown, FadeInRight } from 'react-native-reanimated';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';

const ScheduleSessions = ({ navigation }: any) => {
    const [fontsLoaded] = useFonts({
        'Nunito-Bold': require('../../assets/fonts/Nunito-Bold.ttf'),
        'Nunito-Light': require('../../assets/fonts/Nunito-Light.ttf'),
    });
    const data = [
        { time: `11\nAM`, title: 'Hiper Depression', duration: '1 hour' },
        { time: `10:30\nPM`, title: 'Workout', duration: '1 hour' },
        { time: `12\nAM`, title: 'Hiper Depression', duration: '1 hour' },
        { time: `09:30\nPM`, title: 'Workout', duration: '1 hour' },
        { time: `05\nAM`, title: 'Hiper Depression', duration: '1 hour' },
        { time: `11:30\nPM`, title: 'Workout', duration: '1 hour' },
        { time: `08\nAM`, title: 'Hiper Depression', duration: '1 hour' },
        { time: `06:30\nPM`, title: 'Workout', duration: '1 hour' },
    ]

    const dateList = [
        { date: '1', day: 'MON' },
        { date: '2', day: 'TUE' },
        { date: '3', day: 'WED' },
        { date: '4', day: 'THU' },
        { date: '5', day: 'FRI' },
        { date: '6', day: 'SAT' },
        { date: '7', day: 'SUN' },
    ]
    return (
        <View style={styles.__container}>
            <Animated.Image entering={FadeInDown.duration(800).delay(500)} source={images.schedulebg} resizeMode='cover' style={styles.__backgroundImage} />
            <BasicHeader onPressLeftIcon={() => navigation.goBack()} leftIconColor={colors.white} leftIconBackDrop={colors.backdrop} />
            <View>
                <Animated.View entering={FadeInDown.duration(800).delay(500)} style={styles.__horizontalListWrapper}>
                    {/* set the value for intensity to 10 if experimentalBlurMethod true */}
                    <BlurView intensity={50} tint='extraLight' >
                        <View style={styles.__dayWrapper}>
                            <Text style={styles.__todayText}>Today is <Text style={styles.__currentDay}>Sunday</Text></Text>
                        </View>
                        <FlatList
                            data={dateList}
                            horizontal
                            scrollEventThrottle={16}
                            style={styles.__calendarContainer}
                            contentContainerStyle={styles.__caleandarWrapper}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ index, item }) => (
                                <TouchableOpacity activeOpacity={0.6} key={index} style={styles.__dateContainer}>
                                    <Text style={styles.__date}>{item?.date}</Text>
                                    <Text style={styles.__day}>{item?.day}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </BlurView>
                </Animated.View>
                <Animated.View entering={FadeInDown.duration(800).delay(600)} style={styles.__listWrapper}>
                    {/* set the value for intensity to 40 if experimentalBlurMethod true */}
                    <BlurView intensity={80} style={styles.__scheduleListContainer} >
                        <FlatList
                            data={data}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={styles.__scheduleContainer}
                            renderItem={({ index, item }) => (
                                <TouchableOpacity activeOpacity={0.6} key={index} style={styles.__itemContainer}>
                                    <View style={styles.__timeContainer}>
                                        <Text style={styles.__time}>{item?.time}</Text>
                                    </View>
                                    <View style={styles.__detailsContainer}>
                                        <Text style={styles.__title}>{item?.title}</Text>
                                        <Text style={styles.__duration}>{item?.duration}</Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    </BlurView>
                </Animated.View>
            </View>
            <Animated.View style={styles.__bottomRightButtonWrapper} entering={FadeInRight.duration(800).delay(500)}>
                <TouchableOpacity onPress={() => navigation.navigate('ScheduleSessions')} style={styles.__bottomRightButton}>
                    <Feather size={32} name='plus' color={colors.white} />
                </TouchableOpacity>
            </Animated.View>
            <StatusBar style='dark' translucent />
        </View>
    )
}

export default ScheduleSessions

const styles = StyleSheet.create({
    __container: {
        flex: 1,
        backgroundColor: colors.darkBrown,
        justifyContent: 'space-between'
    },
    __backgroundImage: {
        position: 'absolute',
        alignSelf: 'flex-start',
        width: width,
        height: height / 1.50,
    },
    __horizontalListWrapper: {
        borderRadius: 25,
        overflow: 'hidden',
        bottom: 10,
        margin: 10,

    },
    __dayWrapper: {
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: colors.darkBrown,
    },
    __todayText: {
        fontFamily: 'Nunito-Light',
        fontSize: 25,
        color: colors.verySoftOrange
    },
    __currentDay: {
        color: colors.lightGrayishOrange,
        fontFamily: 'Nunito-Bold',
    },
    __listWrapper: {
        overflow: 'hidden',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },
    __scheduleListContainer: {
        paddingTop: 5,
        height: height / 1.70,
    },
    __scheduleContainer: {
        paddingBottom: 80
    },
    __calendarContainer: {
        marginVertical: 5,
    },
    __caleandarWrapper: {
        paddingHorizontal: 10,
    },
    __itemContainer: {
        marginTop: 10,
        marginHorizontal: 15,
        backgroundColor: colors.lightGrayishOrange,
        borderRadius: 15,
        flexDirection: 'row',
    },
    __timeContainer: {
        padding: 10,
        alignItems: 'center',
        backgroundColor: colors.verySoftOrange,
        borderRadius: 15,
        minWidth: 80
    },
    __time: {
        fontFamily: 'Nunito-Bold',
        fontSize: 18,
        textAlign: 'center',
        color: colors.darkBrown
    },
    __detailsContainer: {
        padding: 10,
        justifyContent: 'space-around',
        flex: 1
    },
    __title: {
        fontFamily: 'Nunito-Bold',
        fontSize: 16,
        color: colors.darkBrown
    },
    __duration: {
        fontFamily: 'Nunito-Light',
        fontSize: 16,
        color: colors.darkBrown
    },
    __dateContainer: {
        padding: 8,
        alignItems: 'center',
        backgroundColor: colors.verySoftOrange,
        borderRadius: 15,
        minWidth: 60,
        margin: 5
    },
    __date: {
        fontFamily: 'Nunito-Bold',
        fontSize: 18,
        textAlign: 'center',
        color: colors.darkBrown
    },
    __day: {
        marginTop: 4,
        fontFamily: 'Nunito-Light',
        fontSize: 16,
        textAlign: 'center',
        color: colors.darkBrown
    },
    __bottomRightButtonWrapper: {
        position: 'absolute',
        bottom: 15,
        right: 15,
    },
    __bottomRightButton: {
        backgroundColor: colors.backdrop,
        alignSelf: 'flex-end',
        padding: 10,
        borderRadius: 60,
        borderColor: colors.white,
        borderWidth: 1,
    },
})