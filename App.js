
import { Button, View, Text  } from 'react-native';
import ClassCard from './src/components/ClassCard';
import { SafeAreaView, createStackNavigator, createAppContainer } from 'react-navigation';
import React, { Component } from 'react'
import { Text, View, } from 'react-native';
import Login from '/Users/student/Desktop/rmm/FrontEnd-RMM/srcl/components/Login.js';

export default class App extends Component {
  render() {
    return (
  ///////    <SafeAreaView>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>Home Screen</Text>
          <Button 
            title = 'Go To Details'
            onPress = {() => this.props.navigation.navigate('Details')}
          />
        </View>
  ////////     </SafeAreaView>
    );
  }
}
////// Options for another page ////////
class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
        <Text>Details Screen</Text>
        <Button 
          title = 'Go to Details... again'
          onPress = {() => this.props.navigation.push('Details')}
        />
      </View>
    )
  }
}

//////// calls upon the tools of react-navigation to create a nav ////////////
const RootStack = createStackNavigator(
  {
  Home: HomeScreen,          //this is calling the HomeScreen class
  Details: DetailsScreen
},
{
  initialRouteName: 'Home'
}
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}