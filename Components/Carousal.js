import {
    FlatList, Image, StyleSheet, Text, View, Dimensions, LogBox,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { COLORS } from '../Constants/Colors'

const Carousal = () => {

    const flatlistRef = useRef();
    // Get Dimesnions
    const screenWidth = Dimensions.get("window").width;
    const [activeIndex, setActiveIndex] = useState(0);

    // Auto Scroll

    useEffect(() => {
        let interval = setInterval(() => {
            if (activeIndex === carousalData.length - 1) {
                flatlistRef.current.scrollToIndex({
                    index: 0,
                    animation: true,
                });
            } else {
                flatlistRef.current.scrollToIndex({
                    index: activeIndex + 1,
                    animation: true,
                });
            }
        }, 3000);

        return () => clearInterval(interval);
    });

    const getItemLayout = (data, index) => ({
        length: screenWidth,
        offset: screenWidth * index,
        index: index,
    });

    const carousalData = [
        {
            id: "01",
            image: require("../assets/slider_1.jpg")
        },
        {
            id: "02",
            image: require("../assets/slider_3.jpg")
        },
    ]

    const renderCarousalItem = ({ item, index }) => {
        return (
            <View style={{
                

            }} key={index}>
                <Image source={item.image}
                    style={{
                        height: 200,
                        width: screenWidth,
                    }} />
            </View>
        )
    }

    const RenderDots = () => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                {carousalData.map((dots, index) => (

                    activeIndex === index ?
                        <View
                            key={index}
                            style={{
                                backgroundColor: COLORS.button_Color,
                                height: 6,
                                width: 6,
                                borderRadius: 5,
                                marginHorizontal: 6,
                            }}
                        ></View>

                        : <View
                            key={index}
                            style={{
                                backgroundColor: COLORS.lightGrey,
                                height: 6,
                                width: 6,
                                borderRadius: 5,
                                marginHorizontal: 6,
                            }}
                        ></View>
                ))}
            </View>
        );
    };


    const handleScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollPosition / screenWidth);
        setActiveIndex(index);
    };

    return (
        <View>
            <FlatList
                data={carousalData}
                ref={flatlistRef}
                renderItem={renderCarousalItem}
                horizontal
                pagingEnabled={true}
                keyExtractor={(item) => item.id}
                onScroll={handleScroll}
                getItemLayout={getItemLayout}
            />
            <RenderDots />
        </View>
    )
}

export default Carousal