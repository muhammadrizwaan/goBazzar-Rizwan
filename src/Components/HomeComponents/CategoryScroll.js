import React from 'react'
import { View, FlatList, Text } from 'react-native'

import CategoryFeedCard from './CategoryFeedCard'
import { useNavigation } from "@react-navigation/native"

export default ({ products }) => {
    const navigation = useNavigation()
    return (
        <FlatList
            horizontal
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            data={products}
            keyExtractor={item => item.id}
            snapToAlignment={"start"}
            snapToInterval={121}
            decelerationRate={"fast"}
            contentContainerStyle={{
                paddingHorizontal: 7,
            }}
            ListEmptyComponent={() => (
                <View style={{ marginLeft: 25, marginRight: 25 }}>
                    <Text
                       style={{
                        fontSize: 15,
                        // color: "#515C6F",
                        color: "#999999",
                        fontFamily: "LexendDeca-Regular"
                    }}
                    >
                        No Products
                    </Text>
                </View>
            )}
            renderItem={({ item }) => (
                <CategoryFeedCard
                    category={item}
                    navigation={navigation}
                />
            )}
    
        />
    )
}