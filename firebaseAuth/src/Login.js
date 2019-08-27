import React, {Component} from 'react';
import {TextInput, View, Text} from 'react-native';
import firebase from 'firebase';
import Card from './components/Card';
import Input from './components/Input'
import Button from './components/Button'
import CardSection from './components/CardSection';
import Spinner from './components/Spinner';

class Login extends Component{
  state = {email:'',password:'',loading:false,error:''};

  signin (){
    this.setState({error : '',loading : true});
     firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
      .then(this.onLoginSuccess.bind(this))
      .catch(()=>{
        firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFailed.bind(this));
        });
  }
  onLoginSuccess(){
    console.log("Success");
    this.setState({
      error : '',
      loading : false,
      email : '',
      password : ''
    });
  }
  onLoginFailed(){
    console.log("Failed");
    this.setState({
      error : 'Authentication Error',
      loading : false
    });
  }
  renderButton(){
    if(this.state.loading){
      return <Spinner size={"small"}/>;
    }
    return <Button label={"Login"} onPress={()=>this.signin()}/>;
  }

  render(){
    return(
      <View style={{flex:1}}>
        <Card>
          <CardSection>
            <Input
              placeholder={"Enter Email ID"}
              label={"Email:"}
              secureTextEntry={false}
              autoCorrect={false}
              value={this.state.email}
              onChangeText={email=>this.setState({email:email})}
            />
          </CardSection>
          <CardSection>
            <Input
              placeholder={"Enter Password"}
              label={"Password:"}
              secureTextEntry={true}
              autoCorrect={false}
              value={this.state.password}
              onChangeText={password=>this.setState({password:password})}
            />
          </CardSection>
          <CardSection>
            <Text style={{fontWeight:"bold",color:"#FF0000",flex:1,textAlign:"center",fontSize:16}}>{this.state.error}</Text>
          </CardSection>
          <CardSection>
            {this.renderButton()}
          </CardSection>

        </Card>
      </View>
    );
  }
}
export default Login;
