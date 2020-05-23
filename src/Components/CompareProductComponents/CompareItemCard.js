import React from "react"
import { Image, Text } from "react-native"
import { ListItem, Left, Body, Right, Icon, Button } from "native-base"

export default ({ product, handleRemoveProductFromCompare, categoryId }) => (
    <ListItem icon style={{height: 100, marginLeft: 0}}>
        <Left>
            <Image 
                source={{ uri : product.img}}
                style={{ width: 77, height: 77, borderRadius: 20, }}
            />
        </Left>
        <Body style={{borderBottomWidth: 0}}>
            <Text
                style={{
                    fontSize: 12,
                    fontFamily: "LexendDeca-Regular",
                    color: "#515C6F"
                }}
                numberOfLines={2}
            >
                {product.name}
            </Text>
        </Body>
        <Right style={{ alignSelf: "center", paddingTop: 0, borderBottomWidth: 0 }}>
           <Button 
                transparent
                onPress={() => handleRemoveProductFromCompare( categoryId, product.ID )}
           >
            <Icon name="close" style={{color: "black", marginTop: -3, fontSize: 25, opacity: 0.5 }}/>
           </Button>
        </Right>
    </ListItem>
)