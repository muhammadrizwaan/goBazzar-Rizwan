import React from "react"
import { View, Text } from "react-native"


import styles from "../../Styles/ProductDetailStyles/StoreCardStyles"


export default () => (
    <View
        style={{...styles.container, paddingHorizontal: 20 }}
    >
        <View style={{paddingBottom: 20}}>
            <Text style={{...styles.storeNameText, padding: 5}}>Policy 1</Text>

            <Text style={{...styles.product_name, padding: 5}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at ipsum ut nisl egestas blandit quis rhoncus nisi. Morbi venenatis urna dui, ac gravida lorem lacinia et. Maecenas a condimentum risus, vitae venenatis tellus. Duis at placerat ante. Quisque ut orci interdum, rhoncus mi ac,
            </Text>
        </View>

        <View style={{paddingBottom: 20}}>
            <Text style={{...styles.storeNameText, padding: 5}}>Policy 2</Text>

            <Text style={{...styles.product_name, padding: 5}}>
                Maecenas a condimentum risus, vitae venenatis tellus.
            </Text>
        </View>

        <View style={{paddingBottom: 20}}>
            <Text style={{...styles.storeNameText, padding: 5}}>Policy 2</Text>

            <Text style={{...styles.product_name, padding: 5}}>
                Maecenas a condimentum risus, vitae venenatis tellus.
            </Text>
        </View>
    </View>
)