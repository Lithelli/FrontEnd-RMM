import React, { Component } from 'react';
import { Text, StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import { Tile, Overlay, Input, Button } from 'react-native-elements';
import { AnimatedCircularProgress } from 'react-native-circular-progress';


export default class CarCharging extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      fill: 100,
      cost: 0.12,
      currentPrice: 0

    }
  }

  getPrice = (num) => {
    let currentPrice = num * 0.12;
    this.setState({ currentPrice });
  }

  isInt = (n) => {
    n = parseInt(n);
    return Number(n) === n && n % 1 === 0;
  }

  isFloat = (n) => {
    n = parseFloat(n);
    return Number(n) === n && n % 1 !== 0;
  }

  parse = (n) => {
    if(this.isFloat(n)){
      let fill = parseFloat(n);
      this.setState({ fill });
      this.getPrice(fill);
      console.log(n + ' is float');
    } else if (this.isInt(n)){
      let fill = parseInt(n);
      this.setState({ fill });
      this.getPrice(fill);
      console.log(n + ' is int')
    } else {
      this.setState({ fill: 0, currentPrice: 0 });
      console.log(n + ' is NaN')
    }
  }

  handlePress = () => {
    this.setState({ isVisible: true })
  };

  render() {
    return (
      <View style={styles.container}>
        <Tile
          imageSrc={require('../../assets/gauge.png')}
          title="Car Charging Station"
          featured
          titleStyle={styles.text}
          width={275}
          containerStyle={{borderRadius:2}}
          onPress={this.handlePress}
        />
        <Overlay
          style={styles.Overlay}
          height={500}
          isVisible={this.state.isVisible}
          onBackdropPress={() => this.setState({ isVisible: false })}>
          <KeyboardAvoidingView style={styles.overlayView}>
            <AnimatedCircularProgress
              style={styles.circle}
              size={200}
              width={10}
              duration={1750}
              fill={this.state.fill}
              tintColor="#00e0ff"
              backgroundColor="#3d5875">
              {
                fill => (
                  <>
                    <Text>You Pay:</Text>
                    <Text>${this.state.currentPrice}</Text>
                  </>
                )
              }
            </AnimatedCircularProgress>
            <View style={styles.overlayText}>
              <Text>Cost per kWh</Text>
              <Text style={styles.circle} >${this.state.cost}/kWh</Text>
              <Text>Charge(kWh)</Text>
              <Input
                ref={input => this.fill = input}
                onChangeText={(fill) => this.parse(fill)}
                placeholder="(kWh)"
                containerStyle={{ paddingHorizontal: 37 }}
                style={styles.input}
                returnKeyType="go"
                autoCapitalize="none"
                autoCorrect={false}
              />
              <Button
                style={styles.button}
                title="Pay Now"
              />
            </View>
          </KeyboardAvoidingView>
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
  overlayView: {
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 10
  },
  circle: {
    marginBottom: 25
  },
  overlayText: {
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 3,
    borderColor: '#3d5875',
    marginTop: 17
  },
  input: {
    color: "#3d5875",
    alignItems: 'center'
  },
  button: {
    marginTop: 25,
    marginBottom: 12
  }
});