import React from 'react';
import { StyleSheet, Text, ScrollView, View, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import OneClassCard from './OneClassCard';


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
                        <View style={Cstyle.card}>
                            <ImageBackground source={require('../../assets/laser_cutting.jpg')} style={Cstyle.ImageBackground}/>
                            <Text style={Cstyle.classTitle}>Intro to welding/plasma cutting</Text>
                            <Text style={Cstyle.classDate}>10/12/10</Text>
                            <Text style={Cstyle.classInstructor}>George Washington</Text>
                            {/* {classes.map(oneClass => {
                            console.log(oneClass);
                            <View key={oneClass.id}>
                                <OneClassCard className={oneClass} />
                            </View>
                        })} */}
                        </View>
                    </View>
                </SafeAreaView>
            </ScrollView>
        );
    }
};

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
        paddingTop: 35
    },
    classInstructor: {
        padding: 15,
        textAlign: "left",
        fontSize: 20,
        paddingTop: 35
    },
    card: {
        margin: 20,
        borderRadius: 6,
        shadowOpacity: 0.5,
        height: 250,
        marginBottom: 10,
        backgroundColor: '#F1F1F1'
    },
    ImageBackground: {
        height: 90,
        resizeMode: 'contain'
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
        marginTop: 9,
        textAlign: "center",
        fontSize: 37,
        fontWeight: "bold",
    },
});

