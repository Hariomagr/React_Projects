import React from 'react';
import {TextInput, Text, View} from 'react-native';

const Input = ({autoCorrect, label, value, onChangeText, placeholder, secureTextEntry}) => {
    return(
      <View style={style.view}>
        <Text style={style.text}>{label}</Text>
        <TextInput
          style={style.input}
          autoCorrect={autoCorrect}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
        />
      </View>
    );
};
const style = {
  view : {
    flex:1,
    flexDirection : "row",
    height : 40,
    alignItems : "center"
  },
  text : {
    flex : 1,
    fontSize : 18
  },
  input : {
    flex : 2,
    fontSize : 18,
    lineHeight : 20
  }
};
export default Input;
