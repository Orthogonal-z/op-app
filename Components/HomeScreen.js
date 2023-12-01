import { View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import AVATAR from '../Constants/AvatarImage'
import { COLORS } from '../Constants/Colors'
import Carousal from './Carousal'
import TopCategories from './TopCategories'
import HomeCardsMed from './HomeCardsMed'
import HomeSmallCards from './HomeSmallCards'

const HomeScreen = () => {
    return (
        <ScrollView>
            <SafeAreaView style={{ marginTop: 30, }}>
                <View
                    style={{
                        paddingHorizontal: 12,
                        paddingVertical: 20,
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 8
                    }}>
                    <TouchableOpacity>
                        <Image
                            source={{
                                uri: AVATAR
                            }} style={{
                                width: 45,
                                aspectRatio: 1,
                                borderRadius: 52,
                            }}
                            resizeMode='cover'
                        />
                    </TouchableOpacity>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 125
                    }}>
                        <View>
                            <Text numberOfLines={1}
                                style={{
                                    fontSize: 18, fontWeight: "600"
                                }}>Hi, Rachit 👋</Text>
                            <Text
                                numberOfLines={1}
                                style={{
                                    color: COLORS.lightGrey
                                }}>astro services for you
                            </Text>
                        </View>

                        <View>
                            <TouchableOpacity
                                style={{
                                    width: 40,
                                    padding: 12,
                                    aspectRatio: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 52,
                                    borderWidth: 1,
                                    backgroundColor: 'white',
                                    borderColor: 'white'
                                }}
                                onPress={() => console.log('pressed')}>

                                <Image style={{
                                    width: 28, height: 21
                                }} source={require('../assets/wallet.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* Carousal */}
                <View>
                    <Carousal />
                </View>

                {/* Top Categories */}
                <View>
                    <ScrollView showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            paddingBottom: 10
                        }}>
                        <TopCategories />
                    </ScrollView>
                </View>

                {/* Home Cards Medium Size */}
                <View>
                    <ScrollView showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            paddingBottom: 10
                        }}>
                        <HomeCardsMed />
                    </ScrollView>
                </View>

                {/* Home Cards Small Ecommerce */}
                <View>
                    <ScrollView showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            paddingBottom: 20
                        }}>
                        <HomeSmallCards />
                    </ScrollView>
                </View>


            </SafeAreaView>
        </ScrollView>
    )
}

export default HomeScreen