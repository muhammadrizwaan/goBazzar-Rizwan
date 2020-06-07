import React from 'react'
import { View, Text, Icon, Button } from 'native-base'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntIcons from "react-native-vector-icons/AntDesign"

import styles from '../../Styles/ProductStyles/CategoryFilterStyles'
import { connect } from "react-redux"
import { filterSetSortById } from "../../actions/filterActions"
import { applyFilters } from "../../actions/categoryProductAction"

import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

class CategoryFilter extends React.Component {
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
    render() {
        const { navigation, filtersortingId } = this.props;
        return (
            <View
                style={styles.container}
            >
                <Menu
                    ref={this.setMenuRef}
                    button={
                        <Button
                            iconLeft
                            transparent
                            onPress={this.showMenu}
                        >
                            <MaterialIcons name="sort" size={22} style={{ color: "#515C6F" }} />
                            <Text style={styles.sortByText} uppercase={false}>Sort by</Text>
                        </Button>
                    }
                >
                    {/* <MenuItem
                        style={{
                            backgroundColor: filtersortingId === 1 ? "#8EA625" : "white"
                        }}
                        onPress={() => {
                            this.hideMenu()
                            this.props.filterSetSortById(1)
                            this.props.applyFilters()
                        }}
                    >
                        <Text
                            style={{
                                color: filtersortingId === 1 ? "white" : "black"
                            }}
                        >Default Sorting</Text>
                    </MenuItem>
                    <MenuItem
                        style={{
                            backgroundColor: filtersortingId === 2 ? "#8EA625" : "white"
                        }}
                        onPress={() => {
                            this.hideMenu()
                            this.props.filterSetSortById(2)
                            this.props.applyFilters()
                        }}
                    >
                        <Text
                            style={{
                                color: filtersortingId === 2 ? "white" : "black"
                            }}
                        >Sort by Popularity</Text>
                    </MenuItem>
                    <MenuItem
                        style={{
                            backgroundColor: filtersortingId === 3 ? "#8EA625" : "white"
                        }}
                        onPress={() => {
                            this.hideMenu()
                            this.props.filterSetSortById(3)
                            this.props.applyFilters()
                        }}
                    >
                        <Text
                            style={{
                                color: filtersortingId === 3 ? "white" : "black"
                            }}
                        >Sort by Average Rating</Text>
                    </MenuItem>
                    <MenuItem
                        style={{
                            backgroundColor: filtersortingId === 4 ? "#8EA625" : "white"
                        }}
                        onPress={() => {
                            this.hideMenu()
                            this.props.filterSetSortById(4)
                            this.props.applyFilters()
                        }}
                    >
                        <Text
                            style={{
                                color: filtersortingId === 4 ? "white" : "black"
                            }}
                        >Sort by latest</Text>
                    </MenuItem> */}
                    <MenuItem
                        style={{
                            backgroundColor: filtersortingId === 5 ? "#8EA625" : "white"
                        }}
                        onPress={() => {
                            this.hideMenu()
                            this.props.filterSetSortById(5)
                            this.props.applyFilters()
                        }}
                    >
                        <Text
                            style={{
                                color: filtersortingId === 5 ? "white" : "black"
                            }}
                        >Sort by Price: Low to High</Text>
                    </MenuItem>
                    <MenuItem
                        style={{
                            backgroundColor: filtersortingId === 6 ? "#8EA625" : "white"
                        }}
                        onPress={() => {
                            this.hideMenu()
                            this.props.filterSetSortById(6)
                            this.props.applyFilters()
                            // this.handleRemoveProductFromWishlist(wishlist.productId)
                        }}
                    >
                        <Text
                            style={{
                                color: filtersortingId === 6 ? "white" : "black"
                            }}
                        >Sort by Price: High to Low</Text>
                    </MenuItem>
                </Menu>

                <Button
                    transparent
                    style={styles.filterButtonStyle}
                    onPress={() => navigation.openDrawer()}
                >
                    <Text style={styles.filterByText} uppercase={false}>Filter by</Text>
                    <AntIcons name="filter" size={22} style={{ color: "#515C6F" }} />
                </Button>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    filtersortingId: state.productFilters.filtersortingId
})

const mapDispatchToProps = dispatch => ({
    filterSetSortById: (filtersortingId) => dispatch(filterSetSortById(filtersortingId)),
    applyFilters: () => dispatch(applyFilters())
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilter)