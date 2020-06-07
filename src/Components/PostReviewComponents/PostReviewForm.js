import React, { Component } from "react"
import { View, Text, TextInput, SafeAreaView } from "react-native"
import { Button, Spinner, Container, Content } from "native-base"
import styles from '../../Styles/ProfileScreenStyles/NotLoggedInStyles'
import StarRating from 'react-native-star-rating';
import validatePostReview from "../../Validation/validatePostReview"
import axios from "axios";
import { showMessage, hideMessage } from "react-native-flash-message";
import stylesbtn from '../../Styles/ProfileScreenStyles/NotLoggedInStyles'

import WishlistHeader from "../../Components/CategoryProductComponents/CategoryHeader"
// import Spinner from "react-native-loading-spinner-overlay"
import styles1 from "../../Styles/ProfileScreenStyles/LoggedInStyles"
import WishListProduct from "../../Components/GeneralComponents/ProductTemplate"
import Apis from "../../Api/Apis"
import WishlistLoader from "../../Components/HomeComponents/ProductLoader";
import { connect } from "react-redux"



class PostReviewForm extends React.Component {
    state = {
        email: "",
        name: "",
        rating: 0,
        review: "",
        loading: false,
        errors: {},
        isPosted: false,
    }
    onChangeText = (key, val) => {
        this.setState({
            [key]: val
        })
    }
    onStarRatingPress = (rating) => {
        this.setState({
            rating
        })
    }

    handlePostReview = () => {
        const { product_id, navigation, userId } = this.props
        const { isValid, errors } = validatePostReview(
            this.props.email.trim(),
            // this.state.email.trim(),
            this.state.name.trim(),
            this.state.rating,
            this.state.review.trim()
        )

        if (!isValid) {
            this.setState({
                errors: errors
            })
        } else {
            this.setState({
                errors: {},
                loading: true
            })

            axios
                .post("http://13.68.110.5:8090/api/Mobile/AddUserReview", {
                    ProductCode: product_id,
                    Email: this.props.email.trim(),
                    Name: this.state.name.trim(),
                    Rating: this.state.rating,
                    Description: this.state.review.trim(),
                    CreatedBy: userId.length < 1 ? "0" : userId
                })
                .then((res) => {
                    this.setState({
                        email: "",
                        name: "",
                        rating: 0,
                        review: "",
                        loading: false,
                        errors: {},
                        isPosted: false
                    })

                    showMessage({
                        message: "Review Posted",
                        position: 'bottom',
                        // icon: 'auto',
                        autoHide: true,
                        hideOnPress: true,
                        floating: true,
                        duration:15000,
                        titleStyle:{
                            fontSize:10
                        },
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
                })
                .catch(err => {
                    alert(err);
                    this.setState({
                        loading: false
                    })
                    showMessage({
                        message: "Error Occured",
                        position: 'bottom',
                        // icon: 'auto',
                        autoHide: true,
                        hideOnPress: true,
                        floating: true,
                        duration:15000,
                        titleStyle:{
                            fontSize:10
                        },
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
                    // showMessage({
                    //     message: "Error Occured",
                    //     type: "danger",
                    //     position: 'bottom',
                    //     // icon: 'auto',
                    //     autoHide: true,
                    //     hideOnPress: true,
                    //     floating: true,
                    // });
                })
        }
    }
    render() {
        const { wishlist_loading, wishlist } = this.props
        const { errors, loading, isPosted } = this.state
        const { navigation, userId,email } = this.props
        return (
            <Container style={{ padding: 25 }}>
                <SafeAreaView />
                <Content contentContainerStyle={{ paddingTop: 10 }}>
                    <WishlistLoader
                        loading={wishlist_loading}
                    />
                    {
                        userId.length > 0 ?
                            <View style={{ marginVertical: 25, marginHorizontal: 25 }}>

                                <TextInput
                                    placeholder="Name"
                                    placeholderTextColor="#515C6F"
                                    style={styles.inputBox}
                                    value={this.state.name}
                                    autoFocus={false}
                                    autoCapitalize={"none"}
                                    onChangeText={val => this.onChangeText("name", val)}
                                />
                                {errors.name &&
                                    <Text
                                        style={styles.errorStyle}
                                    >
                                        {errors.name}
                                    </Text>
                                }

                                <TextInput
                                    placeholder="Email"
                                    placeholderTextColor="#515C6F"
                                    style={styles.inputBox}
                                    value={email}
                                    editable={false}
                                    autoFocus={false}
                                    autoCapitalize={"none"}
                                    onChangeText={val => this.onChangeText("email", val)}
                                />
                                {errors.email &&
                                    <Text
                                        style={styles.errorStyle}
                                    >
                                        {errors.email}
                                    </Text>
                                }

                                <View style={{ ...styles.inputBox, borderBottomWidth: 0 }}>
                                    <Text
                                        style={{
                                            fontSize: 12,
                                            color: "#515C6F"
                                        }}
                                    >
                                        Rating
                                        </Text>

                                </View>
                                <View style={{ width: 200, ...styles.inputBox, borderBottomWidth: 0 }}>
                                    <StarRating
                                        disabled={false}
                                        maxStars={5}
                                        rating={this.state.rating}
                                        starSize={20}
                                        fullStarColor="#FFDB26"
                                        halfStarColor="#FFDB26"
                                        selectedStar={(rating) => this.onStarRatingPress(rating)}
                                    />
                                </View>

                                <TextInput
                                    placeholder="Review"
                                    placeholderTextColor="#515C6F"
                                    style={styles.inputBox}
                                    value={this.state.review}
                                    autoFocus={false}
                                    autoCapitalize={"none"}
                                    onChangeText={val => this.onChangeText("review", val)}
                                />
                                {errors.review &&
                                    <Text
                                        style={styles.errorStyle}
                                    >
                                        {errors.review}
                                    </Text>
                                }



                                <Button
                                    transparent
                                    full
                                    style={{
                                        ...styles.signInButton,
                                        backgroundColor: "#8EA625"
                                    }}
                                    onPress={this.handlePostReview}
                                >
                                    {
                                        loading ?
                                            <Spinner color="white" size={20} />
                                            :
                                            <Text style={[styles.signInButtonText,{alignSelf:'center'}]}>
                                                {isPosted ? "Review Posted" : "Post"}
                                            </Text>
                                    }
                                </Button>
                               
                            </View>
                            :
                            <View style={{ marginTop: 20 }}>
                                <Text
                                   style={{
                                    fontSize: 15,
                                    // color: "#515C6F",
                                    color: "#999999",
                                    fontFamily: "LexendDeca-Regular"
                                }}
                                >
                                    Login or Sign Up to Post a Review
                            </Text>
                                <Button
                                    transparent
                                    full
                                    style={stylesbtn.signInButton}
                                    onPress={() => navigation.navigate('My Profile')}
                                >
                                    <Text style={stylesbtn.signInButtonText}>Login</Text>
                                </Button>
                            </View>
                    }
                </Content>
            </Container>
        )
    }
}
const mapStateToProps = state => ({
    userId: state.auth.user.userId,
    email:state.auth.user.email,
    wishlist_loading: state.userWishlist.wishlist_loading,
    wishlist: state.userWishlist.wishlist
})

export default connect(mapStateToProps)(PostReviewForm)