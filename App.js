
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import {Scene, Router} from 'react-native-router-flux';
import RoutesApp from './src/routes/routes';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from './src/store/reducers';
import { createStore, applyMiddleware, combineReducers } from 'redux';

const store = createStore(combineReducers(reducers), applyMiddleware(thunk))

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RoutesApp />
      </Provider>
    );
  }
}

//atlerar o nome do APP
AppRegistry.registerComponent('reactNativeProject', () => App);
