import React, { useState } from "react"
import { View, Text, TextInput } from "react-native"

import { Button } from "native-base"

import styles from '../../Styles/ProfileScreenStyles/NotLoggedInStyles'
import signInValidation from "../../Validation/signInValidation"

import axios from "axios"
import Apis from "../../Api/Apis"
import Spinner from 'react-native-loading-spinner-overlay';
import { connect } from "react-redux"

import { onRegisterUser } from "../../actions/authActions"


const SignInForm = ({ onRegisterUser, navigation }) => {
    const [state, setState] = useState({
        email: "",
        password: "",
        loading: false,
        errors: {},
        isErrorOccured: false
    })
    onChangeText = (key, val) => {
        if (state.isErrorOccured) {
            const { isValid, errors } = signInValidation(state.email.trim(), state.password)
            if(isValid) {
                setState(state => ({
                    ...state,
                    [key]: val,
                    errors: {},
                }))
            } else {
                setState(state => ({
                    ...state,
                    [key]: val,
                    errors: errors,
                }))
            }
           
        } else {
            setState({
                ...state,
                [key]: val
            })
        }
    }

    handleSignIn = () => {
        const { isValid, errors } = signInValidation(state.email.trim(), state.password)
        if (isValid) {
            setState({
                ...state,
                errors: {},
                loading: true
            })

            axios
                .post(Apis.login, {
                    Email: state.email.trim(),
                    Password: state.password
                })
                .then((res) => {
                    console.warn(res)
                    if (!res.data.code && res.data) {
                        const user = {
                            userId: res.data.UserId.toString(),
                            firstName: res.data.FirstName,
                            lastName: res.data.LastName,
                            email: res.data.Email,
                            language: "en",
                            wishlists: [],
                            alerts: [],
                            history: [],
                            review: [],
                            scans: []
                        }
                        onRegisterUser(user)
                    }

                    setState({
                        ...state,
                        loading: false
                    })

                    navigation.navigate("Home")
                })
                .catch(err => {
                    console.warn(err)
                    setState({
                        ...state,
                        loading: false,
                        errors: {
                            email: "* Invalid Credentials",
                            password: "* Invalid Credentials"
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
        <View style={{ marginVertical: 25 }}>
            <Spinner
                visible={state.loading}
                textContent={""}
            />

            <TextInput
                placeholder="Email"
                placeholderTextColor="#515C6F"
                style={styles.inputBox}
                value={state.email}
                autoFocus={false}
                autoCapitalize={"none"}
                onChangeText={val => onChangeText("email", val)}
                onFocus={() => handleRemoveValidation("password")}
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
                onFocus={() => handleRemoveValidation("email")}
            />
            {errors.password &&
                <Text
                    style={styles.errorStyle}
                >
                    {errors.password}
                </Text>
            }

            <Button
                transparent
                full
                style={styles.signInButton}
                onPress={() => handleSignIn()}
            >
                <Text style={styles.signInButtonText}>Sign In</Text>
            </Button>
        </View>
    )
}

const mapDispatchToProps = dispatch => ({
    onRegisterUser: (user) => dispatch(onRegisterUser(user))
})

export default connect(undefined, mapDispatchToProps)(SignInForm)