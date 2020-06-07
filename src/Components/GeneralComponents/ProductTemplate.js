import React from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { Item, Button, Icon } from "native-base"

import styles from "../../Styles/ProductDetailStyles/ProductTabStyles"
import { removeProductFromUserWishlist } from "../../actions/getWishlist"
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { showMessage } from "react-native-flash-message"
import axios from "axios";
import Apis from "../../Api/Apis"

import IoniIcons from "react-native-vector-icons/Ionicons"

import { connect } from "react-redux"


class ProductTemplate extends React.Component {
    _menu = null;

    setMenuRef = ref => {
        this._menu = ref;
    };

    hideMenu = () => {
        this._menu.hide();
    };

    showMenu = () => {
        this._menu.show();
    };
    handleRemoveProductFromWishlist = (productId) => {
        const { userId } = this.props;

        if (userId.length > 0) {
            axios
                .post(Apis.add_product_to_wishlist, null, {
                    params: {
                        productId: productId,
                        userid: userId
                    }
                })
                .then(res => {
                    if (res.data) {
                        if (res.data.Code === 0) {
                            // Dispatch remove product from wishlist
                            this.props.removeProductFromUserWishlist(productId)

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
                        } else if (res.data.Code === 1) {
                            // Dispatch add product from wishlist
                        }
                    }
                })
                .catch(err => {
                    alert(err);
                })

        }
    }
    render() {
        const { navigation, wishlist } = this.props
        return (
            <TouchableOpacity
                style={{ display: "flex", flexDirection: "row", marginLeft: 10, marginRight: 10, marginVertical: 10, paddingVertical: 5 }}
                onPress={() => navigation.navigate("ProductDetail", {
                    id: wishlist.productId
                })}
            >
                <Image
                    source={{ uri: wishlist.img }}
                    style={{ width: 77, height: 77, borderRadius: 20, }}
                />
                <View style={{ width: "60%", marginLeft: 20, alignItems: "flex-start" }}>
                    <Text
                        style={{ ...styles.productTitle, marginVertical: 5, color: "#515C6F" }}
                        numberOfLines={2}
                    >
                        {wishlist.productName}
                    </Text>
                    <View style={{ ...styles.priceContainer }}>
                        <Text style={{ ...styles.cPriceText, alignSelf: "flex-end", marginRight: 5 }}>AED</Text>
                        <Text style={styles.product_price}>{wishlist.price}</Text>
                    </View>

                    {/* <TouchableOpacity style={{marginTop: "auto", marginRight: 10 }}>
                    <Text style={styles.optionButton}>12 Options</Text>
                </TouchableOpacity> */}

                </View>

                {/* <View>
                <Button transparent> 
                    <Icon 
                        name="close" 
                        style={{
                            color: "#8ea725"
                        }}
                    />
                </Button>
            </View> */}

                <Menu
                    ref={this.setMenuRef}
                    button={
                        <Button
                            transparent
                            onPress={this.showMenu}
                        >
                            <Icon name="md-more" style={{ color: '#1E2E50' }} />
                        </Button>
                    }
                >
                    <MenuItem
                        onPress={() => {
                            this.hideMenu()

                            this.handleRemoveProductFromWishlist(wishlist.productId)
                        }}
                    >
                        Remove
                    </MenuItem>
                    {/* {!project.isMasterProject && <MenuItem
                        onPress={() => {
                            this.hideMenu()
                            if (!project.isMasterProject) {
                                onArchiveProject(project)
                            }
                        }}
                    >
                        Delete
                    </MenuItem>} */}
                </Menu>

            </TouchableOpacity>
        )
    }
}

const mapStateToProps = state => ({
    userId: state.auth.user.userId
})

const mapDispatchToProps = (dispatch) => ({
    removeProductFromUserWishlist: (id) => dispatch(removeProductFromUserWishlist(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductTemplate)