import AsyncStorage from "@react-native-community/async-storage"

const initialState = {
    suggestion_products: [],
    top_deals: [],
    last_viewed: [],
    recommended_products: [],
    top_searched_products: [],
    top_catalogues: [],
    laptops: [],
    watches: []
}

async function saveLastViewedProduct (products) {
    await AsyncStorage.setItem("lastviewed_products", JSON.stringify(products))    
}

export default (state = initialState, action) => {
    switch(action.type) {
        case "SET_SUGGESTION_PRODUCTS":
            return {
                ...state,
                suggestion_products: action.products
            }
        case "SET_TOP_DEALS":
            return {
                ...state,
                top_deals: action.products
            }
        case "SET_RECOMMENDED_PRODUCTS":
            return {
                ...state,
                recommended_products: action.products
            }
        case "SET_TOP_SEARCHED_PRODUCTS":
            return {
                ...state,
                top_searched_products: action.products
            }
        case "SET_LAPTOPS":
            return {
                ...state,
                laptops: action.products
            }
        case "SET_WATCHES":
            return {
                ...state,
                watches: action.products
            }
        case "SET_TOP_CATALOGUES":
            return {
                ...state,
                top_catalogues: action.catalogs
            }
        case "SET_LAST_VIEWED_PRODUCTS":
            return {
                ...state,
                last_viewed: action.products
            }
        case "ADD_LAST_VIEWED_PRODUCT":
            const last_viewed_products = state.last_viewed
            if(last_viewed_products.length > 4) {
                last_viewed_products.pop()
            }
            const upd_products = last_viewed_products.filter(product => product.ID !== action.new_product.ID);

            const updated_last_viewed = [action.new_product, ...upd_products];

            // console.warn("updated_last_viewed",updated_last_viewed)

            saveLastViewedProduct(updated_last_viewed)
            return {
                ...state,
                last_viewed: updated_last_viewed
            }
        case "CLEAR_LAST_VIEWED_PRODUCTS":
            return {
                ...state,
                last_viewed: []
            }
        default:
            return state
    }
}