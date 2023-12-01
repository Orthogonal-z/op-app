import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { astroData } from '../Constants/TopCategoriesData'
import { COLORS } from '../Constants/Colors'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'


const HomeCardsMed = () => {

    return (
        <View>
            <View>
                <View>
                    <Text style={{ paddingLeft: 15, fontSize: 22, fontWeight: '600' }}>Astrologers</Text>
                </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    className='overflow-visible'
                    contentContainerStyle={{
                        paddingHorizontal: 15
                    }}>

                    {
                        astroData.map((pandit, index) => {
                            return (
                                <TouchableWithoutFeedback>
                                    <View
                                        style={{ marginTop: 11, marginRight: 10, backgroundColor: 'white', borderRadius: 14, height: 400 }}>
                                        <Image
                                            style={{
                                                height: 266,
                                                width: 264, resizeMode: 'cover',
                                                borderTopRightRadius: 14, borderTopLeftRadius: 14
                                            }}
                                            source={pandit.image}
                                        />

                                        <View>

                                            <View>
                                                <Text style={{ fontWeight: '700', fontSize: 16 }}>{pandit.name}</Text>
                                                <Text>{pandit.experience} Yrs</Text>
                                                {
                                                    pandit.isAvailable ? <View style={{ height: 8, width: 8, backgroundColor: 'green', borderRadius: 5 }}></View> : null
                                                }
                                            </View>
                                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 3 }}>
                                                <Text>{pandit.ratings}</Text>
                                                <Image
                                                    style={{ height: 24, width: 24 }} source={require('../assets/stars.png')} />
                                            </View>
                                        </View>

                                        <View>
                                            
                                        </View>
                                        <View >

                                        </View>
                                    </View>
                                </TouchableWithoutFeedback>
                            )
                        })
                    }
                </ScrollView>
            </View>
        </View>
    )
}

export default HomeCardsMed