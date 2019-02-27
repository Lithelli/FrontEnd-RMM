import React from 'react';
import { View, Text,  } from 'react-native';
import ClassCard from './src/components/ClassCard';
import { SafeAreaView, createStackNavigator, createAppContainer } from 'react-navigation';

// export default class App extends React.Component {
//   render() {
//     return (
//       <SafeAreaView>
        
//       </SafeAreaView>
//     );
//   }
// }
//////////// MOCK HOME SCREEN TO PRACTICE NAVIGATION /////////////////
class HomeScreen extends React.Component {
  render() {
    return (
  ///////    <SafeAreaView>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>Home Screen</Text>
        </View>
 /////////     </SafeAreaView>
    );
  }
}
//////// calls upon the tools of react-navigation to create a nav ////////////
const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen          //this is calling the HomeScreen class
  }
});

export default createAppContainer(AppNavigator);


