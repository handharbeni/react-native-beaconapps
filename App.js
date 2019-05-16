/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import RNBenibeacon from 'react-native-benibeacon';

const instructions = Platform.select({
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};
// let message = "Belum Ada";
// let beacon = [];
export default class App extends Component {
  // RNBenibeacon.getToast((_error, message)=>{
    // this.state.message = message;
  // });

  constructor(props){
    super(props)
    this.state = {
      message: 'Belum Ada',
      beacon: undefined
    }
  }
  async getMessage(){
    return await RNBenibeacon.getToast()
  }
  async getBeacon(){
    return await RNBenibeacon.getListBeacon()
  }
  async getService(){
    return await RNBenibeacon.getRunningService()
  }
  async startServ(){
    return await RNBenibeacon.startServices()
  }
  componentDidMount(){
    let a = this.getMessage();
    a.then((item) => {
      this.setState({
        message: item
      });
    })

    let b = this.getBeacon();
    b.then((item) => {
      console.log(item)
      // this.setState({
      //   beacon: 
      // })
    })
  }
  _showNativeMessage() {
    const {message} = this.state;
    let b = this.getBeacon();
    b.then((item) => {
      console.log(item)
      // this.setState({
      //   beacon: 
      // })
    })

    console.log('test Console');
    // console.log(beacon);
    RNBenibeacon.showToast(message);
  }

  _startServices() {
    // let services = this.getService();
    // services.then((items)=>{
    //   console.log(items);
    // });
    // RNBenibeacon.startServices();
    let services = this.startServ();
    services
    .then((item)=>{
      console.log(item)
    })
    .catch((error)=>{
      console.log(error)
    });
  }
  _startCobaServices() {
    // let services = this.getService();
    // services.then((items)=>{
    //   console.log(items);
    // });
    RNBenibeacon.startCobaServices();
  }

  render() {
    return (
      <View>
        <Button title="Show Native Message" onPress={() => { this._showNativeMessage() }}/>
        <Button title="Start Services" onPress={() => { this._startServices() }}/>
        <Button title="Start Coba Service" onPress={() => { this._startCobaServices() }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
