
import React from "react"
import { View, Text, StatusBar, SafeAreaView, Keyboard, FlatList, Image, Modal, Alert } from "react-native"
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
import { TouchableOpacity } from "react-native-gesture-handler";


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
        HistoryScreenData: "",
        HistoryData: [],
        HideHistory: true
    }
    async componentDidMount() {

        try {
            const myArray = await AsyncStorage.getItem("Products");
            if (myArray !== null) {
                let arr = JSON.parse(myArray)
                this.setState({ HistoryData: arr })
            }
        }
        catch (e) {
            console.log("Error in Async Storage to get cart products")
        }

    }

    async NavigateForword() {
        this.setState({
            HistoryData: [],
            search: ''
        })
        this.props.navigation.navigate("HistoryScreen")
    }
    handleTextChange = (val) => {
        this.setState({
            HideHistory: true,
            products: [],
            isSearched: false,
            search: val,
        }, () => this.props.clearCategoryProducts()
        )
    }
    async handleHistoryPress(val) {
        await this.handleTextChange(val)
        this.handleOnSearch()
    }
    getDateMethod = () => {
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        var hours = new Date().getHours();
        var min = new Date().getMinutes();
        var sec = new Date().getSeconds();
        return date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec
    }

    handleOnSearch = async (val) => {

        let { search } = this.state;
        this.props.clearCategoryProducts();
        this.props.resetPageNumber()
        this.setState({ HideHistory: false, loading: true })
        let SearchDate = this.getDateMethod()
        let obj = {
            Search: search,
            date: SearchDate,
        }
        let array = this.state.HistoryData;
        array.unshift(obj);
        await this.UpdateChache(array)

        await this.props.filterSetSearchText(search)
        await this.props.applyFilters()
        if (search.trim() < 0) {
            // Keyboard.dismiss()
        } else {
            this.setState({ isSearched: true, loading: false });
        }

    }

    UpdateChache = async (HistoryData) => {
        await AsyncStorage.setItem("Products", JSON.stringify(HistoryData));
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
    }

    HistoryBox() {


        if (this.state.HideHistory) {
            if (this.state.HistoryData.length > 0 && this.state.HistoryData.length < 2) {
                return (
                    <View style={[styles.HistoryOuterView, { height: 90 }]}>
                        <Text style={styles.HistoryText}>History</Text>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 15, alignItems: 'center' }}>
                            <Image
                                source={require('../../Assets/HomeAssets/search.png')}
                                style={styles.iconStyle}
                            />
                            <TouchableOpacity style={{ marginVertical: 10 }}
                                onPress={() => this.handleHistoryPress(this.state.HistoryData[0].Search)}>
                                <Text numberOfLines={1} style={[styles.HistoryInnerText, { fontSize: 15 }]}>{this.state.HistoryData[0].Search}</Text>
                                <Text numberOfLines={1} style={styles.HistoryInnerText}>{this.state.HistoryData[0].date}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }
            else if (this.state.HistoryData.length > 1) {
                return (
                    <View style={styles.HistoryOuterView}>
                        <Text style={styles.HistoryText}>History</Text>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 15, alignItems: 'center' }}>
                            <Image
                                source={require('../../Assets/HomeAssets/search.png')}
                                style={styles.iconStyle}
                            />
                            <TouchableOpacity style={{ marginVertical: 10 }}
                                onPress={() => this.handleHistoryPress(this.state.HistoryData[0].Search)}>
                                <Text numberOfLines={1} style={[styles.HistoryInnerText, { fontSize: 15 }]}>{this.state.HistoryData[0].Search}</Text>
                                <Text numberOfLines={1} style={styles.HistoryInnerText}>{this.state.HistoryData[0].date}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.HorizontalLine}></View>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 15, alignItems: 'center' }}>
                            <Image
                                source={require('../../Assets/HomeAssets/search.png')}
                                style={styles.iconStyle}
                            />
                            <TouchableOpacity style={{ marginVertical: 10 }}
                                onPress={() => this.handleHistoryPress(this.state.HistoryData[1].Search)}>
                                <Text numberOfLines={1} style={[styles.HistoryInnerText, { fontSize: 15 }]}>{this.state.HistoryData[1].Search}</Text>
                                <Text numberOfLines={1} style={styles.HistoryInnerText}>{this.state.HistoryData[1].date}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.HorizontalLine}></View>
                        <Text
                            onPress={() => this.props.navigation.navigate("HistoryScreen")}
                            style={[styles.HistoryInnerText, { fontSize: 15, marginHorizontal: 50, marginTop: 10, fontWeight: 'bold' }]}>
                            More
                </Text>
                    </View>
                )
            }
            else {
                return (<View></View>)
            }
        }
        else {
            return (<View></View>)
        }
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

                    {this.HistoryBox()}


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
                                            <View style={{ width: "70%", marginLeft: 20,  }}>
                                                <Text
                                                    style={{ ...styles.productTitle, marginVertical: 0, marginTop: 5, marginBottom: 2, color: "#515C6F", fontSize: 13 }}
                                                    numberOfLines={2}
                                                >
                                                    {item.post_title}
                                                </Text>
                                                <View style={[styles.toolsContainer,{ justifyContent: 'space-between', }]}>
                                                    <View>
                                                        {item.offerPrice === "0" ?
                                                            <View></View> :
                                                            <Text
                                                                style={{
                                                                    fontSize: 12,
                                                                    // color: "#8EA625",
                                                                    fontWeight: "bold",
                                                                    marginTop: 5,
                                                                    textDecorationLine: item.offerPrice ? 'line-through' : "none",
                                                                    color: item.offerPrice ? "#C9C9C9" : "#8EA625"
                                                                }}
                                                            >
                                                                {`AED ${item.price}`}
                                                            </Text>}
                                                        <Text
                                                            style={{
                                                                fontSize: 12,
                                                                color: "#8EA625",
                                                                fontWeight: "bold",
                                                                marginTop: 5,
                                                                display: item.offerPrice ? "flex" : "none"
                                                            }}
                                                        >
                                                            {item.offerPrice === "0" ? `AED ${item.price}` : `AED ${item.offerPrice}`}
                                                        </Text>
                                                    </View>
                                                    <Image
                                                        resizeMode="contain"
                                                        source={{ uri: item.storeImg }}
                                                        // source={{ uri: item.img }}
                                                        style={{ width: 50, height: 50, }}
                                                    />
                                                    {/* <Text
                                                        style={{
                                                            fontSize: 12,
                                                            color: "#8EA625",
                                                            fontWeight: "bold",
                                                            marginTop: 5
                                                        }}
                                                    >
                                                        {`AED ${item.price}`}
                                                    </Text> */}
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