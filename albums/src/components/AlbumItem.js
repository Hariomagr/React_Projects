import React from 'react';
import {View, Text, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
const AlbumItem = ({album}) => {
  return (
    <Card>
      <CardSection>
        <View style={{flexDirection:"row",padding:5}}>
          <Image source={{uri : album.thumbnail_image}} style={Style.image}/>
          <View style={{marginLeft:15,justifyContent:"space-around"}}>
            <Text style={{fontWeight:"bold"}}>{album.title}</Text>
            <Text>{album.artist}</Text>
          </View>
        </View>
      </CardSection>
      <CardSection>
        <Image source={{uri : album.image}} style={Style.imageStyle}/>
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(album.url)}/>
      </CardSection>
  </Card>
  );
};
const Style = {
  image : {
    width : 50,
    height : 50
  },
  imageStyle: {
    height: 300,
    width: null,
    flex: 1,
  }
};
export default AlbumItem;
