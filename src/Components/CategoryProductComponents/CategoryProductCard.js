import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import { Button, Icon, Item } from 'native-base'

// import styles from "../../Styles/ProductStyles/CategoryProductCardStyles"
import styles from "../../Styles/ProductDetailStyles/ProductTabStyles"
import { showMessage } from "react-native-flash-message"


import IoniIcons from "react-native-vector-icons/Ionicons"

import { useNavigation } from "@react-navigation/native"

export default ({
    product,
    userId,
    handleWishlistState
}) => {
    const navigation = useNavigation()
    return (
        <Item
            style={styles.searchProductContainer}
            onPress={() => navigation.navigate("ProductDetail", {
                id: product.ID
            })}
        >
            <Image
                resizeMode="contain"
                source={{ uri: product.img }}
                style={{ width: 77, height: 100, borderRadius: 20, }}
            />
            <View style={{ width: "60%", marginLeft: 20, alignItems: "flex-start" }}>
                <Text
                    style={{ ...styles.productTitle, marginVertical: 0, marginTop: 5, marginBottom: 2, color: "#515C6F", fontSize: 14 }}
                    numberOfLines={2}
                >
                    {product.post_title}
                </Text>
                <Text
                    // style={{ ...styles.productTitle, marginVertical: 0, marginBottom: 5, color: "#515C6F" }}

                    style={{
                        fontSize: 10,
                        fontFamily: "LexendDeca-Regular",
                        // color: "#515C6F",
                        color: "#ababab",
                        marginVertical: 2
                    }}
                    numberOfLines={2}
                >
                    {product.description}
                </Text>
                <View style={styles.toolsContainer}>
                    <Text
                        style={{
                            fontSize: 12,
                            color: "#8EA625",
                            fontWeight: "bold",
                            marginTop: 5
                        }}
                    >
                        {`AED ${product.price}`}
                    </Text>

                </View>
            </View>
            <View>
                <Button
                    transparent icon style={{ paddingTop: 0, paddingBottom: 0, marginLeft: 5 }}
                    onPress={() => {
                        if (userId.length > 0) {
                            handleWishlistState(product)
                        } else {
                            showMessage({
                                message: "You need to be login for adding product in wishlist",
                                position: 'bottom',
                                // icon: 'auto',
                                autoHide: true,
                                hideOnPress: true,
                                floating: true,
                                style: {
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: "#E8E8E8",
                                    width: "90%",
                                    borderRadius: 30,
                                    color: "black",
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,
                                    elevation: 7,
                                },
                                color: "#000000",
                            });
                        }
                    }}
                >
                    {
                        product.isAddedToWishlist ?
                            <IoniIcons name="ios-heart" size={20} style={{ color: "#EF8813" }} />
                            :
                            <IoniIcons name="ios-heart-empty" size={20} style={{ color: "#EF8813" }} />
                    }
                </Button>
            </View>
        </Item>
    )
}

{/* <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.navigate("ProductDetail", {
                id: product.ID
            })}
        >
            <View style={styles.container}>
                <View style={styles.imgContainer}>
                    <Image
                        source={{ uri: product.img }}
                        style={styles.imgStyle}
                    />
                </View>
                <View style={styles.rowContainer}>
                    <View style={{ width: 87 }}>
                        <Text numberOfLines={2} style={styles.titleStyle}>{product.post_title}</Text>
                        <Text style={styles.priceStyle} numberOfLines={1}>{`AED ${product.price}`}</Text>
                    </View>
                    <View style={{ marginLeft: "auto", width: 20, marginLeft: 3 }}>
                        <Button 
                            transparent icon style={{ paddingTop: 0, paddingBottom: 0 }}
                            onPress={() => {
                                if(userId.length > 0) {
                                    handleWishlistState(product)
                                }
                            }}
                        >
                            {
                                product.isAddedToWishlist ?
                                <IoniIcons name="ios-heart" size={20} style={{ color: "#EF8813" }} />
                                :
                                <IoniIcons name="ios-heart-empty" size={20} style={{ color: "#EF8813" }} />
                            }
                        </Button>
                    </View>
                </View>
            </View>
        </TouchableOpacity> */}