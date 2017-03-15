import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#48BBEC'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  }
});

export default class Main extends Component {

  render () {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Placeholder</Text>
      </View>
    )
  }
}
