import { showMessage, hideMessage } from "react-native-flash-message";

const initialState = {
    compare_items: [],
    message: "",
    isError: false
}

// {
//     categoryId: 0,
//     categoryName: "",
//     products: [{

//     }]
// }, {
//     categoryId: 1,
//     categoryName: "",
//     products: [{

//     }]
// }


export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_COMPARE_PRODUCTS":
            return {
                ...state,
                compare_items: action.items
            }

        case "ADD_COMPARE_PRODUCT":
            let isError = false
            let message = "The selected product has been added to compare list."
            let isCategoryExist = false;
            let new_compare_item = {};
            let item_to_save = [];

            const updated_compare_items = state.compare_items.map(compareItem => {
                if (compareItem.categoryId === action.categoryId) {

                    isCategoryExist = true;

                    const old_products = compareItem.products;

                    old_products.forEach(product => {
                        if (product.ID === action.product.ID) {
                            isError = true
                            message = "This product is already added to the compare list."
                        }
                    });

                    const updated_products = old_products.filter(product => product.ID !== action.product.ID)

                    if (updated_products.length >= 4) {
                        isError = true
                        message = "You have reached your limit for this category."
                    }

                    return {
                        ...compareItem,
                        products: updated_products.length >= 4 ? updated_products : updated_products.concat(action.product)
                    }
                } else {
                    return compareItem
                }

            })



            if (!isCategoryExist) {
                new_compare_item = {
                    categoryId: action.categoryId,
                    categoryName: action.categoryName,
                    products: [action.product]
                }

                item_to_save = updated_compare_items.concat([new_compare_item]);

            } else {
                item_to_save = updated_compare_items;

            }

            // console.warn("isError", isError, "message", message, "item_to_save", item_to_save);
            showMessage({
                message: message,
                type: isError ? "danger" : "info",
                position: 'bottom',
                // icon: 'auto',
                autoHide: true,
                hideOnPress: true,
                floating: true,
                duration:15000,
                titleStyle:{
                    fontSize:10
                },
                style: {
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: "#E8E8E8",
                    width: "90%",
                    borderRadius: 30,
                    color: "black",
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 7,
                },
                color: "#000000",
            });
            return {
                ...state,
                isError: isError,
                message: message,
                compare_items: item_to_save
            }
        case "REMOVE_COMPARE_PRODUCT":
            let all_product_removed = false;
            let upd_compare_item = state.compare_items.map(item => {
                if (item.categoryId === action.categoryId) {
                    const item_products = item.products.filter(product => product.ID !== action.productId);


                    if (item_products.length < 1) {
                        all_product_removed = true
                    }

                    return {
                        ...item,
                        products: item_products
                    }
                }

                return item
            })

            if (all_product_removed) {
                upd_compare_item = upd_compare_item.filter(item => item.categoryId !== action.categoryId)
            }

            showMessage({
                message: "Product removed",
                position: 'bottom',
                // icon: 'auto',
                autoHide: true,
                hideOnPress: true,
                floating: true,
                duration:15000,
                titleStyle:{
                    fontSize:10
                },
                style: {
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: "#E8E8E8",
                    width: "90%",
                    borderRadius: 30,
                    color: "black",
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 7,
                },
                color: "#000000",
            });
            return {
                ...state,
                compare_items: upd_compare_item
            }
        default:
            return state
    }
}


