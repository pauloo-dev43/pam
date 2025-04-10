import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

function ProdutoItem({ produto, onPress }) {
  return (
    <TouchableOpacity style={styles.listItem} onPress={onPress}>
      <Image source={{ uri: produto.imagem }} style={styles.listImage} />
      <View style={styles.listItemTextContainer}>
        <Text style={styles.listItemTitle}>{produto.nome}</Text>
        <Text style={styles.listItemPrice}>{produto.preco}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    width: '100%',
  },
  listImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginRight: 15,
  },
  listItemTextContainer: {
    flex: 1,
  },
  listItemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  listItemPrice: {
    fontSize: 16,
    color: 'green',
  },
});

export default ProdutoItem;