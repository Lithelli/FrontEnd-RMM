import React, { Component } from 'react'
import { StyleSheet, KeyboardAvoidingView, SafeAreaView, Image } from 'react-native';
import { Button, Input } from 'react-native-elements'


export default class SignUpForm extends React.Component {
    constructor(props){
      super(props);
      this.state = {
       email: "",
       password: "",
       isLoggingIn: false
       }
    }
    // userRegister = () => {
    //   this.setState({ isLoggingIn: true });
    //   let proceed = false;
    //   fetch("http://localhost:3000/api/login", {
    //     method: "POST",
    //     headers: {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       email: this.state.email,
    //       password: this.state.password
    //     }),
    //   }).then((res) => res.text())
    //     .then((resData) => {
    //       if (resData=='home page') {
    //         proceed = true;
    //         console.log(resData);
    //       } else {
    //         console.log('no')
    //       }
    //     })
    //     .then(() => {
    //       this.setState({ isLoggingIn: false })
    //       if (proceed) this.props.navigation.navigate('App');
    //     })
    //     .catch((err) => {
    //       this.setState({ isLoggingIn: false })
    //       console.log(err);
    //     });
    // }
    
    login = () => {
      this.props.navigation.navigate('App')
    }
  
    render(){
      const { navigate } = this.props.navigation
      return(
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <SafeAreaView>
           <Input
               ref={input => this.email = input}
               onChangeText={(email) => this.setState({ email })}
               placeholder="Email"
               containerStyle={{ padding: 20 }}
               style={styles.input}
               returnKeyType="next"
               secureTextEntry = {true}
               onSubmitEditing={() => this.password.focus()}
               autoCapitalize="none"
               autoCorrect={false}
            />
            <Input
               ref={input => this.password = input}
               style={styles.input}
               onChangeText={(password) => this.setState({ password })}
               placeholder="Password"
               returnKeyType="go"
               keyboardType="email-address"
               autoCapitalize="none"
               onSubmitEditing={() => this.login()}
               autoCorrect={false}
            />
            <Button
              // disabled={this.state.isLoggingIn || !this.state.email || !this.state.password}
              // onPress={this.userLogin}
              onPress={this.Register}
              title="Register"
              type="clear"
            />
        </SafeAreaView>
        </KeyboardAvoidingView>
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
      borderBottomWidth: 1,
      flexGrow: 1,
      borderBottomLeftRadius: 3
    },
    container: {
      flexGrow: 1,
      justifyContent:"center"
    },
    login: {
      textAlign: "right",
    },
    forgot: {
      textAlign: "center",
    }
  });