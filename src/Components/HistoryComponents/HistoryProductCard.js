import React from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { Item, Button, Icon } from "native-base"

import styles from "../../Styles/ProductDetailStyles/ProductTabStyles"
import { removeProductFromUserWishlist } from "../../actions/getWishlist"
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { showMessage } from "react-native-flash-message"
import axios from "axios";
import Apis from "../../Api/Apis"

import IoniIcons from "react-native-vector-icons/Ionicons"

import { connect } from "react-redux"


class HistoryCard extends React.Component {
    render() {
        const { navigation, product } = this.props
        return (
            <TouchableOpacity
                style={{ display: "flex", flexDirection: "row", marginLeft: 10, marginRight: 10, marginVertical: 10, paddingVertical: 5 }}
                onPress={() => navigation.navigate("ProductDetail", {
                    id: product.ID
                })}
            >
                <Image
                    source={{ uri: product.img }}
                    style={{ width: 77, height: 77, borderRadius: 20, }}
                />
                <View style={{ width: "60%", marginLeft: 20, alignItems: "flex-start" }}>
                    <Text
                        style={{ ...styles.productTitle, marginVertical: 5, color: "#515C6F" }}
                        numberOfLines={2}
                    >
                        {product.productName}
                    </Text>
                    <View style={{ ...styles.priceContainer }}>
                        <Text style={{ ...styles.cPriceText, alignSelf: "flex-end", marginRight: 5 }}>AED</Text>
                        <Text style={styles.product_price}>{product.price}</Text>
                    </View>

                    {/* <TouchableOpacity style={{marginTop: "auto", marginRight: 10 }}>
                    <Text style={styles.optionButton}>12 Options</Text>
                </TouchableOpacity> */}

                </View>

                {/* <View>
                <Button transparent> 
                    <Icon 
                        name="close" 
                        style={{
                            color: "#8ea725"
                        }}
                    />
                </Button>
            </View> */}

            </TouchableOpacity>
        )
    }
}



export default HistoryCard