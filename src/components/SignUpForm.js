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
    // userLogin = () => {
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
     forgot = () => {
       this.props.navigation.navigate('NewPass')
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
               autoCorrect={false}
            />
            <Button
              // disabled={this.state.isLoggingIn || !this.state.email || !this.state.password}
              // onPress={this.userLogin}
              onPress={this.login}
              title="Login"
              type="clear"
            />
             <Button
               onPress={this.forgot}
               title="Forgot Password?"
               type="clear"
             />
        </SafeAreaView>
        </KeyboardAvoidingView>
      );
    }
  }