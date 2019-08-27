import React, {Component} from 'react';
import {Text, View} from 'react-native';
import firebase from 'firebase';
import Header from './src/components/Header';
import Login from './src/Login';
import Spinner from './src/components/Spinner';
import Button from './src/components/Button';
import CardSection from './src/components/CardSection';

class App extends Component{
    state = {'loggenIn' : null};
    componentDidMount(){
      firebase.initializeApp({
        apiKey: "AIzaSyD99hIJ7nWZSimT6neztW0M-4Z36rwIHDw",
        authDomain: "react-native-auth-61e26.firebaseapp.com",
        databaseURL: "https://react-native-auth-61e26.firebaseio.com",
        projectId: "react-native-auth-61e26",
        storageBucket: "",
        messagingSenderId: "134612460889",
        appId: "1:134612460889:web:66d8a2282bdc75b5"
      });

      firebase.auth().onAuthStateChanged((user)=>{
        console.log("test");
          if(user){
            console.log("user not null");
            this.setState({loggenIn : true});
          }
          else{
            console.log("user ")
            this.setState({loggenIn : false});
          }
        });
    }
    logout(){
      firebase.auth().signOut();
    }
    render(){
      if(this.state.loggenIn===null){
        return (
          <View style={{flex:1}}>
            <Header text={"Firebase Authentication"}/>
            <Spinner size={"large"}/>
          </View>
        );
      }
      else if(this.state.loggenIn){
        return (
          <View style={{flex:1}}>
            <Header text={"Firebase Authentication"}/>
            <CardSection>
              <Button label={"Log Out"} onPress={this.logout.bind(this)}/>
            </CardSection>
          </View>
        );
      }
      else{
        return (
          <View style={{flex:1}}>
            <Header text={"Firebase Authentication"}/>
            <Login/>
          </View>
        );
      }
    }
}

export default App;
