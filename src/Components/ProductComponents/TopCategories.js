import React from 'react'
import { View, FlatList, Text } from 'react-native'

import TopCategoryCard from './TopCategoryCard'
// import categories from '../../Samples/categories'


export default ({navigation, categories}) => (
        <FlatList
            horizontal
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={item => item.id}
            snapToAlignment={"start"}
            snapToInterval={121}
            decelerationRate={"fast"}
            contentContainerStyle={{
                paddingHorizontal: 20,
            }}
            renderItem={({ item }) => (
                <TopCategoryCard
                    category={item}
                    navigation={navigation}
                />
            )}
            
        />
)