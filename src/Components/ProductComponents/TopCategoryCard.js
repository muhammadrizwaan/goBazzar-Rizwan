import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import styles from "../../Styles/HomeStyles/ProductCardStyles"

export default ({
    category,
    navigation
}) => (
        <TouchableOpacity 
            activeOpacity={0.9} 
            onPress={() => navigation.navigate('CategoryProducts', {
                heading: category.name,
                id: category.id
            })}
        >
            <View 
                style={{
                    ...styles.container,
                    marginLeft: 5,
                    marginRight: 5,
                    marginTop: 10,
                    marginBottom: 10
                }}
            >
                <Image
                    source={{ uri: category.img }}
                    style={styles.imgStyle}
                />
                <View style={{ margin: 7, marginTop: "auto" }}>
                    <Text 
                        numberOfLines={1} 
                        style={{
                            ...styles.titleStyle,
                            alignSelf: 'center',
                            fontWeight: 'bold'
                        }}
                    >
                        {category.name}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )