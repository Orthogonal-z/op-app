import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import InitialSplash from './Components/InitialSplash';
import InfoSplashScreen from './Components/InfoSplashScreen';
import { StatusBar } from 'expo-status-bar';
import { COLORS } from './Constants/Colors';
import LoginScreen from './Components/LoginScreen';
import OTPScreen from './Components/OTPScreen';
import HomeScreen from './Components/HomeScreen';

const Stack = createStackNavigator();


const AppNavigator = () => {
    return (
        <NavigationContainer>

            {/* StatusBar */}
            <View>
                <StatusBar backgroundColor={COLORS.button_Color} />
            </View>

            <Stack.Navigator
                initialRouteName="HomeScreen">

                <Stack.Screen
                    component={InitialSplash}
                    name="InitialLogo"
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    component={InfoSplashScreen}
                    name="Splash"
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    component={LoginScreen}
                    name="Login"
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    component={OTPScreen}
                    name="OTP"
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    component={HomeScreen}
                    name="HomeScreen"
                    options={{
                        headerShown: false
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator
