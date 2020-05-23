import React from "react"
import { SafeAreaView } from "react-native"
import { Container, Content } from "native-base"
import AlertHeader from "../../Components/CategoryProductComponents/CategoryHeader"

import AlertProduct from "../../Components/GeneralComponents/ProductTemplate"

export default ({ navigation }) => (
    <Container>
        <SafeAreaView />
        <AlertHeader
            navigation={navigation}
            heading="My Alerts"
        />
        <Content contentContainerStyle={{ paddingTop: 10 }}>
            {
                [0, 1, 2, 4, 5].map((val) => (
                    <AlertProduct
                        key={val}
                        navigation={navigation}
                    />
                ))
            }
        </Content>
    </Container>
)