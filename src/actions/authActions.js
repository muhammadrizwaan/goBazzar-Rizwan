import AsyncStorage from '@react-native-community/async-storage';

import {
    startProfileLoading,
    stopProfileLoading,
} from "./loaderAction"

import { fetchRecommendedProducts } from "./homeProductActions"
import { startSetUserWishlist } from "./getWishlist"

export const setRegisterUser = (user) => ({
    type: "SET_REGISTER_USER",
    user
})

export const updateUserProfile = (user) => ({
    type: "UPDATE_USER_PROFILE",
    user
})

export const logoutUser = () => ({
    type: "LOGOUT_USER"
})

export const setUserData = () => {
    return (dispatch, getState) => {
        dispatch(fetchRecommendedProducts())
        dispatch(startSetUserWishlist())
    }
}

export const clearLastViewed = () => ({
    type: "CLEAR_LAST_VIEWED_PRODUCTS"
})

export const clearUserWishlist = () => ({
    type: "CLEAR_USER_WISHLIST"
})

export const onRegisterUser = (user) => {
    return (dispatch, getState) => {
        AsyncStorage.setItem('user', JSON.stringify(user))
        dispatch(setRegisterUser(user))
        dispatch(setUserData())
    }
}

export const fetchNSetUser = () => {
    return async (dispatch, getState) => {
        dispatch(startProfileLoading())
        const user = await AsyncStorage.getItem("user")

        if(user) {
            dispatch(setRegisterUser(JSON.parse(user)))
            dispatch(stopProfileLoading())
            dispatch(setUserData())
        } else {
            dispatch(stopProfileLoading())
        }
    }
}

export const onLogout = () => {
    return async (dispatch, getState) => {
        AsyncStorage.removeItem("user")
        AsyncStorage.removeItem("lastviewed_products")
        dispatch(clearLastViewed())
        dispatch(logoutUser())
        dispatch(clearUserWishlist())
    }
}