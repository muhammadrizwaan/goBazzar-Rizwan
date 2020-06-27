import React from "react"

import { View, Text, Image } from "react-native"
import { Item } from "native-base"
import styles from "../../Styles/ProductDetailStyles/ProductTabStyles"

import StarRating from "react-native-star-rating"

import IoniIcons from "react-native-vector-icons/Ionicons"

export default ({
    product,
    userId,
    handleWishlistState,
    navigation
}) => (

        <Item
            style={styles.searchProductContainer}
            onPress={() => navigation.navigate("ProductDetail", {
                id: product.ID
            })}
        >
            <Image
                resizeMode="contain"
                source={{ uri: product.img }}
                style={{ width: 70, height: 100, }}
            />
            <View style={{ width: "70%", marginLeft: 20, }}>
                <Text
                    style={{ ...styles.productTitle, marginVertical: 0, marginTop: 5, marginBottom: 2, color: "#515C6F", fontSize: 13 }}
                    numberOfLines={2}
                >
                    {product.post_title}
                </Text>
                {/* <Text
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
                </Text> */}
                <View style={[styles.toolsContainer, { justifyContent: 'space-between', }]}>
                    <View>
                       {product.offerPrice === "0"?
                       <View></View>:
                       <Text
                            style={{
                                fontSize: 12,
                                // color: "#8EA625",
                                fontWeight: "bold",
                                marginTop: 5,
                                textDecorationLine: product.offerPrice ? 'line-through' : "none",
                                color: product.offerPrice ? "#C9C9C9" : "#8EA625"
                            }}
                        >
                            {`AED ${product.price}`}
                        </Text>}
                        <Text
                            style={{
                                fontSize: 12,
                                color: "#8EA625",
                                fontWeight: "bold",
                                marginTop: 5,
                                display: product.offerPrice ? "flex" : "none"
                            }}
                        >
                            {product.offerPrice === "0"?`AED ${product.price}`:`AED ${product.offerPrice}`}
                        </Text>
                    </View>
                    <Image
                        resizeMode="contain"
                        source={{ uri: product.storeImg }}
                        style={{ width: 50, height: 50, }}
                    />


                    {/* <StarRating
                        disabled={false}
                        maxStars={5}
                        rating={4}
                        starSize={10}
                        fullStarColor="#FFDB26"
                        halfStarColor="#FFDB26"
                    // selectedStar={(rating) => this.onStarRatingPress(rating)}
                    />
                    <Text
                        style={{ marginHorizontal: 5, opacity: 0.6 }}
                    >
                        (25)
                </Text>

                    <View
                        style={styles.ratingContainer}
                    >
                        <IoniIcons name="ios-star" style={{ color: "white" }} size={9} />
                        <Text style={{ fontSize: 9, color: "white", marginLeft: 5 }}>4.0</Text>
                    </View> */}

                </View>
            </View>


        </Item>
    )