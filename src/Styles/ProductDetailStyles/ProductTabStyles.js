import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        // height: 341,
        alignItems: "center",
        paddingVertical: 20,
        backgroundColor: "white",
        borderBottomLeftRadius: 37,
        borderBottomRightRadius: 37,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 7,
    },
    HistoryText:{
        fontSize: 11,
        fontFamily: "LexendDeca-Regular",
        color: '#515C6F',

        marginTop: 10, 
        marginHorizontal: 10
    },
    HistoryInnerText:{
        fontSize: 11,
        fontFamily: "LexendDeca-Regular",
        color: '#515C6F',

        // marginTop: 10, 
        marginHorizontal: 20
    },
    HistoryOuterView: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 7,
        height: 190,
        backgroundColor: "#F5F5F5",
        marginTop: 10, 
        borderRadius: 5, 
        marginHorizontal: 10,
    },
    HorizontalLine:{
        borderBottomWidth: 1,
        borderBottomColor: "rgba(0, 0, 0, 0.1)",
        paddingHorizontal: 5
    },
    iconStyle: {
        width: 14,
        height: 14,
        alignSelf:'center'
    },
    productTitle: {
        fontSize: 15,
        color: "#000000",
        fontFamily: "LexendDeca-Regular",
        marginVertical: 20,
        // paddingVertical: 20
    },
    toolsContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems:"center"
    },
    ratingContainer: {
        height: 14,
        backgroundColor: "#4BAC28",
        borderRadius: 10,
        paddingHorizontal: 5,
        paddingVertical: 2,
        display: "flex",
        flexDirection: "row"
        // width: 14
    },
    addToButton: {
        backgroundColor: "#ff9800",
        width: "40%",
        height: 36,
        paddingHorizontal: 10,
        paddingVertical: 5,
        justifyContent: "center",
        borderRadius: 25,
        marginTop: 10
    },
    addToText: {
        fontSize: 12,
        fontFamily: "LexendDeca-Regular",
        color: "white",
        textAlign: "center"
    },
    optionButton: {
        fontSize: 12,
        color: "#515C6F",
        fontFamily: "LexendDeca-Regular",
        opacity: 0.48
    },
    priceContainer: {
        display: "flex",
        flexDirection: "row",
    },
    cPriceText: {
        fontSize: 12,
        fontFamily: "LexendDeca-Regular",
        color: "#515C6F",
        textTransform: "uppercase"
    },
    product_price: {
        // fontSize: 18,
        color: "#8EA625",
        fontWeight: "bold",
    },
    seeButton: {
        color: "#8EA625",
        fontFamily: "LexendDeca-Regular",
        fontSize: 12
    },
    searchProductContainer: {
        display: "flex",
        flexDirection: "row",
        marginLeft: 10,
        marginRight: 10,
        marginVertical: 10,
        paddingVertical: 10,
        borderBottomWidth: 0,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 7,
        borderRadius: 10,
        height: 100
    }
})