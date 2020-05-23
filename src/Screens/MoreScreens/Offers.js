import React from "react"
import { SafeAreaView } from "react-native"
import { Container, Content, } from "native-base"

import OfferHeader from "../../Components/CategoryProductComponents/CategoryHeader"

import OfferCard from "../../Components/MoreComponents/OfferCard"

export default class extends React.Component {
    render() {
        const { navigation } = this.props 
        return (
            <Container>
                <SafeAreaView />
                <OfferHeader
                    navigation={navigation}
                    heading="Offers"
                />
                <Content contentContainerStyle={{paddingTop: 10}}>
                    {
                        [0, 1, 2, 3, 4, 5].map((val) => (
                            <OfferCard 
                                key={val}
                                navigation={navigation}
                            />
                        ))
                    }
                </Content>
            </Container>
        )
    }
}