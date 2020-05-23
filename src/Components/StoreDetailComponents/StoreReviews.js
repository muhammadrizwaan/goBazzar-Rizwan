import React from "react"
import { View, Text, TouchableOpacity } from "react-native"

import StarRating from "react-native-star-rating"

import styles from "../../Styles/ProductDetailStyles/StoreCardStyles"

export default () => (
    <View>
        {
            [0, 1, 2, 3, 4].map(review => (
                <View
                    style={styles.container}
                    key={review}
                >
                    <View style={styles.storeCardHeading}>
                        <View style={{ width: "80%", justifyContent: "space-around" }}>
                            <Text style={styles.storeNameText}>Amazon Ae</Text>

                            <Text
                                style={{ ...styles.product_name, fontStyle: "italic" }}
                            >
                                Nov 19, 2019
                            </Text>
                        </View>
                        <View style={{marginLeft: "auto"}}>
                            <StarRating
                                disabled={false}
                                maxStars={5}
                                rating={4}
                                starSize={10}
                                fullStarColor="#FFDB26"
                                halfStarColor="#FFDB26"
                            />
                        </View>
                    </View>

                    <View style={{ ...styles.storeCardHeading, marginTop: 15 }}>
                        <Text style={styles.product_name} numberOfLines={3}>
                            Best brand. Found exactly the kind of products I needed. 5 stars from me
                        </Text>
                    </View>
                </View>
            ))
        }
    </View>
)