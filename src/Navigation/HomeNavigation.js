import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../Screens/HomeScreens/Home';
import Products from '../Screens/HomeScreens/Products'
import Wishlist from "../Screens/HomeScreens/Wishlist"
import Profile from '../Screens/HomeScreens/Profile'
import More from '../Screens/HomeScreens/More'


const Tab = createBottomTabNavigator();

const HomeStack = () => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Home') {
                    if (focused) {
                        return <Image source={require('../Assets/TabBarIcons/Active/home_active.png')} style={{ width: 30, height: 37 }} />
                    } else {
                        return <Image source={require('../Assets/TabBarIcons/InActive/home_inactive.png')} style={{ width: 30, height: 37 }} />
                    }
                } else if (route.name === 'Products') {
                    if (focused) {
                        return <Image source={require('../Assets/TabBarIcons/Active/products_active.png')} style={{ width: 46, height: 36 }} />
                    } else {
                        return <Image source={require('../Assets/TabBarIcons/InActive/products_inactive.png')} style={{ width: 46, height: 36 }} />
                    } 
                } else if(route.name === "Wishlist") {
                    if (focused) {
                        return <Image source={require('../Assets/TabBarIcons/Active/wishlist_active.png')} style={{ width: 40, height: 35.25 }} />
                    } else {
                        return <Image source={require('../Assets/TabBarIcons/InActive/wishlist_inactive.png')} style={{ width: 40, height: 35.25 }} />
                    } 
                } else if (route.name === 'My Profile') {
                    if (focused) {
                        return <Image source={require('../Assets/TabBarIcons/Active/my_profile_active.png')} style={{ width: 50, height: 37 }} />
                    } else {
                        return <Image source={require('../Assets/TabBarIcons/InActive/my_profile_inactive.png')} style={{ width: 50, height: 37 }} />
                    }
                } else if (route.name === 'More') {
                    if (focused) {
                        return <Image source={require('../Assets/TabBarIcons/Active/more_active.png')} style={{ width: 25, height: 33.5 }} />
                    } else {
                        return <Image source={require('../Assets/TabBarIcons/InActive/more_inactive.png')} style={{ width: 25, height: 33.5 }} />
                    }
                }
            },
        })}
        tabBarOptions={{
            activeTintColor: 'white',
            inactiveTintColor: 'white',
            activeBackgroundColor: 'white',
            inactiveBackgroundColor: 'white',
            showLabel: false,
            keyboardHidesTabBar: true,
        }}
    >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Products" component={Products} />
        <Tab.Screen name="Wishlist" component={Wishlist} />
        <Tab.Screen name="My Profile" component={Profile} />
        <Tab.Screen name="More" component={More} />
    </Tab.Navigator>
)

export default HomeStack