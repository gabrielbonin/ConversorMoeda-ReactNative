import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

class Conversor extends Component{
  constructor(props){
    super(props);
    this.state = {
      
    }
  }
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.textTitulo}>{this.props.moedaA} to {this.props.moedaB}</Text>
        <TextInput
        placeholder="valor a ser convertido"
        style={styles.areaInput}
        onChangeText={()=>{}}
        keyboardType="numeric"
        />

        <TouchableOpacity style={styles.btnArea}>
          <Text style={styles.btnTexto}>Converter</Text>
        </TouchableOpacity>

        <Text style={styles.valorConvertido}>10.90</Text>
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
    fontSize: 20
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
    marginTop: 15
  }
 });
export default Conversor;