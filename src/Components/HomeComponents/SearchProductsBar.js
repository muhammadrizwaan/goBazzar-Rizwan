import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Input, Button } from 'native-base'
import styles from '../../Styles/HomeStyles/SearchBarStyles'


import IoniIcons from "react-native-vector-icons/Ionicons"
import { Item, ListItem, Right, Left, Body } from "native-base"
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

export default ({
    navigation, search,
    handleOnSearch, handleTextChange,
    isCatalogSelected, all_catalogs,
    handleSetSelectedCatalog, catalogImage, catalogId
}) => {
    _menu3 = null

    setMenuRef = ref => {
        this._menu3 = ref;
    };

    hideMenu = () => {
        this._menu3.hide();
    };

    showMenu = () => {
        this._menu3.show();
    };
    return (
        <Item
            style={styles.container}
        >
            <Button transparent onPress={() => navigation.goBack()}>
                <IoniIcons
                    name="ios-arrow-back"
                    size={20}
                    style={{
                        marginTop: 4,
                        color: "black",
                        opacity: 0.4,
                    }}
                />
            </Button>

            <Input
                placeholder="What can we help you…"
                placeholderTextColor="#000000"
                style={styles.inputStyle}
                autoFocus={true}
                value={search}
                onChangeText={(val) => {
                    handleTextChange(val)
                    // handleOnSearch(val)
                }}
                onSubmitEditing={(val) => {
                    // handleTextChange(val)
                    handleOnSearch(val)
                }}
                returnKeyType="search"
                // onSubmitEditing={handleOnSearch}
                autoCapitalize={"none"}
            // keyboardType="web-search"
            />
            <TouchableOpacity
                style={styles.barCodeIconStyle}
            >
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Menu
                        ref={this.setMenuRef}
                        button={
                            <TouchableOpacity onPress={this.showMenu}>
                                {
                                    isCatalogSelected && catalogImage.length > 1 ?
                                        <Image
                                            source={{ uri: catalogImage }}
                                            style={{ width: 40, height: 40, borderRadius: 20 }}
                                        />
                                        :
                                        <View style={styles.dropMenuButton}>
                                            {/* <IoniIcons
                                                name="ios-arrow-down"
                                                size={20}
                                                style={{
                                                    marginTop: 4,
                                                    color: "black",
                                                    opacity: 0.4
                                                    // color: "#8daf00",

                                                }}
                                            /> */}
                                            <Image 
                                                source={{uri :"https://pngimage.net/wp-content/uploads/2018/05/categories-icon-png-3.png"}}
                                                style={{width: 20, height: 20}}
                                            />
                                        </View>
                                }
                            </TouchableOpacity>
                        }
                    >
                        <ListItem
                            icon
                            onPress={() => {
                                handleSetSelectedCatalog("", "", "")
                                this.hideMenu()
                            }}
                            style={{
                                width: 200
                            }}
                            noBorder
                        >
                            <Left>
                                <Image 
                                    source={{uri: "https://pngimage.net/wp-content/uploads/2018/05/categories-icon-png-3.png"}}
                                    style={{
                                        width: 20,
                                        height: 20
                                    }}
                                />
                                {/* <IoniIcons
                                    name="ios-arrow-down"
                                    size={20}
                                    style={{
                                        marginTop: 4,
                                        color: "black",
                                        opacity: 0.4
                                        // color: "#8daf00",

                                    }}
                                /> */}
                            </Left>
                            <Body>
                                <Text style={styles.titleStyle}>All Categories</Text>
                            </Body>
                            <Right />
                        </ListItem>
                        {/* <MenuItem
                            onPress={() => {
                                handleSetSelectedCatalog("", "")
                                this.hideMenu()
                            }}
                        >
                            All Categories
                        </MenuItem> */}
                        {all_catalogs.map(catalog => (
                            <ListItem
                                icon
                                onPress={() => {
                                    handleSetSelectedCatalog(catalog.id, catalog.text, catalog.imageURL)
                                    this.hideMenu()
                                }}
                                style={{
                                    width: 200
                                }}
                                noBorder
                            >
                                <Left >
                                    <Image
                                        source={{
                                            uri: catalog.imageURL
                                        }}
                                        style={{
                                            width: 25,
                                            height: 25
                                        }}
                                    />
                                </Left>
                                <Body style={{flex: 1}}>
                                    <Text style={styles.titleStyle}>{catalog.text}</Text>
                                </Body>
                                <Right />
                            </ListItem>
                            // <TouchableOpacity
                            //     style={{
                            //         height: 30,
                            //         width: 200,
                            //         paddingLeft: 10,
                            //         paddingRight: 10,
                            //         display: "flex",
                            //         flexDirection: "row",

                            //     }}
                            //     onPress={() => {
                            //         handleSetSelectedCatalog(catalog.id, catalog.imageURL)
                            //         this.hideMenu()
                            //     }}
                            // >
                            //     <Image
                            //         source={{ uri: catalog.imageURL }}
                            //         style={{ width: 20, height: 20 }}
                            //     />
                            //     <Text>{catalog.text}</Text>
                            // </TouchableOpacity>
                        ))}
                        {/* <MenuDivider /> */}
                        {/* <MenuItem onPress={this.hideMenu}>Menu item 4</MenuItem> */}
                    </Menu>
                </View>
            </TouchableOpacity>
        </Item>
    )
}