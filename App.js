import React, { Component } from "react";
import BottomTabNavigator from "./components/BottomTabNavigator";
import { LogBox } from 'react-native';


LogBox.ignoreAllLogs();
export default class App extends Component {
  render() {
    return <BottomTabNavigator />;
  }
}
