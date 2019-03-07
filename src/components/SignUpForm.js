import React from 'react';
import { StyleSheet, KeyboardAvoidingView, SafeAreaView, Image, Text, View, AsyncStorage } from 'react-native';
import { Button, Input, CheckBox } from 'react-native-elements';
import Landing from '../screens/Landing'

const ACCESS_TOKEN = 'access_token';

export default class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      Fname: "",
      Lname: "",
      password: "",
      password2: "",
      errors: []
    }
  }

  storeToken = async (token) => {
    try {
      await AsyncStorage.setItem(ACCESS_TOKEN, token);
    } catch(error) {
      console.log(error);
    }
  }

  userRegister = async () => {
    try {
      let response = await fetch("https://cryptic-crag.herokuapp.com/api/register", {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: this.state.email,
          firstName: this.state.Fname,
          lastName: this.state.Lname,
          password: this.state.password,
          password2: this.state.password2
        }),
      });
      let res = await response.json();
      if (res.errors) {
        this.setState({ errors: res.errors });
      } else {
        let accessToken = res.token;
        this.storeToken(accessToken);
        this.props.navigation.navigate('Auth');
      }
    } catch (errors) {
      console.log('catch err');
      console.log(errors);
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <SafeAreaView>
          <Image
            source={require('../../assets/RedLogo.png')}
            style={styles.img}
          />
          <Errors errors={this.state.errors} />
          <Input
            ref={input => this.email = input}
            onChangeText={(email) => this.setState({ email })}
            placeholder="Email"
            containerStyle={{ padding: 13 }}
            style={styles.input}
            keyboardType="email-address"
            returnKeyType="next"
            onSubmitEditing={() => this.Fname.focus()}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Input
            ref={input => this.Fname = input}
            onChangeText={(Fname) => this.setState({ Fname })}
            placeholder="First Name"
            containerStyle={{ padding: 13 }}
            style={styles.input}
            returnKeyType="next"
            onSubmitEditing={() => this.Lname.focus()}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Input
            ref={input => this.Lname = input}
            onChangeText={(Lname) => this.setState({ Lname })}
            placeholder="Last Name"
            containerStyle={{ padding: 13 }}
            style={styles.input}
            returnKeyType="next"
            onSubmitEditing={() => this.password.focus()}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Input
            ref={input => this.password = input}
            style={styles.input}
            onChangeText={(password) => this.setState({ password })}
            placeholder="Password"
            containerStyle={{ padding: 13 }}
            returnKeyType="next"
            autoCapitalize="none"
            secureTextEntry={true}
            onSubmitEditing={() => this.password2.focus()}
            autoCorrect={false}
          />
          <Input
            ref={input => this.password2 = input}
            style={styles.input}
            onChangeText={(password2) => this.setState({ password2 })}
            placeholder="Confirm Password"
            containerStyle={{ padding: 13 }}
            returnKeyType="go"
            autoCapitalize="none"
            secureTextEntry={true}
            onSubmitEditing={() => this.userRegister}
            autoCorrect={false}
          />
          <Text style={styles.text}>
            By creating an account you accept our <Text style={{ textDecorationLine: "underline" }}>Terms and Conditions.</Text>
          </Text>
          <Button
            disabled={!this.state.email || !this.state.password || !this.state.password2}
            onPress={this.userRegister}
            title="Register"
            type="clear"
          />
          <Button
            type="clear"
            title="Login"
            onPress={() => navigate('Auth')}
          />
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }
}

const Errors = (props) => {
  return (
    <View>
      {props.errors.map((error, i) => <Text key={i} style={styles.error}>{error.msg}</Text>)}
    </View>
  );
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
    justifyContent: "center"
  },
  login: {
    textAlign: "right",
  },
  forgot: {
    textAlign: "center",
  },
  img: {
    alignSelf: "center"
  },
  text: {
    fontSize: 12,
    width: 220,
    textAlign: "center"
  },
  error: {
    textAlign: 'center',
    backgroundColor: 'red'
  }
});