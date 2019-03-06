import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Avatar, Header, Text, ListItem } from 'react-native-elements';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "DaveChopWood",
      membershipStatus: "Full Member",
      statusBarMargin: 0
    }
  }

  handleStatusBarMargin = () => {
    let marginActual = getStatusBarHeight();
    this.setState({statusBarMargin: marginActual});
  }

  handleListExpand = (item) => {

  }

  render() {
    const list = [
      {
        title: 'My Classes',
        icon: 'class',
        content: {
          membershipStatus: this.state.membershipStatus,
          level_of_dopeness: 3.50
        }
      },
      {
        title: 'Membership',
        icon: 'credit-card',content: {
          membershipStatus: this.state.membershipStatus,
          level_of_dopeness: 3.50
        }
      },
      {
        title: 'Account Settings',
        icon: 'settings',
        content: {
          membershipStatus: this.state.membershipStatus,
          level_of_dopeness: 3.50
        }
      },
    ]
    return (
      <ScrollView>
        <SafeAreaView>
          <View style={styles.container}>
            <View style={styles.header}>
              <View>
                <Text style={styles.avatarText}>Hello, {this.state.userName}!</Text>
                <Text style={styles.avatarText}>Member Status: {this.state.membershipStatus}</Text>
              </View>
              <View style={styles.avatar}>
                <Avatar
                  size='large'
                  rounded
                  source={{
                    uri: '{https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjFu4qF4e3gAhVInOAKHQLcDn4QjRx6BAgBEAU&url=https%3A%2F%2Fwww.redmountainmakers.org%2F&psig=AOvVaw16bFNBBIgy0uKyZ93YFNtf&ust=1551970026776554}'
                  }}
                  showEditButton
                />
              </View>
            </View>
            <View>
              {list.map((item, i) => (
                <ListItem
                  key={i}
                  title={item.title}
                  leftIcon={{ name: item.icon }}
                  chevron={true}
                  bottomDivider={true}
                  onPress={innerHeight: 100}
                >
                  Hello
                </ListItem>
              ))}
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
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