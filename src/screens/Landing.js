import React, { Component } from 'react';
import { Image, View, StyleSheet, SafeAreaView} from 'react-native';
import { Button } from 'react-native-elements';

export default class Landing extends Component {
   render() {
    const {navigate} = this.props.navigation
    return (
      <SafeAreaView>
        <Image
          source={require('../../assets/RedLogo.png')}
          style={styles.img}
         />
        <Button
            title="Sign Up"
            type="clear"
            onPress={() => navigate("SignUp")}
        />
         <Button
            title="Login"
            type="clear"
            onPress={() => navigate("Login")}
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
    img: {
        margin: 20,
        alignSelf: "center"
      },
});
