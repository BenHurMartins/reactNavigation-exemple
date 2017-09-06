import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View
} from 'react-native';

export default class BarraNavegacao extends Component {



  render() {
    return (
      <View style={styles.barraTitulo}>
        <Text style={styles.txtTitulo}>
          ATM consultoria
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  barraTitulo: {
    backgroundColor: '#CCC',
    flexDirection: 'column',
    justifyContent: 'center',
    height: 80
  },
  txtTitulo: {
    //flex: 1,
    fontSize: 18,
    textAlign: 'center',
    color: '#000'
  }
})
