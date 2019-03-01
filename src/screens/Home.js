import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mission}>
        <Text style={styles.text}>Our Mission is to provide a space that 
          promotes discovery, creativity, 
          and exploration of STEAM (Science, Technology, 
          Engineering, Art, Mathematics).</Text>
        </View>
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
    fontSize: 10
  },
  mission: {
    
  }
});