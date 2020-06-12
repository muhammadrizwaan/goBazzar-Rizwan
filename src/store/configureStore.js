import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import loadersReducer from "../reducers/loadersReducer"
import homeProductsReducer from "../reducers/homeProductsReducer"
import catalogReducer from "../reducers/catalogReducer"
import authReducer from "../reducers/authReducer"
import categoryProductsReducer from "../reducers/categoryProductsReducer"
import filterReducer from "../reducers/filterReducer"
import wishlistReducer from "../reducers/wishlistReducer"
import compareReducer from "../reducers/compareReducer"
import Pagenumber from '../reducers/PagenumberReducer';

const initialState = {}

export default () => {
    const store = createStore(
        combineReducers({
            loader: loadersReducer,
            homeProducts: homeProductsReducer,
            all_catalogs: catalogReducer,
            auth: authReducer,
            categoryProducts: categoryProductsReducer,
            productFilters: filterReducer,
            userWishlist: wishlistReducer,
            compareProducts: compareReducer,
            // Pagenumber: Pagenumber
        }),
        initialState,
        applyMiddleware(thunk)
    )

    return store
}
