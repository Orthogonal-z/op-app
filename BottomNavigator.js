import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const BottomNavigator = () => {

    const Tab = createBottomTabNavigator();

    return (
        <View>
            <Text>BottomNavigator</Text>
        </View>
    )
}

export default BottomNavigator
