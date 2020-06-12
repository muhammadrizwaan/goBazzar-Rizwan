

import React, { useState } from "react"
import { View, Text, TextInput, ImageBackground } from "react-native"

import { Container, Content, Button } from "native-base"
import styles from '../../Styles/ProfileScreenStyles/NotLoggedInStyles'

import signUpValidation from "../../Validation/signUpValidation"

import axios from "axios"
import Apis from "../../Api/Apis"

import { onRegisterUser } from "../../actions/authActions"
import Spinner from 'react-native-loading-spinner-overlay';
import SignUpHeader from "../../Components/CategoryProductComponents/CategoryHeader"
import { connect } from "react-redux"

class SignUpForm extends React.Component {
    // const SignUpForm = ({ onRegisterUser, navigation }) => {
    // const [state, setState] = useState({
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            loading: false,
            errors: {},
            isErrorOccured: false
        }
    }
    onChangeText = (key, val) => {

        // setState(state => ({
        //     ...state,

        // }))



        if (this.state.isErrorOccured) {
            const user = {
                email: this.state.email.trim(),
                firstName: this.state.firstName.trim(),
                lastName: this.state.lastName.trim()
            }

            const { isValid, errors } = signUpValidation(user, this.state.password, this.state.confirmPassword)

            if (isValid) {
                this.setState({
                    // ...state,
                    errors: {},
                    [key]: val
                })
            } else {
                this.setState({
                    // ...state,
                    errors: errors,
                    [key]: val
                })
            }
        } else {
            this.setState({
                // ...state,
                [key]: val
            })
        }
    }

    handleSignUp = () => {
        const user = {
            email: this.state.email.trim(),
            firstName: this.state.firstName.trim(),
            lastName: this.state.lastName.trim()
        }

        const { isValid, errors } = signUpValidation(user, this.state.password, this.state.confirmPassword)
        if (isValid) {
            this.setState({
                // ...state,
                errors: {},
                loading: true,
                isErrorOccured: true
            })

            axios
                .post(Apis.register, {
                    FirstName: this.state.firstName.trim(),
                    LastName: this.state.lastName.trim(),
                    Email: this.state.email.trim(),
                    Password: this.state.password
                })
                .then(res => {

                    if (!res.data.code && res.data) {
                        this.props.onRegisterUser({
                            userId: res.data.UserId.toString(),
                            firstName: res.data.FirstName,
                            lastName: res.data.LastName,
                            email: res.data.Email,
                            language: "en",
                            wishlists: [],
                            alerts: [],
                            history: [],
                            review: [],
                            scanse: []
                        })

                        this.props.navigation.navigate("Home")
                    }

                    this.setState({
                        // ...state,
                        loading: false
                    })
                })
                .catch(err => {
                    this.setState({
                        // ...state,
                        loading: false,
                        errors: {
                            email: "* Please Enter Unique Email"
                        }
                    })
                })
        } else {
            this.setState({
                // ...state,
                errors: errors,
                isErrorOccured: true
            })
        }
    }

    handleRemoveValidation = (key) => {
        this.setState({
            // ...state,
            errors: {
                ...state.errors,
                [key]: null
            }
        })
    }

    render() {
        const { errors } = this.state



        return (
            <Container style={{ flex: 1, }}>
                <ImageBackground
                    source={require("../../Assets/BackgroundPicture/bg.png")}
                    style={{ flex: 1 }}
                >
                    <SignUpHeader
                        navigation={this.props.navigation}
                        heading={"Sign Up"}
                    />
                    <View style={{ margin: 25 }}>
                        <Spinner
                            visible={this.state.loading}
                            textContent={""}
                        />

                        <TextInput
                            placeholder="First Name"
                            placeholderTextColor="#515C6F"
                            style={styles.inputBox}
                            value={this.state.firstName}
                            autoFocus={false}
                            autoCapitalize={"none"}
                            onChangeText={val => this.onChangeText("firstName", val)}
                        // onFocus={() => handleRemoveValidation("password")}
                        />
                        {errors.firstName &&
                            <Text
                                style={styles.errorStyle}
                            >
                                {errors.firstName}
                            </Text>
                        }

                        <TextInput
                            placeholder="Last Name"
                            placeholderTextColor="#515C6F"
                            style={styles.inputBox}
                            value={this.state.lastName}
                            autoFocus={false}
                            autoCapitalize={"none"}
                            onChangeText={val => this.onChangeText("lastName", val)}
                        // onFocus={() => handleRemoveValidation("firstName")}
                        />
                        {errors.lastName &&
                            <Text
                                style={styles.errorStyle}
                            >
                                {errors.lastName}
                            </Text>
                        }

                        <TextInput
                            placeholder="Email"
                            placeholderTextColor="#515C6F"
                            style={styles.inputBox}
                            value={this.state.email}
                            autoFocus={false}
                            autoCapitalize={"none"}
                            onChangeText={val => this.onChangeText("email", val)}
                        />
                        {errors.email &&
                            <Text
                                style={styles.errorStyle}
                            >
                                {errors.email}
                            </Text>
                        }

                        <TextInput
                            placeholder="Password"
                            placeholderTextColor="#515C6F"
                            style={styles.inputBox}
                            value={this.state.password}
                            onChangeText={val => this.onChangeText("password", val)}
                            secureTextEntry={true}
                        />
                        {errors.password &&
                            <Text
                                style={styles.errorStyle}
                            >
                                {errors.password}
                            </Text>
                        }

                        <TextInput
                            placeholder="Re-enter Password"
                            placeholderTextColor="#515C6F"
                            style={styles.inputBox}
                            value={this.state.confirmPassword}
                            onChangeText={val => this.onChangeText("confirmPassword", val)}
                            secureTextEntry={true}
                        />
                        {errors.confirmPassword &&
                            <Text
                                style={styles.errorStyle}
                            >
                                {errors.confirmPassword}
                            </Text>
                        }

                        <Button
                            transparent
                            full
                            style={styles.signInButton}
                            onPress={this.handleSignUp}
                        >
                            <Text style={styles.signInButtonText}>Sign Up</Text>
                        </Button>
                    </View>
                </ImageBackground>
            </Container>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    onRegisterUser: (user) => dispatch(onRegisterUser(user))
})

export default connect(undefined, mapDispatchToProps)(SignUpForm)