import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableHighlight } from 'react-native';
import { Overlay } from 'react-native-elements'



export default class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
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
        }
    }
    renderClasses = () => {
        return this.state.classes.map(oneClass => {
           return <Text key={oneClass.id}>{oneClass.classTitle}</Text>
        })
    }

    handlePress = () => {
        this.setState({ isVisible: true })
    };


    render() {
        return (
            <TouchableHighlight onPress={this.handlePress} style={styles.listItem}>
                <View>
                    <Text style={{fontSize:20}}>{this.props.item.title}</Text>
                    <Overlay
                        isVisible={this.state.isVisible}
                        onBackdropPress={() => this.setState({ isVisible: false })}
                        height={360}
                        animationType="slide">
                        <View contentContainerStyle={{ justifyContent: 'center' }} style={styles.Overlay}>
                            <View style={styles.classBox}>
                                <Text style={{fontSize: 18}}>Intro into Woodworking</Text>
                                <Text style={{fontSize: 18}}>Lee Panther</Text>
                                <Text style={{fontSize: 18}}>04/14/19</Text>
                            </View>
                            <View style={styles.classBox}>
                                <Text style={{fontSize: 18}}>Intro into Hacking</Text>
                                <Text style={{fontSize: 18}}>Josuha Hourne</Text>
                                <Text style={{fontSize: 18}}>04/19/19</Text>
                            </View>
                        </View>
                    </Overlay>
                </View>
            </TouchableHighlight>
        );
    }
}


const styles = StyleSheet.create({
    listItem: {
        borderBottomWidth: 3,
        padding: 20,
        backgroundColor: '#fff',
        justifyContent: "flex-start",
        flexDirection: "row",
        borderColor: "#ddd",
        position: "relative",
    },
    Overlay: {
        margin: 0,
        alignSelf: 'center',
        textAlign: 'center'
    },
    classBox:{
        borderWidth:1,
        borderRadius:7,
        paddingHorizontal:10,
        justifyContent:"space-around",
        margin:20,
        flex:1,
        alignItems:'center',
        backgroundColor:"#fdfdfd",
        paddingVertical:0
    }
})