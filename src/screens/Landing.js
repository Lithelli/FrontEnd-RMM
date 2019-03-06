import React, { Component } from 'react';
import { SafeAreaView} from 'react-native';
import { Button } from 'react-native-elements';
import LoginForm from '../components/LoginForm'


export default class Landing extends Component {
   render() {
    const {navigate} = this.props.navigation
    return (
      <SafeAreaView>
         <LoginForm/>
        <Button
            title="Sign Up"
            type="clear"
            onPress={() => navigate("SignUp")}
        />
      </SafeAreaView>
    )
  }
}
