import React from 'react'
import { FlatList, View, Text, SafeAreaView } from 'react-native'
import { Container, Content } from 'native-base'
import CategoryHeader from '../../Components/CategoryProductComponents/CategoryHeader'
import CategoryFilter from '../../Components/CategoryProductComponents/CategoryFilter'
import products from '../../Samples/products'
import CategoryProductCard from '../../Components/CategoryProductComponents/CategoryProductCard'
import CategoryProductsLoader from "../../Components/HomeComponents/ProductLoader"
import axios from "axios"
import Apis from "../../Api/Apis"
import Spinner from "react-native-loading-spinner-overlay"
import { connect } from "react-redux"
import {
    startCategoryProductLoading, stopCategoryProductLoading,
    setCategoryProducts, clearCategoryProducts,
    addAProductToWishlist, removeAProductFromWishlist
} from "../../actions/categoryProductAction"

import { removeProductFromUserWishlist, addProductToUserWishlist } from "../../actions/getWishlist"

import {
    filterChangeCatalogId, filterChangeCategoryId,
    startSetCatalogCategories, clearProductFilters
} from "../../actions/filterActions"

class CategoryProducts extends React.Component {
    componentDidMount() {
        this.props.startCategoryProductLoading()
        const { route, userId } = this.props
        const { id, catalogId, catalogName, heading } = route.params;

        this.props.filterChangeCatalogId(catalogId, catalogName);
        this.props.startSetCatalogCategories(catalogId, id, heading);
        // this.props.filterChangeCategoryId(id, heading)

        const products = [];
        axios
            .get(Apis.get_products_by_category, {
                params: {
                    categoryId: id,
                    userId: userId.length > 0 ? userId : 0
                }
            })
            .then(res => {
                if (res.data) {
                    res.data.forEach(item => {
                        const newItem = {
                            ID: item.ProductId,
                            img: item.MainImage,
                            categoryId: item.CategoryId,
                            categoryName: item.CategoryName,
                            post_title: item.ProductName,
                            price: item.Price ? `${item.Price.toFixed(2)}` : 0,
                            isAddedToWishlist: item.IsWIshlList !== 0 ? true : false
                        }

                        products.push(newItem)
                    })
                }
                this.props.setCategoryProducts(products)
                this.props.stopCategoryProductLoading()
            })
            .catch(err => {
                alert(err);
                this.props.stopCategoryProductLoading()
            })
    }
    componentWillUnmount() {
        this.props.clearCategoryProducts();
        this.props.clearProductFilters()
    }

    handleWishlistState = (product) => {
        const { userId } = this.props

        // if (product.isAddedToWishlist) {
        //     this.props.removeAProductFromWishlist(product.ID)
        //     this.props.removeProductFromUserWishlist(product.ID)
        // } else {
        //     this.props.addAProductToWishlist(product.ID)
        //     this.props.addProductToUserWishlist({
        //         wishlistId: Math.random(),
        //         userId: userId,
        //         productName: product.post_title,
        //         productId: product.ID,
        //         img: product.img,
        //         price: product.price,
        //         categoryId: product.categoryId
        //     })
        // }
        axios
            .post(Apis.add_product_to_wishlist, null, {
                params: {
                    productId: product.ID,
                    userid: userId
                }
            })
            .then(res => {
                if (res.data) {
                    if (res.data.Code === 0) {
                        // Dispatch remove product from wishlist
                        this.props.removeAProductFromWishlist(product.ID)
                        this.props.removeProductFromUserWishlist(product.ID)
                    } else if (res.data.Code === 1) {
                        // Dispatch add product from wishlist
                        this.props.addAProductToWishlist(product.ID)
                        this.props.addProductToUserWishlist({
                            wishlistId: Math.random(),
                            userId: userId,
                            productName: product.post_title,
                            productId: product.ID,
                            img: product.img,
                            price: product.price,
                            categoryId: product.categoryId
                        })
                    }
                }
            })
            .catch(err => {
                alert(err);
            })

    }

    render() {
        const { navigation, route, category_product_loading, category_products, userId } = this.props
        const { heading, id } = route.params
        return (
            <Container style={{ backgroundColor: "white" }}>
                <SafeAreaView />
                
                <CategoryHeader
                    navigation={navigation}
                    heading={heading}
                />
                <CategoryFilter 
                    navigation={navigation}
                />
                <CategoryProductsLoader
                    loading={category_product_loading}
                />
                {!category_product_loading && <FlatList
                    contentContainerStyle={{ alignItems: "center" }}
                    // numColumns={2}
                    data={category_products}
                    keyExtractor={item => item.ID}
                    renderItem={({ item }) => (
                        <CategoryProductCard
                            product={item}
                            userId={userId}
                            handleWishlistState={this.handleWishlistState}
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
}

const mapStateToProps = (state) => ({
    category_product_loading: state.categoryProducts.category_product_loading,
    category_products: state.categoryProducts.category_products,
    userId: state.auth.user.userId,
})

const mapDispatchToProps = (dispatch) => ({
    startCategoryProductLoading: () => dispatch(startCategoryProductLoading()),
    stopCategoryProductLoading: () => dispatch(stopCategoryProductLoading()),
    setCategoryProducts: (products) => dispatch(setCategoryProducts(products)),
    clearCategoryProducts: () => dispatch(clearCategoryProducts()),
    filterChangeCatalogId: (catalogId, catalogName) => dispatch(filterChangeCatalogId(catalogId, catalogName)),
    filterChangeCategoryId: (categoryId, categoryName) => dispatch(filterChangeCategoryId(categoryId, categoryName)),
    startSetCatalogCategories: (catalogId, categoryId, categoryName) => dispatch(startSetCatalogCategories(catalogId, categoryId, categoryName)),
    clearProductFilters: () => dispatch(clearProductFilters()),
    removeAProductFromWishlist: (id) => dispatch(removeAProductFromWishlist(id)),
    removeProductFromUserWishlist: (id) => dispatch(removeProductFromUserWishlist(id)),
    addAProductToWishlist: (id) => dispatch(addAProductToWishlist(id)),
    addProductToUserWishlist: (product) => dispatch(addProductToUserWishlist(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryProducts)
