const defaultState = {
    wishlist_loading: false,
    wishlist: []
}


export default (state = defaultState, action) => {
    switch(action.type) {
        case "START_WISHLIST_LOADING":
            return {
                ...state,
                wishlist_loading: true
            }
        case "STOP_WISHLIST_LOADING":
            return {
                ...state,
                wishlist_loading: false
            }
        case "SET_USER_WISHLIST":
            return {
                ...state,
                wishlist: action.wishlist
            }

        case "ADD_WISHLIST_USER":
            return {
                ...state,
                wishlist: [ action.wishlistItem, ...state.wishlist ]
            }
        case "REMOVE_WISHLIST_USER":
            const updated_wishlist = state.wishlist.filter(item => item.productId !== action.ProductCode);

            return {
                ...state,
                wishlist: updated_wishlist
            }
        case "CLEAR_USER_WISHLIST":
            return defaultState
        default: 
            return state
    }
}