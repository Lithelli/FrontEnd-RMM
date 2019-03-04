import React from 'react';
import { StyleSheet, KeyboardAvoidingView, SafeAreaView, Image } from 'react-native';
import { Button, Input } from 'react-native-elements';


export default class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      Fname: "",
      Lname: "",
      password: "",
      password2: "",
      isRegistering: false
    }
  }
  userRegister = () => {
    this.setState({ isRegistering: true });
    let proceed = false;
    fetch("https://cryptic-crag.herokuapp.com/api/register", {
      method: "POST",
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
    }).then((res) => res.text())
      .then((resData) => {
        if (resData == 'login') {
          proceed = true;
          console.log(resData);
        } else {
          console.log('no')
        }
      })
      .then(() => {
        this.setState({ isLoggingIn: false })
        if (proceed) this.props.navigation.navigate('Login');
      })
      .catch((err) => {
        this.setState({ isLoggingIn: false })
        console.log(err);
      });
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <SafeAreaView>
          <Image
            source={require('../../assets/RedLogo.png')}
            style={styles.img}
          />
          <Input
            ref={input => this.email = input}
            onChangeText={(email) => this.setState({ email })}
            placeholder="Email"
            containerStyle={{ padding: 20 }}
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
            containerStyle={{ padding: 20 }}
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
            containerStyle={{ padding: 20 }}
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
            returnKeyType="go"
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
            returnKeyType="go"
            autoCapitalize="none"
            secureTextEntry={true}
            onSubmitEditing={() => this.userRegister}
            autoCorrect={false}
          />
          <Button
            disabled={this.state.isRegistering || !this.state.email || !this.state.password}
            onPress={this.userRegister}
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
    justifyContent: "center"
  },
  login: {
    textAlign: "right",
  },
  forgot: {
    textAlign: "center",
  }
});