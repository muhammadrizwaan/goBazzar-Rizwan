import React from "react"
import { View, Text, SafeAreaView } from "react-native"

import { Container, Content } from "native-base"

import StoreTabHeader from "../../Components/StoreDetailComponents/StoreTabHeader"
import StoreHeader from "../../Components/CategoryProductComponents/CategoryHeader"

import StoreReviews from "../../Components/StoreDetailComponents/StoreReviews"
import StoreInfo from "../../Components/StoreDetailComponents/StoreInfo"
import StorePolicies from "../../Components/StoreDetailComponents/StorePolicies"
import axios from "axios"

import SearchProducts from "../../Components/HomeComponents/SearchProducts";


import StoreLoader from "../../Components/HomeComponents/ProductLoader"

import Apis from "../../Api/Apis"

const store_tabs = [{
    id: 0,
    name: "Reviews",
    key: "reviews"
}, {
    id: 1,
    name: "Info",
    key: "info"
}, {
    id: 2,
    name: "Policies",
    key: "policies"
}]

class StoreDetail extends React.Component {
    state = {
        activeTabKey: store_tabs[0].key,
        store: {
            storeId: "",
            storeName: "",
            img: "",
            rating: 0,
        },
        search: "",
        products: [],
        loading: false,
        products_loading: false
    }
    changeTab = (key) => {
        this.setState({
            activeTabKey: key
        })
    }
    componentDidMount() {
        if(this.state.search == ""){

      
        this.setState({
            loading: true,
            products_loading: true
        })
        const { route } = this.props;

        const storeId = route.params.id


        axios
            .get(Apis.get_store_detail, {
                params: {
                    storeId: storeId
                }
            })
            .then(res => {
                if (res.data) {

                    this.setState({
                        store: {
                            storeId: res.data.StoreId,
                            storeName: res.data.StoreName,
                            img: res.data.ImageURL,
                            rating: res.data.RatingCount
                        }
                    })
                }
                this.setState({
                    loading: false
                })
            })
            .catch(err => {
                this.setState({
                    loading: false
                })
            })

        const products = []

        // Get Products by store Id
        axios
            .get(Apis.filter_products, {
                params: {
                    MinPrice: 0,
                    MaxPrice: "",
                    CategoryId: "",
                    CatalogId: "",
                    BrandId: "",
                    StoreId: storeId,
                    FiltersortingId: "",
                    Search: this.state.search,
                    pagenumber:"",
                }
            })
            .then(res => {
                if (res.data.FilterProductList) {
                    res.data.FilterProductList.forEach(item => {
                        products.push({
                            img: item.MainImage,
                            post_title: item.ProductName,
                            price: item.RegularPrice ? item.RegularPrice.toFixed(2) : 0,
                            // catalogId: item.CatalogueCode,
                            ID: item.ProductCode,
                            // description: item.ProductDesc
                        })
                    })

                    this.setState({
                        products: products,
                        products_loading: false
                    })
                }
            })
            .catch(err => {
                this.setState({
                    products_loading: false
                })
            })
        }
    }
    handleProductList = (val) => {
        let { search } = this.state;
        search = val
        // this.setState({
        //     loading: true,
        //     products_loading: true
        // })
        const { route } = this.props;

        const storeId = route.params.id


        // axios
        //     .get(Apis.get_store_detail, {
        //         params: {
        //             storeId: storeId
        //         }
        //     })
        //     .then(res => {
        //         if (res.data) {

        //             this.setState({
        //                 store: {
        //                     storeId: res.data.StoreId,
        //                     storeName: res.data.StoreName,
        //                     img: res.data.ImageURL,
        //                     rating: res.data.RatingCount
        //                 }
        //             })
        //         }
        //         this.setState({
        //             loading: false
        //         })
        //     })
        //     .catch(err => {
        //         this.setState({
        //             loading: false
        //         })
        //     })

        const products = []

        // Get Products by store Id
        axios
            .get(Apis.filter_products, {
                params: {
                    MinPrice: 0,
                    MaxPrice: "",
                    CategoryId: "",
                    CatalogId: "",
                    BrandId: "",
                    StoreId: storeId,
                    FiltersortingId: "",
                    Search: search,
                    pagenumber:"",
                }
            })
            .then(res => {
                if (res.data.FilterProductList) {
                    res.data.FilterProductList.forEach(item => {
                        products.push({
                            img: item.MainImage,
                            post_title: item.ProductName,
                            price: item.RegularPrice ? item.RegularPrice.toFixed(2) : 0,
                            // catalogId: item.CatalogueCode,
                            ID: item.ProductCode,
                            // description: item.ProductDesc
                        })
                    })

                    this.setState({
                        products: products,
                        products_loading: false
                    })
                }
            })
            .catch(err => {
                this.setState({
                    products_loading: false
                })
            })
    }
    componentWillUnmount() {
        this.setState({
            store: {
                storeId: "",
                storeName: "",
                img: "",
                rating: 0
            },
            loading: false,
            products_loading: false
        })
    }
    handleTextChange = (val) => {
        this.setState({
            search: val
        })
    }
    render() {
        const { activeTabKey, loading, store, products_loading, products, search } = this.state
        return (
            <Container>
                <SafeAreaView />
                <StoreHeader
                    heading=""
                    navigation={this.props.navigation}
                />
                <Content contentContainerStyle={{ paddingBottom: 10 }}>
                    {
                        loading ?
                            <StoreLoader
                                loading={loading}
                            />
                            :
                            <StoreTabHeader
                                navigation={this.props.navigation}
                                activeTabKey={this.state.activeTabKey}
                                changeTab={this.changeTab}
                                store={store}
                                search={search}
                                handleTextChange={this.handleTextChange}
                                handleProductList={this.handleProductList}
                            />
                    }

                    {
                        products_loading ?
                            <View style={{ marginTop: 20 }}>
                                <StoreLoader loading={products_loading} />
                            </View>
                            :
                            <View style={{ marginTop: 20 }}>
                                <SearchProducts
                                    products={products}
                                    navigation={this.props.navigation}
                                />
                            </View>
                    }

                    {/* {activeTabKey === "reviews" && <StoreReviews />}
                    {activeTabKey === "info" && <StoreInfo />}
                    {activeTabKey === "policies" && <StorePolicies />} */}
                </Content>
                {/* <DetailTabs
                    tabs={product_tabs}
                    activeTabKey={this.state.activeTabKey}
                    changeTab={this.changeTab}
                    navigation={this.props.navigation}
                />
                {activeTabKey === "product" && <ProductTab
                    product={tabs_data.product}
                />}
                {activeTabKey === "nearby" && <NearByLocations />}
                {activeTabKey === "insights" && <PriceInsights />} */}
            </Container>
        )
    }
}

export default StoreDetail