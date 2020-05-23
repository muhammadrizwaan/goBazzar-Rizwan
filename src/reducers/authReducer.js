import AsyncStorage from "@react-native-community/async-storage"

const initialState = {
    profile_loading: false,
    islogin: false,
    user: {
        userId: "",
        firstName: "",
        lastName: "",
        email: "",
        language: "en",
        wishlists: [],
        alerts: [],
        history: [],
        review: [],
        scanse: []
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_REGISTER_USER":
            return {
                profile_loading: false,
                islogin: true,
                user: action.user
            }
        case "START_PROFILE_LOADING":
            return {
                ...state,
                profile_loading: true
            }
        case "STOP_PROFILE_LOADING":
            return {
                ...state,
                profile_loading: false
            }
        case "UPDATE_USER_PROFILE":
            AsyncStorage.setItem('user', JSON.stringify({
                ...state.user,
                ...action.user
            }))

            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.user
                }
            }
        case "LOGOUT_USER":
            return initialState
        default:
            return state
    }
}