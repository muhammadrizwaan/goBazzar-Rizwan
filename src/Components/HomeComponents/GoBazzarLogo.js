import React from "react"
import { View, Image, StyleSheet } from "react-native"

export default () => (
    <View style={styles.container}>
        <Image 
            source={require("../../Assets/HomeAssets/logo.png")}
            style={styles.logoStyle}
        />
    </View>
)

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "#0A3761",
        backgroundColor: "white",
        height: 90,
        alignItems: "center",
        justifyContent: "center"
    },
    logoStyle: {
        // width: 103.2,
        // height: 38.4,
        width: 192,
        height: 72
        // width: 127.3,
        // height: 46.5
    }
})

