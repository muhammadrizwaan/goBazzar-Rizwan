import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        padding: 25
    },
    signInText: {
        // fontSize: 18,
        fontSize: 20,
        color: "#8ea725",
        // color: "#515C6F",
        fontWeight: 'bold',
        fontFamily: "LexendDeca-Regular",
        // fontSize: 18,
        // color: "#515C6F",
        // fontFamily: "Poppins-Bold",
        // fontWeight: "bold"
    },
    inputBox: {
        fontSize: 12,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(0, 0, 0, 0.1)",
        paddingBottom: 10,
        // fontFamily: "Poppins-Regular",
        fontFamily: "LexendDeca-Regular",
        marginVertical: 10,
        paddingHorizontal: 5
    },
    signInButton: {
        width: "70%",
        alignSelf: "center",
        // backgroundColor: "#8EA625",
        backgroundColor: "#ff9800",
        height: 36,
        borderRadius: 20,
        marginTop: 25
    },
    signInButtonText: {
        fontSize: 12,
        // fontFamily: "Poppins-Bold",
        fontFamily: "LexendDeca-Regular",
        fontWeight: "bold",
        color: "white"
    },
    orText: {
        fontSize: 10,
        alignSelf: "center",
        color: "#515C6F",
        textTransform: "uppercase",
        // fontFamily: "Poppins-Regular",
        fontFamily: "LexendDeca-Regular",
    },
    facebookButton: {
        width: "70%",
        alignSelf: "center",
        backgroundColor: "#3B5998",
        height: 36,
        borderRadius: 20,
        marginTop: 25
    },
    noAccountText: {
        alignSelf: 'center',
        marginTop: 50,
        marginLeft: 10,
        fontSize: 11,
        // fontFamily: "Poppins-Regular",
        fontFamily: "LexendDeca-Regular",
        color: '#515C6F',
        marginRight: 10
    },
    signUpText: {
        // fontFamily: "Poppins-Bold",
        fontFamily: "LexendDeca-Regular",
        fontWeight: "bold",
        fontSize: 11,
        // color: "#8EA625"
        color: "#ff9800"
    },
    errorStyle: {
        fontSize: 9,
        color: "red",
        marginBottom: 5
    },
    ModalOuterView: {
        height: 200,
        backgroundColor: "#E8E8E8",
        marginHorizontal: 20,
        marginTop: 150,
        borderRadius: 15
    },
    ModalText: {
        fontSize: 15,
        // fontSize: 12,
        color: "#515C6F",
        fontWeight: "bold",
        fontFamily: "LexendDeca-Regular",
    }
})