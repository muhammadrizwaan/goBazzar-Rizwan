import React from "react"
import { View, Text, Image } from "react-native"
import { Item } from "native-base"
import styles from "../../Styles/ProductDetailStyles/ProductTabStyles"

import StarRating from "react-native-star-rating"

import IoniIcons from "react-native-vector-icons/Ionicons"

export default ({navigation, store}) => (
    <Item
        style={{ display: "flex", flexDirection: "row", marginLeft: 10, marginRight: 10, marginVertical: 10,  paddingVertical: 5 }}
        onPress={() => navigation.navigate("StoreDetail", {
            id: store.storeId
        })}
    >
        <Image
            resizeMode="contain"
            source={{ uri: store.img }}
            style={{ width: 77, height: 77, borderRadius: 20, }}
        />
        <View style={{ width: "70%", marginLeft: 20, alignItems: "flex-start" }}>
            <Text
                style={{ ...styles.productTitle, marginVertical: 5, color: "#515C6F" }}
                numberOfLines={2}
            >
               {store.storeName}
            </Text>
            {/* <View style={styles.toolsContainer}>
                <StarRating
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
                </View>

            </View> */}
        </View>


    </Item>
)