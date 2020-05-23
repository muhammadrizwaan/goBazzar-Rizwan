import React from 'react'
import { Image } from "react-native"
import { ListItem, Left, Icon, Body, Text, Right } from 'native-base'
import { useNavigation } from '@react-navigation/native';

import styles from '../../Styles/HomeStyles/ProductCardStyles'
import IoniIcons from 'react-native-vector-icons/Ionicons'

export default ({category = {}}) => {
    const navigation = useNavigation();

    console.warn(category.imageURL)
    return (
        <ListItem 
            icon
            onPress={() => navigation.navigate('SubCategories', {
                heading: category.text,
                id: category.id
            })}
        >
            <Left>
                <Image 
                    source={{
                        uri: category.imageURL
                    }}
                    style={{
                        width: 25,
                        height: 25
                    }}
                />
            </Left>
            <Body>
                <Text style={styles.titleStyle}>{category.text}</Text>
            </Body>
        </ListItem>
    )
}
