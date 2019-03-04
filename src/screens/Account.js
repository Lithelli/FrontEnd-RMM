import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Avatar, Header, Text, ListItem } from 'react-native-elements';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      
    }
  }
  componentDidMount() {

  }

  render() {
    const list = [
      {
        title: 'My Classes',
        icon: 'class'
      },
      {
        title: 'Membership',
        icon: 'credit-card'
      },
      {
        title: 'Account Settings',
        icon: 'settings'
      },
    ]
    return (
      <ScrollView>
        <Header
          containerStyle={{
            backgroundColor: '#f1f1f1'
          }}
          placement="left"
          rightComponent={{ text: 'MY PROFILE' }}
        />
        <SafeAreaView>
          <View style={styles.container}>
            <View style={styles.header}>
              <View>
                <Text style={styles.avatarText}>Hello, User.Name!</Text>
                <Text style={styles.avatarText}>Member Status</Text>
              </View>
              <View style={styles.avatar}>
                <Avatar
                  size='large'
                  rounded
                  source={{ uri: 
                    'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' }}
                  showEditButton
                />
              </View>
            </View>
            <View>
              {
                list.map((item, i) => (
                  <ListItem
                    key={i}
                    title={item.title}
                    leftIcon={{ name: item.icon }}
                    chevron={true}
                    bottomDivider={true}
                  />
                ))
              }
            </View>
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
    backgroundColor: '#413030',
  },
  text: {
    textAlign: "center",
  },
  avatar: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 10,
  },
  avatarText: {
    paddingLeft: 10,
    color: '#fff'
  },
  header: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});