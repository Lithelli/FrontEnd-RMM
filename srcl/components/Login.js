import React, { Component } from 'react'
import { TextInput, StyleSheet, Button, View, Text } from 'react-native';


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    };

    render() {
        return (
            <View>
                
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
                    onPress={this.submit}
                    title="Login"
                    color="#841584"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'red',
        color: "black",
        textAlign: "center",
        width: 250,
        margin: 10,
        paddingTop: 95,
    }
}); 