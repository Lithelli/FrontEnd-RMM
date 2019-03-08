import React, { Component } from 'react';
import { Text, View, StyleSheet, Picker } from 'react-native';
import { Tile, Overlay, Button } from 'react-native-elements';

export default class RoomRental extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      cost: 80,
      currentPrice: 0,
      numOfSelectedRooms: 0,
      numOfRooms: 6
    }
  }

  handlePress = () => {
    this.setState({ isVisible: true })
  };

  render() {
    return (
      <View>
        <Tile
          imageSrc={require('../../assets/room.jpg')}
          title="Room Rentals"
          featured
          titleStyle={styles.text}
          width={275}
          onPress={this.handlePress}
        />
        <Overlay
          height={500}
          isVisible={this.state.isVisible}
          onBackdropPress={() => this.setState({ isVisible: false })}>
          <>
            <View style={styles.Overlay}>
              <Text style={styles.overlayHeader}>Rent a Space For You to Make</Text>
              <View>
                <Text style={styles.subText}>Price: ${this.state.cost}/month</Text>
                <Text style={styles.subText}>Rooms Available: {this.state.numOfRooms}</Text>
              </View>
            </View>
            <View>
              <Picker
                selectedValue={this.state.language}
                style={styles.picker}
                onValueChange={(numOfSelectedRooms) =>
                  this.setState({ numOfSelectedRooms })
                }>
                <Picker.Item label="0" value="0" />
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />
                <Picker.Item label="5" value="5" />
                <Picker.Item label="6" value="6" />
              </Picker>
            </View>
            <Button
              style={styles.button}
              title={`Pay for ${this.state.numOfSelectedRooms} Room(s)`}
            />
          </>
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
    marginTop: 20,
  },
  overlayHeader: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: 'center',
    borderRadius: 4,
    borderWidth: 3,
    borderColor: '#3d5875',
    marginBottom: 25
  },
  picker: {
    borderRadius: 4,
    borderWidth: 3,
    borderColor: '#3d5875',
    height: 200,
    marginBottom: 20
  },
  subText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: 'center',
    marginBottom: 25
  }
});