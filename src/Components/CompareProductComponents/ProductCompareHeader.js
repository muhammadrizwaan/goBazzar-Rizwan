import React from "react"
import { Button } from "native-base"
import { View, Text, Image, Linking } from "react-native"
import styles from "../../Styles/ProductDetailStyles/StoreCardStyles"

export default ({ item }) => (
    <View
        style={{
            width: 150,
            borderWidth: 1,
            borderColor: "rgba(114, 124, 142, 0.3)",
            padding: 5,
            height: 260
        }}
    >
        <Image
            source={{ uri: item.MainImage }}
            style={{
                width: 100,
                height: 100,
                alignSelf: "center",
                borderRadius: 50
            }}
        />


        <Text
            numberOfLines={3}
            style={{
                fontSize: 12,
                color: "#515C6F",
                fontWeight: "bold",
                height: 50
            }}
        >
            {item.ProductName}
        </Text>
        <View style={{ flexDirection: 'row' }}>
            <Image
                resizeMode="contain"
                source={{ uri: item.MainImage }}
                // source={{ uri: item.ImagePath }}
                style={{ width: 50, height: 50, }}
            />
            <View>
                {item.OfferPrice===0 ?<View></View>:<Text
                    style={{
                        // ...styles.product_price,
                        fontFamily: "LexendDeca-Regular",
                        fontSize: 10,
                        textDecorationLine: item.OfferPrice ? 'line-through' : "none",
                        color: item.OfferPrice ? "#C9C9C9" : "#8EA625"
                    }}
                >{`AED ${item.RegularPrice}`}</Text>}

                <Text
                    numberOfLines={2}
                    style={{
                        // display: item.OfferPrice ? "flex" : "none",
                        color: "#8daf00",
                        fontFamily: "LexendDeca-Regular",
                        fontSize: 10,
                    }}
                >{item.OfferPrice===0?`AED ${item.RegularPrice}`:`AED ${item.OfferPrice}`}
                    {/* {`AED ${item.OfferPrice}`} */}
                </Text>
            </View>
        </View>
        <Button
            full
            transparent
            style={{
                width: 100,
                height: 30,
                borderRadius: 30,
                backgroundColor: "#8daf00",
                alignItems: "center",
                marginTop: 10,
                alignSelf: "center"
            }}
            onPress={() => Linking.openURL(item.URL)}
        >
            <Text
                style={{
                    fontSize: 12,
                    color: "white",
                    textAlign: "center"
                }}
            >
                Go to Shop
            </Text>
        </Button>
    </View>
)