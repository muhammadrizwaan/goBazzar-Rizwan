const initialState = {
    MinPrice: 0,
    MaxPrice: 4299,
    // MaxPrice: 1000000,
    CategoryId: "",
    CategoryName: "",
    CatalogId: "",
    CatalogName: "",
    BrandId: "",
    StoreId: "",
    catalogImage: "",
    filtersortingId: 1,
    catalog_categories: [],
    isCatalogCategoriesLoading: false,
    Search: "",
    PageNumber: 0,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_PAGENUMBER":
            return {
                ...state,
                PageNumber: state.PageNumber + 1
            }
        case "RESET_PAGENUMBER":
            return {
                ...state,
                PageNumber: 0
            }
        case "FILTER_SET_PRICE":
            return {
                ...state,
                MinPrice: action.minPrice,
                MaxPrice: action.maxPrice,
            }
        case "FILTER_CHANGE_CATEGORY_ID":
            return {
                ...state,
                CategoryId: action.categoryId,
                CategoryName: action.categoryName,
            }
        case "FILTER_CHANGE_CATALOG_ID":
            return {
                ...state,
                CatalogId: action.catalogId,
                CatalogName: action.catalogName,
                catalogImage: action.catalogImage,
            }
        case "FILTER_SET_CATALOG_CATEGORIES":
            return {
                ...state,
                catalog_categories: action.categories,
            }
        case "FILTER_START_CATALOG_CATEGORIES_LOADING":
            return {
                ...state,
                isCatalogCategoriesLoading: true
            }
        case "FILTER_STOP_CATALOG_CATEGORIES_LOADING":
            return {
                ...state,
                isCatalogCategoriesLoading: false
            }
        case "FILTER_SET_SORTY_BY_ID":
            return {
                ...state,
                filtersortingId: action.filtersortingId,
            }
        case "FILTER_SET_TEXT":
            return {
                ...state,
                Search: action.text,
            }

        case "CLEAR_PRODUCT_FILTERS":
            return initialState
        default:
            return state
    }
}