import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    Style
} from 'react-native';
import {TabNavigator} from "react-navigation";

import SitePage from './sitePage';
import ConsultPage from './consultPage';
import ConmmunityPage from './conmmunityPage';
import MinePage from './minePage';


const indexPage = TabNavigator({
    Site: {
        screen: SitePage,
          navigationOptions: {
                title: '站点',
                tabBarLabel: '站点',
                tabBarIcon: ({ tintColor }) => (
                    <Image
                        source={
                            require('./../img/cert0.png')
                        }
                        style={[styles.icon,{tintColor: tintColor}]}
                    />
                ),
                headerTitleStyle: {
                    alignSelf:'center'
                }
          }
    },
    Consult: {
        screen: ConsultPage,
        navigationOptions: {
              title: '资讯',
              tabBarLabel: '资讯',
              tabBarIcon: ({ tintColor }) => (
                  <Image
                      source={
                          require('./../img/cert0.png')
                      }
                      style={[styles.icon,{tintColor: tintColor}]}
                  />
              ),
              headerTitleStyle: {
                  alignSelf:'center'
              }
        }
    },
    Conmmunity: {
        screen: ConmmunityPage,

        navigationOptions: {
            title: '我的',
            tabBarLabel: '我的',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={
                        require('./../img/cert0.png')
                    }
                    style={[styles.icon,{tintColor: tintColor}]}
                />
            ),
            headerTitleStyle: {
                alignSelf:'center'
            }
        }
    },
}, {
    animationEnabled: true,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    backBehavior: 'none',
    tabBarOptions: {
        activeTintColor: '#0F9C00',
        inactiveTintColor: '#999',
        showIcon: true,
        indicatorStyle: {height: 0},
        style: {
            backgroundColor: '#444',
            height:50
        },
        labelStyle: {
            fontSize: 12,
            marginTop: 0,
        },
    },
});
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon:{
        width:20,
        height:20
    }
});
module.exports = indexPage;
