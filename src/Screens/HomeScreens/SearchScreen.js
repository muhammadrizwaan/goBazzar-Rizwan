import React from "react"
import { View, Text, StatusBar, SafeAreaView, Keyboard } from "react-native"
import { Container, Content } from "native-base"

import SearchProductsBar from "../../Components/HomeComponents/SearchProductsBar"
import SearchProducts from "../../Components/HomeComponents/SearchProducts";
import CategoryFilter from '../../Components/CategoryProductComponents/CategoryFilter'

// import products from '../../Samples/products'

import ProductLoader from "../../Components/HomeComponents/ProductLoader"
import DismissKeyboardComponent from "../../Components/GeneralComponents/DismissKeyboardComponent"

import axios from "axios"
import Apis from "../../Api/Apis"

import { connect } from "react-redux"

class SearchScreen extends React.Component {
    state = {
        products: [],
        loading: false,
        isSearched: false,
        search: "",
        isCatalogSelected: false,
        catalogId: "",
        catalogImage: ""
    }

    handleTextChange = (val) => {
        this.setState({
            search: val
        })
    }

    handleOnSearch = (val) => {
        let { search, catalogId } = this.state; 
        search = val
        console.warn(search)
        if(search.trim() < 1) {
            Keyboard.dismiss()
        } else {
            this.setState({ loading: true, isSearched: true });

            const products = [];

            axios
                .get(Apis.search_product, {
                    params: {
                        search: search,
                        CatalogueCode: catalogId
                    }
                })
                .then((res) => {
                    if(res.data) {
                        res.data.forEach(item => {
                            products.push({
                                img: item.MainImage,
                                post_title: item.ProductName,
                                price: item.RegularPrice ? item.RegularPrice.toFixed(2) : 0,
                                catalogId: item.CatalogueCode,
                                ID: item.ProductCode,
                                description: item.ProductDesc
                            })
                        })

                        this.setState({
                            products: products
                        })
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

    handleSetSelectedCatalog = (id, img) => {
        this.setState({
            catalogId: id,
            catalogImage: img,
            isCatalogSelected: true
        })
    }

    render() {
        const { navigation } = this.props;
        const { loading, isSearched, search, products } = this.state
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
                    isCatalogSelected={this.state.isCatalogSelected}
                    all_catalogs={this.props.all_catalogs}
                    catalogId={this.state.catalogId}
                    catalogImage={this.state.catalogImage}
                    handleSetSelectedCatalog={this.handleSetSelectedCatalog}
                />
                <CategoryFilter 
                    navigation={navigation}
                />
                {/* <Text>hello</Text> */}

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
})




export default connect(mapStateToProps)(SearchScreen)