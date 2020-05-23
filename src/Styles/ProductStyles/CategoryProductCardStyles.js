import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        width: 130,
        height: 140,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 7,
        margin: 15,
        borderRadius: 10
    },
    imgContainer: {
        height: 90,
        width: 130,
        alignItems: "center",
        justifyContent: "center"
    },
    imgStyle: {
        height: 77,
        width: 77,
        borderRadius: 20,
    },
    rowMainContainer: {
        margin: 7,
        paddingHorizontal: 5
    },
    rowContainer: {
        margin: 7, 
        marginTop: "auto", 
        paddingHorizontal: 5,
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    titleStyle: {
        fontSize: 12,
        fontFamily: "LexendDeca-Regular",
        color: "#515C6F",
        fontWeight: "bold"
    },
    priceStyle: {
        // color: "#515C6F",
        color: "#8ea725",
        fontFamily: "LexendDeca-Regular",
        fontSize: 10
    }
})