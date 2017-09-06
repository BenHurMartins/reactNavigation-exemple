import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  StyleSheet,
  Text
} from 'react-native';
import { StackNavigator } from 'react-navigation';

const detalheClientes = require('../imgs/detalhe_cliente.png');
const cliente1 = require('../imgs/cliente1.png');
const cliente2 = require('../imgs/cliente2.png');

export default class CenaClientes extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.titulo,
  })

  render() {
    return (
      <View>
        <StatusBar
  //        hidden={true}
          backgroundColor= 'blue'
        />
        <View style={styles.cabecalho}>
          <Image style={styles.geral} source={detalheClientes} />
          <Text style={styles.txtTitulo}>Nossos Clientes</Text>
        </View>
        <View style={styles.detalheCliente}>
          <Image style={styles.geral} source={cliente1} />
          <Text style={styles.txtDetalheCliente}>Lorem ipsum dolorem</Text>
        </View>
        <View style={styles.detalheCliente}>
          <Image style={styles.geral} source={cliente2} />
          <Text style={styles.txtDetalheCliente}>Lorem ipsum dolorem</Text>
        </View>
      </View>
    );
  }
}

  /*    <Button title="Voltar" onPress={() => goBack()}/> */
const styles = StyleSheet.create({
    geral: {
      alignItems: 'center'
    },
    txtTitulo: {
      color: '#B9C941',
      fontSize: 30,
      marginLeft: 11,
      marginTop: 25
    },
    txtDetalheCliente: {
      fontSize: 18,
      marginLeft: 20
    },
    cabecalho: {
      flexDirection: 'row',
      marginTop: 20
    },
    detalheCliente: {
      padding: 20,
      marginTop: 10
    }
  }
)
