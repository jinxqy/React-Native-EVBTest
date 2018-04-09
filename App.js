/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import { AppRegistry, ListView, Text, View } from 'react-native';

var LoginView = require("./src/pages/loginPage");
export default class App extends Component{
    static defaultProps = {
      title: 'MyScene',
        aaa: 'aaa'
    };

    render() {
      return (
        <View>
          <LoginView/>
        </View>
      )
    }
}
