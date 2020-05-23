import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        // paddingTop:  15,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 2,
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
    imgContainer: {
        alignSelf: "center",
        // marginVertical: 20
    },
    imgStyle: {
        width: 200, 
        height: 200,
        // borderRadius: 20
    },
    storeName: {
        color: "#515C6F",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center"
    }
})