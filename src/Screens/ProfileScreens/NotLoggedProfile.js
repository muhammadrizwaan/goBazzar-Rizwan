import React from "react"
import { Container, Content, Text, Button } from "native-base"
import { View, StatusBar, SafeAreaView, ImageBackground } from 'react-native'
import styles from "../../Styles/ProfileScreenStyles/NotLoggedInStyles"

import SignInForm from "../../Components/ProfileComponents/SignInForm"

import { useNavigation } from "@react-navigation/native"

export default () => {
    const navigation = useNavigation()
    return (
        <Container style={{ flex: 1 }}>
            <ImageBackground
                source={require("../../Assets/BackgroundPicture/bg.png")}
                style={{ flex: 1 }}
            >
                <Content style={{ padding: 25 }}>
                    <Text style={styles.signInText}>Sign In</Text>

                    <SignInForm
                        navigation={navigation}
                    />


                    {/* <Text style={styles.orText}>OR SIGN IN WITH</Text> */}

                    {/* <Button
                    transparent
                    full
                    style={styles.facebookButton}
                >
                    <Text style={styles.signInButtonText} uppercase={false}>Facebook</Text>
                </Button>
    
                <Button
                    transparent
                    full
                    style={{
                        ...styles.facebookButton,
                        backgroundColor: "#B23121",
                        marginTop: 10
                    }}
                >
                    <Text style={styles.signInButtonText} uppercase={false}>Google</Text>
                </Button> */}


                    {/* <Text style={styles.noAccountText}
                        onPress={() => navigation.navigate('ForgetScreen')}>
                        Forget Passwword?
                    </Text>

                    <Text style={styles.noAccountText}>
                        Don't have an account?{" "}
                        <Text
                            style={styles.signUpText}
                            onPress={() => navigation.navigate('SignUpScreen')}
                        >
                            SIGN UP
                    </Text>
                    </Text> */}
                </Content>
            </ImageBackground>
        </Container>
    )
}