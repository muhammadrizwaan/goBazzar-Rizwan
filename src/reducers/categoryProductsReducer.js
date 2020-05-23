const initialState = {
    category_product_loading: false,
    category_products: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CATEGORY_PRODUCTS_TYPE":
            return {
                ...state,
                category_products: action.products
            }
        case "REMOVE_CATEGORY_PRODUCTS":
            return {
                category_product_loading: false,
                category_products: []
            }
        case "START_CATEGORY_PRODUCT_LOADING":
            return {
                ...state,
                category_product_loading: true
            }
        case "STOP_CATEGORY_PRODUCT_LOADING":
            return {
                ...state,
                category_product_loading: false
            }
        case "ADDED_A_PRODUCT_TO_WISHLIST":
            const upd_category_products = state.category_products.map(product => {
                if (product.ID === action.productId) {
                    return {
                        ...product,
                        isAddedToWishlist: true
                    }
                }
                return product
            })
            return {
                ...state,
                category_products: upd_category_products
            }
        case "REMOVE_A_PRODUCT_FROM_WISHLIST":
            const upd_category_products2 = state.category_products.map(product => {
                if (product.ID === action.productId) {
                    return {
                        ...product,
                        isAddedToWishlist: false
                    }
                }
                return product
            })
            return {
                ...state,
                category_products: upd_category_products2
            }
        default:
            return state
    }
}