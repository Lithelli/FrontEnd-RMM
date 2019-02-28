import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native';
import { createBottomTabNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import Login from './srcl/components/Login';
import Account from './src/components/Account';
import Home from './src/components/Home';
import ClassCard from './src/components/ClassCard';

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.login}>
        <Login navigation={this.props.navigation} />
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

class AccountScreen extends React.Component {
  render() {
    return (
      <Account />
    );
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Classes: ClassesScreen,
    Account: AccountScreen
  },
  {
    tabBarOptions: {
      activeBackgroundColor: '#C35656',
      style: {
        backgroundColor: '#f1f1f1',
        color: '#f1f1f1'
      }
    }
  }
);

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
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});