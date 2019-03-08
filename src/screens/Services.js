import React, { Component } from 'react';
import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
import CarCharging from '../components/CarCharging';
import RoomRental from '../components/RoomRental';

export default class Services extends Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <Text style={styles.header}>Services</Text>
        </View>
        <View style={styles.container}>
          <CarCharging navigation={this.props.navigation} />
          <RoomRental navigation={this.props.navigation} />
        </View>
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  header: {
    marginTop: 9,
    marginBottom: 15,
    textAlign: "center",
    fontSize: 37,
    fontWeight: "bold"
  }
});