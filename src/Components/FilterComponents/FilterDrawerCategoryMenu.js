import React from "react"
import { TouchableOpacity, Text, Dimensions, View } from "react-native"
import { Item, Left, Body, Right, Spinner, Icon } from "native-base"

import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

export default (props) => {
    _menu2 = null;

    setMenuRef = ref => {
        this._menu2 = ref;
    };

    const hideMenu = () => {
        this._menu2.hide();
    };

    showMenu = () => {
        this._menu2.show();
    };
    const {
        styles, categoryName, categoryId,
        catalog_categories, isCatalogCategoriesLoading,
        handleChangeCategory
    } = props;
    return (
        <Menu
            ref={this.setMenuRef}
            style={{
                width: (Dimensions.get("window").width * 60 / 100),
                marginLeft: Dimensions.get("window").width * 10 / 100
            }}
            button={
                <Item style={{ ...styles.row, borderBottomWidth: 0 }} onPress={this.showMenu} >
                    <Left>
                        <Text style={styles.filterTitle}>
                            Sub Category
                    </Text>
                    </Left>


                    <Body>
                        {
                            isCatalogCategoriesLoading ?
                                <Spinner 
                                    color="#8daf00"
                                    size={20}
                                />
                                :
                                <Text
                                    style={{
                                        ...styles.filterSubTitle,
                                        // width: Dimensions.get("window").width * 40 / 100
                                    }}
                                >{categoryName}</Text>
                        }
                    </Body>

                    <Right style={{flex: 1,}}>
                            <View 
                                transparent
                                style={{
                                    backgroundColor: "#ccd0d6",
                                    borderRadius: 13,
                                    width: 25,
                                    height: 25,
                                    padding: 0,
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                                icon
                            >
                                <Icon 
                                    name="ios-arrow-forward"
                                    style={{
                                        color: "#727C8E",
                                        fontSize: 15,
                                        alignSelf: "center"
                                    }}
                                />
                            </View>
                    </Right>
                </Item>
            }
        >
            {catalog_categories.map(category => (
                <MenuItem
                    onPress={() => {
                        hideMenu()
                        handleChangeCategory(category.id, category.text)
                        // category.id
                        // category.text
                    }}

                >{category.text}</MenuItem>
            ))}
        </Menu>
    )
}