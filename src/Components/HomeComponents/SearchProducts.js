import React from "react"
import { FlatList, View, Text } from "react-native"

import CategoryProductCard from "../CategoryProductComponents/CategoryProductCard"
import SearchProductCard from "../SearchComponents/SearchProductCard"

export default ({ products, navigation }) => (
    <FlatList
        // contentContainerStyle={{ alignItems: "center" }}
        // numColumns={2}
        data={products}
        keyExtractor={item => item.ID}
        renderItem={({ item }) => (
            // <CategoryProductCard
            //     product={item}
            // />

            <SearchProductCard 
                product={item}
                navigation={navigation}
            />
        )}
        ListEmptyComponent={() => (
            <View style={{ marginLeft: 25, marginRight: 25 }}>
                <Text
                    style={{
                        fontSize: 15,
                        color: "#515C6F",
                        fontWeight: 'bold',
                        fontFamily: "LexendDeca-Regular"
                    }}
                >
                    No Products
                </Text>
            </View>
        )}
    />
)