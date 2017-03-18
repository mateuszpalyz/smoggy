import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator
} from 'react-native';

var styles = StyleSheet.create({
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#FCFCFC'
  },
  image: {
    height: 125,
    width: 125,
    alignSelf: 'center'
  }
});

export default class LoadingScreen extends Component {
  render () {
    return (
      <View>
        <Image style={styles.image} source={require('../Images/tower-and-fumes.png')}/>
        <Text style={styles.title}>Smoggy</Text>
        <ActivityIndicator color="#FCFCFC" size="large"></ActivityIndicator>
      </View>
    )
  }
}
