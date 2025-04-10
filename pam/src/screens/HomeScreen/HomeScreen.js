// src/screens/HomeScreen/HomeScreen.js
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Catálogo de Vestuário!</Text>
      <Button
        title="Ver Produtos"
        onPress={() => navigation.navigate('Produtos')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default HomeScreen;