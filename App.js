import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native';
import { createBottomTabNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import Login from './srcl/components/Login';
import Account from './src/components/Account';
import Home from './src/components/Home';
import ClassCard from './src/components/ClassCard';

class LoginScreen extends React.Component {
  login = () => {
    this.props.navigation.navigate('App')
  }
  render() {
    return (
      <View style={styles.loginbtn}>
        <Login style={styles.login} />
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
    flex: 1
  },
  loginbtn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});