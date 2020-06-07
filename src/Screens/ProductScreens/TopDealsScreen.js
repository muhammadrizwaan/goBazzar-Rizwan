import React from "react"
import { SafeAreaView, View, Text, FlatList } from "react-native"
import { Container, } from "native-base"

import CategoryHeader from '../../Components/CategoryProductComponents/CategoryHeader'

import CategoryProductsLoader from "../../Components/HomeComponents/ProductLoader"

import SearchProductCard from "../../Components/SearchComponents/SearchProductCard"

import { connect } from "react-redux"
import { useNavigation } from "@react-navigation/core"

const TopDealsScreen = ({   
    top_deals,
    // top_deals_products,
    top_deals_loading
}) => {
    const navigation = useNavigation()
    return (
        <Container style={{ backgroundColor: "white" }}>
            <SafeAreaView />
    
            <CategoryHeader
                navigation={navigation}
                heading={"Top Deals"}
            />
    
            <CategoryProductsLoader
                loading={top_deals_loading}
            />
            {!top_deals_loading && <FlatList
                contentContainerStyle={{ alignItems: "center" }}
                // numColumns={2}
                data={top_deals}
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
    top_deals_loading: state.loader.top_deals_loading,
    top_deals: state.homeProducts.top_deals,
})

export default connect(mapStateToProps)(TopDealsScreen)