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
        backgroundColor: "#0A3761",
        // backgroundColor: "white",
        height: 73,
        alignItems: "center",
        justifyContent: "center"
    },
    logoStyle: {
        // width: 103.2,
        // height: 38.4
        width: 173.2,
        height: 58.4
    }
})

