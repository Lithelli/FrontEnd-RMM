import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class ListItem extends Component {
    render() {
        const { title } = this.props.item;
        return (
            <View>
                <Text>{title}</Text>
            </View>
        );
    }
}
