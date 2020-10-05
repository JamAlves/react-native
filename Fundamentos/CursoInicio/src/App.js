import React from 'react'
import { View, StyleSheet} from 'react-native'

import Pai from './components/direta/Pai'
//import Contador from './components/Contador'
//import Botao from './components/Botao'
//import Titulo from './components/Titulo'
//import Aleatorio from './components/Aleatoria'
//import MinMax from './components/MinMax'
//import CompPadrao, { Comp1, Comp2} from './components/Multi'
//import Primeiro from './components/Primeiro'



export default () => (
    <View style={styles.App}>
        <Pai />
      {/*
       <Contador inicial={100} passo={13} />
       <Contador /> 
      <Titulo principal="Cadastro Produto"
           segundario="Tela de Cadastro do Produto" />
         <Aleatorio min={1} max={60} />
      <Aleatorio min={1} max={60} />
      <Aleatorio min={1} max={60} />
      <Aleatorio min={1} max={60} />
      <Aleatorio min={1} max={60} />
      <Aleatorio min={1} max={60} />
      <CompPadrao />
      <MinMax min={3} max={20} />
      <MinMax min={1} max={94} />
      {/*<CompPadrao />
      <Primeiro/>
      <Comp1/>
      <Comp2/> */}
    </View>

)

const styles = StyleSheet.create({
    App: {
         flexGrow: 1,
         justifyContent: "center",
         alignItems: 'center',
         padding: 20
    }

})




