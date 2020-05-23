export const addProductToCompare = (categoryId, categoryName, product) => ({
    type: "ADD_COMPARE_PRODUCT",
    categoryId, 
    categoryName, 
    product
})


export const removeCompareProduct = (categoryId, productId) => ({
    type: "REMOVE_COMPARE_PRODUCT",
    categoryId, productId
})