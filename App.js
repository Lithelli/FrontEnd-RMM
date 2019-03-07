import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native';
import { createBottomTabNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import { Ionicons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import Landing from './src/screens/Landing';
import Account from './src/screens/Account';
import ClassCard from './src/components/ClassCard';
import SignUpForm from './src/components/SignUpForm';
import Services from './src/screens/Services';


class LandingPage extends React.Component {
  render() {
    return (
      <View style={styles.login}>
        <Landing navigation={this.props.navigation}/>
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
    Account: {
      screen: AccountScreen,
      navigationOptions: {
        tabBarLabel: ' ',
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons name="account" color={tintColor} size={34} />
        )
      }
    },
    Classes: {
      screen: ClassesScreen,
      navigationOptions: {
        tabBarLabel: ' ',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="calendar-o" color={tintColor} size={28} />
        )
      }
    },
    Services: {
      screen:Services,
      navigationOptions: {
        tabBarLabel: ' ',
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons name="cards-diamond" color={tintColor} size={30} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: '#C35656',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: '#f1f1f1',
        color: '#f1f1f1',
        paddingTop:5
      }
    }
  }
);


export default createAppContainer(createSwitchNavigator(
  {
    Auth: LandingPage,
    App: TabNavigator,
    SignUp: SignUpFormPage
  },
  {
    initialRouteName: 'App'
  }
));

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});