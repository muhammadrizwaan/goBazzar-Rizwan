import React from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { Item } from "native-base"

import styles from "../../Styles/ProductDetailStyles/ProductTabStyles"
import StarRating from "react-native-star-rating"
import IoniIcons from "react-native-vector-icons/Ionicons"

export default ({ navigation, review }) => (
    <TouchableOpacity
        style={{ display: "flex", flexDirection: "row", marginLeft: 10, marginRight: 10, marginVertical: 10, paddingVertical: 5 }}
        onPress={() => navigation.navigate("ProductDetail", {
            id: review.productId
        })}
    >
        {/* <Image
            source={{ uri: review.img }}
            style={{ width: 77, height: 77, borderRadius: 20, }}
        /> */}
        <View style={{ width: "70%", marginLeft: 20, alignItems: "flex-start" }}>
            <Text
                style={{ ...styles.productTitle, marginVertical: 0, color: "#515C6F" }}
                numberOfLines={2}
            >
                {review.name}
            </Text>

            <Text
                style={{ ...styles.productTitle, marginVertical: 0, marginBottom: 5, color: "#515C6F", fontSize: 14 }}
                numberOfLines={2}
            >
                {review.email}
            </Text>

            {review.description.length > 1 && <Text
                style={{ ...styles.productTitle, marginVertical: 0, marginBottom: 5, color: "#515C6F", fontSize: 13 }}
                numberOfLines={2}
            >
                {review.description}
            </Text>}
            <View style={styles.toolsContainer}>
                <StarRating
                    disabled={false}
                    maxStars={5}
                    rating={review.rating}
                    starSize={10}
                    fullStarColor="#FFDB26"
                    halfStarColor="#FFDB26"
                />

                {/* <View
                    style={{...styles.ratingContainer, marginLeft: 5}}
                >
                    <IoniIcons name="ios-star" style={{ color: "white" }} size={9} />
                    <Text style={{ fontSize: 9, color: "white", marginLeft: 5 }}>4.0</Text>
                </View> */}
            </View>

            {/* <TouchableOpacity style={{ marginTop: "auto", marginRight: 10 }}>
                <Text style={styles.optionButton}>12 Options</Text>
            </TouchableOpacity> */}

        </View>

    </TouchableOpacity>
)