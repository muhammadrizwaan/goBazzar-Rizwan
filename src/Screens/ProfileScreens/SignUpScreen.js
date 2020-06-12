import React from "react"
import { SafeAreaView } from "react-native"
import { Container, Content, Text } from "native-base"

import SignUpHeader from "../../Components/CategoryProductComponents/CategoryHeader"
import SignUpForm from "../../Components/ProfileComponents/SignUpForm"

import styles from "../../Styles/ProfileScreenStyles/NotLoggedInStyles"

export default ({ navigation }) => (
    <Container >
        <SafeAreaView />
        {/* <SignUpHeader
            navigation={navigation}
            heading={"Sign Up"}
        />
        <Content contentContainerStyle={{paddingHorizontal: 25}}> */}
        <Content>
            <SignUpForm 
                navigation={navigation}
            />
        </Content>
    </Container>
)