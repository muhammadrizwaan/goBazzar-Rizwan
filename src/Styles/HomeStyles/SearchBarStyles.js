import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        height: 53,
        backgroundColor: "#F5F5F5",
        borderColor: 'transparent',
        paddingLeft: 30,
        paddingRight: 20,
    },
    iconStyle: {
        width: 14,
        height: 14
    },
    inputStyle: {
        fontSize: 15,
        color: "black",
        opacity: 0.4,
        marginLeft: 20
    },
    barCodeIconStyle: {
        width: 29.25,
        height: 22.5
    },
    dropMenuButton: {
        // backgroundColor: "black", 
        // opacity: 0.4, 
        backgroundColor: "#F1F1F1",
        borderRadius: 15, 
        height: 30 , 
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        color: "#8daf00"
    }
})