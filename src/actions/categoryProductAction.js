import axios from "axios"
import Apis from "../Api/Apis"

export const startCategoryProductLoading = () => ({
    type: "START_CATEGORY_PRODUCT_LOADING"
})

export const stopCategoryProductLoading = () => ({
    type: "STOP_CATEGORY_PRODUCT_LOADING"
})


export const setCategoryProducts = (products) => ({
    type: "ADD_CATEGORY_PRODUCTS_TYPE",
    products
})

export const clearCategoryProducts = () => ({
    type: "REMOVE_CATEGORY_PRODUCTS"
})

export const addAProductToWishlist = (productId) => ({
    type: "ADDED_A_PRODUCT_TO_WISHLIST",
    productId
})

export const removeAProductFromWishlist = (productId) => ({
    type: "REMOVE_A_PRODUCT_FROM_WISHLIST",
    productId
})




export const applyFilters = () => {
    return (dispatch, getState) => {
        const filters = getState().productFilters

        dispatch(startCategoryProductLoading());

        const products = []

        axios
            .get(Apis.filter_products, {
                params: {
                    MinPrice: filters.MinPrice,
                    MaxPrice: filters.MaxPrice,
                    CategoryId: filters.CategoryId,
                    CatalogId: filters.CatalogId,
                    BrandId: "",
                    StoreId: "",
                    FiltersortingId: filters.filtersortingId,
                    Search: filters.Search,
                    pagenumber:filters.PageNumber,
                    // pagenumber:"",
                }
            }) 
            .then(res => {
                if(res.data.FilterProductList) {
                    res.data.FilterProductList.forEach(item => {
                        products.push({
                            ID: item.ProductCode,
                            img: item.MainImage,
                            categoryId: filters.CategoryId,
                            categoryName: filters.CategoryName,
                            post_title: item.ProductName,
                            price: item.RegularPrice ? item.RegularPrice.toFixed(2) : 0,
                            offerPrice: item.OfferPrice ? item.OfferPrice.toFixed(2) : 0,
                            storeImg:item.ImagePath? item.ImagePath:"https://www.apexrfc.com/web/sites/default/files/2020-03/product_image_not_available.png",
                        })
                    })
                    
                    dispatch(setCategoryProducts(products))
                }
                dispatch(stopCategoryProductLoading())
            })
            .catch(err => {
                alert(err)
                dispatch(stopCategoryProductLoading())
            })
    }
}
