import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  View
} from 'react-native';
import Main from './App/Components/Main';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111'
  }
});

export default class smoggy extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Smoggy',
          component: Main
        }} />
    );
  }
}

AppRegistry.registerComponent('smoggy', () => smoggy);
