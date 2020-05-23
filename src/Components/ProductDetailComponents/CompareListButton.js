import React from "react"
import { StyleSheet, Image, TouchableOpacity } from "react-native"
import { View, Text } from "native-base"

import { connect } from "react-redux"

class CompareListButton extends React.Component {
    render() {
        const { navigation, compareProductsLength } = this.props;
        let initialLength = 0
        const length = compareProductsLength.forEach(category => {
            initialLength = initialLength + category.products.length
        }) 
        console.log("compare", compareProductsLength, initialLength);
        return (
            <View>
                {
                    initialLength > 0 &&
                    <TouchableOpacity 
                        style={styles.container}
                        onPress={() => navigation.navigate("CompareScreen")}
                    >
                        <Image
                            source={require("../../Assets/ProductAssets/compare.png")}
                            style={{
                                width: 20,
                                height: 14
                            }}
                        />
                        <Text style={styles.textStyle}>
                            {` Added`}
                        </Text>

                        <Text style={styles.counterStyle}>
                            ({ initialLength })
                        </Text>
                    </TouchableOpacity>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: 140,
        height: 36,
        borderRadius: 60,
        backgroundColor: "white",
        position: "absolute",
        bottom: 30,
        right: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 7,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        // overflow: "hidden"
    },
    textStyle: {
        color: "#EF8813",
        fontSize: 14,
        fontWeight: "bold",
        marginLeft: 5
    },
    counterStyle: {
        color: "#EF8813",
        fontSize: 14,
        fontWeight: "bold",
        marginLeft: 2
    }
})


const mapStateToProps = state => ({
    compareProductsLength: state.compareProducts.compare_items
})

export default connect(mapStateToProps)(CompareListButton)