import React, { PureComponent } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import styles from "../../Styles/HomeStyles/ProductCardStyles"

// import { useNavigation } from "@react-navigation/native"

export default class extends PureComponent {
    render() {
        const { product, navigation } = this.props
        return (
            <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
                if (!product.isSample) {
                    navigation.navigate("ProductDetail", {
                        id: product.ID
                    })
                }
            }}
        >
            <View style={styles.container}>
                <Image
                    source={{ uri: product.img }}
                    style={styles.imgStyle}
                    resizeMode="contain"
                />
                <View style={{ margin: 7, marginTop: "auto" }}>
                    <Text numberOfLines={1} style={styles.titleStyle}>{product.post_title}</Text>
                    <Text style={styles.priceStyle} numberOfLines={1}>{`AED ${product.price}`}</Text>
                </View>
            </View>
        </TouchableOpacity>
        )
    }
}

// export default ({
//     product,
// }) => {
//     const navigation = useNavigation()
//     return (
//         <TouchableOpacity
//             activeOpacity={0.9}
//             onPress={() => {
//                 if (!product.isSample) {
//                     navigation.navigate("ProductDetail", {
//                         id: product.ID
//                     })
//                 }
//             }}
//         >
//             <View style={styles.container}>
//                 <Image
//                     source={{ uri: product.img }}
//                     style={styles.imgStyle}
//                     resizeMode="contain"
//                 />
//                 <View style={{ margin: 7, marginTop: "auto" }}>
//                     <Text numberOfLines={1} style={styles.titleStyle}>{product.post_title}</Text>
//                     <Text style={styles.priceStyle} numberOfLines={1}>{`AED ${product.price}`}</Text>
//                 </View>
//             </View>
//         </TouchableOpacity>
//     )
// }