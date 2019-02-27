import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native';
import { createBottomTabNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import Login from './srcl/components/Login';
import Home from './src/components/Home';
import ClassCard from './src/components/ClassCard';

class LoginScreen extends React.Component {
  login = () => {
    this.props.navigation.navigate('App')
  }
  render() {
    return (
      <View style={styles.loginbtn}>
        {/* <Login style={styles.login} /> */}
        <Button
          // style={styles.loginbtn}
          onPress={this.login}
          title="Login"
          color="#b70303"
        />
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  render() {
    return (
      <Home />
    );
  }
}

class ClassesScreen extends React.Component {
  render() {
    return (
      <ClassCard />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Classes: ClassesScreen,
});

export default createAppContainer(createSwitchNavigator(
  {
    Auth: LoginScreen,
    App: TabNavigator
  },
  {
    initialRouteName: 'Auth'
  }
));

const styles = StyleSheet.create({
  login: {
    flex: 1
  },
  loginbtn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});