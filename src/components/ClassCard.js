import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import OneClassCard from './OneClassCard'


export default class ClassCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            classes: []
        }
    }

    render() {
        const classes = this.state.classes
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
              <SafeAreaView>
              <View><Text style={Cstyle.classHeader}>Upcoming Classes</Text></View>
                <View style={Cstyle.classPageContainer}>
                    <View>
                        {classes.map(oneClass => {
                            <View key={oneClass.id}>
                                <OneClassCard className={oneClass} />
                            </View>
                        })}
                    </View>
                </View>
              </SafeAreaView>
            </ScrollView>
        );
    }
};

const Cstyle = StyleSheet.create({
    classTitle: {
        textAlign: "left",
        fontSize: 20,
        paddingTop: 55
    },
    classDate: {
        textAlign: "right",
        fontSize: 20,
        paddingTop: 35
    },
    classInstructor: {
        textAlign: "left",
        fontSize: 20,
        paddingTop: 35
    },
    card: {
        height: 250,
        marginBottom: 10,
        backgroundColor: '#F1F1F1'
    },
    classPageContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        marginBottom: 20,
        padding: 10,
    },
    classHeader: {
        textAlign: "center",
        fontSize: 37,
        fontWeight: "bold",
    },
})
