import React from "react"
import { TouchableOpacity, Text, Dimensions, View } from "react-native"
import { Item, Left, Body, Right, Button, Icon } from "native-base"
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

export default (props) => {
    _menu = null;

    setMenuRef = ref => {
        this._menu = ref;
    };

    const hideMenu = () => {
        this._menu.hide();
    };

    showMenu = () => {
        this._menu.show();
    };

    const {
        styles,
        all_catalogs,
        catalogName,
        catalogId,
        handleChangeCatalog
    } = props
    return (
        <Menu
            ref={this.setMenuRef}
            style={{
                width: (Dimensions.get("window").width * 60 / 100),
                marginLeft: Dimensions.get("window").width * 10 / 100
            }}
            button={
                <Item style={{ ...styles.row, borderBottomWidth: 0 }} onPress={this.showMenu} >
                    <Left style={{flex: 1}}>
                        <Text style={styles.filterTitle}>
                            Category
                    </Text>
                    </Left>

                    <Body style={{flex: 1}}>
                        <Text
                            style={{
                                ...styles.filterSubTitle,
                                // width: Dimensions.get("window").width * 40 / 100
                            }}
                        >{catalogName}</Text>
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
            {props.all_catalogs.map(catalog => (
                <MenuItem
                    onPress={() => {
                        handleChangeCatalog(catalog.id, catalog.text, catalog.imageURL);
                        hideMenu()
                    }}
                >
                    {catalog.text}
                </MenuItem>
            ))}
        </Menu>
    )
}