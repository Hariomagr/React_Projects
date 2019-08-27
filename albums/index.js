/**
 * @format
 */
import React from 'react';
import {AppRegistry, Text, View} from 'react-native';
import {name as appName} from './app.json';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
const App = () => {
  return (
    <View style={{flex:1}}>
      <Header text={"Albums"}/>
      <AlbumList/>
    </View>
  );
};
AppRegistry.registerComponent(appName, () => App);
