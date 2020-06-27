import React from "react"
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native"
import styles from "../../Styles/ProductDetailStyles/ProductTabStyles"
import { Item, Button, Icon } from "native-base"
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import AsyncStorage from '@react-native-community/async-storage';
import { showMessage } from "react-native-flash-message"
class HistoryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            HistoryData: [],
        }
    }

    _menu = null;

    setMenuRef = ref => {
        this._menu = ref;
    };

    hideMenu = () => {
        this._menu.hide();
    };

    showMenu = () => {
        this._menu.show();
    };

    deleteHistory = async (index) => {
        let array = this.state.CartProducts;
        let tempArray = [];
        array.map((obj, index) => {
            if (!obj.isCheck) {
                tempArray.push(obj);
            }
        });
        this.setState({ CartProducts: tempArray })
        this.setState({ LongPress: false })
        this.UpdateChache(tempArray)
    }
    render() {
        const { navigation, HistoryData } = this.props
        return (
            <View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    {/* <TouchableOpacity style={{ flexDirection: 'row', }}
                        onPress={() => this.props.navigation.navigate("SearchScreen", { SearchData: HistoryData.Search })}> */}
                        <View style={{ flexDirection: 'row', }}>
                        <Image
                            source={require('../../Assets/HomeAssets/search.png')}
                            style={styles.iconStyle}
                        />
                        <View style={{ marginVertical: 10 }}>
                            <Text numberOfLines={1} style={[styles.HistoryInnerText, { fontSize: 15 }]}>{HistoryData.Search}</Text>
                            <Text numberOfLines={1} style={styles.HistoryInnerText}>{HistoryData.date}</Text>
                        </View>
                        </View>
                    {/* </TouchableOpacity> */}
                    {/* <Menu
                        ref={this.setMenuRef}
                        button={
                            <Button
                                transparent
                                onPress={this.showMenu}
                            >
                                <Icon name="md-more" style={{ color: '#1E2E50' }} />
                            </Button>
                        }
                    >
                        <MenuItem
                            onPress={() => {
                                this.hideMenu()

                                this.deleteHistory(index)
                            }}
                        >
                            Remove
                                    </MenuItem>
                    </Menu> */}
                </View>

                <View style={styles.HorizontalLine}></View>

            </View>
        )
    }
}

export default HistoryForm