import React, { Component } from 'react'
import { FlatList, View } from 'react-native'

export default class AccountList extends Component {
  render() {
    return (
        <FlatList
        data={this.props.list}
        renderItem={({item}) => <ListItem item={item} />}
        keyExtractor={item => item.id}
      />
    );
  }
}
