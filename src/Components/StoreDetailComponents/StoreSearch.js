import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Input, Button } from 'native-base'
import styles from '../../Styles/HomeStyles/SearchBarStyles'


import IoniIcons from "react-native-vector-icons/Ionicons"
import { Item, ListItem, Right, Left, Body } from "native-base"



export default () => (
    <Item
        style={{
            ...styles.container,
            borderRadius: 20,
            marginLeft: 20,
            marginRight: 20,
            height: 40,
            marginTop: 20
        }}
    >
        <Button transparent onPress={() => navigation.goBack()}>
            <IoniIcons
                name="ios-search"
                size={20}
                style={{
                    marginTop: 4,
                    color: "black",
                    opacity: 0.4,
                }}
            />
        </Button>

        <Input
            placeholder="Search Products"
            placeholderTextColor="#000000"
            style={{
                ...styles.inputStyle,
                marginLeft: 5
            }}
            // autoFocus={true}
            value={""}
            onChangeText={(val) => {}}
            returnKeyType="search"
            // onSubmitEditing={handleOnSearch}
            autoCapitalize={"none"}
        // keyboardType="web-search"
        />

    </Item>
)