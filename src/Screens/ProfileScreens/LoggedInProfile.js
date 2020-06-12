import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native"
import { Container, Content, ListItem as Item, Left, Body, Right } from "native-base"

import styles from "../../Styles/ProfileScreenStyles/LoggedInStyles"

import MenuButtonTemplate from './MenuButtonTemplate'

import { onLogout } from "../../actions/authActions"
import { connect } from "react-redux"

const LoggedInProfile =  ({ navigation, onLogout, user }) => (
    <Container style={{ flex: 1 }}>
    <ImageBackground
        source={require("../../Assets/BackgroundPicture/bg.png")}
        style={{ flex: 1 }}
    >
        <Content style={{padding:25}}>
            <Text style={styles.nameText}>{user.firstName} {user.lastName}</Text>
            <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
                {/* <Text style={styles.editText}>Edit Profile</Text> */}
                <Text style={styles.menuText}>Edit Profile</Text>
            </TouchableOpacity>

            <View style={styles.lineBreak} />


            {/* <MenuButtonTemplate
                text="Wishlists"
                indicatorNumber={""}
                onPress={() => navigation.navigate("Wishlist")}
            /> */}

            {/* <MenuButtonTemplate
                text="My Alerts"
                indicatorNumber={""}
                // onPress={() => navigation.navigate("Alerts")}
                onPress={() => {}}
            /> */}

            <MenuButtonTemplate
                text="My History"
                indicatorNumber={""}
                onPress={() => {}}
                onPress={() => navigation.navigate("History")}
            />

            <MenuButtonTemplate
                text="My Reviews"
                indicatorNumber={""}
                onPress={() => navigation.navigate("Reviews")}
            />

            {/* <MenuButtonTemplate
                text="My Feed"
                indicatorNumber={""}
                onPress={() => { }}
            /> */}

            {/* <MenuButtonTemplate
                text="My Scans"
                indicatorNumber={""}
                // onPress={() => navigation.navigate("Scans")}
                onPress={() => {}}
            /> */}

            <View style={styles.lineBreak} />

            <MenuButtonTemplate
                text="Reset Password"
                indicatorNumber={""}
                onPress={() => navigation.navigate("ResetPasswordScreen")}
            />
            <MenuButtonTemplate
                text="Logout"
                indicatorNumber={""}
                onPress={() => onLogout()}
            />
        </Content>
        </ImageBackground>
    </Container>
)

const mapDispatchToProps = dispatch => ({
    onLogout: () => dispatch(onLogout())
})

export default connect(undefined, mapDispatchToProps)(LoggedInProfile)