import { View, Text, StatusBar, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../Constants/Colors';
import LogoComponent from './LogoComponent';
import { useNavigation } from '@react-navigation/native';

const InfoSplashScreen = () => {
    const navigation = useNavigation();

    return (

        <View style={{ top: 30 }}>
            <View>
                <LogoComponent styling={
                    {
                        flexShrink: 0,
                        top: 79,
                        right: 242,
                        bottom: 737,
                        left: 24,
                        textAlign: "left",
                        color: "rgba(47, 53, 86, 1)",
                        fontSize: 24,
                        fontWeight: "700",
                        letterSpacing: 0
                    }} />
            </View>

            <View style={{
                left: 24,
                top: 151
            }}>
                <Text style={{
                    fontSize: 49,
                    color: COLORS.text_Color,
                    textAlign: "left",
                    fontWeight: "700",
                }}>
                    Talk
                </Text>

                <Text style={{
                    fontSize: 49,
                    color: COLORS.text_Color,
                    textAlign: "left",
                    fontWeight: "700",
                }}>
                    to the best
                </Text>

                <Text style={{
                    fontSize: 49,
                    fontStyle: "italic",
                    color: COLORS.button_Color,
                    textAlign: "left",
                    fontWeight: "700",
                }}>
                    Astrologers
                </Text>

                <Text style={{
                    fontSize: 49,
                    color: COLORS.text_Color,
                    textAlign: "left",
                    fontWeight: "700",
                }}>
                    in India
                </Text>
            </View>

            <View style={{ left: 24, width: 340, top: 380 }}>
                <Text style={styles.bySigningUpContainer}>
                    <Text
                        style={styles.bySigningUp}
                    >{`By signing up you are agree to our `}</Text>
                    <Text style={styles.termsOfUse}>Terms of use</Text>
                    <Text style={styles.bySigningUp}>{` and `}</Text>
                    <Text style={styles.termsOfUse}>Privacy policy</Text>
                </Text>
            </View>

            <View style={{ left: 24, top: 400 }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                    style={{
                        width: 335,
                        elevation: 8,
                        backgroundColor: COLORS.button_Color,
                        borderRadius: 10,
                        paddingVertical: 20,
                        paddingHorizontal: 12
                    }}>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: "bold",
                        alignSelf: "center",
                        textTransform: "uppercase",
                        color: COLORS.text_Color
                    }}>Login/Signup</Text>
                </TouchableOpacity>
            </View>



        </View >


    )
}

const styles = StyleSheet.create({
    bySigningUp: {
        color: COLORS.text_Color,

    },
    termsOfUse: {
        color: COLORS.button_Color,
    },
    bySigningUpContainer: {
        fontSize: 14,
        textAlign: "left",
    },
});



export default InfoSplashScreen;