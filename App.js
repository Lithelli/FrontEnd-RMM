import React, { Component } from 'react'
import { Text, View, Button } from 'react-native';
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
      <View>
        {/* <Login /> */}
        <Button
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