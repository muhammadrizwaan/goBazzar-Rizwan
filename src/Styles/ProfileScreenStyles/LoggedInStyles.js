import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        padding: 25
    },
    nameText: {
        fontSize: 25,
        // color: "#515C6F",
        color: "#8ea725",
        fontFamily: "Poppins-Bold",
        fontWeight: "bold"
    },
    editText: {
        fontSize: 12,
        color: "#515C6F",
        fontFamily: "Poppins-Regular",
        marginTop: 5
    },
    lineBreak: {
        borderBottomWidth: 0.2, 
        borderBottomColor: "#515C6F",
        opacity: 0.2,
        marginTop: 20,
        marginBottom: 10
    },
    menuText: {
        fontSize: 12,
        color: "#515C6F",
        fontFamily: "Poppins-Regular"
    },
    storeAndCompare: {
        fontSize: 18,
        color: "#515C6F",
        fontFamily: "Poppins-Regular"
    },
    numIndicator: { 
        fontSize: 12,
        color: "#515C6F",
        opacity: 0.4,
        fontFamily: "Poppins-Regular"
    }
})