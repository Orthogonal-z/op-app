import { View, Text, ScrollView, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { ecomData } from '../Constants/TopCategoriesData';
import { COLORS } from '../Constants/Colors';

const HomeSmallCards = () => {
    return (
        <View >
            <View>
                <Text style={{ paddingLeft: 15, fontSize: 22, fontWeight: '600' }}>Top picks for you</Text>
            </View>
            <View style={{
                display: 'flex',
                flexDirection: 'row', flexWrap: 'wrap', marginLeft: 15, marginTop: 11, gap: 6
            }}>
                {
                    ecomData.map((data, index) => (
                        <View style={{
                            backgroundColor: 'white',
                            height: 172,
                            width: 112,
                            borderRadius: 10
                        }}>
                            <Image style={{ height: 78, width: 69, marginLeft: '20%', marginTop: 10 }} source={data.image} />

                            <View style={{
                                display: 'flex', gap: 10, marginTop: 8
                            }}>
                                <View>
                                    <Text style={{ color: 'black', fontWeight: '700', fontSize: 17, marginLeft: '20%', }}>{data.productName}</Text>
                                </View>

                                <View>
                                    <TouchableOpacity >
                                        <Text style={{
                                            backgroundColor: COLORS.button_Color, color: 'black', textAlign: 'center',
                                            paddingHorizontal: 10, paddingVertical: 12, borderBottomLeftRadius: 10, borderBottomRightRadius: 10,
                                            fontWeight: '400'
                                        }}>
                                            checkout
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    ))
                }
            </View>
        </View>
    )
}
export default HomeSmallCards;