import React from 'react';
import {ActivityIndicator, View} from 'react-native';

const Spinner = ({size}) => {
  return(
    <View style={style.view}>
      <ActivityIndicator size={size}/>
    </View>
  );
};
const style = {
  view : {
    flex : 1,
    justifyContent : "center",
    alignItems : "center"
  }
};
export default Spinner;
