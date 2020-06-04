import React, { PureComponent } from 'react'
import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import { Container, Content } from 'native-base'

import SearchBar from '../../Components/HomeComponents/SearchBar'
import Carousel from '../../Components/HomeComponents/Carousel'
import ProductHeadingSeparator from '../../Components/HomeComponents/ProductsHeadingSpearator'
import ProductScroll from '../../Components/HomeComponents/ProductsScroll'
import ProductLoader from "../../Components/HomeComponents/ProductLoader"

import CategoryScroll from "../../Components/HomeComponents/CategoryScroll"

// import { createStackNavigator } from "@react-navigation/stack"
import { connect } from "react-redux"

// import ProductDetail from "../ProductScreens/ProductDetail"
// import SearchScreen from "./SearchScreen"
// import SubCategories from "../ProductScreens/SubCategories"
// import CategoryProducts from '../ProductScreens/CategoryProducts'
// import PostReview from "../ProductScreens/PostReview"
// import CompareScreen from "../MoreScreens/Compare"
// import CompareProductsScreen from "../MoreScreens/CompareProductsScreen"

import GoBazzarLogo from "../../Components/HomeComponents/GoBazzarLogo"

// import sample_products from '../../Samples/products'

class Home extends PureComponent {
    render() {
        const props = this.props
        return (
            <Container>
                <StatusBar backgroundColor="white" barStyle="dark-content" />
                <SafeAreaView />
                <GoBazzarLogo />
                <SearchBar
                    navigation={props.navigation}
                />
                <Content>
                    <Carousel />
                    {/* <ProductHeadingSeparator
                    title="Suggestions for you"
                    buttonTitle="more"
                    buttonAction={() => { }}
                />
                {props.suggestion_product_loading ?
                    <ProductLoader
                        loading={props.suggestion_product_loading}
                    />
                    :
                    <ProductScroll
                        products={props.suggestion_products}
                    />
                } */}

                    <ProductHeadingSeparator
                        title="Top Categories"
                        buttonTitle=""
                        buttonAction={() => { }}
                    />
                    {props.top_catalogs_loading ?
                        <ProductLoader
                            loading={props.top_catalogs_loading}
                        />
                        :
                        <CategoryScroll
                            products={props.top_catalogs}
                        />
                    }

                    <ProductHeadingSeparator
                        title="Last Viewed"
                        buttonTitle=""
                        buttonAction={() => { }}
                    />
                    {props.lastviewed_products_loading ?
                        <ProductLoader
                            loading={props.lastviewed_products_loading}
                        />
                        :
                        <ProductScroll
                            products={props.last_viewed}
                        />
                    }

                    <ProductHeadingSeparator
                        title="Top Deals"
                        buttonTitle="more"
                        buttonAction={() => { props.navigation.navigate("TopDealsScreen") }}
                    />
                    {props.top_deals_loading ?
                        <ProductLoader
                            loading={props.top_deals_loading}
                        />
                        :
                        <ProductScroll
                            products={props.top_deals_products}
                        />
                    }

                    <ProductHeadingSeparator
                        title="Top Searched Products"
                        buttonTitle=""
                        buttonAction={() => { }}
                    />
                    {props.top_searched_products_loading ?
                        <ProductLoader
                            loading={props.top_searched_products_loading}
                        />
                        :
                        <ProductScroll
                            products={props.top_searched_products}
                        />
                    }

                    <ProductHeadingSeparator
                        title="Laptops"
                        buttonTitle="more"
                        buttonAction={() => { props.navigation.navigate("LaptopsScreen") }}
                    />
                    {props.laptops_loading ?
                        <ProductLoader
                            loading={props.laptops_loading}
                        />
                        :
                        <ProductScroll
                            products={props.laptops.slice(0, 4)}
                        />
                    }




                    <ProductHeadingSeparator
                        title="Mobiles"
                        buttonTitle="more"
                        buttonAction={() => {  }}
                        buttonAction={() => { props.navigation.navigate("MobileScreens") }}
                    />
                    {props.mobiles_loading ?
                        <ProductLoader
                            loading={props.mobiles_loading}
                        />
                        :
                        <ProductScroll
                            products={props.mobiles.slice(0, 4)}
                        />
                    }





                    <ProductHeadingSeparator
                        title="Watches"
                        buttonTitle="more"
                        buttonAction={() => { props.navigation.navigate("WatchesScreen") }}
                    />
                    {props.watches_loading ?
                        <ProductLoader
                            loading={props.watches_loading}
                        />
                        :
                        <ProductScroll
                            products={props.watches.slice(0, 4)}
                        />
                    }


                    {props.userId.length > 0 && <ProductHeadingSeparator
                        title="Recommended For You"
                        buttonTitle=""
                        buttonAction={() => { }}
                    />}

                    {props.userId.length > 0 && <View>
                        {props.recommended_products_loading ?
                            <ProductLoader
                                loading={props.recommended_products_loading}
                            />
                            :
                            <ProductScroll
                            // products={props.top_deals_products}
                                products={props.recommended_products}
                            />}
                    </View>}





                </Content>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    suggestion_product_loading: state.loader.suggestion_product_loading,
    suggestion_products: state.homeProducts.suggestion_products,
    top_deals_loading: state.loader.top_deals_loading,
    top_deals_products: state.homeProducts.top_deals,
    recommended_products_loading: state.loader.recommended_products_loading,
    recommended_products: state.homeProducts.recommended_products,
    top_searched_products_loading: state.loader.top_searched_products_loading,
    top_searched_products: state.homeProducts.top_searched_products,
    userId: state.auth.user.userId,
    top_categories_loading: state.all_catalogs.top_categories_loading,
    top_categories: state.all_catalogs.top_categories,
    laptops: state.homeProducts.laptops,
    watches: state.homeProducts.watches,
    //new lines
    mobiles:state.homeProducts.mobiles,
    mobiles_loading:state.loader.mobiles_loading,

    laptops_loading: state.loader.laptops_loading,
    watches_loading: state.loader.watches_loading,
    top_catalogs_loading: state.loader.top_catalogs_loading,
    top_catalogs: state.homeProducts.top_catalogues,
    lastviewed_products_loading: state.loader.lastviewed_products_loading,
    last_viewed: state.homeProducts.last_viewed
})

// const { Navigator, Screen } = createStackNavigator()

// const HomeStack = ({ navigation, route }) => {
//     navigation.setOptions({ tabBarVisible: route.state ? route.state.index > 0 ? false : true : null });
//     return (
//         <Navigator
//             headerShown={false}
//             headerMode="none"
//             initialRouteName="Home"
//         >
//             <Screen
//                 name="Home"
//                 component={connect(mapStateToProps)(Home)}
//             />
//             <Screen
//                 name="ProductDetail"
//                 component={ProductDetail}
//             />
//             <Screen
//                 name="PostReview"
//                 component={PostReview}
//             />
//             <Screen
//                 name="CompareScreen"
//                 component={CompareScreen}
//             />
//             <Screen
//                 name="SubCategories"
//                 component={SubCategories}
//             />
//             <Screen
//                 name="CategoryProducts"
//                 component={CategoryProducts}
//             />
//             <Screen
//                 name="CompareProductsScreen"
//                 component={CompareProductsScreen}
//             />
//             <Screen
//                 name="SearchScreen"
//                 component={SearchScreen}
//             />
//         </Navigator>
//     )
// }

export default connect(mapStateToProps)(Home)