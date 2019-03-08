import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, FlatList, AsyncStorage } from 'react-native';
import { Avatar, Text } from 'react-native-elements';
// import { getStatusBarHeight } from 'react-native-status-bar-height';
import ListItem from '../components/ListItem';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';

const ACCESS_TOKEN = 'access_token';

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
      if(!accessToken) {
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
      fuckit: <Entypo name="chevron-down"  size={32} color="black"/>
    })
  }

  render() {
    return (
     <Provider store={createStore(reducers)}>
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
                  source={{ uri: 'https://yt3.ggpht.com/a-/AAuE7mC8fd9OfGF-LE7viS4c1CLtKwmMaN0j6vqIUg=s288-mo-c-c0xffffffff-rj-k-no' }}
                />
              </View>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <FlatList
              data={this.state.list}
              renderItem={({item}) => <ListItem item={item} />}
              keyExtractor={item => item.id}
            />
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
  avatarText: {
    paddingLeft: 10,
    color: '#fff'
  },
  header: {
    backgroundColor: '#413030',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});
