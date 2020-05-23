import axios from "axios"
import Apis from "../Api/Apis"

export const addProductToUserWishlist = (wishlistItem) => ({
    type: "ADD_WISHLIST_USER",
    wishlistItem
})

export const removeProductFromUserWishlist = (ProductCode) => ({
    type: "REMOVE_WISHLIST_USER",
    ProductCode
})

export const setUserWishlist = (wishlist) => ({
    type: "SET_USER_WISHLIST",
    wishlist
})

export const startWishListLoading = () => ({
    type: "START_WISHLIST_LOADING"
})

export const stopWishlistLoading = () => ({
    type: "STOP_WISHLIST_LOADING"
})

export const startSetUserWishlist = () => {
    return (dispatch, getState) => {
        dispatch(startWishListLoading())
        const userId = getState().auth.user.userId;


        const wishlist = [];
        axios
            .get(Apis.get_user_wishlist, {
                params: {
                    userId: userId
                }
            })
            .then(res => {
                if(res.data) {
                    res.data.forEach(item => {
                        wishlist.push({
                            wishlistId: item.WishlistId,
                            userId: item.UserId,
                            productName: item.ProductName,
                            productId: item.ProductCode,
                            img: item.MainImage,
                            price: item.RegularPrice,
                            categoryId: item.CategoryCode
                        })
                    })

                   dispatch(setUserWishlist(wishlist))
                }
                dispatch(stopWishlistLoading())
            })
            .catch(err => {
                alert(err);
                dispatch(stopWishlistLoading())
            })
    }
}