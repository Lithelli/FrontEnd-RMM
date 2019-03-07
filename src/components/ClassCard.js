import React, { Component } from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-navigation";
import OneClassCard from "./OneClassCard";

export default class ClassCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: [
        {
          id: 1,
          classTitle: "Intro to Welding/Plasma Cutting",
          classDate: "03/25/2019",
          classInstructor: "Lee Panther"
        },
        {
          id: 2,
          classTitle: "Intro to Woodworking",
          classDate: "03/30/2019",
          classInstructor: "Michael Bakes"
        }
      ]
    };
  }

  // componentDidMount() {
  //   fetch('https://cryptic-crag.herokuapp.com/api/classes')
  //   .then(function(res) {
  //     return res.json();
  //   })
  //   .then(function(classes) {
  //     JSON.parse(classes);
  //     console.log(classes);
  //     this.setState({classes});
  //   })
  // };

  renderClasses = () => {
    return this.state.classes.map(oneClass => {
      return <OneClassCard key={oneClass.id} oneClass={oneClass} />;
    });
  };

  render() {
    return (
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Text style={Cstyle.classHeader}>Upcoming Classes</Text>
          </View>
          <View style={Cstyle.classPageContainer}>{this.renderClasses()}</View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const Cstyle = StyleSheet.create({
  classTitle: {
    paddingLeft: 10,
    textAlign: "left",
    fontSize: 19,
    paddingTop: 9
  },
  classDate: {
    padding: 15,
    textAlign: "right",
    fontSize: 20,
    paddingTop: 20
  },
  classInstructor: {
    padding: 15,
    textAlign: "left",
    fontSize: 20,
    paddingTop: 20
  },
  card: {
    margin: 20,
    borderRadius: 6,
    shadowOpacity: 0.5,
    height: 250,
    marginBottom: 10,
    backgroundColor: "#F1F1F1"
  },
  ImageBackground: {
    height: 90,
    resizeMode: "contain",
    borderRadius: 40
  },
  classPageContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    marginBottom: 20,
    padding: 10
  },
  classHeader: {
    marginTop: 9,
    textAlign: "center",
    fontSize: 37,
    fontWeight: "bold"
  }
});
