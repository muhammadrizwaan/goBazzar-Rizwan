import React from "react"
import { View, Text, TextInput, Keyboard } from "react-native"

import { Button, Spinner } from "native-base"

import styles from '../../Styles/ProfileScreenStyles/NotLoggedInStyles'
import validateFeedback from "../../Validation/validateFeedback"

import { connect } from "react-redux";
import { updateUserProfile } from "../../actions/authActions"
import { showMessage } from "react-native-flash-message"
import axios from "axios"
import stylesbtn from '../../Styles/ProfileScreenStyles/NotLoggedInStyles'

import Apis from "../../Api/Apis"

class FeedbackForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: props.user ? props.user.email : "",
            loading: false,
            errors: {},
            isUpdated: false,
            name: "",
            message: ""
        }
    }
    onChangeText = (key, val) => {
        this.setState({
            [key]: val
        })
    }
    onSubmit = () => {
        Keyboard.dismiss()
        const { errors, isValid } = validateFeedback(
            this.props.email.trim(),
            // this.state.email.trim(),
            this.state.name.trim(),
            this.state.message.trim()
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



            axios
                .post("http://13.68.110.5:8090/api/mobile/SaveEnquiry", {
                    Name: this.state.name.trim(),
                    Email: this.props.email.trim(),
                    Message: this.state.message.trim(),
                })
                .then(res => {
                    this.setState({
                        loading: false,
                        isUpdated: true,
                        email: "",
                        name: "",
                        message: "",
                    })


                    showMessage({
                        message: "Feedback Sent",
                        position: 'bottom',
                        // icon: 'auto',
                        autoHide: true,
                        hideOnPress: true,
                        floating: true,
                        duration:15000,
                        titleStyle: {
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
                            name: "* Invalid Credentials",
                            message: "* Invalid Credentials"
                        },
                        loading: false
                    })
                })
        }
    }
    render() {
        const { errors, loading, isUpdated } = this.state
        const { navigation, userId, email } = this.props
        return (
            <View style={{ marginVertical: 25 }}>

                {userId.length > 0 ?
                    <View>
                        <TextInput
                            placeholder="Name"
                            placeholderTextColor="#515C6F"
                            style={styles.inputBox}
                            value={this.state.name}
                            onChangeText={val => this.onChangeText("name", val)}
                        // secureTextEntry={true}
                        />
                        {errors.name &&
                            <Text
                                style={styles.errorStyle}
                            >
                                {errors.name}
                            </Text>
                        }

                        <TextInput
                            placeholder="Email"
                            placeholderTextColor="#515C6F"
                            style={styles.inputBox}
                            value={email}
                            editable={false}
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
                            placeholder="Message"
                            placeholderTextColor="#515C6F"
                            style={styles.inputBox}
                            value={this.state.message}
                            onChangeText={val => this.onChangeText("message", val)}
                        // secureTextEntry={true}
                        />
                        {errors.message &&
                            <Text
                                style={styles.errorStyle}
                            >
                                {errors.message}
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
                    :
                    <View style={{ marginTop: 20 }}>
                        <Text
                            style={{
                                fontSize: 15,
                                // color: "#515C6F",
                                color: "#999999",
                                fontFamily: "LexendDeca-Regular"
                            }}
                        >
                            Login or Sign Up to Post a Feedback
                    </Text>
                        <Button
                            transparent
                            full
                            style={stylesbtn.signInButton}
                            onPress={() => navigation.navigate('My Profile')}
                        >
                            <Text style={stylesbtn.signInButtonText}>Login</Text>
                        </Button>
                    </View>}
            </View>
        )
    }
}

const mapStateToProps = state => ({
    userId: state.auth.user.userId,
    email: state.auth.user.email,
})


export default connect(mapStateToProps)(FeedbackForm)