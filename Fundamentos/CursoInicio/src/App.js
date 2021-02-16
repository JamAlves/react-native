import React from 'react'
import { SafeAreaView, StyleSheet} from 'react-native'

import Mega from './components/mega/Mega'
//import FlexboxV4 from './components/layout/FlexboxV4'
//import FlexboxV3 from './components/layout/FlexboxV3'
//import FlexboxV2 from './components/layout/FlexboxV2'
//import FlexboxV1 from './components/layout/FlexboxV1'
//import DigiteSeuNome from './components/DigiteSeuNome'
//import Familia from './components/relacao/Familia'
//import ParImpar from './components/ParImpar'
//import Diferenciar from './components/Diferenciar'
//import ContadorV2 from './components/contador/ContadorV2'
//import Contador from './components/Contador'
//import Pai from './components/direta/Pai'
//import Pai from './components/indireta/Pai'
//import Botao from './components/Botao'
//import Titulo from './components/Titulo'
//import Aleatorio from './components/Aleatoria'
//import MinMax from './components/MinMax'
//import CompPadrao, { Comp1, Comp2} from './components/Multi'
//import Primeiro from './components/Primeiro'



export default () => (
    <SafeAreaView style={style.App}>
         <Mega qtdeNumeros={12} />
        
      {/*
       <FlexboxV4 />
       <FlexboxV3 />
       <FlexboxV2 />
       <FlexboxV1 />
      <DigiteSeuNome />

      <Familia>
           <Membro nome="Bia"sobrenome="Silva" />
           <Membro nome="Carlos"sobrenome="Silva" />
      </Familia>

      <Familia>
            <Membro nome="Ana"sobrenome="Silva" />
            <Membro nome="Julia"sobrenome="Silva" />
            <Membro nome="Rebeca"sobrenome="Silva" />
            <Membro nome="Gui"sobrenome="Silva" />
      </Familia>  
      <ParImpar num={3}/>
      <Diferenciar/>
        <ContadorV2 />
        <Pai />
        <Pai />
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
    </SafeAreaView>

)

const style = StyleSheet.create({
       App: {
         flexGrow: 1,
         justifyContent: "center",
         alignItems: 'center',
         padding: 20
    }

})




