import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    dotStyle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 8, 
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderColor: '#ddd',
        borderWidth: 1
    },
    tabBar: {
        position: 'absolute',
        right: 0,
        bottom: -20,
        left: 0,
        borderColor: '#ddd',
        backgroundColor: 'transparent'
    },
})