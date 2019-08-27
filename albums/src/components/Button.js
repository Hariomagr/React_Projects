import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

const Button = ({onPress}) =>{
  return(
    <TouchableOpacity style={Style.button} onPress={onPress}>
      <Text style={Style.text}>Click Me!</Text>
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
    paddingTop : 5,
    paddingBottom : 5
  }
}
export default Button;
