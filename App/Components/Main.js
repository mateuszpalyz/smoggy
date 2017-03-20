import React, { Component } from 'react';
import api from '../Utils/api';
import LoadingScreen from './LoadingScreen';
import City from './City';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

var styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#1C1F36',
    flex: 1,
    flexDirection: 'column'
  }
});

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
    this.loadInitialData();
  }

  loadInitialData() {
    navigator.geolocation.getCurrentPosition(
      (p) => {
        // Math.round is used due to error in aqi api, it returns order of coordinates when longitude is not int
        api.getPolutionByCoordinates(p.coords.latitude, Math.round(p.coords.longitude))
          .then((res) => {
            if(res.status === 'error'){
              console.log(res.data);
              this.setState({
                error: res.data
              });
            } else {
              this.setState({
                isLoading: false,
                data: res.data
              });
            }
          })
          .catch((error) => {
            this.setState({
              error: error
            });
          });
      },
      (error) => console.log(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }

  render () {
    var page = (
      this.state.isLoading ? <LoadingScreen error={this.state.error}/> : <City data={this.state.data} navigator={this.props.navigator}/>
    );
    return (
      <View style={styles.mainContainer}>
        {page}
      </View>
    )
  }
}
