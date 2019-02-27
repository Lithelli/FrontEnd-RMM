import React, { Component } from 'react'
import { Text, View, } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Login from './srcl/components/Login';
import Home from './src/components/Home';
import ClassCard from './src/components/ClassCard';



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

export default createAppContainer(TabNavigator);