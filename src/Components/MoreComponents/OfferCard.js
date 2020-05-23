import React from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { Item } from "native-base"
import styles from "../../Styles/ProductDetailStyles/ProductTabStyles"

import IoniIcons from "react-native-vector-icons/Ionicons"

export default ({ navigation }) => (
    <View
        style={{ display: "flex", flexDirection: "row", marginLeft: 10, marginRight: 10, marginVertical: 10, paddingVertical: 5 }}
        onPress={() => navigation.navigate("StoreDetail")}
    >
        <Image
            source={{ uri: "https://apbf.dog/wp-content/uploads/2014/02/AmazonSmile-Logo.jpg" }}
            style={{ width: 77, height: 77, borderRadius: 20, }}
        />
        <View style={{ width: "70%", marginLeft: 20, alignItems: "flex-start" }}>
            <Text
                style={{ ...styles.productTitle, marginVertical: 5, color: "#515C6F" }}
                numberOfLines={2}
            >
                Amazon AE
            </Text>
            <Text style={{ fontSize: 12, color: "#515C6F", opacity: 0.48 }} numberOfLines={2}>
                Add " DISCOUNT20 " for 20% off
            </Text>

            <TouchableOpacity style={{marginLeft: "auto", marginTop: "auto", marginRight: 10}}>
                <Text style={styles.seeButton}>See all Products</Text>
            </TouchableOpacity>

        </View>

    </View>
)