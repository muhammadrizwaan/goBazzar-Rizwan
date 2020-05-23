import React from "react"

import { View, Text, Image, TouchableOpacity, Linking, Platform, Dimensions } from "react-native"
import { Button, Content, ListItem, Left, Body, Right } from "native-base"
import styles from "../../Styles/ProductDetailStyles/StoreCardStyles"

import { Bar } from "react-native-progress"

export default ({ productRatings, averageRating }) => {
    // console.warn(productRatings)
    return (
        <View
            style={{
                ...styles.container,

            }}
        >
            <View style={styles.storeCardHeading}>
                <Text
                    style={{
                        ...styles.storeNameText,
                        fontWeight: "bold"
                    }}
                >
                    Ratings and Reviews
                </Text>



            </View>

            <Text
                style={{
                    ...styles.product_name,
                    alignSelf: "center",
                    marginTop: 20
                }}
            >
                Overall Rating
            </Text>


            <Text
                style={{
                    ...styles.product_name,
                    alignSelf: "center",
                    // marginTop: 20,
                    fontSize: 44,
                    color: "#FF9800"
                }}
            >
               {averageRating}
            </Text>


            <ListItem icon  noBorder style={{marginLeft: 0}}>
                <Left style={{paddingRight: 5}}>
                    <Text>5</Text>
                </Left>
                <Body >
                   <Bar width={Dimensions.get("window").width - 80} color="#FF9800" progress={productRatings.AverageRating5/100} unfilledColor="#C4C4C4" borderWidth={0}/>
                </Body>
                <Right style={{ paddingLeft: 10,  paddingRight: 0}}>
                    <Text>{productRatings.Rating5}</Text>
                </Right>
            </ListItem>


            <ListItem icon noBorder style={{marginLeft: 0}}>
                <Left style={{paddingRight: 5}}>
                    <Text>4</Text>
                </Left>
                <Body >
                   <Bar width={Dimensions.get("window").width - 80} color="#FF9800" progress={productRatings.AverageRating4/100} unfilledColor="#C4C4C4" borderWidth={0}/>
                </Body>
                <Right style={{ paddingLeft: 10, paddingRight: 0}}>
                    <Text>{productRatings.Rating4}</Text>
                </Right>
            </ListItem>


            <ListItem icon noBorder style={{marginLeft: 0}}>
                <Left style={{paddingRight: 5}}>
                    <Text>3</Text>
                </Left>
                <Body >
                   <Bar width={Dimensions.get("window").width - 80} color="#FF9800" progress={productRatings.AverageRating3/100} unfilledColor="#C4C4C4" borderWidth={0}/>
                </Body>
                <Right style={{ paddingLeft: 10, paddingRight: 0}}>
                    <Text>{productRatings.Rating3}</Text>
                </Right>
            </ListItem>


            <ListItem icon noBorder style={{height: 50}} style={{marginLeft: 0}}>
                <Left style={{paddingRight: 5}}>
                    <Text>2</Text>
                </Left>
                <Body >
                   <Bar width={Dimensions.get("window").width - 80} color="#FF9800" progress={productRatings.AverageRating2/100} unfilledColor="#C4C4C4" borderWidth={0}/>
                </Body>
                <Right style={{ paddingLeft: 10, paddingRight: 0}}>
                    <Text>{productRatings.Rating2}</Text>
                </Right>
            </ListItem>

            <ListItem icon noBorder style={{marginLeft: 0}}>
                <Left style={{paddingRight: 5}}>
                    <Text>1</Text>
                </Left>
                <Body >
                   <Bar width={Dimensions.get("window").width - 80} color="#FF9800" progress={productRatings.AverageRating1/100} unfilledColor="#C4C4C4" borderWidth={0}/>
                </Body>
                <Right style={{ paddingLeft: 10, paddingRight: 0}}>
                    <Text>{productRatings.Rating1}</Text>
                </Right>
            </ListItem>
        </View>
    )
}
