import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, FlatList, AsyncStorage, StatusBar } from 'react-native';
import { Avatar, Text } from 'react-native-elements';
// import { getStatusBarHeight } from 'react-native-status-bar-height';
import ListItem from '../components/ListItem';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';

const ACCESS_TOKEN = 'access_token';


HEADER_MAX_HEIGHT = 120
HEADER_MIN_HEIGHT = 70

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'DaveChopWood',
      membershipStatus: 'Full Member',
      accessToken: '',
      statusBarMargin: 0,
      collapse: true,
      list: [
        {
          id: '1',
          title: 'My Classes',
          icon: 'class',
        },
        {
          id: '2',
          title: 'Membership',
          icon: 'credit-card',
        },
        {
          id: '3',
          title: 'Account Settings',
          icon: 'settings',
        },
      ]
    };
  }

  componentWillMount() {
    this.getToken();
  }

  getToken = async () => {
    try {
      let accessToken = await AsyncStorage.getItem(ACCESS_TOKEN);
      if (!accessToken) {
        console.log('No token found');
        this.props.navigation.navigate('Auth');
      } else {
        this.setState({ accessToken });
      }
    } catch (error) {
      console.log('Something went wrong');
      this.props.navigation.navigate('Auth');
    }
  }

  componentDidMount() {

  }
  // handleStatusBarMargin = () => {
  //   let marginActual = getStatusBarHeight();
  //   this.setState({ statusBarMargin: marginActual });
  // }

  handleChevron = () => {
    this.setState({
      fuckit: <Entypo name="chevron-down" size={32} color="black" />
    })
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <StatusBar backgroundColor="red" />
        <ScrollView>
          <SafeAreaView>
            <View style={styles.container}>
              <View style={{ flex: 1 }}>
                <Text style={styles.account}>
                  Account Page
                </Text>
              </View>
              <View style={styles.header}>
                <View>
                  <Text style={styles.avatarText}>Hello, Michael!</Text>
                  <Text style={styles.avatarText}>Member Status: Key holder</Text>
                </View>
                <View style={styles.avatar}>
                  <Avatar
                    rounded
                    size='large'
                    source={require('../../assets/mike.jpeg')}
                  />
                </View>
              </View>
              <View style={{ flex: 1 }}>
                <FlatList
                  data={this.state.list}
                  renderItem={({ item }) => <ListItem item={item} />}
                  keyExtractor={item => item.id}
                />
              </View>
              <View style={{ flex: 1, backgroundColor: 'rgb(214, 87, 69)', height: 480 }}>

              </View>
            </View>
          </SafeAreaView>
        </ScrollView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    flex: 1,
    justifyContent: 'center'
  },
  infoCards: {
    margin: 0,
    padding: 0
  },
  text: {
    textAlign: 'center',
  },
  avatar: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 10,

  },
  account: {
    // marginTop: 9,
    textAlign: "center",
    fontSize: 37,
    height: 100,
    justifyContent: "center",
    flex: 1,
    fontWeight: "bold",
    backgroundColor: '#fff'
  },
  avatarText: {
    paddingLeft: 10,
    color: '#fff'
  },
  header: {
    backgroundColor: 'rgb(214, 87, 69)',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    color: "black"
  }
});
