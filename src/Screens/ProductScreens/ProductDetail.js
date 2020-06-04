import React from "react"
import { View, Text, SafeAreaView } from "react-native"

import { Container, Content } from "native-base"

import { addProductToCompare } from "../../actions/compareActions"

import product_tabs from "../../Samples/product-tabs"
// import tabs_data from "../../Samples/tabs-data"
import DescriptionCard from "../../Components/ProductDetailComponents/DescriptionCard"
import ProductDetailReviews from "../../Components/ProductDetailComponents/ProductDetailReviews"

import DetailTabs from "../../Components/ProductDetailComponents/DetailTabs"
import ProductTab from "../../Components/ProductDetailComponents/ProductTab"

import NearByLocations from "../../Components/ProductDetailComponents/NearByLocations"
import PriceInsights from "../../Components/ProductDetailComponents/PriceInsights"
import ProductHeadingSeparator from '../../Components/HomeComponents/ProductsHeadingSpearator'
import ProductScroll from '../../Components/HomeComponents/ProductsScroll'
import ProductLoader from "../../Components/HomeComponents/ProductLoader"
import CompareListButton from "../../Components/ProductDetailComponents/CompareListButton"

// import FullImageView from '../GeneralComponents/FullImageView'
import FullImageView from "../../Components/GeneralComponents/FullImageView"

import { removeProductFromUserWishlist, addProductToUserWishlist } from "../../actions/getWishlist"
import {
    addAProductToWishlist, removeAProductFromWishlist
} from "../../actions/categoryProductAction"

import axios from "axios"

import Spinner from 'react-native-loading-spinner-overlay';

import Apis from "../../Api/Apis"
import { connect } from "react-redux"
import { addLastViewedProduct } from "../../actions/homeProductActions"
import { showMessage } from "react-native-flash-message"

class ProductDetail extends React.PureComponent {
    state = {
        activeTabKey: product_tabs[0].key,
        loading: false,
        product_detail: {
            name: "",
            isFavorite: false,
            averageRating: "",
            images: [],
            stores: [],
            totalRatingCount: "",
            offerPrice: 0,
            regularPrice: 0,
            description: "",
            additionalValues: []
        },
        product_id: "",
        related_products: [],
        isVisibleImage: false,
        activeIndex: 0,
        reviews: []
    }
    componentDidMount() {
        const { route, userId } = this.props
        const product_id = route.params.id
        this.setState({ loading: true });

        const related_products = [];
        if (product_id) {
            axios
                .get(Apis.get_product_details_by_product_id, {
                    params: {
                        productid: product_id,
                        userId: 0
                    }
                })
                .then(res => {
                    // console.warn(res)
                    if (res.data) {
                        // console.warn("res",res.data.Product)
                        const product = {
                            id: product_id,
                            name: res.data.Product.ProductName,
                            description: res.data.Product.ProductDesc,
                            isFavorite: false,
                            averageRating: res.data.ProductRatingValue,
                            images: [res.data.Product.MainImage],
                            URL: res.data.Product.URL,
                            stores: [],
                            totalRatingCount: res.data.Product.RatingValue,
                            isAddedToWishlist: res.data.Product.IsWishlist !== 0 ? true : false,
                            regularPrice: res.data.Product.RegularPrice ? res.data.Product.RegularPrice.toFixed(2) : 1,
                            offerPrice: res.data.Product.OfferPrice ? res.data.Product.OfferPrice.toFixed(2) : 1,
                            categoryCode: res.data.Product.CategoryCode,
                            categoryName: res.data.Product.CategoryName,
                            additionalValues: JSON.parse(res.data.Product.AdditionalProperty),
                            store_code: res.data.Product.VendorCode,
                            store_img: res.data.Product.ImagePath,
                            store_name: res.data.Product.VendorName,
                            productRatings: res.data.ProductRatings
                        }
                        let otherImages = [];

                        res.data.ProductImages.forEach(image => {
                            otherImages.push(image.MoreURLs)
                        })


                        product.images = product.images.concat(otherImages)
                        // console.warn(product.images);

                        this.props.addLastViewedProduct({
                            ID: product_id,
                            post_title: product.name,
                            price: res.data.Product.RegularPrice ? res.data.Product.RegularPrice.toFixed(2) : 0,
                            img: res.data.Product.MainImage
                        })


                        res.data.GetRelatedProductByProductName.forEach(item => {
                            related_products.push({
                                ID: item.ProductCode,
                                img: item.MainImage,
                                post_title: item.ProductName,
                                price: item.RegularPrice,
                                store_name: item.VendorName,
                                store_img: item.ImagePath,
                                URL: item.URL,
                                store_code: item.VendorCode,
                                regularPrice: item.RegularPrice ? item.RegularPrice.toFixed(2) : 0,
                                offerPrice: item.OfferPrice ? item.RegularPrice.toFixed(2) : 0
                            })
                        })

                        this.setState({
                            product_detail: product,
                            related_products: related_products,
                            product_id: product_id
                        })


                    }
                    this.setState({ loading: false })
                })
                .catch(err => {
                    console.warn(err)
                    this.setState({ loading: false })
                })
        }


        if (product_id) {
            this.setState({ loading: true })
            const reviews = []
            axios
                .get(Apis.get_product_users, {
                    params: {
                        productCode: product_id
                    }
                })
                .then(res => {
                    if (res.data) {
                        res.data.forEach(review => {
                            reviews.push({
                                reviewId: review.ProductReviewId,
                                productId: review.ProductCode,
                                rating: review.Rating,
                                email: review.Email,
                                name: review.Name,
                                description: review.Description,
                                createdBy: review.CreatedBy
                            })
                        })

                        this.setState({
                            reviews: reviews
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
        }
    }
    // componentWillReceiveProps(newProps) {
    //     const { route, userId } = newProps;
    //     const product_id = route.params.id
    //     if (product_id !== this.state.product_id) {


    //         this.setState({ loading: true });


    //         const related_products = [];
    //         if (product_id) {
    //             axios
    //                 .get(Apis.get_product_details_by_product_id, {
    //                     params: {
    //                         productid: product_id,
    //                         userId: 0
    //                     }
    //                 })
    //                 .then(res => {
    //                     // console.warn(res)
    //                     if (res.data) {
    //                         // console.warn("res",res.data.Product)
    //                         const product = {
    //                             id: product_id,
    //                             name: res.data.Product.ProductName,
    //                             description: res.data.Product.ProductDesc,
    //                             isFavorite: false,
    //                             averageRating: res.data.ProductRatingValue,
    //                             images: [res.data.Product.MainImage],
    //                             URL: res.data.Product.URL,
    //                             stores: [],
    //                             totalRatingCount: res.data.Product.RatingValue,
    //                             isAddedToWishlist: res.data.Product.IsWishlist !== 0 ? true : false,
    //                             regularPrice: res.data.Product.RegularPrice ? res.data.Product.RegularPrice : "N/A",
    //                             offerPrice: res.data.Product.OfferPrice ? res.data.Product.OfferPrice : "N/A",
    //                             categoryCode: res.data.Product.CategoryCode,
    //                             categoryName: res.data.Product.CategoryName,
    //                             additionalValues: JSON.parse(res.data.Product.AdditionalProperty)
    //                         }

    //                         this.props.addLastViewedProduct({
    //                             ID: product_id,
    //                             post_title: product.name,
    //                             price: res.data.Product.OfferPrice,
    //                             img: res.data.Product.MainImage
    //                         })


    //                         res.data.GetRelatedProductByProductName.forEach(item => {
    //                             related_products.push({
    //                                 ID: item.ProductCode,
    //                                 img: item.MainImage,
    //                                 post_title: item.ProductName,
    //                                 price: item.RegularPrice,
    //                                 store_name: item.VendorName,
    //                                 store_img: item.ImagePath,
    //                                 URL: item.URL,
    //                                 store_code: item.VendorCode,
    //                                 regularPrice: item.RegularPrice ? item.RegularPrice.toFixed(2) : 0,
    //                                 offerPrice: item.OfferPrice ? item.RegularPrice.toFixed(2) : 0
    //                             })
    //                         })

    //                         this.setState({
    //                             product_detail: product,
    //                             related_products: related_products,
    //                             product_id: product_id
    //                         })


    //                     }
    //                     this.setState({ loading: false })
    //                 })
    //                 .catch(err => {
    //                     console.warn(err)
    //                     this.setState({ loading: false })
    //                 })
    //         }
    //     }

    //     if (product_id) {
    //         this.setState({ loading: true })
    //         const reviews = []
    //         axios
    //             .get(Apis.get_product_users, {
    //                 params: {
    //                     productCode: product_id
    //                 }
    //             })
    //             .then(res => {
    //                 if (res.data) {
    //                     res.data.forEach(review => {
    //                         reviews.push({
    //                             reviewId: review.ProductReviewId,
    //                             productId: review.ProductCode,
    //                             rating: review.Rating,
    //                             email: review.Email,
    //                             name: review.Name,
    //                             description: review.Description,
    //                             createdBy: review.CreatedBy
    //                         })
    //                     })

    //                     this.setState({
    //                         reviews: reviews
    //                     })
    //                 }

    //                 this.setState({
    //                     loading: false
    //                 })
    //             })
    //             .catch(err => {
    //                 this.setState({
    //                     loading: false
    //                 })
    //             })
    //     }
    // }
    changeTab = (key) => {
        this.setState({
            activeTabKey: key
        })
    }

    handleAddProductToCompare = () => {
        this.props.addProductToCompare(
            this.state.product_detail.categoryCode,
            this.state.product_detail.categoryName,
            {
                ID: this.state.product_detail.id,
                name: this.state.product_detail.name,
                regularPrice: this.state.product_detail.regularPrice,
                offerPrice: this.state.product_detail.offerPrice,
                img: this.state.product_detail.images[0],
                categoryCode: this.state.product_detail.categoryCode,
                categoryName: this.state.product_detail.categoryName
            }
        )
    }

    handleAddProductToWishlist = (productId) => {
        const { userId } = this.props;
        const { product_detail } = this.state
        if (userId.length > 0) {
            axios
                .post(Apis.add_product_to_wishlist, null, {
                    params: {
                        productId: product_detail.id,
                        userid: userId
                    }
                })
                .then(res => {
                    if (res.data) {
                        if (res.data.Code === 0) {
                            // Dispatch remove product from wishlist
                            this.setState({
                                ...this.state,
                                product_detail: {
                                    ...this.state.product_detail,
                                    isAddedToWishlist: false
                                }
                            })
                            this.props.removeProductFromUserWishlist(product_detail.id)
                        } else if (res.data.Code === 1) {
                            // Dispatch add product from wishlist
                            this.setState({
                                ...this.state,
                                product_detail: {
                                    ...this.state.product_detail,
                                    isAddedToWishlist: true
                                }
                            })
                            this.props.addProductToUserWishlist({
                                wishlistId: Math.random(),
                                userId: userId,
                                productName: product_detail.name,
                                productId: product_detail.id,
                                img: product_detail.images[0],
                                price: product_detail.regularPrice,
                                categoryId: product_detail.categoryCode
                            })
                        }
                    }
                })
                .catch(err => {
                    alert(err);
                })

        } else {
            showMessage({
                message: "You need to be login for adding product in wishlist",
                position: 'bottom',
                // icon: 'auto',
                autoHide: true,
                hideOnPress: true,
                floating: true,
                style: {
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: "#E8E8E8",
                    width: "90%",
                    borderRadius: 30,
                    color: "black",
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 7,
                },
                color: "#000000",
            });
        }
    }

    onOpen = (index) => {
        console.warn(index)
        this.setState({ isVisibleImage: true, activeIndex: index })
    }
    onClose = () => {
        this.setState({ isVisibleImage: false })
    }
    render() {
        const { activeTabKey, product_detail, loading, reviews } = this.state;

        // console.warn(reviews);
        // console.warn("length",product_detail.name.length)
        return (
            <Container>
                <Spinner
                    visible={this.state.loading}
                    textContent={""}
                // textStyle={styles.spinnerTextStyle}
                />
                <SafeAreaView />


                {/* <Content contentContainerStyle={{ paddingBottom: 10, paddingTop: 65 }}> */}
                {/* {!loading &&
                        this.state.product_detail.name.length > 0 &&
                        <ProductTab
                            navigation={this.props.navigation}
                            // product={tabs_data.product} 
                            product={product_detail}
                            handleAddProductToCompare={this.handleAddProductToCompare}
                            handleAddProductToWishlist={this.handleAddProductToWishlist}
                            stores={this.state.related_products}
                            onOpen={this.onOpen}
                        />} */}


                {/* <View >
                        <ProductHeadingSeparator
                            title="Related Products:"
                            buttonTitle=""
                            buttonAction={() => { }}
                        />
                        {this.state.loading ?
                            <ProductLoader
                                loading={this.state.loading}
                            />
                            :
                            <ProductScroll
                                products={this.state.related_products}
                            />
                        }
                    </View> */}




                {/* <Content> */}

                <DetailTabs
                    tabs={product_tabs}
                    activeTabKey={this.state.activeTabKey}
                    changeTab={this.changeTab}
                    navigation={this.props.navigation}
                />

                {
                    activeTabKey === "product" &&
                    !loading &&
                    // this.state.product_detail.name.length > 0 &&
                    <ProductTab
                        navigation={this.props.navigation}
                        // product={tabs_data.product} 
                        product={product_detail}
                        handleAddProductToCompare={this.handleAddProductToCompare}
                        handleAddProductToWishlist={this.handleAddProductToWishlist}
                        stores={this.state.related_products}
                        onOpen={this.onOpen}
                    />
                }
                {
                    activeTabKey === "specifications" &&
                    !loading &&
                    // this.state.product_detail.description &&
                    // <NearByLocations />
                    <DescriptionCard
                        description={product_detail.description}
                        additionalValues={product_detail.additionalValues}
                    />
                }
                {
                    activeTabKey === "reviews" &&
                    !loading &&
                    <ProductDetailReviews
                        reviews={reviews}
                        productRatings={product_detail.productRatings}
                        averageRating={product_detail.totalRatingCount}
                    />
                }
                {/* </Content> */}
                {/* </Content> */}
                <CompareListButton
                    navigation={this.props.navigation}
                />

                <FullImageView
                    isVisible={this.state.isVisibleImage}
                    onClose={this.onClose}
                    images={product_detail.images.map(image => ({ url: image }))}
                    index={this.state.activeIndex}
                />
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    userId: state.auth.user.userId
})

const mapDispatchToProps = (dispatch) => ({
    addLastViewedProduct: (new_product) => dispatch(addLastViewedProduct(new_product)),
    addProductToCompare: (categoryId, categoryName, product) => dispatch(addProductToCompare(categoryId, categoryName, product)),
    removeAProductFromWishlist: (id) => dispatch(removeAProductFromWishlist(id)),
    removeProductFromUserWishlist: (id) => dispatch(removeProductFromUserWishlist(id)),
    addAProductToWishlist: (id) => dispatch(addAProductToWishlist(id)),
    addProductToUserWishlist: (product) => dispatch(addProductToUserWishlist(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)