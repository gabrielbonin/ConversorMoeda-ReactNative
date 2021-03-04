import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard} from 'react-native';
import api from '../services/api';

class Conversor extends Component{
  constructor(props){
    super(props);
    this.state = {
      moedaA: props.moedaA,
      moedaB: props.moedaB,
      moedaB_valor: 0,
      valor_convertido: 0
    }
    this.converter = this.converter.bind(this);
  }

  async converter(){
    let de_para = this.state.moedaA + '_' + this.state.moedaB;
   const response = await api.get(`convert?q=${de_para}&compact=ultra&apiKey=7c5ef455b88d735bc6ad`);
   let cotacao = response.data[de_para];
   let resultado = (cotacao * parseFloat(this.state.moedaB_valor));
   
   this.setState({
    valor_convertido: resultado.toFixed(2)
   });

   Keyboard.dismiss();
  }


  render(){
    const {moedaA, moedaB} = this.props;
    return(
      <View style={styles.container}>
        <Text style={styles.textTitulo}>{moedaA} to {moedaB}</Text>
        <TextInput
        placeholder="valor a ser convertido"
        style={styles.areaInput}
        onChangeText={(moedaB_valor)=>this.setState({moedaB_valor: moedaB_valor} )}
        keyboardType="numeric"
        />

        <TouchableOpacity style={styles.btnArea} onPress={this.converter}>
          <Text style={styles.btnTexto}>Converter</Text>
        </TouchableOpacity>

        <Text style={styles.valorConvertido}>
          {
          (this.state.valor_convertido === 0) ?  ''
          : this.state.valor_convertido
          }
          </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  textTitulo:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000'
  },
  areaInput:{
    width: 290,
    height: 45,
    backgroundColor: '#CCC',
    marginTop: 10,
    borderColor: "#000",
    borderRadius: 5,
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 5
  }, 
  btnArea:{
    width: 150,
    height: 45,
    backgroundColor: 'red',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15
  },
  btnTexto:{
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold'
  },
  valorConvertido: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center'
  }
 });
export default Conversor;