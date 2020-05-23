import React from "react"
import { View, Text } from "react-native"
import { Content } from "native-base"

import styles from "../../Styles/ProductDetailStyles/PriceInsightsStyles"
import PriceChart from "./PriceChart"

export default () => (
    <Content
        contentContainerStyle={{ paddingBottom: 10, paddingTop: 65, paddingHorizontal: 25 }}
    >
        <View style={{ ...styles.priceContainer, marginTop: 40 }}>
            <Text style={styles.productName} >
                Faux Sued Ankle Boots
            </Text>
            <View style={{ marginLeft: "auto" }}>
                <Text style={styles.cPriceText}>Current Price</Text>
                <View style={{ ...styles.priceContainer, marginLeft: "auto" }}>
                    <Text style={{ ...styles.cPriceText, alignSelf: "flex-end", marginRight: 5 }}>AED</Text>
                    <Text style={styles.product_price}>62.99</Text>
                </View>
            </View>
        </View>

        <PriceChart />


        <View style={{...styles.priceContainer, marginTop: 20}}>
            <Text style={styles.productName}>Average Price</Text>
            <View style={{ ...styles.priceContainer, marginLeft: "auto" }}>
                <Text style={{ ...styles.cPriceText, alignSelf: "flex-end", marginRight: 5 }}>AED</Text>
                <Text style={styles.product_price}>62.99</Text>
            </View>
        </View>

        <View style={{...styles.priceContainer, marginTop: 20}}>
            <Text style={styles.productName}>Lowest Price</Text>
            <View style={{ ...styles.priceContainer, marginLeft: "auto" }}>
                <Text style={{ ...styles.cPriceText, alignSelf: "flex-end", marginRight: 5 }}>AED</Text>
                <Text style={styles.product_price}>62.99</Text>
            </View>
        </View>

        <View style={{...styles.priceContainer, marginTop: 20}}>
            <Text style={styles.productName}>Highest Price</Text>
            <View style={{ ...styles.priceContainer, marginLeft: "auto" }}>
                <Text style={{ ...styles.cPriceText, alignSelf: "flex-end", marginRight: 5 }}>AED</Text>
                <Text style={styles.product_price}>62.99</Text>
            </View>
        </View>
    </Content>
)