import React, { useState } from "react"
import { View, Text, TextInput, ImageBackground } from "react-native"

import { Container, Content, Button } from "native-base"
import styles from '../../Styles/ProfileScreenStyles/NotLoggedInStyles'

import signUpValidation from "../../Validation/signUpValidation"

import axios from "axios"
import Apis from "../../Api/Apis"

import { onRegisterUser } from "../../actions/authActions"
import Spinner from 'react-native-loading-spinner-overlay';

import { connect } from "react-redux"

const SignUpForm = ({ onRegisterUser, navigation }) => {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        loading: false,
        errors: {},
        isErrorOccured: false
    })
    onChangeText = (key, val) => {
        
        // setState(state => ({
        //     ...state,
           
        // }))



        if (state.isErrorOccured) {
            const user = {
                email: state.email.trim(),
                firstName: state.firstName.trim(),
                lastName: state.lastName.trim()
            }

            const { isValid, errors } = signUpValidation(user, state.password, state.confirmPassword)

            if(isValid) {
                setState({
                    ...state,
                    errors: {},
                    [key]: val
                })
            } else {
                setState({
                    ...state,
                    errors: errors,
                    [key]: val
                })
            }
        } else {
            setState({
                ...state,
                [key]: val
            })
        }
    }

    handleSignUp = () => {
        const user = {
            email: state.email.trim(),
            firstName: state.firstName.trim(),
            lastName: state.lastName.trim()
        }

        const { isValid, errors } = signUpValidation(user, state.password, state.confirmPassword)
        if (isValid) {
            setState({
                ...state,
                errors: {},
                loading: true,
                isErrorOccured: true
            })

            axios
                .post(Apis.register, {
                    FirstName: state.firstName.trim(),
                    LastName: state.lastName.trim(),
                    Email: state.email.trim(),
                    Password: state.password
                })
                .then(res => {

                    if (!res.data.code && res.data) {
                        onRegisterUser({
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

                        navigation.goBack()
                        navigation.navigate("Home")
                    }

                    setState({
                        ...state,
                        loading: false
                    })
                })
                .catch(err => {
                    setState({
                        ...state,
                        loading: false,
                        errors: {
                            email: "* Please Enter Unique Email"
                        }
                    })
                })
        } else {
            setState({
                ...state,
                errors: errors,
                isErrorOccured: true
            })
        }
    }

    handleRemoveValidation = (key) => {
        setState({
            ...state,
            errors: {
                ...state.errors,
                [key]: null
            }
        })
    }

    const { errors } = state
    return (
        <Container style={{ flex: 1 }}>
            <ImageBackground
                source={require("../../Assets/BackgroundPicture/bg.png")}
                style={{ flex: 1 }}
            >
            <Spinner
                visible={state.loading}
                textContent={""}
            />

            <TextInput
                placeholder="First Name"
                placeholderTextColor="#515C6F"
                style={styles.inputBox}
                value={state.firstName}
                autoFocus={false}
                autoCapitalize={"none"}
                onChangeText={val => onChangeText("firstName", val)}
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
                value={state.lastName}
                autoFocus={false}
                autoCapitalize={"none"}
                onChangeText={val => onChangeText("lastName", val)}
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
                value={state.email}
                autoFocus={false}
                autoCapitalize={"none"}
                onChangeText={val => onChangeText("email", val)}
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
                value={state.password}
                onChangeText={val => onChangeText("password", val)}
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
                value={state.confirmPassword}
                onChangeText={val => onChangeText("confirmPassword", val)}
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
                onPress={() => handleSignUp()}
            >
                <Text style={styles.signInButtonText}>Sign Up</Text>
            </Button>
            </ImageBackground>
            </Container>
    )
}

const mapDispatchToProps = dispatch => ({
    onRegisterUser: (user) => dispatch(onRegisterUser(user))
})

export default connect(undefined, mapDispatchToProps)(SignUpForm)