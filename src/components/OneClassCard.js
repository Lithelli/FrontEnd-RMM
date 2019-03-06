import React, { Component } from "react";
import { } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Card, Button } from "react-native-elements";

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
        <Card
          title={this.props.oneClass.classTitle}
          image={require("../../assets/laser_cutting.jpg")}
          featuredTitle={this.props.oneClass.classInstructor}
          featuredSubtitle={this.props.oneClass.classDate}
        >
          <Button
            onPress={this.handlePress}
            color="#D46A6A"
            title="Sign Up"
          />
        </Card>
      </SafeAreaView>
    );
  }
}

