
import React from 'react'
import { View ,StyleSheet } from 'react-native'

import Simples from './componentes/Simples'
import Parimpa from './componentes/Parimpa'
import {Inverter, MegaSena } from './componentes/Multi'


export default class App extends React.Component {
  render() {
    return (  
      <View style={styles.container}>
          <Simples texto='Flexivel!!'/>
          <Parimpa numero={27}/>
          <Inverter texto='React Nativo!'/>
          <MegaSena numero={6} />
            
    </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }

});


/*
export default function(){
  return(
    <View style={styles.container}>
    <Text style={styles.f20}>App!</Text>

    <Inverter texto='React Nativo!'/>
            < MegaSena numero={6} />
  </View>
  )

}
*/