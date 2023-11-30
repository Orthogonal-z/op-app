import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../Constants/Colors';
import { useNavigation } from '@react-navigation/native';
import LogoComponent from './LogoComponent';

const OTPScreen = () => {
    const navigation = useNavigation();

    const [otpValue, setOTPValue] = useState('');
    const [timer, setTimer] = useState(30);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(prevTimer => (prevTimer > 0 ? prevTimer - 1 : 0));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleOTPCheck = () => {
        if (otpValue.length === 4) {
            navigation.navigate('HomeScreen');
        }
    };

    return (
        <SafeAreaView>
            <View>
                <View>
                    <LogoComponent styling={{ top: 89, right: 242, bottom: 737, left: 24, textAlign: "left", color: COLORS.text_Color, fontSize: 24, fontWeight: "700", letterSpacing: 0 }} />
                </View>

                <View>

                    <View>
                        <Text style={{ top: 129, height: 23, fontSize: 18, fontWeight: "700", fontStyle: "normal", lineHeight: 18, color: COLORS.lightGrey, left: 24 }}>Enter OTP here</Text>
                    </View>

                    <View style={{ top: 134, }}>
                        <TextInput
                            onChangeText={otp => setOTPValue(otp)}
                            style={{ width: 345, height: 54, borderRadius: 10, backgroundColor: "#FFFFFF", shadowColor: "rgba(0, 0, 0, 0.08)", shadowOffset: { width: 0, height: 2 }, shadowRadius: 9, shadowOpacity: 1, left: 24, paddingLeft: 12 }}
                            placeholder=''
                        />
                    </View>
                </View>

                <View style={{ left: 24, top: 640 }}>
                    <TouchableOpacity
                        style={otpValue.length > 3 ? styles.notDisbaled : styles.disabled}
                        onPress={handleOTPCheck}
                        disabled={otpValue.length > 3 ? false : true}>
                        <Text style={{ fontSize: 14, fontWeight: "bold", alignSelf: "center", textTransform: "uppercase", color: COLORS.text_Color }}>
                            Verify
                        </Text>
                    </TouchableOpacity>
                </View>



                {timer === 0

                    ?

                    <View style={{ left: 24, top: 100 }}>
                        <TouchableOpacity onPress={() => alert('Fuck Off')}>
                            <Text style={{ fontWeight: 'bold', color: 'red' }}>Resend</Text>
                        </TouchableOpacity>
                    </View>

                    :

                    <View style={{ left: 24, top: 100 }}>
                        <Text style={{ fontWeight: 'bold', color: 'red' }}>{timer} seconds</Text>
                    </View>
                }
            </View>
        </SafeAreaView>
    );
};

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

export default OTPScreen;
