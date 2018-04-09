/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TextInput
} from 'react-native';


let {win_width,win_height} = Dimensions.get("window");

const initModule = {
   initPhoneNo: "手机号码",
   initPwd: "密码"
};

class loginPage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      phoneNo: '',
      pwd: ''
   };
  }

  render() {
    return (
      <View>
         <Image source= {require('./../img/login/loginHead.png')}  style={styles.imgHeader} />
         <View style={styles.marginLeft25}>
           <TextInput underlineColorAndroid='transparent' keyboardType="number-pad" style={styles.borderInput} placeholder={initModule.initPhoneNo} onChangeText={(phoneNo) => this.setState({phoneNo})} value={this.state.phoneNo}/>
           <TextInput underlineColorAndroid='transparent' secureTextEntry={true} style={styles.borderInput} placeholder={initModule.initPwd} onChangeText={(pwd) => this.setState({pwd})} value={this.state.pwd}/>
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    imgHeader:{
      marginTop:0,
      width:win_width,
      height: 200
    },
    borderInput:{
      height:35,
      borderWidth: 1,
      borderColor: '#ccc',
      width: 300,
      marginTop: 25,
      padding: 4
    },
    marginLeft25: {
      marginLeft: 50
    }
});

module.exports = loginPage;
