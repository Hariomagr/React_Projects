import React from 'react';
import {View, Text} from 'react-native';

const Header = ({text}) => {
  return(
    <View style={Style.view}>
      <Text style={Style.text}>{text}</Text>
    </View>
  );
};
const Style = {
  view : {
    backgroundColor : "#C0C0C0",
    marginTop : 40,
    marginBottom : 10,
    shadowColor : "#000000",
    shadowOpacity : 0.1,
    shadowOffset : {width:0,height:1}
  },
  text : {
    alignItems : "center",
    color : "#FFFFFF",
    paddingTop : 10,
    paddingBottom : 10,
    textAlign : "center",
    fontWeight : "bold",
    fontSize : 20
  }
};
export default Header;
