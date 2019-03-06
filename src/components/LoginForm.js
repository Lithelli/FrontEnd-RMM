import React from 'react';
import { StyleSheet, KeyboardAvoidingView, SafeAreaView, Image, View } from 'react-native';
import { Button, Input } from 'react-native-elements';

export default class LoginForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
     email: "",
     password: "",
     isLoggingIn: false
     }
  }

  userLogin = () => {
    this.setState({ isLoggingIn: true });
    let proceed = false;
    fetch("https://cryptic-crag.herokuapp.com/api/login", {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      }),
    }).then((res) => res.text())
      .then((resData) => {
        if (resData=='home') {
          proceed = true;
          console.log(resData);
        } else {
          console.log(resData);
          console.log('no')
        }
      })
      .then(() => {
        this.setState({ isLoggingIn: false })
        if (proceed) this.props.navigation.navigate('App');
      })
      .catch((err) => {
        this.setState({ isLoggingIn: false })
        console.log(err);
      });
  }
  
   forgot = () => {
     this.props.navigation.navigate('App');
  }

  render(){
    return(
         <KeyboardAvoidingView behavior="padding" style={styles.container}>
         <Image
          source={require('../../assets/RedLogo.png')}
          style={styles.img}
         />
         <Input
             ref={input => this.email = input}
             onChangeText={(email) => this.setState({ email })}
             placeholder="Email"
             containerStyle={{ paddingHorizontal: 37}}
             style={styles.input}
             returnKeyType="next"
             keyboardType="email-address"
             onSubmitEditing={() => this.password.focus()}
             autoCapitalize="none"
             autoCorrect={false}
          />
          <Input
             ref={input => this.password = input}
             style={styles.input}
             onChangeText={(password) => this.setState({ password })}
             placeholder="Password"
             containerStyle={{ paddingHorizontal: 37}}
             returnKeyType="go"
             secureTextEntry = {true}
             autoCapitalize="none"
             onSubmitEditing={() => this.userLogin}
             autoCorrect={false}
          />
          <Button
            // disabled={this.state.isLoggingIn || !this.state.email || !this.state.password}
            onPress={this.forgot}
            title="Login"
            type="clear"
          />
           <Button
             onPress={this.forgot}
             title="Forgot Password?"
             type="clear"
           />
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
    flex:1,
    justifyContent:"center",
    alignSelf:"stretch",
  },
  login: {
    textAlign: "right",
  },
  forgot: {
    textAlign: "center",
  },
  img:{
    alignSelf:"center"
  }
});
