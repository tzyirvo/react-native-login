import React, { Component } from 'react'
import { Button, View, AsyncStorage } from 'react-native'

export default class SignInScreen extends Component {
  static navigationOptions = {
    title: 'Please sign in'
  }

  render() {
    return (
      <View>
        <Button title="Sign in!" onPress={this._signInAsync} />
      </View>
    )
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc')
    this.props.navigation.navigate('App')
  }
}