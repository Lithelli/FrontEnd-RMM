import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Our Mission is to provide a space that 
          promotes discovery, creativity, 
          and exploration of STEAM (Science, Technology, 
          Engineering, Art, Mathematics).</Text>
      </View>
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