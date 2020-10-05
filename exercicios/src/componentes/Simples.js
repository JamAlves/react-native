import React from 'react'
import {View,Text} from 'react-native'
import Padrao from '../estilo/Padrao'

/*export default function(props){
    return<Text>{props.texto}</Text>
}
*/
//funçao de Arrow
export default(props) => 
  <Text style={Padrao.ex}>Arrow1:{props.texto}</Text>

//usando o View para retornar mais de um componente
/*
export default(props) =>
<View>
  <Text>Arrow1:{props.texto}</Text>
  <Text>Arrow2:{props.texto}</Text>
</View>
*/

//Usando um array 
/*
export default(props) =>[
<Text key={1}>Arrow1:{props.texto}</Text>,
<Text key={2}>Arrow2:{props.texto}</Text>

]
*/

