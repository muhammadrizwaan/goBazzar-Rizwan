import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import styles from '../../Styles/HomeStyles/ProductSeparator'

export default ({
    title,
    buttonTitle,
    buttonAction
}) => (
    <View style={styles.container}>
        <Text style={styles.titleStyle}>
            {title}
        </Text>

        <TouchableOpacity 
            style={styles.buttonStyle}
            onPress={buttonAction}
        >
            <Text style={styles.buttonTextTitle}>
                {buttonTitle}
            </Text>
        </TouchableOpacity>
    </View>
)