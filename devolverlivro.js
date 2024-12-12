import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { putBook2 } from './api/Api';

export default function DevolverLivro() {
  const [id, setId] = useState('');
  const [usuarioId, setUsuarioId] = useState('');

  const Devolver = async () => {
    try {
      if (!id || !usuarioId) {
        alert('Por favor, insira um ID de livro e de usuário válidos.');
        return;
      }
      const response = await putBook2(id, usuarioId);
      console.log('Resposta da API:', response.data);
      alert('Livro devolvido com sucesso!');
      setId('');
      setUsuarioId('');
    } catch (error) {
      console.error('Erro ao devolver livro:', error.response?.data || error.message);
      alert('Erro ao devolver livro: ' + (error.response?.data?.message || 'Desconhecido'));
    }
  };
  
  return (
    <View style={styles.body}>
      <View style={styles.menudevolver}>
        <Text style={styles.title}>DEVOLVER LIVRO</Text>
        <TextInput
          style={styles.input}
          placeholder="Livro id"
          value={id}
          onChangeText={setId}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Cliente id"
          value={usuarioId}
          onChangeText={setUsuarioId}
          keyboardType="numeric"
        />
        <View style={styles.buttonGroup}>
          <Button title="Devolver livro" color="black" onPress={Devolver} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#003F87',
    padding: 16,
  },
  menudevolver: {
    backgroundColor: 'white',
    padding: 30,
    marginVertical: 20,
    borderRadius: 8,
    marginTop: 10,
    flex: 1, 
  },
  title: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  input: {
    padding: 5,
    borderColor: 'white',
    backgroundColor: 'white',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 8,
    color: 'black',
    borderRadius: 4,
    height: 40, 
  },
  buttonGroup: {
    gap: 10,
  },
});
