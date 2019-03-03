import React, { Component } from 'react';
import { Image, View, StyleSheet, SafeAreaView} from 'react-native';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';

export default class Landing extends Component {
  render() {
    return (
      <SafeAreaView>
        <Image
          source={require('../../assets/RedLogo.png')}
          style={styles.img}
         />
        <LoginForm navigation={this.props.navigation}/>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
    img: {
        margin: 20,
        alignSelf: "center"
      }
});
