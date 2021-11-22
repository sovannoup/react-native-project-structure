import React from 'react'
import {View,Image,StyleSheet,Text,Platform,TouchableOpacity} from 'react-native'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {NAV_TYPES} from './navTypes'
import screenLogin from '../Containers/LoginContainer'
import screenHome from '../Containers/HomeContainer'

const IntroNavigator = createStackNavigator(
    {
        [NAV_TYPES.LOGIN]:{
            screen:screenLogin,
            navigationOptions:{
                headerShown:false
            },
        },
  
    },
    {
        initialRouteName:NAV_TYPES.LOGIN
    }
    )


const HomeNavigation = createStackNavigator(
    {
        [NAV_TYPES.MAIN_HOME]:{
            screen:screenHome,
            navigationOptions:{
                headerShown:false
            }
        },
    }
)


//Tab Navigation
const TabNavigation = createBottomTabNavigator(
    {
        [NAV_TYPES.HOME]:{
            screen:HomeNavigation,
            navigationOptions:{
                tabBarLabel:({focused})=>(
                    <Text style={{textAlign:'center',color:focused?'#c43e00':'black'}}>ទំព័រដើម</Text>
                ),
            }
        },
    },
    {
        tabBarOptions: {
          showIcon: true,
          showLabel:true,
        //   activeBackgroundColor:'#f5f5f5',
        
          labelStyle: {
            fontSize: 20,
          },
          style:{height:Platform.OS==='ios'?60:63,paddingBottom:Platform.OS==='ios' ? 0 : 10},
          activeColor:'blue',
        activeTabStyle:{backgroundColor:'blue'},
        
        },
    }

)


const CoreNavigation = createStackNavigator(
    {
        [NAV_TYPES.MAIN]:{
            screen:TabNavigation,
            navigationOptions: {
                headerShown:false
              }
        },
    },
    {
        initialRouteName:NAV_TYPES.MAIN
    }
)
const MainNavigation = createStackNavigator(
    {
        [NAV_TYPES.INTRO]:{
            screen:IntroNavigator,
            navigationOptions:{
                headerShown:false
            }
        },
        [NAV_TYPES.CORE]:{
            screen:CoreNavigation,
            navigationOptions:{
                headerShown:false
            }
        }
    },
    {
        initialRouteName:NAV_TYPES.INTRO
    }
)
export default createAppContainer(MainNavigation)