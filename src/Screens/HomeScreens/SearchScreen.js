
import React from "react"
import { View, Text, StatusBar, SafeAreaView, Keyboard } from "react-native"
import { Container, Content } from "native-base"
import SearchProductsBar from "../../Components/HomeComponents/SearchProductsBar"
import SearchProducts from "../../Components/HomeComponents/SearchProducts";
import CategoryFilter from '../../Components/CategoryProductComponents/CategoryFilter'
import ProductLoader from "../../Components/HomeComponents/ProductLoader"
import DismissKeyboardComponent from "../../Components/GeneralComponents/DismissKeyboardComponent"
import axios from "axios"
import Apis from "../../Api/Apis"
import { connect } from "react-redux"


// filter new lines
import CategoryHeader from '../../Components/CategoryProductComponents/CategoryHeader'
import CategoryProductCard from '../../Components/CategoryProductComponents/CategoryProductCard'
import CategoryProductsLoader from "../../Components/HomeComponents/ProductLoader"
import {
    startCategoryProductLoading, stopCategoryProductLoading,
    setCategoryProducts, clearCategoryProducts,
    addAProductToWishlist, removeAProductFromWishlist
} from "../../actions/categoryProductAction"

import { removeProductFromUserWishlist, addProductToUserWishlist } from "../../actions/getWishlist"

import { filterChangeCatalogId } from "../../actions/filterActions"

import { setCategoryProducts } from "../../actions/categoryProductAction"


class SearchScreen extends React.Component {
    state = {
        products: [],
        loading: false,
        isSearched: false,
        search: "",
        isCatalogSelected: false,
        catalogId: "",
        catalogImage: "",
        catalogName: ""
    }

    handleTextChange = (val) => {
        this.setState({
            search: val
        })
    }

    handleApplyFilter = () => {
        this.setState({ loading: true, isSearched: true });

        const { filters } = this.props
        let Search = this.state.search;

        axios
            .get(Apis.filter_products, {
                params: {
                    MinPrice: filters.MinPrice,
                    MaxPrice: filters.MaxPrice,
                    CategoryId: filters.CategoryId,
                    CatalogId: filters.CatalogId,
                    BrandId: "",
                    StoreId: "",
                    FiltersortingId: filters.filtersortingId,
                    Search: Search,
                    pagenumber: "",
                }
            })
            .then(res => {
                if (res.data.FilterProductList) {
                    res.data.FilterProductList.forEach(item => {
                        products.push({
                            img: item.MainImage,
                            post_title: item.ProductName,
                            price: item.RegularPrice ? item.RegularPrice.toFixed(2) : 0,
                            catalogId: item.CatalogueCode,
                            ID: item.ProductCode,
                            description: item.ProductDesc
                        })
                    })

                    this.props.setCategoryProducts(products)
                }
                this.setState({
                    loading: false
                })
            })
            .catch(err => {
                alert(err)
                this.setState({
                    loading: false
                })
            })
    }

    handleOnSearch = (val) => {

        let { search, catalogId } = this.state;
        const { filters, filtersortingId } = this.props;
        Search = val
        if (search.trim() < 1) {
            Keyboard.dismiss()
        } else {
            this.setState({ loading: true, isSearched: true });

            const products = [];

            axios
                .get(Apis.filter_products, {
                    params: {
                        MinPrice: filters.MinPrice,
                        MaxPrice: filters.MaxPrice,
                        CategoryId: filters.CategoryId,
                        CatalogId: filters.CatalogId,
                        BrandId: "",
                        StoreId: "",
                        FiltersortingId: filters.filtersortingId,
                        Search: Search,
                        pagenumber: "",
                    }
                })
                .then(res => {
                    if (res.data.FilterProductList) {
                        res.data.FilterProductList.forEach(item => {
                            products.push({
                                img: item.MainImage,
                                post_title: item.ProductName,
                                price: item.RegularPrice ? item.RegularPrice.toFixed(2) : 0,
                                catalogId: item.CatalogueCode,
                                ID: item.ProductCode,
                                description: item.ProductDesc
                            })
                        })

                        // this.setState({
                        //     products: products
                        // })
                        this.props.setCategoryProducts(products)
                    }
                    this.setState({
                        loading: false
                    })
                })
                .catch(err => {
                    alert(err)
                    this.setState({
                        loading: false
                    })
                })
        }
    }

    handleSetSelectedCatalog = (id, text, img) => {
        // this.setState({
        //     catalogId: id,
        //     catalogImage: img,
        //     // catalogName:text,
        //     isCatalogSelected: true
        // })
        this.setState({
            isCatalogSelected: true
        })

        console.warn(id, text, img)
        this.props.filterChangeCatalogId(
            id,
            text,
            img
        )
    }



    render() {
        const { 
            route, category_product_loading, category_products, userId,
            products
        } = this.props
        const { navigation } = this.props;
        const { filters, filtersortingId } = this.props;
        const { loading, isSearched, search } = this.state;

        console.warn(this.props.filters.CatalogId);
        console.warn(this.props.filters.catalogImage)
        return (
            <DismissKeyboardComponent>
                <Container>
                    <StatusBar backgroundColor="white" barStyle="dark-content" />
                    <SafeAreaView />

                    <SearchProductsBar
                        navigation={navigation}
                        search={search}
                        handleTextChange={this.handleTextChange}
                        handleOnSearch={this.handleOnSearch}
                        isCatalogSelected={this.props.filters.CatalogId ? true : false}
                        all_catalogs={this.props.all_catalogs}
                        catalogId={this.props.filters.CatalogId}
                        catalogImage={this.props.filters.catalogImage}
                        handleSetSelectedCatalog={this.handleSetSelectedCatalog}
                    />
                    <CategoryFilter
                        navigation={navigation}
                        handleApplyFilter={handleApplyFilter}
                    />
                    <View style={{ margin: 10, }}>
                        <Text>{category_products.length} results</Text>
                    </View>


                    {
                        loading ?
                            <View style={{ marginTop: 40 }}>
                                <ProductLoader
                                    loading={loading}
                                />
                            </View>
                            :
                            isSearched ? <SearchProducts
                                products={products}
                                navigation={this.props.navigation}
                            />
                                :
                                <Text></Text>
                    }
                </Container>
            </DismissKeyboardComponent>
        )
    }
}

const mapStateToProps = (state) => ({
    all_catalogs: state.all_catalogs.catalogs,
    category_product_loading: state.categoryProducts.category_product_loading,
    category_products: state.categoryProducts.category_products,
    filters: state.productFilters,
    products: state.categoryProducts.category_products
})


const mapDispatchToProps = (dispatch) => ({
    // setCategoryProducts: (products) => dispatch(setCategoryProducts(products)),
    filterChangeCatalogId: (catalogId, catalogName, catalogImage) => dispatch(filterChangeCatalogId(catalogId, catalogName, catalogImage)),
    setCategoryProducts: (products) => dispatch(setCategoryProducts(products))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen)