import React, {Component} from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import Axios from 'axios';
import AlbumItem from './AlbumItem';

class AlbumList extends Component{
  state = {albums : []};
  componentDidMount(){
    console.log("mounted!");
    Axios.get("https://rallycoding.herokuapp.com/api/music_albums")
    .then(response => this.setState({albums : response.data}));
  }
  mapList(){
    return (this.state.albums.map(album =>
              <AlbumItem album={album}/>
    ));
  }
  render(){
    return (
      <ScrollView>
      {this.mapList()}
      </ScrollView>
    );
  }
}

export default AlbumList;
