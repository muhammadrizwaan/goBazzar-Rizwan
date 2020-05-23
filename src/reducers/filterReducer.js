const initialState = {
    MinPrice: 0,
    MaxPrice: 4299,
    CategoryId: "",
    CategoryName: "",
    CatalogId: "",
    CatalogName: "",
    BrandId: "",
    StoreId: "",
    filtersortingId: 1,
    catalog_categories: [],
    isCatalogCategoriesLoading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "FILTER_SET_PRICE":
            return {
                ...state,
                MinPrice: action.minPrice,
                MaxPrice: action.maxPrice
            }
        case "FILTER_CHANGE_CATEGORY_ID":
            return {
                ...state,
                CategoryId: action.categoryId,
                CategoryName: action.categoryName
            }
        case "FILTER_CHANGE_CATALOG_ID":
            return {
                ...state,
                CatalogId: action.catalogId,
                CatalogName: action.catalogName
            }
        case "FILTER_SET_CATALOG_CATEGORIES":
            return {
                ...state,
                catalog_categories: action.categories
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
                filtersortingId: action.filtersortingId
            }
        case "CLEAR_PRODUCT_FILTERS":
            return initialState
        default:
            return state
    }
}