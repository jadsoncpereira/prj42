import React, { Component } from 'react';
import { TextInput, ScrollView, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import SubmitButton from './buttons/SubmitButton';
import YourInfo from './YourInfo';

export default class UsersInfo extends Component {
  static navigationOptions = {
    title: "User's Info",
  };

  static checking = false;

  constructor(props) {
    super(props);
    this.state = {
      nameText: '',
      lastNameText: '',
      usernameText: '',
      emailText: '',
    };
  }

  submitButtonHandler = () => {
    YourInfo.infos.name = this.state.nameText;
    YourInfo.infos.lastName = this.state.lastNameText;
    YourInfo.infos.username = this.state.usernameText;
    YourInfo.infos.email = this.state.emailText;
    UsersInfo.checking = true;
  }

  render () {
    return (
     
      <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'gray' }} >
      <ScrollView style={{ flex: 1 }} >
        <View style = {styles.container}>
          <Text style={ styles.titleText } >User's info</Text>
          <Text style={ styles.simpleText } >Name:</Text>
         
          <TextInput
                style={styles.inputText}
                placeholder="Your name here..."
                onChangeText={ (text) => this.setState({ nameText: text }) } 
          />
         
          <Text style={ styles.simpleText } >Last name:</Text>
          
          <TextInput                 
                style={styles.inputText}
                placeholder="Your last name here..."
                onChangeText={ (text) => this.setState({ lastNameText: text }) } 
          />
          
          <Text style={ styles.simpleText } >Username:</Text>
          
          <TextInput
                style={styles.inputText}
                placeholder="Your username here..."
                onChangeText={ (text) => this.setState({ usernameText: text }) } 
          />
         
          <Text style={ styles.simpleText } >Email:</Text>
          
          <TextInput
                keyboardType='email-address'
                style={styles.inputText}
                placeholder="example@123.com"
                onChangeText={ (text) => this.setState({ emailText: text }) } 
          />
          
          <View style={ styles.buttonContainer }>        
            <SubmitButton onSubmit={ this.submitButtonHandler } />
         </View>
        </View>
      </ScrollView>
      </View>
   
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    padding: 10,
    backgroundColor: 'gray',
    justifyContent: 'space-around',
  },
  simpleText: {
    color: 'white',
    fontSize: 12,
  },
  titleText: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    padding: 40,
  },
  buttonContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
  inputText: {
    color: 'white',
    fontSize: 12,
  },
});