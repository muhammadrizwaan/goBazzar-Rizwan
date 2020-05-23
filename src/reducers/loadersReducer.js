const initialState = {
    suggestion_product_loading: true,
    top_deals_loading: true,
    recommended_products_loading: false,
    top_searched_products_loading: true,
    laptops_loading: false,
    mobiles_loading: false,
    watches_loading: false,
    top_catalogs_loading: false,
    lastviewed_products_loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "START_SUGGESTION_PRODUCT_LOADING":
            return { ...state, suggestion_product_loading: true }
        case "STOP_SUGGESTION_PRODUCT_LOADING":
            return { ...state, suggestion_product_loading: false }
        case "START_TOP_DEALS_LOADING":
            return { ...state, top_deals_loading: true }
        case "STOP_TOP_DEALS_LOADING":
            return { ...state, top_deals_loading: false }
        case "START_RECOMMENDED_PRODUCTS_LOADING":
            return { ...state, recommended_products_loading: true }
        case "STOP_RECOMMENDED_PRODUCTS_LOADING":
            return { ...state, recommended_products_loading: false }
        case "START_TOP_SEARCHED_PRODUCTS_LOADING":
            return { ...state, top_searched_products_loading: true }
        case "STOP_TOP_SEARCHED_PRODUCTS_LOADING":
            return { ...state, top_searched_products_loading: false }
        case "START_LAPTOPS_LOADING":
            return { ...state, laptops_loading: true }
        case "STOP_LAPTOPS_LOADING":
            return { ...state, laptops_loading: false }


        case "START_MOBILES_LOADING":
            return { ...state, mobiles_loading: true }
        case "STOP_MOBILES_LOADING":
            return { ...state, mobiles_loading: false }

        case "START_WATCHES_LOADING":
            return { ...state, watches_loading: true }
        case "STOP_WATCHES_LOADING":
            return { ...state, watches_loading: false }
        case "START_TOP_CATALOGUES_LOADING":
            return { ...state, top_catalogs_loading: true }
        case "STOP_TOP_CATALOGUES_LOADING":
            return { ...state, top_catalogs_loading: false }
        case "START_LAST_VIEWED_PRODUCTS_LOADING":
            return { ...state, lastviewed_products_loading: true }
        case "STOP_LAST_VIEWED_PRODUCTS_LOADING":
            return { ...state, lastviewed_products_loading: false }
        default:
            return state
    }
}