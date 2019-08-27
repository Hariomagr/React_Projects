import React from 'react';
import {View, Text} from 'react-native';

const CardSection = (props) =>{
  return (
    <View style={Style.view}>
    {props.children}
    </View>
  );
};
const Style = {
  view : {
    marginLeft : 10,
    marginRight : 10,
    shadowOpacity : 0.2,
    shadowOffset : {width:0,height:2},
    elevation : 2,
    borderBottomWidth : 0,
    position : "relative",
    justifyContent : "flex-start",
    flexDirection : "row",
    padding : 5
  }
};
export default CardSection;
