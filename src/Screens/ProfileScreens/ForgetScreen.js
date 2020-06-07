import React from "react"
import { SafeAreaView } from "react-native"
import { Container, Content } from "native-base"

import ForgetPasswordForm from "../../Components/ProfileComponents/ForgetPasswordForm"

import Header from "../../Components/CategoryProductComponents/CategoryHeader"


export default ({ navigation }) => (
    <Container>
        <SafeAreaView />
        <Header 
            heading="Forget Password"
            navigation={navigation}
        />
        <Content contentContainerStyle={{paddingHorizontal: 25}}>
            <ForgetPasswordForm 
                navigation={navigation}
            />
        </Content>
    </Container>
)