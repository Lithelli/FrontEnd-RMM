import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Tile, Overlay } from 'react-native-elements';

export default class RoomRental extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    }
  }

  handlePress = () => {
    this.setState({ isVisible: true })
  };

  render() {
    return (
      <View>
        <Tile
          imageSrc={require('../../assets/room.jpeg')}
          title="Room Rentals"
          featured
          titleStyle={styles.text}
          width={275}
          onPress={this.handlePress}
        />
        <Overlay isVisible={this.state.isVisible}
          onBackdropPress={() => this.setState({ isVisible: false })}
          animationType="slide">
          <View style={styles.Overlay}>
            <Text>Rent a Room!</Text>
            <Text>Single Room: $80/month</Text>
            <Text>Double Room: $160/month</Text>
          </View>
        </Overlay>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: "bold"
  },
  Overlay: {
    justifyContent: "center",
    alignSelf: "center",
    textAlign: "center"
  }
});