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
    flex: 1,
    marginTop: 65,
    flexDirection: 'column',
    backgroundColor: '#1C1F36'
  }
});

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
    this.loadInitialData();
  }

  loadInitialData() {
    api.getPolutionByCity('wrocław')
      .then((res) => {
        if(res.status === 'error'){
          this.setState({
            error: res.data,
            isLoading: false
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
          error: error,
          isLoading: false
        });
      });
  }

  render () {
    var page = (
      this.state.isLoading ? <LoadingScreen/> : <City data={this.state.data} error={this.state.error} navigator={this.props.navigator}/>
    );
    return (
      <View style={styles.mainContainer}>
        {page}
      </View>
    )
  }
}
