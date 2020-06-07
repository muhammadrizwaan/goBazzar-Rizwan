import React, { useState } from "react"
import { View, Text, Image, TouchableOpacity, Linking, Platform } from "react-native"
import { Button, Content } from "native-base"
import styles from "../../Styles/ProductDetailStyles/StoreCardStyles"


export default ({ description, additionalValues = [] }) => {
    const [state, setState] = useState({
        fullSpecsReadMore: false,
        descriptionReadMore: false
    })
    handleFullSpecsReadMore = () => {
        setState({
            ...state,
            fullSpecsReadMore: !state.fullSpecsReadMore
        })
    }
    handleDescriptionReadMore = () => {
        setState({
            ...state,
            descriptionReadMore: !state.descriptionReadMore
        })
    }
    return (
        <Content 
            contentContainerStyle={{ 
                paddingBottom: 10, 
                paddingTop: Platform.OS === "ios" ? 65 : 80 
            }}
        >
        <View
            style={{
                ...styles.container,
                padding:10
            }}
        >
            <View style={styles.storeCardHeading}>
                <View style={{ width: "100%", justifyContent: "space-around" }}>
                    <Text
                        style={{
                            ...styles.storeNameText,
                            fontWeight: "bold"
                        }}
                    >
                        Description
                    </Text>

                    <Text
                        numberOfLines={state.descriptionReadMore ? 100 : 3}
                        style={{
                            ...styles.product_name,
                            marginTop: 10
                        }}
                    >
                        {description ? description : "No description"}
                    </Text>
                    {description && <TouchableOpacity
                        onPress={handleDescriptionReadMore}
                    >
                        <Text
                            style={{
                                fontSize: 12,
                                fontFamily: "LexendDeca-Regular",
                                color: "#8EA625",
                                // marginLeft: 5
                            }}
                        >
                            {state.descriptionReadMore ? "See less" : "Read More"}
                        </Text>
                    </TouchableOpacity>}
                </View>
                {/* <Image
                    source={{ uri: store.store_img }}
                    style={{ width: 50, height: 50, marginLeft: "auto" }}
                /> */}
            </View>

            <View style={{ ...styles.storeCardHeading, marginTop: 15 }}>
                <View style={{ width: "100%", justifyContent: "space-around" }}>
                    <Text style={{
                        ...styles.storeNameText,
                        fontWeight: "bold",
                        marginBottom: 10
                    }}>
                        Full Specifications
                    </Text>


                    <Text
                        numberOfLines={state.fullSpecsReadMore ? 100 : 3}
                        style={{
                            // display: "flex",
                            // flexDirection: "column"
                        }}
                    >
                        {
                            additionalValues &&
                            additionalValues.length > 0
                            ?
                            additionalValues.map(item => (
                                <Text
                                    numberOfLines={1}
                                    style={{
                                        ...styles.product_name,
                                    }}
                                >
                                    {item.name}: {item.value} {'\n'}
                                </Text>

                            ))
                            :
                            <Text
                                style={{
                                    ...styles.product_name,
                                    marginTop: 10
                                }}
                            >No Specifications</Text>
                        }
                    </Text>
                    {additionalValues && <TouchableOpacity
                        onPress={handleFullSpecsReadMore}
                    >
                        <Text
                            style={{
                                fontSize: 12,
                                fontFamily: "LexendDeca-Regular",
                                color: "#8EA625",
                                // marginLeft: 5
                            }}
                        >
                            {state.fullSpecsReadMore ? "See less" : "Read More"}
                        </Text>
                    </TouchableOpacity>}
                </View>
            </View>

            {/* <View style={{ ...styles.storeCardHeading, marginTop: 15 }}>
                <View style={{ width: "40%", justifyContent: "space-around" }}>
                    <Text style={styles.product_name}>{store.currency}</Text>
                    <Text
                        style={{
                            ...styles.product_price,
                            textDecorationLine: 'line-through',
                            color: "#C9C9C9"
                        }}
                    >{`AED ${store.regularPrice.toFixed(2)}`}</Text>
                    <Text style={styles.product_price}>{`AED ${store.offerPrice.toFixed(2)}`}</Text>
                </View>
                <TouchableOpacity
                    style={styles.shopButton}
                    onPress={() => Linking.openURL(store.URL)}
                >
                    <Text style={styles.shopText}>Go to Shop</Text>
                </TouchableOpacity>
            </View> */}
        </View>
        </Content>
    )
}