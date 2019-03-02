import React, { Component } from 'react'
import { Text, View, Button, Icon } from 'react-native'
import { SafeAreaView } from 'react-navigation';
import Card from 'react-native-elements';

class OneClassCard extends Component {
  render() {
    return (
      <SafeAreaView>
      <View>
        <Card
          title={this.props.classTitle}
          image={require('../../assets/laser_cutting.jpg')}>
          <Text style={{ marginBottom: 10 }}>
            {this.props.classDate}
          </Text>
          <Text style={{ marginBottom: 10 }}>
            {this.props.classInstructor}
          </Text>
          <Button
            icon={<Icon name='code' color='#ffffff' />}
            backgroundColor='#03A9F4'
            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
            title='VIEW NOW' />
        </Card>
      </View>
    </SafeAreaView>
    )
  }
}

export default OneClassCard;