import React from "react"
import { View, Text, SafeAreaView, StatusBar } from "react-native"
import { Container, Content, ListItem as Item, Left, Body, Right } from "native-base"
import CategoryHeader from '../../Components/CategoryProductComponents/CategoryHeader'

import ProductHeadingSeparator from '../../Components/HomeComponents/ProductsHeadingSpearator'
import ProductScroll from '../../Components/HomeComponents/ProductsScroll'

import styles from "../../Styles/ProfileScreenStyles/LoggedInStyles"

import MenuButtonTemplate from '../ProfileScreens/MenuButtonTemplate'
import sample_products from '../../Samples/products'

import axios from "axios"
import Apis from "../../Api/Apis"

import ProductLoader from "../../Components/HomeComponents/ProductLoader"


class SubCategories extends React.Component {
    state = {
        categories_loading: false,
        sub_categories: [],
        top_products_loading: false,
        products: []
    }
    componentDidMount() {
        this.setState({
            categories_loading: true,
            top_products_loading: true
        })
        const { route } = this.props
        const { id } = route.params
        const categories = [];
        const products = []

        // Fetch Categories By Catalog Id
        axios
            .get(Apis.categories_by_catalog_id, {
                params: {
                    catalogId: id
                }
            })
            .then((res) => {
                if (res.data) {
                    res.data.forEach(category => {
                        categories.push({
                            id: category.CategoryId,
                            img: category.ImageURL,
                            text: category.CategoryName
                        })
                    })
                }
                this.setState({
                    sub_categories: categories,
                    categories_loading: false
                })
            })
            .catch(err => {
                this.setState({
                    categories_loading: false
                })
            })

        // Fetch Top Products by Catalog Id
        axios
            .get(Apis.products_by_catalog_id,  {
                params: {
                    catalogId: id
                }
            })
            .then(res => {
                if(res.data) {
                    res.data.forEach(product => {
                        products.push({
                            ID: product.ProductId,
                            img:  product.MainImage,
                            // img: product.ImageURL ? product.ImageURL : "https://www.apexrfc.com/web/sites/default/files/2020-03/product_image_not_available.png",
                            post_title: product.ProductName,
                            price: product.RegularPrice ? product.RegularPrice.toFixed(2) : "100"
                        })
                    })

                    this.setState({
                        products: products,
                        top_products_loading: false
                    })
                }
            })
            .catch(err => {
                this.setState({
                    top_products_loading: false
                })
            })
    }
    componentWillUnmount() {
        this.setState({
            categories_loading: false,
            sub_categories: []
        })
    }
    render() {
        const { navigation, route } = this.props
        const { heading, id } = route.params
        const {
            categories_loading,
            sub_categories,
            top_products_loading,
            products
        } = this.state
        return (
            <Container>
                <StatusBar backgroundColor="white" barStyle="dark-content" />
                <SafeAreaView />
                <CategoryHeader
                    navigation={navigation}
                    heading={heading}
                />

                <Content>
                    <ProductHeadingSeparator
                        title="Top Products"
                        buttonTitle=""
                        buttonAction={() => { }}
                    />
                    {top_products_loading ?
                        <ProductLoader
                            loading={top_products_loading}
                        />
                        :
                        <ProductScroll
                            products={products}
                        />
                    }

                    <View style={styles.container}>

                        <Text
                            style={{
                                ...styles.nameText,
                                fontSize: 18
                            }}
                        >
                            {heading}
                        </Text>


                        <View style={styles.lineBreak} />


                        {categories_loading ?
                            <ProductLoader
                                loading={categories_loading}
                            />
                            :
                            sub_categories.map(category => (
                                <MenuButtonTemplate
                                    key={Math.random()}
                                    text={category.text}
                                    indicatorNumber={""}
                                    onPress={() => navigation.navigate("CategoryProducts", {
                                        heading: category.text,
                                        id: category.id,
                                        catalogId: id,
                                        catalogName: heading
                                    })}
                                />
                            ))
                        }

                        {/* <MenuButtonTemplate
                            text="Tablets & E Readers"
                            indicatorNumber={""}
                            onPress={() => navigation.navigate("CategoryProducts", {
                                heading: "Tablets & E Readers"
                            })}
                        />

                        <MenuButtonTemplate
                            text="Mobile Accessories"
                            indicatorNumber={""}
                            onPress={() => navigation.navigate("CategoryProducts", {
                                heading: "Mobile Accessories"
                            })}
                        />

                        <MenuButtonTemplate
                            text="Wearables"
                            indicatorNumber={""}
                            onPress={() => navigation.navigate("CategoryProducts", {
                                heading: "Wearables"
                            })}
                        />

                        <MenuButtonTemplate
                            text="Cases & Covers"
                            indicatorNumber={""}
                            onPress={() => navigation.navigate("CategoryProducts", {
                                heading: "Cases & Covers"
                            })}
                        /> */}
                    </View>

                </Content>
            </Container>
        )
    }
}

export default SubCategories