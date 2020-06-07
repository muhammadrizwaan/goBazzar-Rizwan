import React from "react"
import { SafeAreaView, View, Text, FlatList } from "react-native"
import { Container, } from "native-base"

import CategoryHeader from '../../Components/CategoryProductComponents/CategoryHeader'

import CategoryProductsLoader from "../../Components/HomeComponents/ProductLoader"

import SearchProductCard from "../../Components/SearchComponents/SearchProductCard"

import { connect } from "react-redux"
import { useNavigation } from "@react-navigation/core"

const LaptopsScreen = ({
    laptops,
    laptops_loading
}) => {
    const navigation = useNavigation()
    return (
        <Container style={{ backgroundColor: "white" }}>
            <SafeAreaView />

            <CategoryHeader
                navigation={navigation}
                heading={"Laptops"}
            />

            <CategoryProductsLoader
                loading={laptops_loading}
            />
            {!laptops_loading && <FlatList
                contentContainerStyle={{ alignItems: "center" }}
                // numColumns={2}
                data={laptops}
                keyExtractor={item => item.ID}
                renderItem={({ item }) => (
                    <SearchProductCard
                        navigation={navigation}
                        product={item}
                    />
                )}
                ListEmptyComponent={() => (
                    <View style={{ marginLeft: 25, marginRight: 25 }}>
                        {!category_product_loading && <Text
                            style={{
                                fontSize: 15,
                                // color: "#515C6F",
                                color: "#999999",
                                fontFamily: "LexendDeca-Regular"
                            }}
                        >
                            No Products
                            </Text>}
                    </View>
                )}
            />}
        </Container>
    )
}

const mapStateToProps = state => ({
    laptops: state.homeProducts.laptops,
    laptops_loading: state.loader.laptops_loading,
})

export default connect(mapStateToProps)(LaptopsScreen)