import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { categories } from '../Constants/TopCategoriesData'
import { COLORS } from '../Constants/Colors'
import { useState } from 'react'

const TopCategories = () => {

    const [activeCat, setActiveCat] = useState(null);

    const handleActiveCategory = (catId) => {
        // setActiveCat()
        console.log(catId)
    }

    return (
        <View style={{ marginTop: 18 }}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className='overflow-visible'
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}>

                {
                    categories.map((cat, index) => {
                        let isActive = cat.id === activeCat
                        return (
                            <View key={index}
                                style={{
                                    display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: 6
                                }}>
                                <TouchableOpacity
                                    onPress={() => handleActiveCategory(cat.id)}
                                    style={{
                                        backgroundColor: COLORS.minimalGrey, paddingVertical: 15, paddingHorizontal: 20,
                                        borderRadius: 50, shadowOffset: 10,
                                        backgroundColor: COLORS.minimalGrey
                                    }}>
                                    <View style={{
                                        display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10
                                    }}>
                                        <Image
                                            style={{ width: 30, height: 30 }}
                                            source={cat.image} />
                                        <Text style={{
                                            color: 'black', fontWeight: '600'
                                        }}>
                                            {cat.name}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default TopCategories