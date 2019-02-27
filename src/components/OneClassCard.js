import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-navigation';

export default class OneClassCard extends Component {

  render() {
    if (0 == 2) {
      return (
        <SafeAreaView>
          <View style={Cstyle.card}>
            <Text style={Cstyle.classTitle}>{props.classTitle}</Text>
            <Text style={Cstyle.classDate}>{props.classDate}</Text>
            <Text style={Cstyle.classInstructor}>{props.classInstructor}</Text>
          </View>
        </SafeAreaView>
      )
    } else {
      return (
        <SafeAreaView>
          <View style={Cstyle.card}>
            <Text>There are no classes available, or there was an error.</Text>
          </View>
        </SafeAreaView>
      )
    }
  }
}