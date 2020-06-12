import axios from "axios"

import Apis from "../Api/Apis"

export const setPageNumber = () => ({
    type: "SET_PAGENUMBER",
})
export const resetPageNumber = () => ({
    type: "RESET_PAGENUMBER"
})

export const startCatalogCategoriesLoading = () => ({
    type: "FILTER_START_CATALOG_CATEGORIES_LOADING"
})

export const stopCatalogCategoriesLoading = () => ({
    type: "FILTER_STOP_CATALOG_CATEGORIES_LOADING"
})

export const filterSetPrice = (minPrice, maxPrice) => ({
    type: "FILTER_SET_PRICE",
    minPrice,
    maxPrice
})

export const filterSetSearchText = (text) => ({
    type: "FILTER_SET_TEXT",
    text
})

export const filterChangeCategoryId = (categoryId, categoryName) => ({
    type: "FILTER_CHANGE_CATEGORY_ID",
    categoryId,
    categoryName
})

export const filterChangeCatalogId = (catalogId, catalogName, catalogImage) => ({
    type: "FILTER_CHANGE_CATALOG_ID",
    catalogId,
    catalogName,
    catalogImage
})

export const filterSetCatalogCategories = (categories) => ({
    type: "FILTER_SET_CATALOG_CATEGORIES",
    categories
})

export const filterSetSortById = (filtersortingId) => ({
    type: "FILTER_SET_SORTY_BY_ID",
    filtersortingId
})

export const clearProductFilters = () => ({
    type: "CLEAR_PRODUCT_FILTERS"
})



export const startSetCatalogCategories = (catalogId, categoryId = "", categoryName = "") => {
    return (dispatch, getState) => {
        dispatch(startCatalogCategoriesLoading());
        // dispatch(resetPageNumber());
        // Fetch Categories By Catalog Id
        const categories = []
        axios
            .get(Apis.categories_by_catalog_id, {
                params: {
                    catalogId: catalogId
                }
            })
            .then((res) => {
                if (res.data) {
                    console.log(res.data)
                    res.data.forEach(category => {
                        categories.push({
                            id: category.CategoryId,
                            img: category.ImageURL,
                            text: category.CategoryName
                        })
                    })
                }
                dispatch(filterSetCatalogCategories(categories))
                dispatch(filterChangeCategoryId(categoryId, categoryName))
                dispatch(stopCatalogCategoriesLoading())
            })
            .catch(err => {
                dispatch(stopCatalogCategoriesLoading())
            })
    }
}
