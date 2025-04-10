// src/screens/ProdutosScreen/ProdutosScreen.js
import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import ProdutoItem from './components/ProdutoItem';

// Dados estáticos dos produtos
const produtosData = [
  { id: '1', nome: 'Camiseta Básica', preco: 'R$ 29,90', descricao: 'Camiseta de algodão confortável para o dia a dia.', imagem: 'https://via.placeholder.com/150/FFC0CB/000000?Text=Camiseta' },
  { id: '2', nome: 'Calça Jeans Slim', preco: 'R$ 89,90', descricao: 'Calça jeans corte slim fit, ideal para um look moderno.', imagem: 'https://via.placeholder.com/150/ADD8E6/000000?Text=Calca' },
  { id: '3', nome: 'Vestido Floral', preco: 'R$ 79,90', descricao: 'Vestido leve com estampa floral, perfeito para o verão.', imagem: 'https://via.placeholder.com/150/90EE90/000000?Text=Vestido' },
  { id: '4', nome: 'Tênis Casual', preco: 'R$ 129,90', descricao: 'Tênis confortável e estiloso para diversas ocasiões.', imagem: 'https://via.placeholder.com/150/FFA07A/000000?Text=Tenis' },
];

function ProdutosScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <ProdutoItem produto={item} onPress={() => navigation.navigate('Detalhes', { produtoId: item.id })} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={produtosData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default ProdutosScreen;