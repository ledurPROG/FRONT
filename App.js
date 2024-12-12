import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from './telainicial.js';
import VerLivros from './listalivros.js';
import EmprestarLivro from './locarlivro.js';
import DevolverLivro from './devolverlivro.js';
import Clientes from './clientes.js';
import AdicionarUsuario from './novocliente.js';
import RemoverUsuario from './removercliente.js';
import VerUsuarios from './clienteslista.js';
import Emprestados from './livroslocados.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="VerLivros" component={VerLivros} />
        <Stack.Screen name="EmprestarLivro" component={EmprestarLivro} />
        <Stack.Screen name="DevolverLivro" component={DevolverLivro} />
        <Stack.Screen name="Clientes" component={Clientes} />
        <Stack.Screen name="Emprestados" component={Emprestados} />
        <Stack.Screen name="VerUsuarios" component={VerUsuarios} />
        <Stack.Screen name="AdicionarUsuario" component={AdicionarUsuario} />
        <Stack.Screen name="RemoverUsuario" component={RemoverUsuario} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
