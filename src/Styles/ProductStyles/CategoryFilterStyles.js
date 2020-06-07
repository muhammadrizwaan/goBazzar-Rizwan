import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        paddingHorizontal: 10
    },
    sortByText: { 
        fontSize: 14, 
        color: "#515C6F", 
        paddingLeft: 1, 
        fontFamily: "LexendDeca-Regular", 
        fontWeight: "bold" 
    },
    filterButtonStyle: {
        marginLeft: "auto"
    },
    filterByText: {
        fontSize: 14, 
        color: "#515C6F", 
        paddingRight: 1, 
        fontFamily: "LexendDeca-Regular", 
        fontWeight: "bold" 
    }
})