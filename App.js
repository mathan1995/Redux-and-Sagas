import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StatusBar, View } from 'react-native'
import store from './App/components/store'; //Import the store
import Home from './App/screens/home' //Import the component file

export default class App extends Component {
  render() {
    return (
      // <View>
      //   <StatusBar
      //     backgroundColor="#b3e6ff"
      //     barStyle="dark-content"
      //   />

      // </View>
      <Provider store={store}>
        <Home />
      </Provider>

    );
  }
}