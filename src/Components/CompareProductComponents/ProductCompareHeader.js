import React from "react"
import { Button } from "native-base"
import { View, Text, Image } from "react-native"

export default ({ item }) => (
    <View
        style={{
            width: 150,
            borderWidth: 1,
            borderColor: "rgba(114, 124, 142, 0.3)",
            padding: 5,
            height: 250
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

        <Text
            numberOfLines={3}
            style={{
                color: "#8daf00",
                fontFamily: "LexendDeca-Regular",
                fontSize: 10,
            }}
        >
            {`AED ${item.RegularPrice}`}
        </Text>

        <Button
            full 
            transparent 
            style={{
                width: 100,
                height: 30,
                borderRadius: 30,
                backgroundColor: "#8daf00",
                alignItems:"center",
                marginTop: 10,
                alignSelf: "center"
            }}
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