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
  TextInput,
  TouchableHighlight,

} from 'react-native';


let {win_width,win_height} = Dimensions.get("window");

const initModule = {
   initPhoneNo: "手机号码",
   initPwd: "密码"
};

const _checkLogin = () => {
  alert();
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
    const {navigate} = this.props.navigation;
    return (
      <View>
      <Image source= {require('./../img/login/loginHead.png')}  style={styles.imgHeader} />
         <View style={styles.marginLeft25}>
         <TextInput underlineColorAndroid='transparent' keyboardType="number-pad" style={styles.borderInput} placeholder={initModule.initPhoneNo} onChangeText={(phoneNo) => this.setState({phoneNo})} value={this.state.phoneNo}/>
         <TextInput underlineColorAndroid='transparent' secureTextEntry={true} style={styles.borderInput} placeholder={initModule.initPwd} onChangeText={(pwd) => this.setState({pwd})} value={this.state.pwd}/>
           <TouchableHighlight style={styles.btnLogin} onPress={() => navigate('Index', { user: 'Lucy' })}>
             <Text style={styles.btnWhite}>登录</Text>
           </TouchableHighlight>
           <TouchableHighlight style={styles.btnRegister} onPress={() => navigate('Index', { user: 'Lucy' })}>
             <Text underlineColorAndroid='transparent' style={styles.btnBlue}>注册</Text>
           </TouchableHighlight>
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    imgHeader:{
      width:win_width,
      height: 200,
      marginTop: -100,
      zIndex:100
    },
    btnWhite: {
      color: '#fff'
    },
    btnRegister:{
      color: '#00A0DE',
      justifyContent: 'center',
      alignItems: 'center',
      width: 300,
      marginTop: 25,
      height: 35,
      borderColor: '#00A0DE',
      borderWidth: 1
    },
    btnBlue: {
      color: '#00A0DE',
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
    },
    btnLogin: {
      width: 300,
      marginTop: 25,
      height: 35,
      backgroundColor: '#00A0DE',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff'
    }
});

module.exports = loginPage;
