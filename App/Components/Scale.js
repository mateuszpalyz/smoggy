import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 65,
    flexDirection: 'column',
    backgroundColor: '#1C1F36'
  }
});

export default class Scale extends Component {
  render () {
    return (
      <View style={styles.container}>
      </View>
    )
  }
}
