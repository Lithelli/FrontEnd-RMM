import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native';
import { createBottomTabNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import { Ionicons, MaterialCommunityIcons, } from '@expo/vector-icons';
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
    Home: { screen: HomeScreen,
    navigationOptions:{
      tabBarLabel: ' ',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-home" size={34} />
      )
    }},
    Classes: { screen: ClassesScreen,
      navigationOptions:{
        tabBarLabel: ' ',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-home" size={34} />
        )
      }},
    Account: { screen: AccountScreen,
    navigationOptions:{
      tabBarLabel: ' ',
      tabBarIcon: ({ tintColor }) => (
        <MaterialCommunityIcons name="account" size={38} />
      )
    }}
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