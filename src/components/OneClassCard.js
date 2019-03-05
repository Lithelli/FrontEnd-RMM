import React, { Component } from "react";
import { Text, Button, Icon } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Card } from "react-native-elements";

export default class OneClassCard extends Component {
  constructor(props) {
    super(props);
  }

  handlePress = () => {
    console.log("button pressed on card");
  };

  render() {
    return (
      <SafeAreaView>
        <Card image={require("../../assets/laser_cutting.jpg")}>
        
          <Text style={{ marginBottom: 10 }}>
            {this.props.oneClass.classInstructor}
          </Text>
          <Text style={{ marginBottom: 10 }}>
            {this.props.oneClass.classDate}
          </Text>
          <Button
            onPress={this.handlePress}
            backgroundColor="#413030"
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0
            }}
            title="Select"
          />
        </Card>
      </SafeAreaView>
    );
  }
}
