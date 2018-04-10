import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';

import UsersInfo from './src/UsersInfo';
import YourInfo from './src/YourInfo';
import MenuUserInfo from './src/buttons/MenuUserInfo';
import MenuYourInfo from './src/buttons/MenuYourInfo';

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
});

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Main menu',
  };

  render() {
    return(
      <View style={ styles.container }>
        <MenuUserInfo onMenuUserInfo={ () => this.props.navigation.navigate('UserInfo') } />
        <MenuYourInfo onMenuYourInfo={ () => this.props.navigation.navigate('YourInfo') } />
      </View>
    );
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    UserInfo: {
      screen: UsersInfo,
    },
    YourInfo: {
      screen: YourInfo,
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'normal',
        color: '#fff',
      },
    },
  }
);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}