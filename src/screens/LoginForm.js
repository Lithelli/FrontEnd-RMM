import React, { Component } from 'react'
import { TextInput, StyleSheet, Button, KeyboardAvoidingView, Image, SafeAreaView, StatusBar } from 'react-native';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    };
    forgot = () => {
      return
    }
    render() {
      const {navigate} = this.props.navigation;
        return (

            <SafeAreaView>
                <KeyboardAvoidingView behavior="padding" style={styles.container}>
                    <StatusBar 
                        barStyle="light-content"
                    />
                    <Image
                        source={require('../../assets/RedLogo.png')}
                        style={styles.img}
                        />
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.setState({ email: text })}
                        placeholder="E-Mail"
                        returnKeyType="next"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        onSubmitEditing={() => this.passwordInput.focus()}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.setState({ password: text })}
                        secureTextEntry={true}
                        placeholder="Password"
                        returnKeyType="go"
                        ref={(input) => this.passwordInput = input}
                    />
                    <Button
                        onPress={() => navigate('App')}
                        title="Login"
                        color="#b70303"
                        ref={(login) => this.loginButton = login}
                    />
                    <Button
                        onPress={this.forgot}
                        title="Forgot Password?"
                        color="#b70303"
                    />
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}

 const styles = StyleSheet.create({
    input: {
        color: "#b70303",
        textAlign: "left",
        width: 250,
        margin: 5,
        fontWeight: "bold",
        paddingTop: 95,
        borderBottomWidth: 1,
        borderBottomLeftRadius: 3,
    },
    container: {
        flex:1
    },
    login: {
        textAlign: "right",
    },

    forgot: {
        textAlign: "center",
    },
    img: {
        margin: 20,
        alignSelf:"center"
    }
});
