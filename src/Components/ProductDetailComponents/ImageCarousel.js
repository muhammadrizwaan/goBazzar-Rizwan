import React, { useState } from 'react'
import { View, Text, Dimensions, Image, TouchableWithoutFeedback } from 'react-native'

import Carousel, { Pagination } from 'react-native-snap-carousel'

import styles from '../../Styles/HomeStyles/CarouselStyles'

// const img_data = [
//     require('../../Assets/HomeAssets/Banner_2.png'),
//     require('../../Assets/HomeAssets/Banner_3.png'),
// ]

export default class extends React.Component {
    state = {
        activeIndex: 0
    }
    render() {
        const { width, height } = Dimensions.get('window')
        renderItem = ({ item, index }) => {
            return (
                // <TouchableWithoutFeedback onPress={() => this.props.onOpen(index - 3)}>
                <TouchableWithoutFeedback onPress={() => this.props.onOpen(this.state.activeIndex)}>
                    <View style={{ width: width, height: 200 }}>
                        <Image
                            resizeMode={"contain"}
                            source={{uri: item}}
                            style={{ width: width, height: 180 }}
                        />
                    </View>
                </TouchableWithoutFeedback>
            )
        }
        return (
            <View style={{height: 200}}>
                <Carousel
                    ref={c => { this._carousel = c; }}
                    data={this.props.images}
                    renderItem={renderItem}
                    sliderWidth={width}
                    itemWidth={width}
                    autoplay={false}
                    activeAnimationType={"timing"}
                    inactiveSlideScale={1}
                    // pagingEnabled={true}
                    enableSnap={true}
                    onSnapToItem={i => {
                        this.setState({ activeIndex: i })
                        
                    }}
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
                        dotsLength={this.props.images.length}
                    />
                </View>
            </View>
        )
    }
}
