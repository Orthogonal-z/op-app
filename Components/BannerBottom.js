import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS } from '../Constants/Colors';

const BannerBottom = () => {
    return (
        <View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.bg_Color, paddingHorizontal: 20, paddingVertical: 12, marginBottom: 14, gap: 14 }}>
                <Pressable onPress={() => console.log('Refer and win')}>
                    <View style={{ display: 'flex', flexDirection: 'row', gap: 3, alignItems: 'center', backgroundColor: COLORS.minimalGrey, paddingHorizontal: 10, paddingVertical: 8, borderRadius: 10, paddingRight: 14 }}>
                        <View>
                            <Image source={require('../assets/gift.png')} style={{
                                height: 40,
                                width: 40,
                                borderRadius: 80
                            }} />
                        </View>
                        <View>
                            <Text style={{ fontWeight: 700 }}>Refer and Win</Text>
                            <Text style={{ fontWeight: 300, fontSize: 12 }}>Upto Rs.1000</Text>
                        </View>
                    </View>
                </Pressable>

                <Pressable onPress={() => console.log('Refer and win')}>
                    <View>
                        <View style={{ display: 'flex', flexDirection: 'row', gap: 8, alignItems: 'center', backgroundColor: COLORS.minimalGrey, paddingHorizontal: 10, paddingVertical: 8, borderRadius: 10, paddingRight: 14 }}>
                            <View >
                                <Image source={require('../assets/whatsapp.png')} style={{
                                    height: 40,
                                    width: 40,
                                    borderRadius: 10
                                }} />
                            </View>
                            <View>
                                <Text style={{ fontWeight: 700 }}>Daily Updates</Text>
                                <Text style={{ fontWeight: 300, fontSize: 12 }}>Horoscopes & more</Text>
                            </View>
                        </View>
                    </View>
                </Pressable>
            </View>

            <View style={{ paddingHorizontal: 20 }}>
                <Image source={require('../assets/bannerBottom.jpg')} style={{
                    height: 200,
                    width: 350,
                    borderRadius: 10
                }} />
            </View>

        </View>
    );
}

export default BannerBottom;

const styles = StyleSheet.create({});
