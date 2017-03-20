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
import Search from './Search';
import Credits from './Credits';
import FontAwesome from 'react-native-fontawesome';
import _ from 'lodash';

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#1C1F36',
    height: '100%',
    marginTop: 65,
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
    bottom: 70,
    flexDirection: 'row',
    position: 'absolute'
  },
  button: {
    backgroundColor: '#1C1F36',
    flexGrow: 1,
    height: 50,
    justifyContent: 'center',
    width: 90
  }
});

export default class City extends Component {
  goToScale() {
    this.props.navigator.push({
      title: 'Air Quality Index Scale',
      component: Scale
    });
  }

  goToSearch() {
    this.props.navigator.push({
      title: 'Search',
      component: Search
    });
  }

  goToCredits() {
    this.props.navigator.push({
      title: 'Credits',
      component: Credits
    });
  }

  render () {
    var c1 = this.props.data.city.geo[0];
    var c2 = this.props.data.city.geo[1];
    var pm25 = _.get(this.props, 'data.iaqi.pm25.v', 'n/a');
    var no2 = _.get(this.props, 'data.iaqi.no2.v', 'n/a');
    var co = _.get(this.props, 'data.iaqi.co.v', 'n/a');
    var mapUri = `https://maps.googleapis.com/maps/api/staticmap?center=${c1},${c2}&zoom=12&size=300x300&markers=color:red%7Clabel%7C${c1},${c2}&key=AIzaSyBBHDld8xe2WP-yRs0albnVQN9nmWIkLk4`;
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
            <Text style={styles.secondaryValue}>{pm25}</Text>
            <Text style={styles.secondary}>PM2.5</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.secondaryValue}>{no2}</Text>
            <Text style={styles.secondary}>NO2</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.secondaryValue}>{co}</Text>
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
      </View>
    )
  }
}
