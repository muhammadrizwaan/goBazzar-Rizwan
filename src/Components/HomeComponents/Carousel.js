import React, { useState } from 'react'
import { View, Text, Dimensions, Image, TouchableWithoutFeedback } from 'react-native'

import Carousel, { Pagination } from 'react-native-snap-carousel'

import styles from '../../Styles/HomeStyles/CarouselStyles'

const img_data = [
    require('../../Assets/HomeAssets/Banner_1.png'),
    require('../../Assets/HomeAssets/Banner_2.png'),
    require('../../Assets/HomeAssets/Banner_3.png'),
    // require('../../Assets/HomeAssets/Banner_6.jpg'),
    // require('../../Assets/HomeAssets/Banner_7.jpg'),
    // require('../../Assets/HomeAssets/Banner_8.jpg'),
    // require('../../Assets/HomeAssets/Banner_4.jpg'),
]

export default class extends React.Component {
    state = {
        activeIndex: 0
    }
    render() {
        const { width, height } = Dimensions.get('window')
        // console.warn(height);
        // console.warn(width)
        const item_height = height * 25 /100
        renderItem = ({ item, index }) => {
            return (
                <TouchableWithoutFeedback>
                    <View style={{ width: width, height: item_height }}>
                        <Image
                        // resizeMode={"contain"}
                            source={item}
                            style={{ width: width, height: item_height }}
                        />
                    </View>
                </TouchableWithoutFeedback>
            )
        }
        return (
            <View style={styles.container}>
                <Carousel
                    ref={c => { this._carousel = c; }}
                    data={img_data}
                    renderItem={renderItem}
                    sliderWidth={width}
                    itemWidth={width}
                    autoplay={true}
                    activeAnimationType={"timing"}
                    inactiveSlideScale={1}
                    // pagingEnabled={true}
                    enableSnap={true}
                    onSnapToItem={i => this.setState({ activeIndex: i })}
                    // Pagination={<Pagination activeDotIndex={1} dotsLength={4} />}
                    loop={true}
                    autoplayInterval={4000}
                />


                <View
                    style={styles.tabBar}
                >
                    <Pagination
                        containerStyle={{ backgroundColor: 'transparent' }}
                        dotStyle={styles.dotStyle}
                        inactiveDotOpacity={0.4}
                        inactiveDotScale={0.6}
                        activeDotIndex={this.state.activeIndex}
                        dotsLength={3}
                    />
                </View>
            </View>
        )
    }
}
