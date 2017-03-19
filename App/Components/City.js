import React, { Component } from 'react';
import api from '../Utils/api';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import PercentageCircle from './PercentageCircle';
import Scale from './Scale';
import FontAwesome from 'react-native-fontawesome';

var styles = StyleSheet.create({
  container: {
    height: '100%',
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
  },
  buttonText: {
    alignSelf: 'center',
    color: '#D7D7D7',
    fontSize: 20
  },
  buttons: {
    bottom: 10,
    flexDirection: 'row',
    position: 'absolute'
  },
  button: {
    backgroundColor: '#1C1F36',
    flexGrow: 1,
    height: 50,
    justifyContent: 'center',
    width: 90
  },
});

export default class City extends Component {
  goToScale() {
    this.props.navigator.push({
      title: 'Air Quality Index Scale',
      component: Scale
    });
  }

  goToSearch() {
    console.log('search');
  }

  goToCredits() {
    console.log('credits');
  }

  render () {
    var c1 = this.props.data.city.geo[0];
    var c2 = this.props.data.city.geo[1];
    var mapUri = `https://maps.googleapis.com/maps/api/staticmap?center=${c2},${c1}&zoom=12&size=300x300&markers=color:red%7Clabel%7C${c2},${c1}&key=AIzaSyBBHDld8xe2WP-yRs0albnVQN9nmWIkLk4`;
    console.log(mapUri);
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
        <View style={styles.buttons}>
          <TouchableHighlight
            style={styles.button}
            onPress={this.goToScale.bind(this)}
            underlayColor='#884ADF'>
            <Text style={styles.buttonText}><FontAwesome>info</FontAwesome></Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            onPress={this.goToSearch.bind(this)}
            underlayColor='#884ADF'>
            <Text style={styles.buttonText}><FontAwesome>search</FontAwesome></Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            onPress={this.goToCredits.bind(this)}
            underlayColor='#884ADF'>
            <Text style={styles.buttonText}>Credits</Text>
          </TouchableHighlight>
        </View>
        {showErr}
      </View>
    )
  }
}
