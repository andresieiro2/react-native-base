import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import {Scene, Router} from 'react-native-router-flux';
import HomeView from './../views/home';

export default class RoutesApp extends Component {
  render() {
    console.log(HomeView);
    return (
      <Router>
        <Scene key="root">
          <Scene key="login" component={HomeView} title="Home" initial/>
        </Scene>
      </Router>
    );
  }
}

AppRegistry.registerComponent('RoutesApp', () => RoutesApp);
