import React from 'react'
import { View, Text, Image, StatusBar } from 'react-native'

import styles from '../../Styles/SplashStyles'

export default () => {
    return (
        <View>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <Image
                source={require('../../Assets/SplashImage/splash.png')}
                style={styles.imgStyle}
            />
        </View>
    )
}