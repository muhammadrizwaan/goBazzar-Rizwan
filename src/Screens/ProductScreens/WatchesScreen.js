import React from "react"
import { SafeAreaView, View, Text, FlatList } from "react-native"
import { Container, } from "native-base"

import CategoryHeader from '../../Components/CategoryProductComponents/CategoryHeader'

import CategoryProductsLoader from "../../Components/HomeComponents/ProductLoader"

import SearchProductCard from "../../Components/SearchComponents/SearchProductCard"

import { connect } from "react-redux"
import { useNavigation } from "@react-navigation/core"

const WatchesScreen = ({   
    watches,
    watches_loading
}) => {
    const navigation = useNavigation()
    return (
        <Container style={{ backgroundColor: "white" }}>
            <SafeAreaView />
    
            <CategoryHeader
                navigation={navigation}
                heading={"Watches"}
            />
    
            <CategoryProductsLoader
                loading={watches_loading}
            />
            {!watches_loading && <FlatList
                contentContainerStyle={{ alignItems: "center" }}
                // numColumns={2}
                data={watches}
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
                                color: "#515C6F",
                                fontWeight: 'bold',
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
    watches: state.homeProducts.watches,
    watches_loading: state.loader.watches_loading,
})

export default connect(mapStateToProps)(WatchesScreen)