import React from "react"
import { SafeAreaView } from "react-native"
import { Container, Content } from "native-base"

import FeedbackForm from "../../Components/MoreComponents/FeedbackForm"

import Header from "../../Components/CategoryProductComponents/CategoryHeader"


export default ({ navigation }) => (
    <Container>
        <SafeAreaView />
        <Header 
            heading="Feedback"
            navigation={navigation}
        />
        <Content contentContainerStyle={{paddingHorizontal: 25}}>
            <FeedbackForm 
                navigation={navigation}
            />
        </Content>
    </Container>
)