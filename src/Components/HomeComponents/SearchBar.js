import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Item, Input } from 'native-base'
import styles from '../../Styles/HomeStyles/SearchBarStyles'


export default ({ navigation }) => (
    <Item 
        style={styles.container}
        onPress={() => navigation.navigate("SearchScreen")}
    >
        <Image
            source={require('../../Assets/HomeAssets/search.png')}
            style={styles.iconStyle}
          
        />
        <View
            placeholder="What can we help you…"
            placeholderTextColor="#000000"
            style={styles.inputStyle}
            autoFocus={false}
        >
            <Text style={{ marginLeft: 10 }}>What can we help you…</Text>
        </View>
        {/* <TouchableOpacity
            style={styles.barCodeIconStyle}
        >
            <Image
                source={require('../../Assets/HomeAssets/barcode.png')}
                style={styles.barCodeIconStyle}
            />
        </TouchableOpacity> */}
    </Item>
)