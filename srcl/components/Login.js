import React, { Component } from 'react'
import { TextInput, StyleSheet, TouchableOpacity, Button, View, Text, Image } from 'react-native';
//import { SafeAreaView } from 'react-navigation';


export default class Login extends Component {
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
                    onPress={() => navigate('App')}
                    title="Login"
                    color="#b70303"
                />
                <Button
                    onPress={this.forgot}
                    title="Forgot Password?"
                    color="#b70303"
                />
            </View>
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

    login: {
        textAlign: "right",
    },

    forgot: {
        textAlign: "center",
    }
});


    ///Users/student/Desktop/rmm/FrontEnd-RMM/src/Navigation/menu.js
//}