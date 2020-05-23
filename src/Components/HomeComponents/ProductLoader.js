import React from "react"
import { View } from "react-native"
import { Bar, Pie, CircleSnail } from "react-native-progress"

export default ({
    loading
}) => (
    <View style={{ alignItems: "center" }}>
        {loading && <CircleSnail indeterminate color={["#8EA625", "#ff9800"]} />}
    </View>
)