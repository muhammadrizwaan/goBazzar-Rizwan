import React from "react"
import { SafeAreaView } from "react-native"
import { Container, Content } from "native-base"

import HistoryForm from "../../Components/ProductComponents/HistoryForm"

import Header from "../../Components/CategoryProductComponents/CategoryHeader"


export default ({ navigation }) => (
    <Container>
        <SafeAreaView />
        <Header 
            heading="History"
            navigation={navigation}
        />
        <Content contentContainerStyle={{paddingHorizontal: 25}}>
            <HistoryForm 
                navigation={navigation}
            />
        </Content>
    </Container>
)