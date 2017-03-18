import React, { Component } from 'react';
import api from '../Utils/api';
import {
  StyleSheet,
  Text,
  View,
  Image
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

export default class City extends Component {
  render () {
    var showErr = (this.props.error ? <Text>{this.props.error}</Text> : <View></View>);
    return (
      <View>
        <Image style={styles.image} source={require('../Images/tower-and-fumes.png')}/>
        <Text style={styles.title}>City</Text>
        {showErr}
      </View>
    )
  }
}
