import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import { StackNavigator } from 'react-navigation';

const logo = require('../imgs/logo.png');
const menuCliente = require('../imgs/menu_cliente.png');
const menuContato = require('../imgs/menu_contato.png');
const menuEmpresa = require('../imgs/menu_empresa.png');
const menuServico = require('../imgs/menu_servico.png');

export default class CenaPrincipal extends Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <StatusBar
          backgroundColor= 'blue'
        />
        <View style={styles.logo}>
          <Image source={logo}/>
        </View>
        <View style={styles.menu}>
          <View style={styles.itensMenu}>
            <TouchableHighlight
              onPress={() => navigate('CenaClientes', { titulo: 'Clientes' })}
            >
              <Image style={styles.imgMenu} source={menuCliente}/>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => navigate('CenaContatos', { titulo: 'Contatos' })}
            >
              <Image style={styles.imgMenu} source={menuContato}/>
            </TouchableHighlight>

          </View>
          <View style={styles.itensMenu}>
            <TouchableHighlight
              onPress={() => navigate('CenaEmpresa', { titulo: 'Empresa' })}
            >
              <Image style={styles.imgMenu} source={menuEmpresa}/>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => navigate('CenaServicos', { titulo: 'Serviços' })}
            >
              <Image style={styles.imgMenu} source={menuServico}/>
            </TouchableHighlight>

          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    logo: {
      marginTop: 30,
      alignItems: 'center'
    },
    itensMenu: {
      flexDirection: 'row'
    },
    menu: {
      alignItems: 'center'
    },
    imgMenu: {
      margin: 15
    }
  }
)
