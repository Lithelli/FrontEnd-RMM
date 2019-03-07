import React from 'react';
import { StyleSheet, KeyboardAvoidingView, SafeAreaView, Image, Text, AsyncStorage } from 'react-native';
import { Button, Input } from 'react-native-elements';

const ACCESS_TOKEN = 'access_token';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: ""
    }
  }

  storeToken = async (token) => {
    try {
      await AsyncStorage.setItem(ACCESS_TOKEN, token);
      console.log('Token was stored');
      this.props.navigation.navigate('App');
    } catch (error) {
      console.log(error);
    }
  };

  userLogin = async () => {
    try {
      let response = await fetch("https://cryptic-crag.herokuapp.com/api/v1/login", {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        }),
      });
      let res = await response.text();
      if (res == 'Unauthorized') {
        let error = 'Email or Password is incorrect';
        this.setState({ error });
      } else {
        this.setState({error: ''});
        let response = JSON.parse(res);
        this.storeToken(response.token);
      }
    } catch (errors) {
      console.log(errors);
    }
  }
  
   forgot = () => {
     this.props.navigation.navigate('App');
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Image
          source={require('../../assets/RedLogo.png')}
          style={styles.img}
        />
        <Text>{this.state.error}</Text>
        <Input
          ref={input => this.email = input}
          onChangeText={(email) => this.setState({ email })}
          placeholder="Email"
          containerStyle={{ paddingHorizontal: 37 }}
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
          containerStyle={{ paddingHorizontal: 37 }}
          returnKeyType="go"
          secureTextEntry={true}
          autoCapitalize="none"
          onSubmitEditing={() => this.userLogin}
          autoCorrect={false}
        />
        <Button
          disabled={!this.state.email || !this.state.password}
          onPress={this.userLogin}
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
    flex: 1,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  login: {
    textAlign: "right",
  },
  forgot: {
    textAlign: "center",
  },
  img: {
    alignSelf: "center"
  }
});
