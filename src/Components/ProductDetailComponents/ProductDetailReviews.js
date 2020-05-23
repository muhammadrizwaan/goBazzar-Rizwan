import React from "react"
import { View, Text, Platform } from "react-native"
import { Content } from "native-base"

import styles from "../../Styles/ProductDetailStyles/StoreCardStyles"
import ReviewCard from "./ReviewCard"
import ProductReviewsMain from "./ProductReviewsMain"

export default ({
    reviews,
    productRatings,
    averageRating
}) => {
    // console.warn(productRatings)
    return (
        <Content 
            contentContainerStyle={{ 
                paddingBottom: 10, 
                paddingTop: Platform.OS === "ios" ? 65 : 80 
            }}
        >

            <ProductReviewsMain 
                productRatings={productRatings}
                averageRating={averageRating}
            />
            {
                reviews.length > 0 ?
                reviews.map(review => (
                    <ReviewCard 
                        key={Math.random().toString()}
                        review={review}
                    />
                ))
                :
                // <View
                //     style={{ display: "flex", flexDirection: "row", marginLeft: 10, marginRight: 10, marginVertical: 10, paddingVertical: 5}}
                // >
                    <Text style={{color: "#8EA625", alignSelf: "center"}}>No Reviews</Text>
                // </View>
            }
        </Content>
    )
}