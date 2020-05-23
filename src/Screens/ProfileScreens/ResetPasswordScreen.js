import React from "react"
import { SafeAreaView } from "react-native"
import { Container, Content } from "native-base"

import ResetPassForm from "../../Components/ProfileComponents/ResetPassForm"

import Header from "../../Components/CategoryProductComponents/CategoryHeader"


export default ({ navigation }) => (
    <Container>
        <SafeAreaView />
        <Header 
            heading="Reset Password"
            navigation={navigation}
        />
        <Content contentContainerStyle={{paddingHorizontal: 25}}>
            <ResetPassForm 
                navigation={navigation}
            />
        </Content>
    </Container>
)