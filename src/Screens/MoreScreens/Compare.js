import React from "react";
import { View, Text, SafeAreaView, StatusBar, ImageBackground } from "react-native"
import { Container, Content, ListItem as Item, Left, Body, Right } from "native-base"
import { createStackNavigator } from "@react-navigation/stack"
import styles from "../../Styles/ProfileScreenStyles/LoggedInStyles"

import CompareHeader from "../../Components/CategoryProductComponents/CategoryHeader"
import CompareCollabisble from "../../Components/CompareProductComponents/CompareCollabisble"

import { connect } from "react-redux"

import { removeCompareProduct } from "../../actions/compareActions"
import { showMessage } from "react-native-flash-message";

class Compare extends React.Component {
    handleRemoveProductFromCompare = (categoryId, productId) => {
        this.props.removeCompareProduct(categoryId, productId)
    }
    handleCompareButtonClick = (products) => {
        ids = ""

        if (products.length < 2) {
            showMessage({
                message: "Please add more products to compare.",
                position: 'bottom',
                // icon: 'auto',
                autoHide: true,
                hideOnPress: true,
                floating: true,
                style: {
                    backgroundColor: "#E8E8E8",
                    width: "90%",
                    borderRadius: 30,
                    color: "black",
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 7,
                },
                color: "#000000",
            });
        } else {
            products.forEach(product => {
                ids = `${ids}${product.ID},`
            })

            console.warn(ids)

            this.props.navigation.navigate("CompareProductsScreen", {
                ids: ids.trim()
            })
        }

    }
    render() {
        const { navigation, compare_items } = this.props
        return (
            <Container>
                <StatusBar backgroundColor="white" barStyle="dark-content" />
                <SafeAreaView />
                <CompareHeader
                    navigation={navigation}
                    heading="Compare"
                />
                <Container style={{ flex: 1 }}>
                    <ImageBackground
                        source={require("../../Assets/BackgroundPicture/bg.png")}
                        style={{ flex: 1 }}
                    >
                        <Content contentContainerStyle={styles.container}>
                            {
                                compare_items.length > 0
                                    ?
                                    compare_items.map(item => (
                                        <CompareCollabisble
                                            key={item.categoryId}
                                            categoryId={item.categoryId}
                                            categoryName={item.categoryName}
                                            products={item.products}
                                            handleRemoveProductFromCompare={this.handleRemoveProductFromCompare}
                                            handleCompareButtonClick={this.handleCompareButtonClick}
                                        />
                                    ))
                                    :
                                    <Text
                                        style={{
                                            alignSelf: "center",
                                            fontSize: 12,
                                            fontFamily: "LexendDeca-Regular",
                                            color: "#515C6F"
                                        }}
                                    >
                                        Please add products to compare
                            </Text>
                            }
                        </Content>
                    </ImageBackground>
                </Container>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    compare_items: state.compareProducts.compare_items
})

const mapDispatchToProps = dispatch => ({
    removeCompareProduct: (categoryId, productId) => dispatch(removeCompareProduct(categoryId, productId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Compare)