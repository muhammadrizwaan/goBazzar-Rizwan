import React from "react"
import { SafeAreaView } from "react-native"
import { Container, Content } from "native-base"

import FAQsForm from "../../Components/MoreComponents/FAQsForm"

import Header from "../../Components/CategoryProductComponents/CategoryHeader"


export default ({ navigation }) => (
    <Container>
        <SafeAreaView />
        <Header 
            heading="FAQ"
            navigation={navigation}
        />
        <Content contentContainerStyle={{paddingHorizontal: 25}}>
            <FAQsForm 
                navigation={navigation}
            />
        </Content>
    </Container>
)