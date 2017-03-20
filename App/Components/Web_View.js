import React, { Component } from 'react';
import {
  View,
  WebView,
  StyleSheet
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1F36',
    flexDirection: 'column'
  }
});

export default class Web_View extends Component {
  render () {
    return (
      <View style={styles.container}>
        <WebView source={{uri: this.props.url}}/>
      </View>
    )
  }
}
