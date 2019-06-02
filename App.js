import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import AppContainer from './app/AppContainer';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});