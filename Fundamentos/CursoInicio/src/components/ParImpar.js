import React from 'react'
import {View, Text} from 'react-native'
import Estilo from './estilo'

export default ({num = 0}) => {
    if (num % 2 === 0){
    return (
          <View>
             <Text style={Estilo.txtG}>Par</Text> 
          </View>
          
       )
    }else {
       return(
         <Text style={Estilo.txtG}>Impar</Text>

       )
    }
   
}
