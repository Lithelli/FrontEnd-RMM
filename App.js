import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native';
import { createBottomTabNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import { Ionicons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import Landing from './src/screens/Landing';
import Account from './src/screens/Account';
import Home from './src/screens/Home';
import ClassCard from './src/components/ClassCard';
import SignUpForm from './src/components/SignUpForm';
import LoginForm from './src/components/LoginForm';


class LandingPage extends React.Component {
  render() {
    return (
      <View style={styles.login}>
        <Landing navigation={this.props.navigation} />
      </View>
    );
  }
}

class LoginFormPage extends React.Component {
  render() {
    return (
      <View style={styles.login}>
        <LoginForm navigation={this.props.navigation} />
      </View>
    );
  }
}

class SignUpFormPage extends React.Component {
  render() {
    return (
      <View style={styles.login}>
        <SignUpForm navigation={this.props.navigation} />
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
        <Ionicons name="ios-home" color={tintColor} size={34} />
      )
    }},
    Classes: { screen: ClassesScreen,
      navigationOptions:{
        tabBarLabel: ' ',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="calendar-o" color={tintColor} size={34} />
        )
      }},
    Account: { screen: AccountScreen,
    navigationOptions:{
      tabBarLabel: ' ',
      tabBarIcon: ({ tintColor }) => (
        <MaterialCommunityIcons name="account" color={tintColor} size={38} />
      )
    }}
  },
  {
    tabBarOptions: {
      activeTintColor: '#C35656',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: '#f1f1f1',
        color: '#f1f1f1'  
      }
    }
  }
);


export default createAppContainer(createSwitchNavigator(
  {
    Auth: LandingPage,
    App: TabNavigator,
    Login: LoginFormPage,
    SignUp: SignUpFormPage
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