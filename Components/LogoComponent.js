import { Image, Text, View } from 'react-native'
import React from 'react'

const LogoComponent = ({ styling }) => {
    return (
        <View>
            <Text style={styling}>
                {/* <Image
                    
                    source={require('../assets/OKPANDIT.png')}
                /> */}
                OK PANDIT
            </Text>
        </View>
    )
}

export default LogoComponent
