
import React from "react"
import { View, Text, StatusBar, SafeAreaView, Keyboard, FlatList, Image, Modal } from "react-native"
import { Container, Content } from "native-base"
import SearchProductsBar from "../../Components/HomeComponents/SearchProductsBar"
import SearchProducts from "../../Components/HomeComponents/SearchProducts";
import CategoryFilter from '../../Components/CategoryProductComponents/CategoryFilter'
import ProductLoader from "../../Components/HomeComponents/ProductLoader"
import DismissKeyboardComponent from "../../Components/GeneralComponents/DismissKeyboardComponent"
import axios from "axios"
import IoniIcons from "react-native-vector-icons/Ionicons"
import Apis from "../../Api/Apis"
import { connect } from "react-redux"
import { filterSetSearchText } from "../../actions/filterActions"
import { Item } from "native-base"
import styles from "../../Styles/ProductDetailStyles/ProductTabStyles"
// filter new lines
import CategoryHeader from '../../Components/CategoryProductComponents/CategoryHeader'
import CategoryProductCard from '../../Components/CategoryProductComponents/CategoryProductCard'
import CategoryProductsLoader from "../../Components/HomeComponents/ProductLoader"
import {
    startCategoryProductLoading, stopCategoryProductLoading,
    setCategoryProducts, clearCategoryProducts, applyFilters
} from "../../actions/categoryProductAction"
import AsyncStorage from '@react-native-community/async-storage';
import { removeProductFromUserWishlist, addProductToUserWishlist } from "../../actions/getWishlist"

import { filterChangeCatalogId, startSetCatalogCategories, clearProductFilters, setPageNumber, resetPageNumber } from "../../actions/filterActions"


class SearchScreen extends React.Component {
    state = {
        products: [],
        loading: false,
        isSearched: false,
        search: "",
        isCatalogSelected: false,
        catalogId: "",
        catalogImage: "",
        catalogName: "",
        ResultsCount: "",
        PageNumber: 0,
        ModalState: true,
        date: '',
        HistoryData: [],
        HideHistory: false
    }
    async componentDidMount() {
        // try {
        //     const myArray = await AsyncStorage.removeItem("Products");
        //     if (myArray !== null) {
        //         console.log('remove chache', myArray)
        //         // this.setState({ CartProducts: JSON.parse(myArray) })
        //     }
        // }
        // catch (e) {
        //     console.log("Error in Async Storage to get cart products")
        // }
        // try {
        const myArray = await AsyncStorage.getItem("Products");
        console.log(myArray)
        if (myArray != null) {
            let arr = JSON.parse(myArray)
            console.log('from assync', arr)
            this.setState({ HistoryData: arr })
            console.log('with if')
        }
        else {
            this.setState({ HideHistory: true })
        }
        // }
        // catch (e) {
        //     console.log("Error in Async Storage to get History")
        // }
    }

    handleTextChange = (val) => {
        this.setState({
            search: val,
        })

    }
    getDateMethod = () => {
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds
        return date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec
        // this.setState({ date: date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec, })
    }

    handleOnSearch = async (val) => {
        let { search } = this.state;
        console.log('search  value',this.state.search)
        this.props.clearCategoryProducts();
        this.props.resetPageNumber()
        this.setState({
            products: [],
            PageNumber: 0,
        })
        let SearchDate = this.getDateMethod()
        let searchValue = this.state.search;
        let obj = {
            Search: searchValue,
            date: SearchDate,

        }
        this.setState({
            HistoryData: [...this.state.HistoryData, obj]
        })
        // this.setState((prevState) => {
        //     return {
        //         HistoryData: [...prevState.HistoryData, obj]
        //     }
        // })
        console.log('inner', this.state.HistoryData)
        this.UpdateChache(this.state.HistoryData)

        this.props.filterSetSearchText(search)
        this.props.applyFilters()
        if (search.trim() < 0) {
            // Keyboard.dismiss()
        } else {
            this.setState({ isSearched: true });
        }
        this.setState({ HideHistory: true })
    }

    UpdateChache = async (HistoryData) => {
        await AsyncStorage.setItem("Products", JSON.stringify(this.state.HistoryData));
    }

    handleSetSelectedCatalog = (id, text, img) => {
        this.setState({
            isCatalogSelected: true
        })

        this.props.filterChangeCatalogId(
            id,
            text,
            img
        )

        this.props.startCategoryProductLoading()
        this.props.startSetCatalogCategories(id, "", text);
        this.setState({ products: [] })
        this.props.clearCategoryProducts();
        this.handleOnSearch()
        this.props.stopCategoryProductLoading()
    }
    fetchMore = async () => {
        this.props.setPageNumber();
        // this.props.applyFilters()
        // this.handleOnSearch()
    }

    componentWillUnmount() {
        this.props.clearCategoryProducts();
        this.props.clearProductFilters()
    }

    render() {
        const {
            route, category_product_loading, category_products, userId, PageNumber,
            product, filters, filtersortingId, navigation
        } = this.props
        const { loading, isSearched, search } = this.state;
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
                        isCatalogSelected={this.props.filters.CatalogId.length > 0 ? true : false}
                        all_catalogs={this.props.all_catalogs}
                        catalogId={this.props.filters.CatalogId}
                        catalogImage={this.props.filters.catalogImage}
                        handleSetSelectedCatalog={this.handleSetSelectedCatalog}
                    />


                    {this.state.HideHistory ? <View></View> : <View style={styles.HistoryOuterView}>
                        <Text style={styles.HistoryText}>History</Text>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 15, alignItems: 'center' }}>
                            <Image
                                source={require('../../Assets/HomeAssets/search.png')}
                                style={styles.iconStyle}
                            />
                            <View style={{ marginVertical: 10 }}>
                                <Text numberOfLines={1} style={[styles.HistoryInnerText, { fontSize: 15 }]}>History</Text>
                                <Text numberOfLines={1} style={styles.HistoryInnerText}>History</Text>
                            </View>
                        </View>
                        <View style={styles.HorizontalLine}></View>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 15, alignItems: 'center' }}>
                            <Image
                                source={require('../../Assets/HomeAssets/search.png')}
                                style={styles.iconStyle}
                            />
                            <View style={{ marginVertical: 10 }}>
                                <Text numberOfLines={1} style={[styles.HistoryInnerText, { fontSize: 15 }]}>History</Text>
                                <Text numberOfLines={1} style={styles.HistoryInnerText}>History</Text>
                            </View>
                        </View>
                        <View style={styles.HorizontalLine}></View>
                        <Text
                            // onPress={() => { this.props.navigation.navigate("HistoryScreen") }}
                            style={[styles.HistoryInnerText, { fontSize: 15, marginHorizontal: 50, marginTop: 10, fontWeight: 'bold' }]}>
                            More
                            </Text>
                    </View>}


                    {this.state.isSearched ? <CategoryFilter
                        navigation={navigation}
                    /> : <View></View>}
                    {this.state.isSearched && this.state.ResultsCount != '103661' && this.state.ResultsCount > 0 ? <View style={{ margin: 10, }}>
                        <Text>{this.state.ResultsCount} Results</Text>
                    </View> : <View></View>}

                    <View style={{
                        borderBottomWidth: 1,
                        borderBottomColor: "rgba(0, 0, 0, 0.1)",
                        paddingHorizontal: 5
                    }}></View>
                    {
                        loading ?
                            <View style={{ marginTop: 40 }}>
                                <ProductLoader
                                    loading={loading}
                                />
                            </View>
                            :
                            isSearched ?
                                <FlatList
                                    style={{ flex: 1 }}
                                    data={this.state.search ? product : ""}
                                    keyExtractor={item => item.ID}
                                    onEndReached={this.fetchMore}
                                    // onEndReachedThreshold={0}
                                    renderItem={({ item }) => (
                                        <Item
                                            style={styles.searchProductContainer}
                                            onPress={() => navigation.navigate("ProductDetail", {
                                                id: item.ID
                                            })}
                                        >
                                            <Image
                                                resizeMode="contain"
                                                source={{ uri: item.img }}
                                                style={{ width: 70, height: 100, }}
                                            />
                                            <View style={{ width: "70%", marginLeft: 20, alignItems: "flex-start" }}>
                                                <Text
                                                    style={{ ...styles.productTitle, marginVertical: 0, marginTop: 5, marginBottom: 2, color: "#515C6F", fontSize: 13 }}
                                                    numberOfLines={2}
                                                >
                                                    {item.post_title}
                                                </Text>
                                                <View style={styles.toolsContainer}>
                                                    <Text
                                                        style={{
                                                            fontSize: 12,
                                                            color: "#8EA625",
                                                            fontWeight: "bold",
                                                            marginTop: 5
                                                        }}
                                                    >
                                                        {`AED ${item.price}`}
                                                    </Text>
                                                </View>
                                            </View>
                                        </Item>
                                    )}

                                />

                                // isSearched ? <SearchProducts
                                //     fetchMore={this.fetchMore}
                                //     products={products}
                                //     navigation={this.props.navigation}
                                // />
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
    product: state.categoryProducts.category_products,
    PageNumber: state.productFilters.PageNumber
})


const mapDispatchToProps = (dispatch) => ({
    startCategoryProductLoading: () => dispatch(startCategoryProductLoading()),
    stopCategoryProductLoading: () => dispatch(stopCategoryProductLoading()),
    startSetCatalogCategories: (catalogId, categoryId, categoryName) => dispatch(startSetCatalogCategories(catalogId, categoryId, categoryName)),
    filterChangeCatalogId: (catalogId, catalogName, catalogImage) => dispatch(filterChangeCatalogId(catalogId, catalogName, catalogImage)),
    setPageNumber: () => dispatch(setPageNumber()),
    resetPageNumber: () => dispatch(resetPageNumber()),
    setCategoryProducts: (products) => dispatch(setCategoryProducts(products)),
    filterSetSearchText: (text) => dispatch(filterSetSearchText(text)),
    clearProductFilters: () => dispatch(clearProductFilters()),
    clearCategoryProducts: () => dispatch(clearCategoryProducts()),
    applyFilters: () => dispatch(applyFilters())
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen)