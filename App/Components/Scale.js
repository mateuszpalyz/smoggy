import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#1C1F36',
    flexDirection: 'column',
    flex: 1,
    marginTop: 65
  },
  row: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 20
  },
  rowText: {
    color: '#FCFCFC',
    fontSize: 17
  },
  rowText2: {
    color: '#884ADF',
    fontSize: 17
  },
  rowTextValue: {
    color: '#FCFCFC',
    fontSize: 17,
    width: 80
  },
  rowText2Value: {
    color: '#884ADF',
    fontSize: 17,
    width: 80
  }
});

export default class Scale extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.rowTextValue}>0-50</Text>
          <Text style={styles.rowText}>Good</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowText2Value}>51-100</Text>
          <Text style={styles.rowText2}>Moderate</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowTextValue}>101-150</Text>
          <Text style={styles.rowText}>Unhealthy for Sensitive Groups</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowText2Value}>151-200</Text>
          <Text style={styles.rowText2}>Unhealthy</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowTextValue}>201-300</Text>
          <Text style={styles.rowText}>Very Unhealthy</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowText2Value}>300+</Text>
          <Text style={styles.rowText2}>Hazardous</Text>
        </View>
      </View>
    )
  }
}
