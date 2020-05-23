import React from 'react'
import { Item, Left, Body, Right, Text } from "native-base"

import styles from "../../Styles/ProfileScreenStyles/LoggedInStyles"

export default ({
    text,
    indicatorNumber,
    onPress
}) => (
    <Item icon style={{ marginLeft: 0, borderBottomWidth: 0, marginVertical: 10 }} onPress={onPress} noBorder>
        <Left style={{flex: 1}}>
            <Text style={styles.storeAndCompare}>{text}</Text>
        </Left>
        {/* <Body /> */}
        {indicatorNumber.length > 0 && <Right style={{ paddingRight: 0 }}>
            <Text style={styles.numIndicator}>{indicatorNumber}</Text>
        </Right>}
    </Item>
)