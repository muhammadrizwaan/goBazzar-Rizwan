import React from "react"
import { SafeAreaView, View, Text, Image, TouchableOpacity, } from "react-native"
// import { Container, Content } from "native-base"
import AsyncStorage from '@react-native-community/async-storage';
import HistoryForm from "../../Components/ProductComponents/HistoryForm"
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import Header from "../../Components/CategoryProductComponents/CategoryHeader"
import styles from "../../Styles/ProductDetailStyles/ProductTabStyles"
import { ListItem, Icon, Right, Body, Left, Button, Container, Content } from 'native-base'
// import { NavigationEvents } from 'react-navigation'
import IoniIcons from "react-native-vector-icons/Ionicons"



class HistoryScreen extends React.Component {
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
    async componentDidMount() {
        this.didMountData()
    }
    async didMountData() {
        console.log('didmontdata called')
        try {
            const myArray = await AsyncStorage.getItem("Products");
            if (myArray != null) {
                let arr = JSON.parse(myArray)
                this.setState({ HistoryData: arr })
            }
            console.log('state array', this.state.HistoryData)
        }
        catch (e) {
            console.log("Error in Async Storage to get History")
        }
    }
    async deleteHistory() {

        await AsyncStorage.removeItem("Products");
        this.setState({HistoryData:[]})
        await this.didMountData()
    }
    render() {
        const { navigation } = this.props
        const { HistoryData } = this.state
        return (
            <Container>
                <SafeAreaView />
                <ListItem icon style={{ backgroundColor: "white", marginLeft: 0, paddingHorizontal: 5 }} noBorder>
                    <Left>
                        <Button transparent
                        onPress={() => navigation.goBack()}
                        >
                            <IoniIcons name="ios-arrow-back" size={25} style={{ color: "#727C8E" }} />
                        </Button>
                    </Left>
                    <Body>
                        <Text style={{
                            fontSize: 20,
                            color: "#8ea725",
                            fontWeight: 'bold',
                            fontFamily: "LexendDeca-Regular",
                        }}>
                            History
                        </Text>
                    </Body>
                    <Right>
                        <Menu
                            ref={this.setMenuRef}
                            button={
                                <Button transparent onPress={this.showMenu}>
                                    <Icon name="md-more" style={{ color: '#1E2E50' }} />
                                </Button>
                            }
                        >
                            <MenuItem
                                onPress={() => {
                                    this.hideMenu()
                                    this.deleteHistory()
                                }}
                            >
                                Remove
                            </MenuItem>
                        </Menu>
                    </Right>
                </ListItem>
                {/* <Header
                    heading="History"
                    navigation={navigation}
                /> */}
                <Content contentContainerStyle={{ paddingHorizontal: 25 }}>
                    {HistoryData.length > 0 ?
                        HistoryData.map((HistoryData) => (
                            <HistoryForm
                                HistoryData={HistoryData}
                                navigation={navigation}
                            />
                        )) :
                        <View style={{ marginTop: 20 }}>
                            <Text
                                style={{
                                    alignSelf: 'center',
                                    fontSize: 15,
                                    color: "#999999",
                                    fontFamily: "LexendDeca-Regular"
                                }}
                            >
                                No Products
                            </Text>
                        </View>
                    }
                </Content>
            </Container>
        )
    }
}



export default HistoryScreen