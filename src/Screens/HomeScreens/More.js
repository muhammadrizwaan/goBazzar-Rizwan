import React from "react";
import { View, Text, SafeAreaView, StatusBar, ImageBackground } from "react-native"
import { Container, Content, ListItem as Item, Left, Body, Right } from "native-base"
import { createStackNavigator } from "@react-navigation/stack"
import styles from "../../Styles/ProfileScreenStyles/LoggedInStyles"

import MenuButtonTemplate from '../ProfileScreens/MenuButtonTemplate';
import StoreAndCompare from '../ProfileScreens/StoreAndCompare';

// import Stores from "../MoreScreens/Stores"
// import StoreDetail from "../MoreScreens/StoreDetail"
// import Offers from "../MoreScreens/Offers"
// import CompareScreen from "../MoreScreens/Compare"
// import CompareProductsScreen from "../MoreScreens/CompareProductsScreen"

const More = ({ navigation }) => (
    <Container>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <SafeAreaView />
        <Container style={{ flex: 1 }}>
            <ImageBackground
                source={require("../../Assets/BackgroundPicture/bg.png")}
                style={{ flex: 1 }}
            >
                <Content style={{padding:25}}>
                    <Text style={styles.nameText}>More Options</Text>


                    <View style={styles.lineBreak} />


                    {/* <MenuButtonTemplate
                    text="Offers"
                    indicatorNumber={""}
                    onPress={() => navigation.navigate("Offers")}
                /> */}

                    {/* <MenuButtonTemplate */}
                    <StoreAndCompare
                        text="Stores"
                        indicatorNumber={""}
                        onPress={() => navigation.navigate("Stores")}
                    />

                    {/* <MenuButtonTemplate */}
                    <StoreAndCompare
                        text="Compare"
                        indicatorNumber={""}
                        onPress={() => navigation.navigate("CompareScreen")}
                    />

                    {/* <MenuButtonTemplate
                    text="Country"
                    indicatorNumber={""}
                    onPress={() => { }}
                />

                <MenuButtonTemplate
                    text="Language"
                    indicatorNumber={"EN"}
                    onPress={() => { }}
                /> */}

                    <MenuButtonTemplate
                        text="How GoBazzar works? (FAQs)"
                        indicatorNumber={""}
                        onPress={() => navigation.navigate("FAQsScreen")}
                    />

                    <MenuButtonTemplate
                        text="Feedback"
                        indicatorNumber={""}
                        onPress={() => navigation.navigate("FeedbackScreen")}
                    />

                    <View style={styles.lineBreak} />

                    <MenuButtonTemplate
                        text="Rate our App"
                        indicatorNumber={""}
                        onPress={() => { }}
                    />
                </Content>
            </ImageBackground>
        </Container>
    </Container>
)


// const { Navigator, Screen } = createStackNavigator()

// const MoreStack = ({ navigation, route }) => {
//     navigation.setOptions({ tabBarVisible: route.state ? route.state.index > 0 ? false : true : null });
//     return (
//         <Navigator
//             headerShown={false}
//             headerMode="none"
//             initialRouteName="More"
//         >
//             <Screen name="More" component={More} />
//             <Screen
//                 name="Stores"
//                 component={Stores}
//             />
//             <Screen
//                 name="StoreDetail"
//                 component={StoreDetail}
//             />
//             <Screen 
//                 name="CompareProductsScreen"
//                 component={CompareProductsScreen}
//             />
//             <Screen 
//                 name="CompareScreen"
//                 component={CompareScreen}
//             />
//             <Screen
//                 name="Offers"
//                 component={Offers}
//             />
//         </Navigator >
//     )
// }

export default More