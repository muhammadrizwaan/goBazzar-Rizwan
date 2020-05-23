import React from "react"
import { SafeAreaView } from "react-native"
import { Container, Content } from "native-base"

import EditProfileForm from "../../Components/ProfileComponents/EditProfileForm"

import Header from "../../Components/CategoryProductComponents/CategoryHeader"


export default ({ navigation }) => (
    <Container>
        <SafeAreaView />
        <Header 
            heading="Edit Profile"
            navigation={navigation}
        />
        <Content contentContainerStyle={{paddingHorizontal: 25}}>
            <EditProfileForm 
                user={{email: "john@gmail.com", password: "1223123"}}
            />
        </Content>
    </Container>
)