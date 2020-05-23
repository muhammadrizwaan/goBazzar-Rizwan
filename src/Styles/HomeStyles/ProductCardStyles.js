import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    categoryContainer: {
        width: 101,
        // height: 135,
        backgroundColor: "white",
        margin: 10,
    },
    container: {
        width: 101,
        height: 135,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 7,
        margin: 10,
        borderRadius: 10
    },
    imgStyle: {
        height: 90,
        width: 101,
        // borderTopRightRadius: 10,
        // borderTopLeftRadius: 10
    },
    categoryImageStyle: {
        width: 101,
        height: 101,
    },  
    titleStyle: {
        fontSize: 12,
        fontFamily: "LexendDeca-Regular",
        color: "#515C6F"
    },
    priceStyle: {
        // color: "#515C6F",
        color: "#8daf00",
        fontFamily: "LexendDeca-Regular",
        fontSize: 10
    }
})