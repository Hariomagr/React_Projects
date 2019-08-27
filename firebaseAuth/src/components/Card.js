import React from 'react';
import {View, Text} from 'react-native';

const Card = (props) => {
  return (
    <View style={Style.view}>
    {props.children}
    </View>
  );
};
const Style = {
  view : {
    backgroundColor: "#FFFFFF",
    marginLeft : 5,
    marginRight : 5,
    borderWidth : 2,
    borderColor : "#F0F0F0",
    borderRadius : 1,
    shadowOpacity : 0.1,
    shadowOffset : {width:0,height:1},
    shadowColor : "#FF00FF",
    elevation : 2,
    marginBottom : 5,
    paddingBottom : 10
  }
};
export default Card;
