import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class ListItem extends Component {
    render() {
        return (
            <View style ={styles.listItem}>
                <Text>{this.props.item.title}</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    listItem:{
        borderBottomWidth:1,
        padding: 5,
        backgroundColor:'#fff',
        justifyContent:"flex-start",
        flexDirection:"row",
        borderColor: "#ddd",
        position: "relative"
    }
})