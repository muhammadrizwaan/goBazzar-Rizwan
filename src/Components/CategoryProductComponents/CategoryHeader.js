import React from 'react'
import { ListItem, Icon, Right, Body, Left, Text, Button } from 'native-base'

import IoniIcons from "react-native-vector-icons/Ionicons"

export default ({
    navigation,
    heading
}) => (
    <ListItem icon style={{backgroundColor: "white", marginLeft: 0, paddingHorizontal: 5}} noBorder>
        <Left>
            <Button transparent onPress={() => navigation.goBack()}>
                <IoniIcons name="ios-arrow-back" size={25} style={{color: "#727C8E"}}/>
            </Button>
        </Left>
        <Body>
            <Text style={{ 
                fontSize: 20,
                color: "#8ea725",
                fontWeight: 'bold',
                fontFamily: "LexendDeca-Regular",
                // fontSize: 18, color: "#727C8E", fontWeight: "bold" 
                }}>
                {heading}
            </Text>
        </Body>
        <Right>
            {/* <Icon name="ios-arrow-backward"/> */}
        </Right>
    </ListItem>
)