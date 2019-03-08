import React, { Component } from 'react'
import { FlatList, View } from 'react-native'
import { connect } from 'react-redux';



class AccountList extends Component {

  renderItem(work) {
    return <ListItem work={work} />;
  }

  render() {
    return (
        <FlatList
        data={this.props.classes}
        renderItem={this.renderItem}
        keyExtractor={work => work.id}
      />
    );
  }
}

const mapStateToProps = state => {
  return { 
    classes: state.classes
  }
};

export default connect(mapStateToProps)(AccountList);