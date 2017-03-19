import React, { Component } from 'react';
import api from '../Utils/api';
import City from './City';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#1C1F36',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    marginTop: 65,
    padding: 30
  },
  title: {
    color: '#884ADF',
    fontSize: 25,
    marginBottom: 20,
    textAlign: 'center'
  },
  searchInput: {
    borderColor: '#FCFCFC',
    borderRadius: 8,
    borderWidth: 1,
    color: '#FCFCFC',
    fontSize: 23,
    height: 50,
    marginRight: 5,
    padding: 4
  },
  buttonText: {
    alignSelf: 'center',
    color: '#884ADF',
    fontSize: 18
  },
  button: {
    alignSelf: 'stretch',
    backgroundColor: '#1C1F36',
    borderColor: '#884ADF',
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    height: 45,
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10
  },
  error: {
    color: 'red',
    fontSize: 25,
    textAlign: 'center'
  }
});

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      isLoading: false,
      error: false
    };
  }

  handleChange(event) {
    this.setState({
      city: event.nativeEvent.text
    });
  }

  handleSubmit(event) {
    this.setState({
      isLoading: true
    });
    api.getPolutionByCity(this.state.city)
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
          this.props.navigator.push({
            title: 'Smoggy',
            component: City,
            passProps: {data: res.data}
          });
          this.setState({
            error: false,
            isLoading: false,
            city: ''
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
    var showErr = (
      this.state.error ? <Text style={styles.error}>{this.state.error}</Text> : <View></View>
    );
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Search for another city</Text>
        <TextInput
          style={styles.searchInput}
          value={this.state.username}
          onChange={this.handleChange.bind(this)} />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
          underlayColor='#884ADF'>
          <Text style={styles.buttonText}>SEARCH</Text>
        </TouchableHighlight>
        <ActivityIndicator
          animating={this.state.isLoading}
          color="#FCFCFC"
          size="large">
        </ActivityIndicator>
        {showErr}
      </View>
    )
  }
}
