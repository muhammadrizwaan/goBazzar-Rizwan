import { StyleSheet } from "react-native"

export default StyleSheet.create({
    priceContainer: {
        display: "flex",
        flexDirection: "row",
    },
    productName: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#515C6F",
        width: "50%"
    },
    cPriceText: {
        fontSize: 12,
        fontFamily: "LexendDeca-Regular",
        color: "#515C6F",
        textTransform: "uppercase"
    },
    product_price: {
        fontSize: 18,
        color: "#8EA625",
        fontWeight: "bold",
        alignSelf: "flex-end"
        // marginLeft: "auto"
    },
})