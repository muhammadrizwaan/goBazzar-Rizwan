import React from "react"
import { SafeAreaView, View } from "react-native"
import { Container, Content } from "native-base"
import compare_sample from "../../Samples/comapre_sample"

import CompareHeader from "../../Components/CategoryProductComponents/CategoryHeader"
import ProductCompareHeader from "../../Components/CompareProductComponents/ProductCompareHeader"
import ProductCompareDetails from "../../Components/CompareProductComponents/ProductCompareDetails"
import Apis from "../../Api/Apis"
import axios from "axios"


import CompareLoader from "../../Components/HomeComponents/ProductLoader"

class CompareProductsScreen extends React.Component {
    state = {
        loading: false,
        compare_products: {
            Products: [],
            AdditionalSpecifications: []
        }
    }
    componentDidMount() {
        this.setState({
            loading: true
        })
        const { route } = this.props;

        const ids = route.params.ids;

        axios
            .get(Apis.get_compare_products, {
                params: {
                    products: ids
                }
            })
            .then(res => {
                if (res.data) {
                    console.log('compare data',res.data)
                    this.setState({
                        loading: false,
                        compare_products: res.data
                    })
                }
            })
            .catch(err => {
                this.setState({
                    loading: false
                })
            })

    }
    render() {
        const { navigation } = this.props;
        const { compare_products, loading } = this.state
        return (
            <Container>
                <SafeAreaView />
                <CompareHeader
                    navigation={navigation}
                    heading="Compare"
                />
                <CompareLoader
                    loading={loading}
                />
                <Content contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Content horizontal={true}>
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "row",
                            }}
                        >
                            {
                                loading ?
                                    <View />
                                    :
                                    compare_products.Products.map((item, index) => (
                                        <View
                                            key={item.ProductCode}
                                            style={{
                                                width: 150,
                                                // marginHorizontal:5
                                            }}
                                        >
                                            <ProductCompareHeader
                                                item={item}
                                            />
                                            <ProductCompareDetails
                                                item={item}
                                                index={index}
                                                additionalSpecifications={compare_products.AdditionalSpecifications}
                                            />
                                        </View>
                                    ))
                            }
                        </View>
                    </Content>
                </Content>
            </Container>
        )
    }
}


export default CompareProductsScreen