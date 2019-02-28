import React, { Component } from 'react'
import { TextInput, StyleSheet, Button, View, Text, Image, SafeAreaView } from 'react-native';
import { createBottomTabNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    };

    login = () => {
        this.props.navigation.navigate('App')
    }

    render() {
        return (

            <SafeAreaView>
                    <Image
                    source={require('../../assets/RedLogo.png')}
                    style={styles.img}
                    />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({ email: text })}
                    placeholder="E-Mail"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({ password: text })}
                    secureTextEntry={true}
                    placeholder="Password"
                />
                <Button
                    onPress={this.login}
                    title="Login"
                    color="#b70303"
                />
                <Button
                    onPress={this.forgot}
                    title="Forgot Password?"
                    color="#b70303"
                />
            </SafeAreaView>
        );
    }
}

 const styles = StyleSheet.create({
    input: {
        color: "#b70303",
        textAlign: "left",
        width: 250,
        margin: 10,
        fontWeight: "bold",
        paddingTop: 95,
        borderBottomWidth: 1,
        borderBottomLeftRadius: 3,
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
