import React, { Component } from 'react';
import { View, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native';
import { Avatar, Divider, Text } from 'react-native-elements';

export default class Home extends Component {
  render() {
    return (
      <ScrollView>
        <SafeAreaView>
          <View style={styles.container}>
            <View style={styles.mission}>
            <Text h1 style={styles.text}>Misson Statement</Text>
              <Text h4 style={styles.text}>Our Mission is to provide a space that 
                promotes discovery, creativity, 
                and exploration of STEAM (Science, Technology, 
                Engineering, Art, Mathematics).</Text>
            </View>
        {/* ///FOCUS///// */}
            <View style={styles.Focus}>
                <Text h1 style={styles.Header}>OUR FOCUS</Text>
              <View>
                <Text h3 style={styles.text}>Tech and Engineering</Text>
                <Avatar rounded icon={{ name: 'home'}} />
                <Text h4 style={styles.text}>We offer multiple labs and tools for your tech and 
                  engineering needs! From Circuits labs to 3D printing labs, members have 
                  access to entire host of tools and space at our Makerspace!</Text>
              </View>
              <View>
                <Text h3 style={styles.text}>Art</Text>
                <Avatar rounded icon={{ name: 'home' }} />
                <Text h4 style={styles.text}>We offer multiple labs and tools for your artistic needs!
                  We offer sewing space with industrial sewing machines, woodshop, metal working tools, 
                  and more! Come stop by!
                </Text>
              </View>
              <View>
                <Text h3 style={styles.text}>Science</Text>
                <Avatar rounded icon={{ name: 'home' }} />
                <Text h4 style={styles.text}>We offer multiple labs and tools for your scientific needs!
                  Want to explore plant life, maybe try your hand at brewing. You can 
                  at Red Mounatin Makers! We offer a biochem science lab for your 
                  scientifically inclined curiosity.
                </Text>
              </View>
            </View>
          
                  {/* end of Focus */}
          {/*////////// Provisions//////// */}
          <View>
           <Text h1 style={styles.Header}>Provisons</Text>
            <View>
              <Text h3 style={styles.text}>Room Rentals</Text>
              <Avatar rounded icon={{ name: 'home' }} />
              <Text h4 style={styles.text}>Rent your own personal room that you can decorate and store 
                your projects at Red Mounatin Makers.
              </Text>
            </View>
            <View>
            <Text h3 style={styles.text}>Hack Friendly</Text>
              <Avatar rounded icon={{ name: 'home' }} />
              <Text h4 style={styles.text}>Seriously we have a hack zone full of parts ready to be dismembered 
                and re-purposed! We take in all kinds of technological based donations! Plus we love 
                open source ideas and work! At Red Mountain Makers, we try to stay as collaborative as possible.
              </Text>
            </View>
            <View>
            <Text h3 style={styles.text}>Knowledge Base</Text>
              <Avatar rounded icon={{ name: 'home' }} />
              <Text h4 style={styles.text}>Knowledge is a powerful thing and we provide a community that can help fill in 
                the Gaps in your knowledge. We dont't know everthing but we have a diverse
                community of Makers who would love to help. Exploration into the unknown is the start of 
                an adventure here at Red Mountain Makers.
              </Text>
            </View>
          </View>
          

                  {/* end of provisons */}

        </View>
      </SafeAreaView>
      </ScrollView>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    textAlign: "center"

  },
  mission: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    fontSize: 170,
  },
  Focus: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: "center",
  },
  text: {
    textAlign: "center",
  },
  Header : {
    textAlign: "center",
    paddingTop: 45,
    paddingBottom: 20,
    color: "red"
  }
});