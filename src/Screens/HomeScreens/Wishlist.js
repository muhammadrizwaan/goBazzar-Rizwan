import React from "react"
import { SafeAreaView, ImageBackground } from "react-native"
import { Container, Content, View, Text } from "native-base"
import WishlistHeader from "../../Components/CategoryProductComponents/CategoryHeader"
import Spinner from "react-native-loading-spinner-overlay"
import styles from "../../Styles/ProfileScreenStyles/LoggedInStyles"
import stylesbtn from '../../Styles/ProfileScreenStyles/NotLoggedInStyles'
import { Button } from "native-base";
import WishListProduct from "../../Components/GeneralComponents/ProductTemplate"
import axios from "axios"
import Apis from "../../Api/Apis"
import WishlistLoader from "../../Components/HomeComponents/ProductLoader";
import { connect } from "react-redux"


class Wishlist extends React.Component {

    render() {
        const { navigation, userId } = this.props
        const { wishlist_loading, wishlist } = this.props
        return (
            <Container style={{ flex:1 }}>
                <ImageBackground
                    source={require("../../Assets/BackgroundPicture/bg.png")}
                    style={{flex:1}}
                >
                <SafeAreaView />
                <Content contentContainerStyle={{ paddingTop: 35,padding:25 }}>
                    <Text style={styles.nameText}>Wishlist</Text>
                    <WishlistLoader
                        loading={wishlist_loading}
                    />
                    {
                        wishlist.length > 0 ?
                            wishlist.map((wishlist) => (
                                <WishListProduct
                                    key={wishlist.wishlistId}
                                    wishlist={wishlist}
                                    navigation={navigation}
                                />
                            ))
                            :
                            userId.length > 0 ?
                                <View style={{ marginTop: 20 }}>
                                    <Text
                                        style={{
                                            color: "black",
                                            opacity: 0.4,
                                            // textAlign: "center"
                                        }}
                                    >
                                        Your wishlist is Empty
                            </Text>
                                </View>
                                :
                                <View style={{ marginTop: 20 }}>
                                    <Text
                                        style={{
                                            color: "black",
                                            opacity: 0.4,
                                            // textAlign: "center"
                                        }}
                                    >
                                        Login or Sign Up to use Wishlist
                            </Text>
                                    <Button
                                        transparent
                                        full
                                        style={stylesbtn.signInButton}
                                        onPress={() => navigation.navigate('My Profile')}
                                    >
                                        <Text style={stylesbtn.signInButtonText}>Login</Text>
                                    </Button>
                                </View>
                    }
                </Content>
                </ImageBackground>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    userId: state.auth.user.userId,
    wishlist_loading: state.userWishlist.wishlist_loading,
    wishlist: state.userWishlist.wishlist
})
export default connect(mapStateToProps)(Wishlist)