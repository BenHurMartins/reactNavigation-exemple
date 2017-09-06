import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import CenaPrincipal from './src/components/CenaPrincipal.js';
import CenaClientes from './src/components/CenaClientes.js';
import CenaContatos from './src/components/CenaContatos.js';
import CenaEmpresa from './src/components/CenaEmpresa.js';
import CenaServicos from './src/components/CenaServicos.js';

const app5 = StackNavigator({
  Home: { screen: CenaPrincipal,
          navigationOptions : {
            title: 'ATM Consultoria',
          } },
  CenaClientes: { screen: CenaClientes },
  CenaContatos: { screen: CenaContatos },
  CenaEmpresa: { screen: CenaEmpresa },
  CenaServicos: { screen: CenaServicos },
});

AppRegistry.registerComponent('app5', () => app5);
