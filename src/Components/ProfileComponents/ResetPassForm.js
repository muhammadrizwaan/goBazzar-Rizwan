import React from "react"
import { View, Text, TextInput, Keyboard } from "react-native"

import { Button, Spinner } from "native-base"

import styles from '../../Styles/ProfileScreenStyles/NotLoggedInStyles'
import resetPassValidation from "../../Validation/resetPassValidation"

import { connect } from "react-redux";
import { updateUserProfile } from "../../actions/authActions"
import { showMessage } from "react-native-flash-message"
import axios from "axios"

import Apis from "../../Api/Apis"

class ResetPassForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: props.user ? props.user.email : "",
            loading: false,
            errors: {},
            isUpdated: false,
            old_password: "",
            new_password: ""
        }
    }
    onChangeText = (key, val) => {
        this.setState({
            [key]: val
        })
    }
    onSubmit = () => {
        Keyboard.dismiss()
        const { errors, isValid } = resetPassValidation(
            this.state.email.trim(),
            this.state.old_password,
            this.state.new_password
        );

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
                .post(Apis.reset_user_password, {
                    UserId: this.props.user.userId,
                    OldPassword: this.state.old_password,
                    Email: this.state.email.trim(),
                    NewPassword: this.state.new_password
                })
                .then(res => {
                    this.setState({
                        loading: false,
                        isUpdated: true,
                        old_password: "",
                        new_password: ""
                    })


                    showMessage({
                        message: "Password Updated",
                        position: 'bottom',
                        // icon: 'auto',
                        autoHide: true,
                        hideOnPress: true,
                        floating: true,
                        style: {
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
                            old_password: "* Invalid Credentials"
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
                    placeholder="Old Password"
                    placeholderTextColor="#515C6F"
                    style={styles.inputBox}
                    value={this.state.old_password}
                    onChangeText={val => this.onChangeText("old_password", val)}
                    secureTextEntry={true}
                />
                {errors.old_password &&
                    <Text
                        style={styles.errorStyle}
                    >
                        {errors.old_password}
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
                    placeholder="New Password"
                    placeholderTextColor="#515C6F"
                    style={styles.inputBox}
                    value={this.state.new_password}
                    onChangeText={val => this.onChangeText("new_password", val)}
                    secureTextEntry={true}
                />
                {errors.new_password &&
                    <Text
                        style={styles.errorStyle}
                    >
                        {errors.new_password}
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

const mapStateToProps = state => ({
    user: state.auth.user
})


export default connect(mapStateToProps)(ResetPassForm)