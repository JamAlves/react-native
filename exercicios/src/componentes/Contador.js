
import React, {Component} from 'react'
import { View, Text, TouchableHighLight } from 'react-native'

export default class Contador extends Component {
   /*
    state = {
        numero: this.props.numeroInicial
    }
    constructor(props){
        super(props)
        
        this.maisUm =this.maisUm.bind(this)
    }
    */
   
    maisUm  (){
       this.setState({numero: this.state.numero + 1 })   
    }

    limpar = () => {
       this.setState({numero: this.props.numeroInicial })
    }

    render() {
        return (
             <View>
                 <Text style={{fontSize: 40}}>{this.state.numero}</Text>
                  <TouchableHighLight
                      onPress={() => this.maisUm()} 
                      onLongPress={this.limpar}>
                      <Text>Incrementar/Zerar</Text>
                  </TouchableHighLight>
             </View>
 

        )
    }
}
