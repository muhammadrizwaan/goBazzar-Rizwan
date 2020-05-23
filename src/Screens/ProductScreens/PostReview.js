import React, { Component } from "react";
import { SafeAreaView, TouchableOpacity } from "react-native"
import { 
    Container, Content, Body,
    Item, Left, Icon, Button, Text, Right
} from "native-base"

import PostReviewForm from "../../Components/PostReviewComponents/PostReviewForm"
import { connect } from "react-redux"

class PostReview extends Component {
    state = {
        product_id: ""
    }
    componentDidMount() {
        const { route } = this.props;
        const product_id = route.params.id 

        // console.warn(product_id)
        this.setState({
            product_id: product_id
        })
    }
    render() {
        const { product_id } = this.state;
        const { userId } = this.props
        return (
            <Container>
                <SafeAreaView />
                <Item
                    style={{
                        paddingLeft: 25
                    }}
                >
                        <TouchableOpacity transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="close" size={50} style={{ color: "#727C8E", fontSize: 35 }} />
                        </TouchableOpacity>
                        <Text
                            style={{
                                fontSize: 20,
                                fontFamily: "Poppins-Bold",
                                fontWeight: "bold",
                                color: "#8EA625",
                                marginLeft: 20
                            }}
                        >
                            Review Product
                        </Text>
                    <Right />
                </Item>
                <Content>
                    <PostReviewForm 
                        navigation={this.props.navigation}
                        product_id={product_id}
                        userId={userId}
                    />
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    userId: state.auth.user.userId
})

export default connect(mapStateToProps)(PostReview);