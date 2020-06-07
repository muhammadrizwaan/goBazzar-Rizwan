import React from "react"
import { View, Text, Image, TouchableOpacity, Linking } from "react-native"
import { ListItem, Right, Left, Body } from "native-base"

import styles from "../../Styles/ProductDetailStyles/StoreCardStyles"

export default ({
    store
}) => (
        <View style={{
            ...styles.container,
            marginLeft: 10,
            marginRight: 10,
            borderBottomWidth: 0,
            // resizeMode:"contain"
            height: 90
        }}>
            <Text numberOfLines={1} style={[styles.product_name,{paddingHorizontal:15}]}>{store.post_title}</Text>
            <ListItem
                icon
            // style={{
            //     ...styles.container,
            //     marginLeft: 10,
            //     marginRight: 10,
            //     borderBottomWidth: 0,
            //     // resizeMode:"contain"
            //     height: 85
            // }}
            >
                <Left style={{ borderBottomWidth: 0, marginLeft:0 }}>
                    <Image
                        resizeMode="contain"
                        source={{ uri: store.store_img }}
                        style={{ width: 50, height: 50, }}
                    />
                </Left>
                <Body style={{ borderBottomWidth: 0 }}>
                    <View >
                        {/* <Text numberOfLines={2} style={styles.product_name}>{store.post_title}</Text> */}
                        {store.offerPrice===1?<View></View>:<Text
                            style={{
                                ...styles.product_price,
                                textDecorationLine: store.offerPrice ? 'line-through' : "none",
                                color: store.offerPrice ? "#C9C9C9" : "#8EA625"
                            }}
                        >{`AED ${store.regularPrice}`}</Text>}

                        <Text
                            style={{
                                ...styles.product_price,
                                display: store.offerPrice ? "flex" : "none"
                            }}
                        >
                            {store.offerPrice===1?`AED ${store.regularPrice}`:`AED ${store.offerPrice}`}
                        </Text>
                        {/* <Text style={styles.product_name}>Free Shipping</Text> */}
                    </View>
                </Body>

                <Right style={{ borderBottomWidth: 0 }}>
                    <View style={{ width: 100, height: 40, }}>
                        <TouchableOpacity
                            style={styles.shopButton}
                            onPress={() => Linking.openURL(store.URL)}
                        >
                            <Text style={styles.shopText}>Go to Shop</Text>
                        </TouchableOpacity>
                    </View>

                </Right>
            </ListItem>
        </View>
    )



    // <View
    //         style={styles.container}
    //     >
    //         <View style={styles.storeCardHeading}>

                // <Image
                //     source={{ uri: store.store_img }}
                //     style={{ width: 50, height: 50, }}
                // />

    //             {/* <View style={{ width: "80%", justifyContent: "space-around" }}>
    //                 <Text style={styles.storeNameText}>{store.store_name}</Text>

    //                 <Text style={styles.product_name}>{store.post_title}</Text>
    //             </View> */}
    //         </View>

    //         <View style={{ ...styles.storeCardHeading, marginTop: 15 }}>
    //             <View style={{ width: "40%", justifyContent: "space-around" }}>
    //                 {/* <Text style={styles.product_name}></Text> */}
    //                 <Text
    //                     style={{
    //                         ...styles.product_price,
    //                         textDecorationLine: 'line-through',
    //                         color: "#C9C9C9"
    //                     }}
    //                 >{`AED ${store.regularPrice}`}</Text>
    //                 <Text style={styles.product_price}>{`AED ${store.offerPrice}`}</Text>
    //                 {/* <Text style={styles.product_name}>Free Shipping</Text> */}
    //             </View>
                // <TouchableOpacity
                //     style={styles.shopButton}
                //     onPress={() => Linking.openURL(store.URL)}
                // >
                //     <Text style={styles.shopText}>Go to Shop</Text>
                // </TouchableOpacity>
    //         </View>
    //     </View>