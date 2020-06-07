import React from 'react'
import {
    View, Text, SafeAreaView, TouchableOpacity,
    StyleSheet, Image, ScrollView, Dimensions
} from 'react-native'

import { Button, Icon } from 'native-base'
import { useNavigation } from "@react-navigation/native"
import {
    Item
} from 'native-base'

import MultiSlider from "@ptomasroos/react-native-multi-slider"
import FilterDrawerCatalogMenu from "../Components/FilterComponents/FilterDrawerCatalogMenu";
import FilterDrawerCategoryMenu from "../Components/FilterComponents/FilterDrawerCategoryMenu"

import { connect } from "react-redux"

import {
    filterChangeCatalogId,
    startSetCatalogCategories,
    filterChangeCategoryId,
    filterSetPrice
} from "../actions/filterActions"

import { applyFilters } from "../actions/categoryProductAction"


const MenuDrawer = (props) => {
    const onValuesChange = (e) => {
        props.filterSetPrice(e[0], e[1])
        // console.warn(e[0]);
        // console.warn(e[1])
    }
    const { filters } = props

    const handleChangeCatalog = (catalogId, catalogName, catalogImage) => {
        console.log(catalogId, catalogName, catalogImage)
        props.filterChangeCatalogId(catalogId, catalogName, catalogImage)
        props.startSetCatalogCategories(catalogId)
    }

    const handleChangeCategory = (categoryId, categoryName) => {
        props.filterChangeCategoryId(categoryId, categoryName)
    
    }
    return (
        <View style={styles.menuDrawer}>
            <View style={styles.container}>
                {/* <ScrollView> */}
                <View >
                    <View style={styles.row}>
                        <Text style={styles.filterByText}>FILTER BY</Text>
                        <TouchableOpacity style={{ marginLeft: "auto" }}
                            onPress={() => props.navigation.closeDrawer()}
                        >
                            <Text style={styles.clearButton}>CLOSE</Text>
                        </TouchableOpacity>
                    </View>

                    {/* <TouchableOpacity style={{ ...styles.row }}>
                        <Text style={styles.filterTitle}>View</Text>
                        <Text style={styles.filterSubTitle}>Thumbnails</Text>
                    </TouchableOpacity> */}



                    {/* </View> */}

                    <FilterDrawerCatalogMenu
                        styles={styles}
                        all_catalogs={props.all_catalogs}
                        catalogId={filters.CatalogId}
                        catalogName={filters.CatalogName}
                        catalogImage={filters.catalogImage}
                        handleChangeCatalog={handleChangeCatalog}
                    />



                    <FilterDrawerCategoryMenu
                        styles={styles}
                        categoryId={filters.CategoryId}
                        categoryName={filters.CategoryName}
                        catalog_categories={filters.catalog_categories}
                        isCatalogCategoriesLoading={filters.isCatalogCategoriesLoading}
                        handleChangeCategory={handleChangeCategory}
                    />


                    {/* <TouchableOpacity style={{ ...styles.row }}>
                        <Text style={styles.filterTitle}>Condition</Text>
                        <Text style={styles.filterSubTitle}>Brand New</Text>
                    </TouchableOpacity> */}

                    {/* <TouchableOpacity style={{ ...styles.row }}>
                        <Text style={styles.filterTitle}>Brand</Text>
                        <Text style={styles.filterSubTitle}>All Brands</Text>
                    </TouchableOpacity> */}

                    {/* <TouchableOpacity style={{ ...styles.row }}>
                        <Text style={styles.filterTitle}>Size</Text>
                        <Text style={styles.filterSubTitle}>Large</Text>
                    </TouchableOpacity> */}

                    <TouchableOpacity style={{ ...styles.row }}>
                        <Text style={styles.filterTitle}>Price Range</Text>
                        {/* <Text style={styles.filterSubTitle}>min - max</Text> */}
                        <View
                            style={{
                                flexDirection: "column",
                                marginLeft: "auto",
                                width: Dimensions.get("window").width * 40 / 100
                            }}
                        >
                            <Text style={styles.filterSubTitle}>Min - {filters.MinPrice}AED</Text>
                            <Text style={styles.filterSubTitle}>Max - {filters.MaxPrice}AED</Text>
                        </View>
                        {/* <Text style={styles.filterSubTitle}>
                            {`${filters.MinPrice}AED - ${filters.MaxPrice}AEEEEEEED`}
                        </Text> */}
                    </TouchableOpacity>
                    <View style={{ ...styles.row, marginLeft: (Dimensions.get("window").width * 2 / 100) }}>
                        <MultiSlider
                            values={[0, 4299]}
                            sliderLength={(Dimensions.get("window").width * 60 / 100)}
                            min={filters.MinPrice}
                            max={filters.MaxPrice}
                            onValuesChange={onValuesChange}
                        />
                    </View>

                    <TouchableOpacity

                        style={{
                            margin: 20,
                            borderRadius: 20,
                            backgroundColor: "#8EA81F",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "row",
                            padding: 10
                        }}
                        onPress={() => {
                            props.navigation.closeDrawer()
                            props.applyFilters()
                        }}

                    >
                        <Text
                            style={{ color: "white", fontSize: 13, textTransform: "uppercase", fontWeight: "bold",  }}
                        >
                            Apply Filters
                        </Text>

                        <View
                            transparent
                            style={{
                                backgroundColor: "white",
                                borderRadius: 15,
                                width: 30,
                                height: 30,
                                padding: 0,
                                alignItems: "center",
                                justifyContent: "center",
                                marginLeft: 10,
                                // marginLeft: "auto"
                            }}
                            icon
                        >
                            <Icon
                                name="ios-arrow-forward"
                                style={{
                                    color: "#8EA81F",
                                    fontSize: 20,
                                    alignSelf: "center"
                                }}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                {/* </ScrollView> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    menuDrawer: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        paddingTop: 40
    },
    filterByText: {
        fontSize: 12,
        color: "#515C6F",
        fontFamily: "LexendDeca-Regular",
        opacity: 0.5
    },
    filterTitle: {
        fontSize: 15,
        color: "#515C6F",
        fontFamily: "LexendDeca-Regular",
    },
    filterSubTitle: {
        fontSize: 15,
        color: "#515C6F",
        fontFamily: "LexendDeca-Regular",
        opacity: 0.4,
        marginLeft: "auto"
    },
    clearButton: {
        fontSize: 12,
        color: "#FF6969",
        fontFamily: "LexendDeca-Regular",
        // marginLeft: "auto"
    },
    colorWhite: {
        color: '#E9EDF4',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        textAlign: 'left',
        opacity: 0.9,
        // fontFamily: 'Montserrat'
    },
    user_icon: {
        color: '#ffffff',
        fontSize: 20,
        marginLeft: 10,
        marginTop: 15
    },
    lq_points_heading: {
        color: '#ffffff',
        marginLeft: 10,
        fontSize: 15,
        fontWeight: 'bold',
        // fontFamily: 'Montserrat'
    },
    lq_points: {
        color: '#ffffff',
        marginLeft: 10,
        color: 'yellow',
        fontSize: 13,
        // fontFamily: 'Montserrat'
    },
    drawerButtonStyle: {
        paddingLeft: 5,
        paddingTop: 5,
        paddingBottom: 5,
        borderColor: "#dddddd",
        borderBottomWidth: 0.4,
    },
    row: {
        display: "flex",
        flexDirection: "row",
        paddingHorizontal: 20,
        marginVertical: 15
    }
});

const mapStateToProps = (state) => ({
    filters: state.productFilters,
    all_catalogs: state.all_catalogs.catalogs
})

const mapDispatchToProps = (dispatch) => ({
    filterChangeCatalogId: (catalogId, catalogName, catalogImage) => dispatch(filterChangeCatalogId(catalogId, catalogName, catalogImage)),
    startSetCatalogCategories: (catalogId) => dispatch(startSetCatalogCategories(catalogId, "", "")),
    filterChangeCategoryId: (categoryId, categoryName) => dispatch(filterChangeCategoryId(categoryId, categoryName)),
    filterSetPrice: (minPrice, maxPrice) => dispatch(filterSetPrice(minPrice, maxPrice)),
    applyFilters: () => dispatch(applyFilters())
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuDrawer)