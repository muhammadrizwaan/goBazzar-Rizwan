import React from "react"
import { View, Text, Dimensions } from "react-native"


import styles from "../../Styles/ProductDetailStyles/StoreCardStyles"


export default () => (
    <View
        style={{
            ...styles.container, 
            paddingHorizontal: 20,
        }}
    >
        <View style={{paddingBottom: 20}}>
            <Text style={{...styles.storeNameText, padding: 5}}>Website</Text>

            <Text style={{...styles.product_name, padding: 5}}>www.amazon.ae</Text>
        </View>

        <View style={{paddingBottom: 20}}>
            <Text style={{...styles.storeNameText, padding: 5}}>Delivery Info</Text>

            <Text style={{...styles.product_name, padding: 5}}>Within 2 - 4 days</Text>
        </View>

        <View style={{paddingBottom: 20}}>
            <Text style={{...styles.storeNameText, padding: 5}}>Shipping Info</Text>

            <Text style={{...styles.product_name, padding: 5}}>Only for order over 100 AED</Text>
        </View>

        <View style={{paddingBottom: 20}}>
            <Text style={{...styles.storeNameText, padding: 5}}>Warranty</Text>

            <Text style={{...styles.product_name, padding: 5}}>Depends on seller</Text>
        </View>
    </View>
)