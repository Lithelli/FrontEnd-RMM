import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView } from 'react-native'

export default class Account extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Text> Account Page </Text>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#f1f1f1'
  },
  text: {

  }
});