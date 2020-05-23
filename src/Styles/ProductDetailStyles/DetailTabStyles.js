import { StyleSheet, Platform } from "react-native"

export default StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        // height: 80,
        alignItems: "center",
        paddingTop: Platform.OS === "ios" ? 30 : 15,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 2,
        backgroundColor: "white",
        borderBottomLeftRadius: 37,
        borderBottomRightRadius: 37,
        position: "absolute",
        top: 0,
        zIndex: 10000
    },
    containerWithShadow: {
        display: "flex",
        flexDirection: "row",
        // height: 80,
        alignItems: "center",
        paddingTop: Platform.OS === "ios" ? 30 : 15,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 2,
        backgroundColor: "white",
        borderBottomLeftRadius: 37,
        borderBottomRightRadius: 37,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 7,
        position: "absolute",
        top: 0,
        zIndex: 10000
    },
    activeButton: {
        // height: 31,
        paddingVertical: 7,
        paddingHorizontal: 15,
        backgroundColor: "#8EA625",
        borderRadius: 17,
        marginRight: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    inActiveButton: {
        // height: 31,
        paddingVertical: 7,
        paddingHorizontal: 15,
        borderRadius: 17,
        marginRight: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    activeText: {
        fontSize: 13,
        color: "#FFFFFF",
        fontFamily: "LexendDeca-Regular",
    },
    inActiveText: {
        fontSize: 13,
        color: "#727C8E",
        fontFamily: "LexendDeca-Regular"
    }
})