import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

const Button = ({onPress, label}) =>{
  return(
    <TouchableOpacity style={Style.button} onPress={onPress}>
      <Text style={Style.text}>{label}</Text>
    </TouchableOpacity>
  );
};
const Style = {
  button : {
    flex : 1,
    alignSelf : "stretch",
    borderColor : "#007aff",
    borderWidth : 1,
    borderRadius : 6
  },
  text : {
    fontSize : 15,
    color : "#007aff",
    fontWeight : "bold",
    alignSelf : "center",
    paddingTop : 10,
    paddingBottom : 10
  }
}
export default Button;
