import React, { Component } from 'react';
import api from '../Utils/api';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    marginTop: 10
  },
  title: {
    marginBottom: 40,
    fontSize: 25,
    textAlign: 'center',
    color: '#FCFCFC'
  },
  image: {
    borderRadius: 150,
    height: 300,
    width: 300,
    alignSelf: 'center'
  }
});

export default class City extends Component {
  render () {
    var lat = this.props.data.city.geo[0];
    var lon = this.props.data.city.geo[1];
    var mapUri = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lon}&zoom=12&size=300x300&markers=color:red%7Clabel%7C${lat},${lon}`;
    var showErr = (this.props.error ? <Text>{this.props.error}</Text> : <View></View>);
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.data.city.name}</Text>
        <Image style={styles.image} source={{uri: mapUri}}/>
        {showErr}
      </View>
    )
  }
}
