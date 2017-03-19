import React, { Component } from 'react';
import api from '../Utils/api';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import PercentageCircle from './PercentageCircle';

var styles = StyleSheet.create({
  container: {
    marginTop: 10
  },
  title: {
    color: '#FCFCFC',
    fontSize: 25,
    marginBottom: 40,
    textAlign: 'center',
  },
  circle: {
    alignSelf: 'center'
  },
  image: {
    borderRadius: 150,
    height: 300,
    width: 300,
  },
  aqiOverlay: {
    backgroundColor: 'rgba(0,0,0,0)'
  },
  mainInfo: {
    color: '#884ADF',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 40,
    textAlign: 'center'
  },
  mainValue: {
    color: '#884ADF',
    fontSize: 70,
    fontWeight: 'bold',
    marginTop: 100,
    textAlign: 'center'
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40
  },
  infoBox: {
    width: 120
  },
  secondary: {
    color: '#D7D7D7',
    fontSize: 26,
    fontWeight: '100',
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'center'
  },
  secondaryValue: {
    color: '#884ADF',
    fontSize: 19,
    textAlign: 'center'
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
        <View style={styles.circle}>
          <PercentageCircle radius={151} percent={this.props.data.aqi/3} color={'#884ADF'} borderWidth={7}>
            <Image style={styles.image} source={{uri: mapUri}}>
              <View style={styles.aqiOverlay}>
                <Text style={styles.mainInfo}>AQI</Text>
                <Text style={styles.mainValue}>{this.props.data.aqi}</Text>
              </View>
            </Image>
          </PercentageCircle>
        </View>
        <View style={styles.info}>
          <View style={styles.infoBox}>
            <Text style={styles.secondaryValue}>{this.props.data.iaqi.pm25.v}</Text>
            <Text style={styles.secondary}>PM2.5</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.secondaryValue}>{this.props.data.iaqi.no2.v}</Text>
            <Text style={styles.secondary}>NO2</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.secondaryValue}>{this.props.data.iaqi.co.v}</Text>
            <Text style={styles.secondary}>CO</Text>
          </View>
        </View>
        <View style={styles.circle}></View>
        {showErr}
      </View>
    )
  }
}
