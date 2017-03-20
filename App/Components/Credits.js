import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Linking
} from 'react-native';
import Web_View from './Web_View';

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#1C1F36',
    flex: 1,
    justifyContent: 'center',
    marginTop: 65
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20
  },
  rowText: {
    color: '#FCFCFC',
    fontSize: 20
  },
  rowText2: {
    color: '#884ADF',
    fontSize: 17
  },
  logoInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 140,
  },
  logoText: {
    color: '#FCFCFC'
  },
  logoLink: {
    color: '#884ADF'
  }
});

export default class Credits extends Component {
  openPage(url) {
    this.props.navigator.push({
      component: Web_View,
      title: 'Github Page',
      passProps: {url: url}
    });
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.rowText2}>Author</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowText}
            onPress={this.openPage.bind(this, 'https://github.com/mateuszpalyz')}>
            https://github.com/mateuszpalyz
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowText2}>(click link to check more)</Text>
        </View>
        <View style={styles.logoInfo}>
          <Text style={styles.logoText}>Logo made by </Text>
          <Text style={styles.logoLink}
            onPress={() => Linking.openURL('http://www.freepik.com')}>
            Freepik
          </Text>
          <Text style={styles.logoText}> from </Text>
          <Text style={styles.logoLink}
            onPress={() => Linking.openURL('http://www.flaticon.com')}>
            www.flaticon.com
          </Text>
        </View>
      </View>
    )
  }
}
