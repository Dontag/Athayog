import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../utilities/utilities';
import { StatusBar } from 'expo-status-bar';

const AddSession = ({ navigation }: any) => {
    return (
        <View style={styles.__container}>
            <Text>AddSession</Text>
            <StatusBar style='light' translucent />
        </View>
    )
}

export default AddSession;

const styles = StyleSheet.create({
    __container: {
        flex: 1,
        backgroundColor: colors.darkBrown,
    },
})