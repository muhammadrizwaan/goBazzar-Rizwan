import React from "react"
import { View, Text, TextInput, Keyboard } from "react-native"

import { Button, Spinner } from "native-base"

import styles from '../../Styles/ProfileScreenStyles/NotLoggedInStyles'
import forgetPassValidation from "../../Validation/forgetPassValidation"

import { connect } from "react-redux";
import { updateUserProfile } from "../../actions/authActions"
import { showMessage } from "react-native-flash-message"
import axios from "axios"

import Apis from "../../Api/Apis"

class ForgetPasswordForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email:"",
            loading: false,
            errors: {},
            isUpdated: false,
        }
    }
    onChangeText = (key, val) => {
        this.setState({
            [key]: val
        })
    }
    onSubmit = () => {
        Keyboard.dismiss()
        const { errors, isValid } = forgetPassValidation(this.state.email.trim());

        if (!isValid) {
            this.setState({
                errors
            })
        } else {
            this.setState({
                errors: {},
                loading: true
            })

            // 
            axios
                .post(Apis.forget_password, {
                    Email: this.state.email.trim()
                })
                .then(res => {
                    this.setState({
                        loading: false,
                        isUpdated: true,
                        email:''
                    })


                    showMessage({
                        message: "Please check your email",
                        position: 'bottom',
                        // icon: 'auto',
                        autoHide: true,
                        hideOnPress: true,
                        floating: true,
                        duration:15000,
                        titleStyle:{
                            fontSize:10
                        },
                        style: {
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: "#E8E8E8",
                            width: "90%",
                            borderRadius: 30,
                            color: "black",
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            elevation: 7,
                        },
                        color: "#000000",
                    });
                    // this.props.updateUserProfile(user)
                })
                .catch(err => {
                    this.setState({
                        errors: {
                            email: "* Invalid Credentials",
                        },
                        loading: false
                    })
                })
        }
    }
    render() {
        const { errors, loading, isUpdated } = this.state
        return (
            <View style={{ marginVertical: 25 }}>

                <TextInput
                    placeholder="Email"
                    placeholderTextColor="#515C6F"
                    style={styles.inputBox}
                    value={this.state.email}
                    // editable={false}
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

                <Button
                    transparent
                    full
                    style={styles.signInButton}
                    onPress={this.onSubmit}
                >
                    {loading ?
                        <Spinner color="white" size={20} />
                        :
                        <Text style={styles.signInButtonText}>
                            {isUpdated ? "Updated" : "Save"}
                        </Text>
                    }
                </Button>
            </View>
        )
    }
}


export default ForgetPasswordForm