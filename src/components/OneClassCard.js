import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Card, Button, Overlay } from "react-native-elements";

export default class OneClassCard extends Component {
  constructor(props) {
    super(props);
    this.state ={
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
        <Overlay isVisible={this.state.isVisible}
        onBackdropPress={() => this.setState({ isVisible: false })}>
          <View style={styles.Overlay}>
            <Text>{this.props.oneClass.classTitle}</Text>
            <Text>{this.props.oneClass.classInstructor}</Text>
            <Text>{this.props.oneClass.classDate}</Text>
          </View>
        </Overlay>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  Overlay:{
    justifyContent:"center",
    alignSelf:"center",
    textAlign:"center"
  }
})