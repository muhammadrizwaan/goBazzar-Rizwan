import React from "react"
import { View, Text } from "react-native" 

export default ({ additionalSpecifications, index }) => (
    <View
        style={{
            width: 150,
            borderWidth: .5,
            borderColor: "rgba(114, 124, 142, 0.3)",
            padding: 5,
            // height: 250
        }}
    >
        {
            additionalSpecifications.map(specs => (
                <View
                    style={{

                        borderColor: "rgba(114, 124, 142, 0.3)",
                        borderBottomWidth: .5,
                        height: 100,
                        padding: 2,
                    }}
                >
                    <Text
                        numberOfLines={2}
                        style={{
                            fontSize: 12,
                            color: "#515C6F",
                            fontWeight: "bold",

                        }}
                    >
                        {specs[0]}
                    </Text>

                    <Text
                        numberOfLines={2}
                        style={{
                            fontSize: 12,
                            color: "#515C6F",

                        }}
                    >
                        {specs[index + 1]}
                    </Text>
                </View>
            ))
        }
    </View>
)