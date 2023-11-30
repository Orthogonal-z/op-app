import { View, Text, SafeAreaView, TextInput, Pressable, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import LogoComponent from './LogoComponent'
import { COLORS } from '../Constants/Colors'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {

    const navigation = useNavigation();

    const [phoneNumberInut, setPhoneNumberInut] = useState('');

    return (
        <SafeAreaView>
            <View >
                <View>
                    <LogoComponent styling={{
                        top: 89,
                        right: 242,
                        bottom: 737,
                        left: 24,
                        textAlign: "left",
                        color: COLORS.text_Color,
                        fontSize: 24,
                        fontWeight: "700",
                        letterSpacing: 0
                    }} />
                </View>

                <View>
                    <View>
                        <Text style={{
                            top: 129,
                            height: 23,
                            fontSize: 18,
                            fontWeight: "700",
                            fontStyle: "normal",
                            lineHeight: 18,
                            color: COLORS.lightGrey,
                            left: 24
                        }}>Enter Your Name</Text>
                    </View>

                    <View style={{ top: 134, }}>

                        <TextInput style={{
                            width: 345,
                            height: 54,
                            borderRadius: 10,
                            backgroundColor: "#FFFFFF",
                            shadowColor: "rgba(0, 0, 0, 0.08)",
                            shadowOffset: {
                                width: 0,
                                height: 2
                            },
                            shadowRadius: 9,
                            shadowOpacity: 1,
                            left: 24,
                            paddingLeft: 12
                        }}
                            placeholder='enter your name here' />
                    </View>


                    <View>
                        <View>
                            <Text style={{
                                top: 159,
                                height: 23,
                                fontSize: 18,
                                fontWeight: "700",
                                fontStyle: "normal",
                                lineHeight: 18,
                                color: COLORS.lightGrey,
                                left: 24
                            }}>Enter Your Phone Number</Text>
                        </View>

                        <View style={{ top: 164, }}>
                            <TextInput style={{
                                width: 345,
                                height: 54,
                                borderRadius: 10,
                                backgroundColor: "#FFFFFF",
                                shadowColor: "rgba(0, 0, 0, 0.08)",
                                shadowOffset: {
                                    width: 0,
                                    height: 2
                                },
                                shadowRadius: 9,
                                shadowOpacity: 1,
                                left: 24,
                                paddingLeft: 12
                            }}
                                placeholder='enter your phone number here'
                                onChangeText={text => setPhoneNumberInut(text)} />
                        </View>
                    </View>

                </View>

                <View style={{ left: 24, top: 570 }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('OTP')}
                        style={phoneNumberInut.length < 10 ? styles.disabled : styles.notDisbaled}
                        disabled={phoneNumberInut.length < 10 ? true : false}>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: "bold",
                            alignSelf: "center",
                            textTransform: "uppercase",
                            color: COLORS.text_Color
                        }}>
                            Verify
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    notDisbaled: {
        width: 335,
        elevation: 8,
        backgroundColor: COLORS.button_Color,
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 12
    },
    disabled: {
        width: 335,
        elevation: 8,
        backgroundColor: COLORS.minimalGrey,
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 12,
    },
});

export default LoginScreen