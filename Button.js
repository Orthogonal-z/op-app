import { View, Text } from 'react-native'
import React from 'react'
import { COLORS } from './Constants/Colors'

const Button = ({ buttonName }) => {
    return (
        <View style={{ left: 24, top: 400 }}>
            <Pressable style={{
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
                }}>
                    {buttonName}
                </Text>
            </Pressable>
        </View>
    )
}

export default Button