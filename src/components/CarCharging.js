import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Tile, Overlay, Input } from 'react-native-elements';
import { AnimatedCircularProgress } from 'react-native-circular-progress';


export default class CarCharging extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      fill: 100,
      currentPrice: '$0.12/kWh'
    }
  }

  parse = (num) => {
    if (!num) {
      this.setState({ fill: 0 })
    } else {
      let fill = parseInt(num);
      this.setState({ fill })
    }
  }

  handlePress = () => {
    this.setState({ isVisible: true })
  };

  render() {
    return (
      <View style={styles.container}>
        <Tile
          imageSrc={require('../../assets/charge.gif')}
          title="Car Charging Station"
          featured
          titleStyle={styles.text}
          width={275}
          onPress={this.handlePress}
        />
        <Overlay isVisible={this.state.isVisible}
          onBackdropPress={() => this.setState({ isVisible: false })}
          animationType="slide">
          <View style={styles.Overlay}>
            <AnimatedCircularProgress
              style={styles.circle}
              size={200}
              width={10}
              duration={2000}
              fill={this.state.fill}
              tintColor="#00e0ff"
              backgroundColor="#3d5875">
              {
                fill => (
                  <>
                    <Text>Current Price:</Text>
                    <Text>{this.state.currentPrice}</Text>
                  </>
                )
              }
            </AnimatedCircularProgress>
            <View>
              <Text>This Sale:</Text>
              <Input
                ref={input => this.fill = input}
                onChangeText={(fill) => this.parse(fill)}
                placeholder="Charge(kWh)"
                containerStyle={{ paddingHorizontal: 37 }}
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
          </View>
        </Overlay>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: 'white'
  },
  container: {
    marginBottom: 25
  },
  Overlay: {
    justifyContent: "center",
    alignSelf: "center",
    textAlign: "center",
    marginTop: 25
  },
  circle: {
    marginBottom: 25
  },
  input: {
    color: "#b70303",
  },
});