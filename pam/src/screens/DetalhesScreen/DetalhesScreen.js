import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


const produtosData = [
  { id: '1', nome: 'Camiseta Básica', preco: 'R$ 29,90', descricao: 'Camiseta de algodão confortável para o dia a dia.', imagem: 'https://via.placeholder.com/150/FFC0CB/000000?Text=Camiseta' },
  { id: '2', nome: 'Calça Jeans Slim', preco: 'R$ 89,90', descricao: 'Calça jeans corte slim fit, ideal para um look moderno.', imagem: 'https://via.placeholder.com/150/ADD8E6/000000?Text=Calca' },
  { id: '3', nome: 'Vestido Floral', preco: 'R$ 79,90', descricao: 'Vestido leve com estampa floral, perfeito para o verão.', imagem: 'https://via.placeholder.com/150/90EE90/000000?Text=Vestido' },
  { id: '4', nome: 'Tênis Casual', preco: 'R$ 129,90', descricao: 'Tênis confortável e estiloso para diversas ocasiões.', imagem: 'https://via.placeholder.com/150/FFA07A/000000?Text=Tenis' },
];

function DetalhesScreen({ route }) {
  const { produtoId } = route.params;
  const produto = produtosData.find(item => item.id === produtoId);

  if (!produto) {
    return (
      <View style={styles.container}>
        <Text>Produto não encontrado.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: produto.imagem }} style={styles.detailImage} />
      <Text style={styles.detailTitle}>{produto.nome}</Text>
      <Text style={styles.detailPrice}>{produto.preco}</Text>
      <Text style={styles.detailDescription}>{produto.descricao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  detailImage: {
    width: 200,
    height: 200,
    borderRadius: 5,
    marginBottom: 20,
  },
  detailTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  detailPrice: {
    fontSize: 18,
    color: 'green',
    marginBottom: 10,
  },
  detailDescription: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default DetalhesScreen;