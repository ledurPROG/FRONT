import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { getBooks } from './api/Api';
import { useNavigation } from '@react-navigation/native';

export default function Livros() {
  const navigation = useNavigation();
  const [books, setBooks] = useState([]);
  const [expandedBook, setExpandedBook] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await getBooks();
        console.log(response);
        setBooks(response);
      } catch (error) {
        console.error('Erro ao buscar livros:', error);
      }
    };
    fetchBooks();
  }, []);

  const Expand = (bookId) => setExpandedBook(expandedBook === bookId ? null : bookId);

  return (
    <View style={styles.body}>
      <View style={styles.menuview}>
        <Text style={styles.title}>LISTA DE LIVROS</Text>
        <ScrollView>
          {books.length > 0 ? (
            books.map((book) => (
              <View key={book.id} style={styles.bookItem}>
                <TouchableOpacity onPress={() => Expand(book.id)}>
                  <Text style={styles.bookButton}>{book.titulo}</Text>
                </TouchableOpacity>
                {expandedBook === book.id && (
                  <View style={styles.detalhes}>
                    <Text style={styles.bookText}>Titulo: {book.titulo}</Text>
                    <Text style={styles.bookText}>Autor: {book.autor}</Text>
                    <Text style={styles.bookText}>Ano: {book.ano}</Text>
                    <Text style={styles.bookText}>Quantidade disponível: {book.quantidade}</Text>
                    <Text style={styles.bookText}>Quantidade emprestada: {book.quantidadeEmprestada}</Text>
                    <Text style={styles.bookText}>Clientes id: {book.usuariosEmprestados.join(', ')}</Text>
                  </View>
                )}
              </View>
            ))
          ) : (
            <Text style={styles.bookText2}>Não há livros para exibir.</Text>
          )}
        </ScrollView>
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
  menuview: {
    height: 500,
    backgroundColor: 'white',
    padding: 30,
    marginVertical: 20,
    borderRadius: 8,
    marginTop: 10,
  },
  title: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  bookItem: {
    backgroundColor: '#003F87',
    padding: 12,
    width: 400,
    marginLeft:398,
    marginVertical: 8,
    borderRadius: 4,
  },
  bookButton: {
    height: 15,
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  detalhes: {
    marginTop: 8,
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 4,
  },
  bookText: {
    fontSize: 14,
    color: 'black',
  },
  bookText2: {
    fontSize: 16,
    color: 'black',
  },
});