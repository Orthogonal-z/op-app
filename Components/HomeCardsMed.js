import { View, Text, ScrollView, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { astroData } from '../Constants/TopCategoriesData'
import { COLORS } from '../Constants/Colors'


const HomeCardsMed = () => {

    const PanditServices = (services) => {
        return (
            <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginLeft: 15 }}>
                {services.slice(0, 3).map((service, i) => (
                    <Text
                        key={i}
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingHorizontal: 5,
                            paddingVertical: 2,
                            marginBottom: 16,
                            borderRadius: 8,
                            backgroundColor: COLORS.jaraSaaGrey,
                            color: 'black'
                        }}>
                        {service}
                    </Text>
                ))}
            </View>
        );
    };

    const handlePanditContact = () => {
        console.log('OKAY RACHIT')
    }

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
                                <TouchableWithoutFeedback key={index}>
                                    <View
                                        style={{ marginTop: 11, marginRight: 10, backgroundColor: 'white', borderRadius: 14, height: 370 }}>
                                        <Image
                                            style={{
                                                height: 186,
                                                width: 246, resizeMode: 'contain',
                                                borderTopRightRadius: 14, borderTopLeftRadius: 14
                                            }}
                                            source={pandit.image}
                                        />

                                        <View>
                                            <View style={{
                                                display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10, paddingHorizontal: 16
                                            }}>
                                                <Text style={{ fontWeight: '700', fontSize: 17 }}>{pandit.name}</Text>

                                                <Text style={{ color: COLORS.betterMinimalGrey }}>{pandit.experience} Yrs Exp.</Text>

                                            </View>
                                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 3, justifyContent: 'space-between', paddingHorizontal: 16, marginVertical: 7 }}>
                                                <View style={{
                                                    display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 4
                                                }}>
                                                    {
                                                        pandit.isAvailable ? <View style={{ height: 8, width: 8, backgroundColor: 'green', borderRadius: 5 }}></View> : null
                                                    }

                                                    {
                                                        pandit.isAvailable ? <View><Text style={{ color: 'green', fontWeight: '600' }}>Available</Text></View> : null
                                                    }
                                                </View>
                                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 3 }}>
                                                    <Text>{pandit.ratings}</Text>
                                                    <Image
                                                        style={{ height: 24, width: 24 }} source={require('../assets/stars.png')} />
                                                </View>
                                            </View>
                                        </View>

                                        {PanditServices(pandit.services)}

                                        <View>
                                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16 }}>
                                                <Text style={{ color: COLORS.darkText_Color, fontWeight: '800', fontSize: 15 }}>Rs.{pandit.price}/minute</Text>

                                                <TouchableOpacity
                                                    onPress={handlePanditContact}
                                                    style={{
                                                        backgroundColor: COLORS.button_Color, color: COLORS.darkText_Color, paddingHorizontal: 20, paddingVertical: 12, borderRadius: 5
                                                    }}>
                                                    <Text style={{
                                                        textAlign: 'center'
                                                    }}>Contact</Text>
                                                </TouchableOpacity>
                                            </View>
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