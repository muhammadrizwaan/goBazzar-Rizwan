import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        paddingVertical: 15,
        // paddingHorizontal: 15,
        backgroundColor: "white",
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 7,
        marginVertical: 10,
        
    },
    storeCardHeading: {
        display: "flex",
        flexDirection: "row",
        // alignItems: "center"
    },
    storeNameText: {
        fontSize: 15,
        // fontSize: 12,
        color: "#515C6F",
        fontWeight: "bold",
        fontFamily: "LexendDeca-Regular",
    },
    product_name: {
        marginBottom:5,
        // paddingHorizontal: 15,
        fontSize: 12,
        // fontSize: 15,
        fontFamily: "LexendDeca-Regular",
        color: "#515C6F",
    },
    product_price: {
        fontSize: 18,
        color: "#8EA625",
        fontWeight: "bold",
        fontFamily: "LexendDeca-Regular",
    },
    shopButton: {
        backgroundColor: "#8EA625",
        // width: "40%",
        height: 36,
        paddingHorizontal: 10,
        paddingVertical: 5,
        justifyContent: "center",
        borderRadius: 25,
        // marginTop: 10,
        // marginLeft: "auto",
        // alignSelf:"flex-end"
    },
    shopText: {
        fontSize: 12,
        fontFamily: "LexendDeca-Regular",
        color: "white",
        textAlign: "center",
       
    }
})