import axios from "axios"
import {
    startAllCatalogsLoading,
    stopAllCatalogsLoading,
    startTopCategoriesLoading,
    stopTopCategoriesLoading
} from "./loaderAction"

import Apis from "../Api/Apis"

export const setAllCatalogs = (catalogs) => ({
    type: "SET_ALL_CATALOGS",
    catalogs
})

export const setTopCategories = (top_categories) => ({
    type: "SET_TOP_CATEGORIES",
    top_categories
})

export const fetchAllCatalogs = () => {
    return (dispatch, getState) => {
        dispatch(startAllCatalogsLoading());
        const all_catalogs = [];

        axios
            .get(Apis.get_all_catalogs)
            .then((res) => {
                if(res.data){
                    res.data.forEach(catalog => {
                        all_catalogs.push({
                            text: catalog.CatalogName,
                            imageURL: catalog.ImageURL,
                            id: catalog.CatalogId
                        })
                    })

                    dispatch(setAllCatalogs(all_catalogs))
                }
                dispatch(stopAllCatalogsLoading())
            })
            .catch((err) => {
                alert("Error Occur!")
                dispatch(stopAllCatalogsLoading())
            })
    }
}

export const fetchTopCategories = () => {
    return (dispatch, getState) => {
        dispatch(startTopCategoriesLoading());

        const top_categories = [];

        axios
            .get(Apis.get_top_categories)
            .then(res => {
                if(res.data) {
                    res.data.forEach(category => {
                        top_categories.push({
                            name: category.CategoryName,
                            img: category.ImageURL ? category.ImageURL : "https://www.apexrfc.com/web/sites/default/files/2020-03/product_image_not_available.png",
                            id: category.CategoryId,
                            catalogId: category.CatalogId
                        })
                    })


                    dispatch(setTopCategories(top_categories))
                }

                dispatch(stopTopCategoriesLoading())
            })
            .catch((err) => {
                alert(err)
                dispatch(stopTopCategoriesLoading())
            })
    }
}

export const fetchProductsCatalogs = () => {
    return (dispatch, getState) => {
        dispatch(fetchAllCatalogs())
        dispatch(fetchTopCategories())
    }
}