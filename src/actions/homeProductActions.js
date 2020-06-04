import axios from "axios"
import AsyncStorage from "@react-native-community/async-storage";

import {
    startSuggProductLoading,
    stopSuggProductLoading,
    startTopDealsLoading,
    stopTopDealsLoading,
    startRecommendedProductsLoading,
    stopRecommendedProductsLoading,
    startTopSearchedProductsLoading,
    stopTopSearchedProductsLoading,
    startLaptopsLoading,
    stopLaptopsLoading,
    //new lines
    startMobilesLoading,
    stopMobilesLoading,

    startWatchesLoading,
    stopWatchesLoading,
    startTopCataloguesLoading,
    stopTopCataloguesLoading,
    startLastViewedProductsLoading,
    stopLastViewedProductsLoading
} from "./loaderAction"

import Apis from "../Api/Apis"

export const setSuggProducts = (products) => ({
    type: "SET_SUGGESTION_PRODUCTS",
    products
})

export const setTopDeals = (products) => ({
    type: "SET_TOP_DEALS",
    products
})

export const setLaptops = (products) => ({
    type: "SET_LAPTOPS",
    products
})
export const setMobiles = (products) => ({
    type: "SET_MOBILES",
    products
})

export const setWatches = (products) => ({
    type: "SET_WATCHES",
    products
})

export const setTopCatalogs = (catalogs) => ({
    type: "SET_TOP_CATALOGUES",
    catalogs
})

export const setRecommendedProducts = (products) => ({
    type: "SET_RECOMMENDED_PRODUCTS",
    products
})

export const setTopSearchedProducts = (products) => ({
    type: "SET_TOP_SEARCHED_PRODUCTS",
    products
})

export const setLastViewedProducts = (products) => ({
    type: "SET_LAST_VIEWED_PRODUCTS",
    products
})

export const addLastViewedProduct = (new_product) => ({
    type: "ADD_LAST_VIEWED_PRODUCT",
    new_product
})


export const fetchSuggestionProducts = () => {
    return (dispatch, getState) => {
        dispatch(startSuggProductLoading())
        axios
            .get("https://gobazzar.creativebugs.net/api/")
            .then((res) => {
                if (res.data) {
                    dispatch(setSuggProducts(res.data))
                    dispatch(stopSuggProductLoading())
                }
            })
    }
}

export const fetchTopDeals = () => {
    return (dispatch, getState) => {
        dispatch(startTopDealsLoading())

        const top_deals = []

        axios
            .get(Apis.top_deals)
            .then((res) => {
                if (res.data) {
                    res.data.forEach(deal => {
                        top_deals.push({
                            ID: deal.ProductId,
                            post_title: deal.ProductName,
                            img: deal.MainImage ? deal.MainImage : "https://www.apexrfc.com/web/sites/default/files/2020-03/product_image_not_available.png",
                            price: deal.Price ? deal.Price : "100"
                        })
                    })
                    dispatch(setTopDeals(top_deals))

                }
                dispatch(stopTopDealsLoading())
            })
            .catch(err => {
                dispatch(stopTopDealsLoading())
            })
    }
}


export const fetchRecommendedProducts = () => {
    return (dispatch, getState) => {
        const userId = getState().auth.user.userId
        if (userId) {
            console.log('storeid', userId)
            dispatch(startRecommendedProductsLoading())

            const recommended_products = []

            axios
                .get(Apis.get_recommended_products, {
                    params: {
                        userId: parseInt(userId)
                    }
                })
                .then((res) => {
                    if (res.data) {
                        console.log('resData', res.data)
                        res.data.forEach(deal => {
                            recommended_products.push({
                                ID: deal.ProductId,
                                post_title: deal.ProductName,
                                img: deal.MainImage ? deal.MainImage : "https://www.apexrfc.com/web/sites/default/files/2020-03/product_image_not_available.png",
                                // price: deal.Price ? deal.Price : "100"
                                price: deal.OfferPrice ? deal.OfferPrice : deal.RegularPrice
                            })
                            // recommended_products.push({
                            //     ID: deal.ProductId,
                            //     post_title: deal.ProductName,
                            //     img: deal.ProductImages.ImageURL ? deal.ProductImages.ImageURL : "https://www.apexrfc.com/web/sites/default/files/2020-03/product_image_not_available.png",
                            //     price: deal.Price ? deal.Price : "100"
                            // })
                        })
                        dispatch(setRecommendedProducts(recommended_products))

                    }
                    dispatch(stopRecommendedProductsLoading())
                })
                .catch(err => {
                    dispatch(stopRecommendedProductsLoading())
                })
        }


    }
}


export const fetchLaptopsAndWatches = () => {
    return (dispatch, getState) => {
        dispatch(startLaptopsLoading());
        dispatch(startMobilesLoading());
        dispatch(startWatchesLoading());


        const laptops = []
        const watches = []
        const mobiles = []

        axios
            .get(Apis.get_laptops_and_watches)
            .then((res) => {
                if (res.data) {

                    res.data.TopLaptops.forEach(deal => {
                        laptops.push({
                            ID: deal.ProductCode,
                            post_title: deal.ProductName,
                            img: deal.MainImage ? deal.MainImage : "https://www.apexrfc.com/web/sites/default/files/2020-03/product_image_not_available.png",
                            price: deal.RegularPrice ? deal.RegularPrice.toFixed(2) : "100",
                            catalogId: deal.CatalogueCode,
                        })
                    })

                    dispatch(setLaptops(laptops))

                    res.data.TopMobiles.forEach(deal => {
                        mobiles.push({
                            ID: deal.ProductCode,
                            post_title: deal.ProductName,
                            img: deal.MainImage ? deal.MainImage : "https://www.apexrfc.com/web/sites/default/files/2020-03/product_image_not_available.png",
                            price: deal.RegularPrice ? deal.RegularPrice.toFixed(2) : "100",
                            catalogId: deal.CatalogueCode,
                        })
                    })

                    dispatch(setMobiles(mobiles))

                    res.data.TopWatches.forEach(deal => {
                        watches.push({
                            ID: deal.ProductCode,
                            post_title: deal.ProductName,
                            img: deal.MainImage ? deal.MainImage : "https://www.apexrfc.com/web/sites/default/files/2020-03/product_image_not_available.png",
                            price: deal.RegularPrice ? deal.RegularPrice.toFixed(2) : "100",
                            catalogId: deal.CatalogueCode,
                        })
                    })


                    dispatch(setWatches(watches))


                }

                dispatch(stopLaptopsLoading())
                dispatch(stopMobilesLoading())
                dispatch(stopWatchesLoading())
            })
            .catch(err => {
                dispatch(stopLaptopsLoading());
                dispatch(stopMobilesLoading())
                dispatch(stopWatchesLoading())
            })
    }
}

export const fetchTopCatalogues = () => {
    return (dispatch, getState) => {
        dispatch(startTopCataloguesLoading())

        const top_catalogues = [];

        axios
            .get(Apis.get_top_catalogues)
            .then(res => {
                if (res.data) {
                    res.data.forEach(item => {
                        top_catalogues.push({
                            id: item.CatalogId,
                            img: item.ImageURL,
                            name: item.CatalogName
                        })
                    })

                    dispatch(setTopCatalogs(top_catalogues))
                }
                dispatch(stopTopCataloguesLoading())
            })
            .catch(err => {
                alert(err);
                dispatch(stopTopCataloguesLoading())
            })
    }
}



export const fetchWatches = () => {
    return (dispatch, getState) => {
        dispatch(startWatchesLoading());


        const watches = []

        // axios
        //     .get(Apis.get_laptops)
        //     .then((res) => {
        //         if (res.data) {

        //             res.data.forEach(deal => {
        //                 watches.push({
        //                     ID: deal.ProductId,
        //                     post_title: deal.ProductName,
        //                     img: deal.MainImage ? deal.MainImage : "https://www.apexrfc.com/web/sites/default/files/2020-03/product_image_not_available.png",
        //                     price: deal.Price ? deal.Price : "100"
        //                 })
        //             })

        //             dispatch(setLaptops(watches))

        //         }

        //         dispatch(stopWatchesLoading())
        //     })
        //     .catch(err => {
        //         dispatch(stopWatchesLoading())
        //     })
    }
}

export const fetchTopSearchedProducts = () => {
    return (dispatch, getState) => {
        dispatch(startTopSearchedProductsLoading())

        const top_searched_products = []

        axios
            .get(Apis.get_top_searched_products)
            .then((res) => {
                if (res.data) {
                    res.data.forEach(deal => {
                        top_searched_products.push({
                            ID: deal.ProductId,
                            post_title: deal.ProductName,
                            img: deal.MainImage ? deal.MainImage : "https://www.apexrfc.com/web/sites/default/files/2020-03/product_image_not_available.png",
                            // price: deal.OfferPrice ? deal.OfferPrice : "100"
                            price: deal.OfferPrice ? deal.OfferPrice : deal.RegularPrice
                        })
                    })

                    dispatch(setTopSearchedProducts(top_searched_products))

                }

                dispatch(stopTopSearchedProductsLoading())
            })
            .catch(err => {
                dispatch(stopTopSearchedProductsLoading())
            })

    }
}

export const fetchLastViewedProducts = () => {
    return async (dispatch, getState) => {
        dispatch(startLastViewedProductsLoading());

        const last_viewed_products = await AsyncStorage.getItem("lastviewed_products");

        if (last_viewed_products) {
            dispatch(setLastViewedProducts(JSON.parse(last_viewed_products)))
        }

        dispatch(stopLastViewedProductsLoading())
    }
}

export const fetchHomeProducts = () => {
    return (dispatch, getState) => {
        // dispatch(fetchSuggestionProducts())
        dispatch(fetchTopDeals())
        dispatch(fetchLaptopsAndWatches())
        // dispatch(fetchRecommendedProducts())
        dispatch(fetchTopSearchedProducts())
        dispatch(fetchTopCatalogues())
        dispatch(fetchLastViewedProducts())
    }
}