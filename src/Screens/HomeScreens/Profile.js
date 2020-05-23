import React from 'react'
import { View, Text, StatusBar, SafeAreaView , ImageBackground} from 'react-native'
import { Container } from "native-base"

import ProfileLoader from "../../Components/HomeComponents/ProductLoader"
import LoggedInProfile from "../ProfileScreens/LoggedInProfile"
import NotLoggedInProfile from "../ProfileScreens/NotLoggedProfile"
import EditProfile from "../ProfileScreens/EditProfileScreen"
// import SignUpScreen from "../ProfileScreens/SignUpScreen"
// import Wishlist from "./Wishlist"
// import History from "../ProfileScreens/History"
// import Reviews from "../ProfileScreens/Reviews"
// import Alerts from "../ProfileScreens/Alerts"
// import Scans from "../ProfileScreens/Scans"
// import PostReview from "../ProductScreens/PostReview"
// import ProductDetail from "../ProductScreens/ProductDetail"
// import CompareScreen from "../MoreScreens/Compare"
// import CompareProductsScreen from "../MoreScreens/CompareProductsScreen"


import { connect } from "react-redux"
import { createStackNavigator } from '@react-navigation/stack'

const Profile = ({ navigation, profile_loading, islogin, user }) => (
    <Container>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <SafeAreaView />
        {
            profile_loading ?
                <ProfileLoader
                    loading={profile_loading}
                />
                :
                islogin ?
                    <LoggedInProfile
                        user={user}
                        navigation={navigation}
                    />
                    :
                    <NotLoggedInProfile navigation={navigation} />
        }
        <SafeAreaView />
    </Container>
)

const { Navigator, Screen } = createStackNavigator()

const mapStateToProps = state => ({
    profile_loading: state.auth.profile_loading,
    islogin: state.auth.islogin,
    user: state.auth.user
})

const ProfileComponent = connect(mapStateToProps)(Profile)

// const ProfileStack = ({ navigation, route }) => {
//     navigation.setOptions({ tabBarVisible: route.state ? route.state.index > 0 ? false : true : null });
//     return (
//         <Navigator
//             headerShown={false}
//             headerMode="none"
//             initialRouteName="Products"
//         >
//             <Screen name="Profile" component={ProfileComponent} />
//             <Screen
//                 name="SignUpScreen"
//                 component={SignUpScreen}
//             />
//             {/* <Screen
//                 name="Wishlist"
//                 component={Wishlist}
//             /> */}
            // <Screen
            //     name="History"
            //     component={History}
            // />
//             <Screen
//                 name="Alerts"
//                 component={Alerts}
//             />
            // <Screen
            //     name="Reviews"
            //     component={Reviews}
            // />
//             <Screen
//                 name="ProductDetail"
//                 component={ProductDetail}
//             />
//             <Screen
//                 name="CompareScreen"
//                 component={CompareScreen}
//             />
//             <Screen
//                 name="CompareProductsScreen"
//                 component={CompareProductsScreen}
//             />
//             <Screen
//                 name="PostReview"
//                 component={PostReview}
//             />
//             <Screen
//                 name="Scans"
//                 component={Scans}
//             />
            // <Screen
            //     name="EditProfile"
            //     component={EditProfile}
            // />
//         </Navigator >
//     )
// }

export default ProfileComponent
