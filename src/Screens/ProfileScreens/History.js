import React from "react"
import { SafeAreaView, Text } from "react-native"
import { Container, Content } from "native-base"
import HistoryHeader from "../../Components/CategoryProductComponents/CategoryHeader"

import HistoryLoader from "../../Components/HomeComponents/ProductLoader"
import HistotyProductCard from "../../Components/HistoryComponents/HistoryProductCard"

import axios from "axios";
import Apis from "../../Api/Apis"

import { connect } from "react-redux"

class History extends React.Component {
    state = {
        loading: false,
        products: []
    }
    componentDidMount() {
        const { userId } = this.props
        this.setState({
            loading: true
        })

        const products = []

        axios
            .get(Apis.get_user_activity_products, {
                params: {
                    id: userId
                }
            })
            .then(res => {
                if(res) {
                    // console.warn(res)
                    res.data.forEach(item => {
                        products.push({
                            ID: item.ProductCode,
                            productName: item.ProductName,
                            productDesc: item.ProductDescription,
                            price: item.RegularPrice,
                            img: item.ImagePath
                        })
                    })


                    this.setState({
                        products: products,
                        loading: false
                    })
                }
            })
            .catch(err => {
                // console.log(err)
                this.setState({
                    loading: falase
                })
            })
    }
    render() {
        const { navigation } = this.props;
        const { products, loading } = this.state;

        // console.warn(products)
        return (
            <Container>
                <SafeAreaView />
                <HistoryHeader
                    navigation={navigation}
                    heading="My History"
                />
                <Content contentContainerStyle={{ paddingTop: 10 }}>
                    {
                        loading ?
                        <HistoryLoader 
                            loading={loading}
                        />
                        :
                        products.length > 0 ?
                        products.map((product) => (
                            <HistotyProductCard
                                key={product.ID}
                                product={product}
                                navigation={navigation}
                            />
                        ))
                        :
                        <Text style={{
                            fontSize: 15,
                            alignSelf:'center',
                            // color: "#515C6F",
                            color: "#999999",
                            fontFamily: "LexendDeca-Regular"
                        }}>No Products</Text>
                    }
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    userId: state.auth.user.userId
})

export default connect(mapStateToProps)(History)