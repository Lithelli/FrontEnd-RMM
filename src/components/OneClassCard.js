import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Card, Button, Overlay } from 'react-native-elements';
import { CreditCardInput } from 'react-native-credit-card-input';


export default class OneClassCard extends Component {
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
      <SafeAreaView>
        <Card
          image={require("../../assets/laser_cutting.jpg")}
          featuredTitle={this.props.oneClass.classTitle}
          featuredSubtitle={this.props.oneClass.classDate}
          featuredTitlestyle={alignItems = 'center'}
        >
          <Button
            onPress={this.handlePress}
            color="#D46A6A"
            title="Sign Up"
          />
        </Card>
        <Overlay
          isVisible={this.state.isVisible}
          onBackdropPress={() => this.setState({ isVisible: false })}
          height={360}>
          <ScrollView contentContainerStyle={{ justifyContent: 'center' }} style={styles.Overlay}>
            <View style={styles.PaymentHeader}>
              <Text style={styles.ClassText}>Sign up for {this.props.oneClass.classTitle} with {this.props.oneClass.classInstructor} on {this.props.oneClass.classDate}</Text>
            </View>
            <View>
              <CreditCardInput
                onChange={this._onChange}
                autoFocus
                cardScale={0.9}
                inputContainerStyle={{ borderBottomWidth: 0.8 }}
              />
            </View>
          </ScrollView>
        </Overlay>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  Overlay: {
    margin: 0,
    alignSelf: 'center',
    textAlign: 'center'
  },
  PaymentHeader: {
    fontWeight: 'bold',
    margin: 10,
    alignSelf: 'stretch',
    borderRadius: 6
  },
  PaymentBody: {
    flex: 1
  },
  TextInput: {
    padding: 20
  },
  ClassText: {
    fontWeight: 'bold'
  }
});
