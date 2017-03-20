import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#1C1F36',
    marginTop: 245
  },
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
  },
  error: {
    color: 'red',
    fontSize: 25,
    textAlign: 'center'
  }
});

export default class LoadingScreen extends Component {
  render () {
    var showErr = (this.props.error ? <Text style={styles.error}>{this.props.error}</Text> : <View></View>);
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('../Images/tower-and-fumes.png')}/>
        <Text style={styles.title}>Smoggy</Text>
        <ActivityIndicator
          animating={!this.props.error}
          color="#FCFCFC"
          size="large">
        </ActivityIndicator>
        {showErr}
      </View>
    )
  }
}
