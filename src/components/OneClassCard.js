import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-navigation';

export default class OneClassCard extends Component {
  // constructor(props) {
  //   super(props);

  //   function classesDoNotExist(props) {
  //     return (
  //       <SafeAreaView>
  //         <View style={Cstyle.card}>
  //           <Text>There are no classes available, or there was an error.</Text>
  //         </View>
  //       </SafeAreaView>
  //     )
  //   }
  // }

  render() {
    <SafeAreaView>
      <View style={Cstyle.card}>
        <Text style={Cstyle.classTitle}>Intro to welding/plasma cutting</Text>
        <Text style={Cstyle.classDate}>10/12/10</Text>
        <Text style={Cstyle.classInstructor}>George Washington</Text>
      </View>
    </SafeAreaView>
  }
}