import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProdutosScreen from '../screens/ProdutosScreen/ProdutosScreen';
import DetalhesScreen from '../screens/DetalhesScreen/DetalhesScreen';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Tela Inicial' }} />
        <Stack.Screen name="Produtos" component={ProdutosScreen} options={{ title: 'Lista de Produtos' }} />
        <Stack.Screen name="Detalhes" component={DetalhesScreen} options={{ title: 'Detalhes do Produto' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;