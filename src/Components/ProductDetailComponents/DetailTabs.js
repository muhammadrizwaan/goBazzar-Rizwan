import React from "react"
import { View, Text, ScrollView, TouchableOpacity, findNodeHandle, Dimensions, requestAnimationFrame, SafeAreaView } from "react-native"
import { Button } from "native-base"
import IoniIcons from "react-native-vector-icons/Ionicons"
import styles from "../../Styles/ProductDetailStyles/DetailTabStyles"

import { useNavigation } from "@react-navigation/native"

export default class extends React.Component {
    constructor(props) {
        super(props)

        this._nodes = new Map();

        this.state = {
            current_position_x: 0,
            current_index: 0
        }
    }
    scrollToElement = (event) => {

        // const current_index = this.state.current_index;
        // const current_position_x = this.state.current_position_x;

        // // if (indexOf !== current_index) {
        //     const node = this._nodes.get(indexOf);
        //     const position = findNodeHandle(node);
        //     const Width = Dimensions.get('window').width
        //     const new_position = position / 80;

        //     console.warn("position", position);
        //     console.warn("width", Width);
        //     console.warn("new_position", new_position)
        //     console.warn("old_position", this.state.current_position_x)

        //     if (indexOf === 0) {
        //         this.tabScroll.scrollTo({ x: 0, y: 0, animated: true });
        //         this.setState({
        //             current_index: indexOf,
        //             current_position_x: position
        //         })
        //     } else if (position > this.state.current_position_x && indexOf !== (this.props.tabs.length - 1)) {
        //         console.warn("not last")
        //         this.tabScroll.scrollTo({ x: new_position * 3, y: 0, animated: true });
        //         this.setState({
        //             current_index: indexOf,
        //             current_position_x: new_position
        //         })
        //     } else {
        //         console.warn("last")
        //         this.tabScroll.scrollTo({ x: position, y: 0, animated: true });
        //     }




        // console.warn("width", Dimensions.get('window').width);
        // console.warn("position", position)

        // const new_position = position - (Width * 5)

        // console.warn(new_position)
        // if (position > this.state.current_position_x) {
        //     this.tabScroll.scrollTo({ x: new_position, y: 0, animated: true });
        // } else {
        //     this.tabScroll.scrollTo({ x: -new_position, y: 0, animated: true });
        // }
        // this.setState({
        //     current_position_x: position
        // })
        // }


    }
    // onPress = (evt) => {
    //     // console.log(`x coord = ${evt.nativeEvent.locationX}`);
    //     // console.log(`Y coord = ${evt.nativeEvent.locationY}`);

    //     // this.refs.mainListView.scrollTo({ y: offsetY })

    //     this.scroll.scrollTo({ x: evt.nativeEvent.locationX, y: evt.nativeEvent.locationY, animated: true })

    // }

    render() {
        const { tabs, activeTabKey, changeTab, navigation } = this.props
        return (
            <View
                style={activeTabKey === "product" ? styles.container : styles.containerWithShadow}
            >
                <SafeAreaView />
                <TouchableOpacity transparent onPress={() => navigation.goBack()} style={{ marginHorizontal: 10, width: 20 }}>
                    <IoniIcons name="ios-arrow-back" size={25} style={{ color: "#727C8E" }} />
                </TouchableOpacity>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    ref={(node) => { this.tabScroll = node }}
                >
                    {
                        tabs.map((tab, index) => (
                            <TouchableOpacity
                                // ref={ref => { this._nodes.set(index, ref) }}
                                ref={element => { this[`buttonNode${index}`] = element }}
                                key={tab.id}
                                style={activeTabKey === tab.key ? styles.activeButton : styles.inActiveButton}
                                onPress={() => changeTab(tab.key)}
                                // onPress={this.onPress}
                                // onPress={() => this.scrollToItem(index)}
                            >
                                <Text
                                    style={activeTabKey === tab.key ? styles.activeText : styles.inActiveText}
                                >
                                    {tab.name}
                                </Text>
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>
            </View>
        )
    }
}


// export default ({
//     tabs,
//     activeTabKey,
//     changeTab
// }) => {
//     const navigation = useNavigation()
//     return (
//         <View 
//             style={activeTabKey === "product" ? styles.container : styles.containerWithShadow}
//         >
//             <Button transparent onPress={() => navigation.goBack()} style={{marginRight: 5}}>
//                 <IoniIcons name="ios-arrow-back" size={25} style={{ color: "#8EA625" }} />
//             </Button>
//             <ScrollView
//                 showsHorizontalScrollIndicator={false}
//                 horizontal={true}
//             >
//                 {
//                     tabs.map(tab => (
//                         <TouchableOpacity
//                             key={tab.id}
//                             style={activeTabKey === tab.key ? styles.activeButton : styles.inActiveButton}
//                             onPress={() => changeTab(tab.key)}
//                         >
//                             <Text
//                                 style={activeTabKey === tab.key ? styles.activeText : styles.inActiveText }
//                             >
//                                 {tab.name}
//                             </Text>
//                         </TouchableOpacity>
//                     ))
//                 }
//             </ScrollView>
//         </View>
//     )
// }