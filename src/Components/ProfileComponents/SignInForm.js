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

class SignInForm extends React.Component {
    // const SignInForm = ({ onRegisterUser, navigation }) => {
    // const [state, setState] = useState({
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            loading: false,
            errors: {},
            isErrorOccured: false,
            // ProductDetailID:this.props.navigation.state.params.id
        }
    }
    // componentDidMount(){
        // const { route, userId } = this.props
        // const ProductDetailID = route.params.id
    // }
    onChangeText = (key, val) => {
        if (this.state.isErrorOccured) {
            const user = {
                email: this.state.email.trim(),
                password: this.state.password.trim(),
                // lastName: this.state.lastName.trim()
            }
            // const { isValid, errors } = signInValidation(this.state.email.trim(), this.state.password)
            const { isValid, errors } = signInValidation(this.state.email, this.state.password)
            if (isValid) {
                this.setState({
                    // ...state,
                    [key]: val,
                    errors: {},
                })
            } else {
                this.setState({
                    // ...state,
                    [key]: val,
                    errors: errors,
                })
            }

        } else {
            this.setState({
                // ...state,
                [key]: val
            })
        }
    }

    handleSignIn = () => {
        const user = {
            email: this.state.email.trim(),
            password: this.state.password.trim(),
            // lastName: this.state.lastName.trim()
        }
        const { isValid, errors } = signInValidation(this.state.email, this.state.password)
        if (isValid) {
            this.setState({
                // ...state,
                errors: {},
                loading: true,
                isErrorOccured: true
            })

            axios
                .post(Apis.login, {
                    Email: this.state.email.trim(),
                    Password: this.state.password
                })
                .then((res) => {
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
                        // console.log('user',user)
                        this.props.onRegisterUser(user)
                    }

                    this.setState({
                        // ...state,
                        loading: false
                    })
                    // if (this.state.ProductDetailID) {
                    //     this.props.navigation.navigate("ProductDetail", {
                    //         id: this.state.ProductDetailID
                    //     })
                    // }
                    // else {
                        // this.props.navigation.navigate("Home")
                    // }
                    this.props.navigation.goBack()
                    // 
                })
                .catch(err => {
                    this.setState({
                        // ...state,
                        loading: false,
                        errors: {
                            email: "* InvalidCredentials",
                            password: "* InvalidCredentials"
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
    navigateForgetScreen(){
        this.setState({
            email: "",
            password: "",
        })
        this.props.navigation.navigate('ForgetScreen')
    }
    navigateSignUpScreen(){
        this.setState({
            email: "",
            password: "",
        })
        this.props.navigation.navigate('SignUpScreen')
    }

    render() {
        const { errors } = this.state
        return (
            <View style={{ marginVertical: 25 }}>
                <Spinner
                    visible={this.state.loading}
                    textContent={""}
                />

                <TextInput
                    placeholder="Email"
                    placeholderTextColor="#515C6F"
                    style={styles.inputBox}
                    value={this.state.email}
                    // autoFocus={false} 
                    autoCapitalize={"none"}
                    // onChangeText={val => this.onChangeText("email", val)}
                    onChangeText={val => this.onChangeText("email", val)}
                // onFocus={() => handleRemoveValidation("password")}
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
                // onFocus={() => handleRemoveValidation("email")}
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
                    onPress={this.handleSignIn}
                >
                    <Text style={styles.signInButtonText}>Sign In</Text>
                </Button>

                <Text style={styles.noAccountText}
                        onPress={() => this.navigateForgetScreen()}>
                            {/* onPress={() => this.props.navigation.navigate('ForgetScreen')}> */}
                        Forget Passwword?
                    </Text>

                    <Text style={styles.noAccountText}>
                        Don't have an account?{" "}
                        <Text
                            style={styles.signUpText}
                            onPress={() => this.navigateSignUpScreen()}
                        >
                            SIGN UP
                    </Text>
                    </Text>
            </View>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    onRegisterUser: (user) => dispatch(onRegisterUser(user))
})

export default connect(undefined, mapDispatchToProps)(SignInForm)