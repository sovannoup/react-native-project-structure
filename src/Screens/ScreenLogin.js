import React,{Component} from 'react'
import {Text, StyleSheet, TouchableOpacity} from 'react-native'
import NavigationService from '../Service/navigationService'
import {NAV_TYPES} from '../Navigation/navTypes'
export default class Login extends Component{
    constructor(prop){
        super(prop)
        this.state={
           
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        
    }
    
    render(){
        return(
            <>
                <Text  style={{marginTop:100}}>Login</Text>
                <TouchableOpacity onPress={() => NavigationService.navigate(NAV_TYPES.CORE)}>
                    <Text style={{color:'red', fontSize:18}}>Go to Home</Text>
                </TouchableOpacity>
            </>
        )
    }
}
const styles = StyleSheet.create({
  
})