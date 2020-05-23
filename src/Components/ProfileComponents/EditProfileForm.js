import React from "react"
import { View, Text, TextInput } from "react-native"

import { Button, Spinner } from "native-base"

import styles from '../../Styles/ProfileScreenStyles/NotLoggedInStyles'
import editProfileValidation from "../../Validation/editProfileValidation"

import { connect } from "react-redux";
import { updateUserProfile } from "../../actions/authActions"

import axios from "axios"

import Apis from "../../Api/Apis"

class EditProfileForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: props.user ? props.user.email : "",
            firstName: props.user ? props.user.firstName : "",
            lastName: props.user ? props.user.lastName : "",
            loading: false,
            errors: {},
            isUpdated: false
        }
    }
    onChangeText = (key, val) => {
        this.setState({
            [key]: val
        })
    }
    onSubmit = () => {
        const user = {
            firstName: this.state.firstName.trim(),
            lastName: this.state.lastName.trim(),
            email: this.state.email.trim()
        }
        const { errors, isValid } = editProfileValidation(user);

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
                .post(Apis.update_user_profile, {
                    UserId: this.props.user.userId,
                    FirstName: user.firstName,
                    LastName: user.lastName,
                    Email: user.email
                })
                .then(res => {
                    this.setState({
                        loading: false,
                        isUpdated: true
                    })

                    this.props.updateUserProfile(user)
                })
                .catch(err => {
                    this.setState({
                        loading: false
                    })
                })
        }
    }
    render() {
        const { errors, loading, isUpdated } = this.state
        return (
            <View style={{ marginVertical: 25 }}>
                {/* <TextInput
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
                } */}

                <TextInput
                    placeholder="First Name"
                    placeholderTextColor="#515C6F"
                    style={styles.inputBox}
                    value={this.state.firstName}
                    autoFocus={false}
                    autoCapitalize={"none"}
                    onChangeText={val => this.onChangeText("firstName", val)}
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
                />
                {errors.lastName &&
                    <Text
                        style={styles.errorStyle}
                    >
                        {errors.lastName}
                    </Text>
                }

                {/* <TextInput
                    placeholder="Password"
                    placeholderTextColor="#515C6F"
                    style={styles.inputBox}
                    value={this.state.password}
                    onChangeText={val => onChangeText("password", val)}
                    secureTextEntry={true}
                /> */}

                <Button
                    transparent
                    full
                    style={styles.signInButton}
                    onPress={this.onSubmit}
                >
                    {loading ?
                        <Spinner color="white" size={20}/>
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

const mapDispatchToProps = dispatch => ({
    updateUserProfile: (user) => dispatch(updateUserProfile(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileForm)