import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"

const { Navigator, Screen } = createStackNavigator()

import HomeStack from "./HomeNavigation"

import ProductDetail from "../Screens/ProductScreens/ProductDetail"
import SearchScreen from "../Screens/HomeScreens/SearchScreen"
import SubCategories from "../Screens/ProductScreens/SubCategories"
import CategoryProducts from '../Screens/ProductScreens/CategoryProducts'
import PostReview from "../Screens/ProductScreens/PostReview"
import CompareScreen from "../Screens/MoreScreens/Compare"
import FeedbackScreen from "../Screens/MoreScreens/Feedback"
import FAQsScreen from "../Screens/MoreScreens/FAQs"
import CompareProductsScreen from "../Screens/MoreScreens/CompareProductsScreen"
import EditProfile from "../Screens/ProfileScreens/EditProfileScreen"
import SignUpScreen from "../Screens/ProfileScreens/SignUpScreen"
import ForgetScreen from "../Screens/ProfileScreens/ForgetScreen"
import Reviews from "../Screens/ProfileScreens/Reviews"
import History from "../Screens/ProfileScreens/History"
import Stores from "../Screens/MoreScreens/Stores"
import StoreDetail from "../Screens/MoreScreens/StoreDetail"
import ResetPasswordScreen from "../Screens/ProfileScreens/ResetPasswordScreen"
import WatchesScreen from "../Screens/ProductScreens/WatchesScreen"
import LaptopsScreen from "../Screens/ProductScreens/LaptopScreen"
import MobileScreens from "../Screens/ProductScreens/MobileScreens"
import TopDealsScreen from "../Screens/ProductScreens/TopDealsScreen"

export default ({ navigation, route }) => {
    navigation.setOptions({ tabBarVisible: route.state ? route.state.index > 0 ? false : true : null });
    return (
        <Navigator initialRouteName="Home" headerMode="none">
            <Screen name="ProductDetail" component={ProductDetail} />
            <Screen
                name="Home"
                component={HomeStack}
                navigationOptions={({ navigation }) => ({
                    drawerLockMode: 'locked-closed',
                    disableGestures: true
                })}
                options={{
                    swipeEnabled: false,
                    gestureEnabled: false
                }}
            />
            <Screen
                name="PostReview"
                component={PostReview}
            />
            <Screen 
                name="WatchesScreen"
                component={WatchesScreen}
            />
            <Screen 
                name="LaptopsScreen"
                component={LaptopsScreen}
            />
            <Screen 
                name="MobileScreens"
                component={MobileScreens}
            />
            <Screen 
                name="TopDealsScreen"
                component={TopDealsScreen}
            />
            <Screen
                name="CompareScreen"
                component={CompareScreen}
            />
            <Screen
                name="FeedbackScreen"
                component={FeedbackScreen}
            />
            <Screen
                name="FAQsScreen"
                component={FAQsScreen}
            />
            <Screen
                name="SubCategories"
                component={SubCategories}
            />
            <Screen
                name="CategoryProducts"
                component={CategoryProducts}
            />
            <Screen
                name="CompareProductsScreen"
                component={CompareProductsScreen}
            />
            <Screen
                name="SearchScreen"
                component={SearchScreen}
            />
            <Screen
                name="SignUpScreen"
                component={SignUpScreen}
            />
            <Screen
                name="ForgetScreen"
                component={ForgetScreen}
            />
            <Screen
                name="EditProfile"
                component={EditProfile}
            />
            <Screen
                name="Reviews"
                component={Reviews}
            />
            <Screen
                name="History"
                component={History}
            />
            <Screen
                name="Stores"
                component={Stores}
            />
            <Screen
                name="StoreDetail"
                component={StoreDetail}
            />
            <Screen 
                name="ResetPasswordScreen"
                component={ResetPasswordScreen}
            />
        </Navigator>
    )
}