import React, { PureComponent } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import styles from "../../Styles/HomeStyles/ProductCardStyles"

// import { useNavigation } from "@react-navigation/native"

export default class extends PureComponent {
    render() {
        const { category, navigation } = this.props
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.navigate('SubCategories', {
                    heading: category.name,
                    id: category.id
                })}
            >
                <View style={{ ...styles.container}}>
                {/* <View style={{ ...styles.container, height: 150 }}> */}
                    <Image
                        source={{ uri: category.img }}
                        style={styles.imgStyle}
                        resizeMode="contain"
                    />
                    <View style={{ margin: 7, marginTop: "auto", marginTop: 5, }}>
                        <Text
                            numberOfLines={3}
                            style={{
                                ...styles.titleStyle,
                                textAlign: "center",
                                alignSelf: "center"
                            }}
                        >
                            {category.name}
                        </Text>
                       
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

// export default ({
//     category,
// }) => {
//     const navigation = useNavigation()
//     return (
//         <TouchableOpacity
//             activeOpacity={0.9}
//             onPress={() => navigation.navigate('SubCategories', {
//                 heading: category.name,
//                 id: category.id
//             })}
//         >
//             <View style={{...styles.container, height: 150}}>
//                 <Image
//                     source={{ uri: category.img }}
//                     style={styles.imgStyle}
//                     resizeMode="contain"
//                 />
//                 <View style={{ margin: 7, marginTop: "auto", marginTop: 5, }}>
//                     <Text 
//                         numberOfLines={3} 
//                         style={{
//                             ...styles.titleStyle,
//                             textAlign: "center",
//                             alignSelf: "center"
//                         }}
//                     >
//                         {category.name}
//                     </Text>
//                     {/* <Text style={styles.priceStyle} numberOfLines={1}>{`${product.price}`}</Text> */}
//                 </View>
//             </View>
//         </TouchableOpacity>
//     )
// }