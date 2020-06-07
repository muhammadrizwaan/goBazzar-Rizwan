import React from "react"
import { View, Text, TouchableOpacity, Platform } from "react-native"

import { Content, Container } from "native-base"
import ImageCarousel from "./ImageCarousel"

import IoniIcons from "react-native-vector-icons/Ionicons"
import StarRating from 'react-native-star-rating';
import StoreCard from "./StoreCard"
import DescriptionCard from "./DescriptionCard"
import ProductMainStore from "./ProductMainStore"

import styles from "../../Styles/ProductDetailStyles/ProductTabStyles"

export default ({
    product = {},
    navigation,
    handleAddProductToCompare,
    handleAddProductToWishlist,
    stores,
    onOpen
}) => {
    return (
        <Content
            contentContainerStyle={{
                paddingBottom: 10,
                paddingTop: Platform.OS === "ios" ? 30 : 50
            }}
        >
            <View
                style={styles.container}
            >
                <ImageCarousel
                    images={product.images}
                    onOpen={onOpen}
                />
                <View style={{ marginLeft: 20, marginRight: 20 }}>
                    <Text style={styles.productTitle}>
                        {product.name}
                    </Text>
                </View>

                <View style={styles.toolsContainer}>
                    <StarRating
                        disabled={false}
                        maxStars={5}
                        rating={product.totalRatingCount}
                        starSize={10}
                        fullStarColor="#FFDB26"
                        halfStarColor="#FFDB26"
                    // selectedStar={(rating) => this.onStarRatingPress(rating)}
                    />
                    <Text
                        style={{ marginHorizontal: 5, opacity: 0.6 }}
                    >
                        ({product.totalRatingCount})
                    </Text>

                    {/* <View
                        style={styles.ratingContainer}
                    >
                        <IoniIcons name="ios-star" style={{ color: "white" }} size={9} />
                        <Text style={{ fontSize: 9, color: "white", marginLeft: 5 }}>
                            {product.averageRating}
                        </Text>
                    </View> */}
                    <TouchableOpacity
                        onPress={() => handleAddProductToWishlist(product.id)}
                    >
                        {product.isAddedToWishlist ?
                            <IoniIcons
                                name="ios-heart"
                                size={20}
                                style={{ marginHorizontal: 5, color: "#8EA625" }}
                            />
                            :
                            <IoniIcons
                                name="ios-heart-empty"
                                size={20}
                                style={{ marginHorizontal: 5, color: "#8EA625" }}
                            />
                        }
                    </TouchableOpacity>

                    {/* <TouchableOpacity>
                        <IoniIcons
                            name="ios-notifications-outline"
                            size={20}
                            style={{ marginHorizontal: 5 }}
                        />
                    </TouchableOpacity> */}

                    {/* <TouchableOpacity>
                        <IoniIcons
                            name="md-share"
                            size={20}
                            style={{ marginHorizontal: 5 }}
                        />
                    </TouchableOpacity> */}
                </View>


                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        // alignItems: "center"
                    }}
                >
                    <TouchableOpacity
                        style={styles.addToButton}
                        onPress={handleAddProductToCompare}
                    >
                        <Text style={styles.addToText}>Add To Compare</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            ...styles.addToButton,
                            marginLeft: 2,
                            backgroundColor: "#8EA625"
                        }}
                        onPress={() => navigation.navigate("PostReview", {
                            id: product.id
                        })}
                    >
                        <Text style={styles.addToText}>Post a Review</Text>
                    </TouchableOpacity>
                </View>


                {/* <View> */}
                <ProductMainStore
                    store={product}
                />
                {/* </View> */}
            </View>



            {
                stores.length > 0
                &&
                <View>
                    <Text
                        style={{
                            // fontSize: 13,
                            fontSize: 15,
                            color: "#000000",
                            fontFamily: "LexendDeca-Regular",
                            // marginVertical: 10,
                            // marginBottom:5,
                            marginTop:20,
                            alignSelf: "center"
                        }}
                    >
                        Compared Prices from other Stores
                </Text>
                </View>
            }

            {
                stores.map(store => (
                    <StoreCard
                        key={store.id}
                        store={store}
                    />
                ))
            }


            {/* <DescriptionCard 
                description={product.description}
                additionalValues={product.additionalValues}
            /> */}
        </Content>
        // </Content>
    )
}