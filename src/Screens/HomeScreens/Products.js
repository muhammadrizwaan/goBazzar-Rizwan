import React from 'react'
import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import { Container, Content } from 'native-base'

import SearchBar from '../../Components/HomeComponents/SearchBar'
import ProductHeadingSeparator from '../../Components/HomeComponents/ProductsHeadingSpearator'
import TopCategories from '../../Components/ProductComponents/TopCategories'
import AllCategories from '../../Components/ProductComponents/AllCategories'

// import CategoryProducts from '../ProductScreens/CategoryProducts'
// import ProductDetail from "../ProductScreens/ProductDetail"
// import SubCategories from "../ProductScreens/SubCategories"
// import SearchScreen from "../HomeScreens/SearchScreen"
// import PostReview from "../ProductScreens/PostReview"
// import CompareScreen from "../MoreScreens/Compare"

import CategoryScroll from "../../Components/HomeComponents/CategoryScroll"

import CompareListButton from "../../Components/ProductDetailComponents/CompareListButton"

// import { createStackNavigator } from '@react-navigation/stack'

import ProductLoader from "../../Components/HomeComponents/ProductLoader"

import { connect } from "react-redux"

const Products = ({
    navigation, isCatalogLoading,
    catalogs, top_categories_loading,
    top_categories, top_catalogs_loading,
    top_catalogs
}) => (
        <Container>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <SafeAreaView />
            <SearchBar 
                navigation={navigation}
            />
            <Content>
                <ProductHeadingSeparator
                    title="Top Categories"
                    buttonTitle=""
                    buttonAction={() => { }}
                />
                {top_catalogs_loading ?
                    <ProductLoader
                        loading={top_catalogs_loading}
                    />
                    :
                    <CategoryScroll
                        navigation={navigation}
                        products={top_catalogs}
                    />
                }


                <ProductHeadingSeparator
                    title="All Categories"
                    buttonTitle=""
                    buttonAction={() => { }}
                />

                {isCatalogLoading ?
                    <ProductLoader
                        loading={isCatalogLoading}
                    />
                    :
                    <AllCategories
                        catalogs={catalogs}
                    />
                }
            </Content>

            <CompareListButton 
                navigation={navigation}
            />
        </Container>
    )

const mapStateToProps = state => ({
    isCatalogLoading: state.all_catalogs.isCatalogLoading,
    catalogs: state.all_catalogs.catalogs,
    top_categories_loading: state.all_catalogs.top_categories_loading,
    top_categories: state.all_catalogs.top_categories,
    top_catalogs_loading: state.loader.top_catalogs_loading,
    top_catalogs: state.homeProducts.top_catalogues,
})

const ProductComponent = connect(mapStateToProps)(Products)

// const { Navigator, Screen } = createStackNavigator()

// const ProductStack = ({ navigation, route }) => {
//     navigation.setOptions({ tabBarVisible: route.state ? route.state.index > 0 ? false : true : null });
//     return (
//         <Navigator
//             headerShown={false}
//             headerMode="none"
//             initialRouteName="Shop"
//         >
//             <Screen name="Products" component={ProductComponent} />
//             <Screen
//                 name="CategoryProducts"
//                 component={CategoryProducts}
//             />
//             <Screen
//                 name="ProductDetail"
//                 component={ProductDetail}
//             />
//             <Screen 
//                 name="CompareScreen"
//                 component={CompareScreen}
//             />
//              <Screen 
//                 name="PostReview"
//                 component={PostReview}
//             />
//             <Screen
//                 name="SubCategories"
//                 component={SubCategories}
//             />
//             <Screen 
//                 name="SearchScreen"
//                 component={SearchScreen}
//             />
//         </Navigator >
//     )
// }


export default ProductComponent