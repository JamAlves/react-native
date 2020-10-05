import React from 'react'
import { ScrollView, View, FlatList, Text } from 'react-native'

const alunos = [
    {id: 1, nome: 'João', nota: 7.9},
    {id: 2, nome: 'Jair', nota: 8.9},
    {id: 3, nome: 'Jayme', nota: 10.0},
    {id: 4, nome: 'Julia', nota: 7.0},
    {id: 5, nome: 'Jose', nota: 7.8},
    {id: 6, nome: 'JC', nota: 8.9},
    {id: 7, nome: 'Manoel', nota: 6.9},
    {id: 8, nome: 'Bia', nota: 7.7},
    {id: 9, nome: 'Heloisa', nota: 6.8},

    {id: 11, nome: 'João', nota: 7.9},
    {id: 12, nome: 'Jair', nota: 8.9},
    {id: 13, nome: 'Jayme', nota: 10.0},
    {id: 14, nome: 'Julia', nota: 7.0},
    {id: 15, nome: 'Jose', nota: 7.8},
    {id: 16, nome: 'JC', nota: 8.9},
    {id: 17, nome: 'Manoel', nota: 6.9},
    {id: 18, nome: 'Bia', nota: 7.7},
    {id: 19, nome: 'Heloisa', nota: 6.8},

]

const itemEstilo = {
     paddingHorizontal: 15,
     height:70,
     backgroundColor:'#DDD',
     bordeWidth:0.5,
     borderColor:'#222',

     //Flex
     alignItems: 'center',
     flexDirection: 'row',
     justifyContent:'space-between',
       
}

export const Aluno = props =>
    <View style={itemEstilo}>
        <Text>Nome:{props.nome}</Text>
        <Text style={{fontWeight: 'bold'}}>Nota: {props.nota}</Text>
    </View>

export default props => {
    const renderItem = ({item}) => {
        return <Aluno{...item}/> 
        
    }
    return(
        <ScrollView>
            <FlatList data={alunos} renderItem={renderItem}
              keyExtractor={(_, index) => index.toString()}/>

        </ScrollView>
    )

}    
