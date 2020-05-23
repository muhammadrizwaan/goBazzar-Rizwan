import React from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
// import StoreHeader from "../CategoryProductComponents/CategoryHeader"
import { Item, Left, Right, Body } from "native-base"

import StarRating from "react-native-star-rating"

import styles from "../../Styles/StoreDetailStyles/StoreTabStyles"
import productStyles from "../../Styles/ProductDetailStyles/ProductTabStyles"
import detailStyles from "../../Styles/ProductDetailStyles/DetailTabStyles"

import IoniIcons from "react-native-vector-icons/Ionicons"

import StoreSearch from "./StoreSearch"

export default ({ navigation, activeTabKey, changeTab, store }) => (
    <View style={styles.container}>


        <View style={styles.imgContainer}>
            <Image
                resizeMode={"contain"}
                source={{ uri: store.img }}
                style={styles.imgStyle}
            />
        </View>

        <Text style={styles.storeName}>{store.storeName}</Text>



        {/* <View style={{ ...productStyles.toolsContainer, alignSelf: "center", marginVertical: 10 }}> */}

            <StoreSearch />
            {/* <StarRating
                disabled={false}
                maxStars={5}
                rating={store.rating}
                starSize={10}
                fullStarColor="#FFDB26"
                halfStarColor="#FFDB26"
            /> */}
            {/* <Text
                style={{ marginHorizontal: 5, opacity: 0.6 }}
            >
                (25)
                    </Text> */}

            {/* <View
                style={productStyles.ratingContainer}
            >
                <IoniIcons name="ios-star" style={{ color: "white" }} size={9} />
                <Text style={{ fontSize: 9, color: "white", marginLeft: 5 }}>4.0</Text>
            </View> */}

        {/* </View> */}

        {/* <Item style={{borderColor:"transparent", marginTop: 10, marginLeft: 5, marginRight: 5}}>
            <Left>
                <TouchableOpacity
                    style={activeTabKey === "reviews" ? detailStyles.activeButton : detailStyles.inActiveButton}
                    onPress={() => changeTab("reviews")}
                >
                    <Text
                        style={activeTabKey === "reviews" ? detailStyles.activeText : detailStyles.inActiveText}
                    >
                        Reviews
                    </Text>
                </TouchableOpacity>
            </Left>

            <Body>
                <TouchableOpacity
                    style={activeTabKey === "info" ? detailStyles.activeButton : detailStyles.inActiveButton}
                    onPress={() => changeTab("info")}
                >
                    <Text
                        style={activeTabKey === "info" ? detailStyles.activeText : detailStyles.inActiveText}
                    >
                        Info
                    </Text>
                </TouchableOpacity>
            </Body>

            <Right>
                <TouchableOpacity
                    style={activeTabKey === "policies" ? detailStyles.activeButton : detailStyles.inActiveButton}
                    onPress={() => changeTab("policies")}
                >
                    <Text
                        style={activeTabKey === "policies" ? detailStyles.activeText : detailStyles.inActiveText}
                    >
                        Policies
                    </Text>
                </TouchableOpacity>
            </Right>
        </Item> */}
    </View>
)