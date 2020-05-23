const initialState = {
    isCatalogLoading: false,
    catalogs: [],
    top_categories: [],
    top_categories_loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "START_CATALOG_LOADING":
            return {
                ...state,
                isCatalogLoading: true
            }
        case "STOP_CATALOG_LOADING":
            return {
                ...state,
                isCatalogLoading: false
            }
        case "SET_ALL_CATALOGS":
            return {
                ...state,
                catalogs: action.catalogs
            }
        case "START_TOP_CATEGORIES_LOADING":
            return {
                ...state,
                top_categories_loading: true
            }
        case "STOP_TOP_CATEGORIES_LOADING":
            return {
                ...state,
                top_categories_loading: false
            }
        case "SET_TOP_CATEGORIES":
            return {
                ...state,
                top_categories: action.top_categories
            }
        default:
            return state
    }
}