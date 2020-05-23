import React from "react"
import { SafeAreaView } from "react-native"
import { Container, Content, Text } from "native-base"

import StoreHeader from "../../Components/CategoryProductComponents/CategoryHeader"

import StoreCard from "../../Components/MoreComponents/StoreCard"

import axios from "axios"
import Apis from "../../Api/Apis"

import StoreLoader from "../../Components/HomeComponents/ProductLoader"

export default class extends React.Component {
    state = {
        stores: [],
        loading: false
    }
    componentDidMount() {
        this.setState({
            loading: true
        })
        const stores = []
        axios
            .get(Apis.get_store_list)
            .then(res => {
                if (res.data) {
                    console.log('store res',res.data)
                    res.data.StoreModel.forEach(item => {
                        stores.push({
                            storeId: item.StoreId,
                            storeName: item.StoreName,
                            img: item.ImageURL
                        })
                    })

                    this.setState({
                        stores: stores
                    })
                }
                this.setState({
                    loading: false
                })
            })
            .catch(err => {
                alert(err)
                this.setState({
                    loading: false
                })
            })

    }
    componentWillUnmount() {
        this.setState({
            stores: [],
            loading: false
        })
    }
    render() {
        const { navigation } = this.props;
        const { loading, stores } = this.state
        return (
            <Container>
                <SafeAreaView />
                <StoreHeader
                    navigation={navigation}
                    heading="Stores"
                />

                <Content contentContainerStyle={{ paddingTop: 10 }}>
                    {
                        loading ?
                            <StoreLoader
                                loading={loading}
                            />
                            :
                            stores.length > 0 ?
                            stores.map(store => (
                                <StoreCard
                                    key={store.storeId}
                                    store={store}
                                    navigation={navigation}
                                />
                            ))
                            :
                            <Text>No Stores Found</Text>
                    }
                </Content>
            </Container>
        )
    }
}