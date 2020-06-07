import React from "react"
import { SafeAreaView, View } from "react-native"
import { Container, Content, Text } from "native-base"
import ReviewProductHeader from "../../Components/CategoryProductComponents/CategoryHeader"
import ReviewLoader from "../../Components/HomeComponents/ProductLoader"
import ReviewProduct from "../../Components/GeneralComponents/ReviewProductTemplate"

import { connect } from "react-redux"

import axios from "axios"
import Apis from "../../Api/Apis"

class Reviews extends React.Component {
    state = {
        loading: false,
        reviews: []
    }
    componentDidMount() {
        const { userId } = this.props
        this.setState({
            loading: true
        })
        const reviews = []
        axios
            .get(Apis.get_user_review_list, {
                params: {
                    userId: userId
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
    render() {
        const { navigation } = this.props;
        const { loading, reviews } = this.state;

        console.warn(reviews)
        return (
            <Container>
                <SafeAreaView />
                <ReviewProductHeader
                    navigation={navigation}
                    heading="My Reviews"
                />
                <Content contentContainerStyle={{ paddingTop: 10 }}>

                    {
                        loading ?
                            <ReviewLoader
                                loading={loading}
                            />
                            :
                            reviews.length < 1 ?
                                <View>
                                    <Text 
                                    style={{
                                        alignSelf:'center',
                                        fontSize: 15,
                                        color: "#515C6F",
                                        // fontWeight: 'bold',
                                        fontFamily: "LexendDeca-Regular"
                                    }}
                                    >No Reviews</Text>
                                </View>
                                :
                                reviews.map((item) => (
                                    <ReviewProduct
                                        key={item.reviewId}
                                        review={item}
                                        navigation={navigation}
                                    />
                                ))
                    }
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    userId: state.auth.user.userId
})

export default connect(mapStateToProps)(Reviews)