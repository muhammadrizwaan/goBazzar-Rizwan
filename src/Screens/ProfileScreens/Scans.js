import React from "react"
import { SafeAreaView } from "react-native"
import { Container, Content } from "native-base"
import ScanProductHeader from "../../Components/CategoryProductComponents/CategoryHeader"

import ScanProduct from "../../Components/GeneralComponents/ProductTemplate"

export default ({ navigation }) => (
    <Container>
        <SafeAreaView />
        <ScanProductHeader
            navigation={navigation}
            heading="My Scans"
        />
        <Content contentContainerStyle={{ paddingTop: 10 }}>
            {
                [0, 1, 2, 4, 5].map((val) => (
                    <ScanProduct
                        key={val}
                        navigation={navigation}
                    />
                ))
            }
        </Content>
    </Container>
)