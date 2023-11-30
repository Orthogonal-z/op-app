import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { COLORS } from '../Constants/Colors';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const InitialSplash = () => {

    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Splash');
        }, 3000)
    }, [])


    return (
        <View style={styles.iPhone13141}>
            <Text style={styles.oKPANDIT}>
                OK PANDIT
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    iPhone13141: {
        flexShrink: 0,
        backgroundColor: COLORS.bg_Color,
        alignItems: "flex-start",
        rowGap: 0
    },

    oKPANDIT: {
        flexShrink: 0,
        top: 403,
        right: 133,
        bottom: 403,
        left: 133,
        textAlign: "left",
        color: COLORS.text_Color,
        fontSize: 24,
        fontWeight: "700",
        letterSpacing: 0
    }
})


export default InitialSplash;