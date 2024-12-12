import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { seeBooks } from './api/Api';
import { useNavigation } from '@react-navigation/native';

export default function VerLivros() {
  const [books, setBooks] = useState([]);
  const [expandedBook, setExpandedBook] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await seeBooks();
        const filteredBooks = response.filter((book) => book.quantidadeEmprestada > 0);
        setBooks(filteredBooks);
      } catch (error) {
        console.error('Erro ao buscar livros:', error);
      }
    };
    fetchBooks();
  }, []);

  const toggleDetails = (bookId) => {
    setExpandedBook(expandedBook === bookId ? null : bookId);
  };

  return (
    <View style={styles.body}>
      <View style={styles.menuView}>
        <Text style={styles.title}>Ver Livros</Text>
        <ScrollView>
          {books.length > 0 ? (
            books.map((book) => (
              <View key={book.id} style={styles.bookItem}>
                <TouchableOpacity onPress={() => toggleDetails(book.id)}>
                  <Text style={styles.bookButton}>Título do livro: {book.titulo}</Text>
                </TouchableOpacity>

                {expandedBook === book.id && (
                  <View style={styles.details}>
                    <Text style={styles.bookText}>ID do livro: {book.id}</Text>
                    <Text style={styles.bookText}>Título: {book.titulo}</Text>
                    <Text style={styles.bookText}>Autor: {book.autor}</Text>
                    <Text style={styles.bookText}>Ano: {book.ano}</Text>
                    <Text style={styles.bookText}>Quantidade disponível: {book.quantidade}</Text>
                    <Text style={styles.bookText}>Quantidade emprestada: {book.quantidadeEmprestada}</Text>
                    <Text style={styles.bookText}>Emprestado para usuários com ID's: {book.usuariosEmprestados.join(', ')}</Text>
                  </View>
                )}
              </View>
            ))
          ) : (
            <Text style={styles.noBooksText}>Não há livros emprestados.</Text>
          )}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  menuView: {
    height: 500,
    backgroundColor: '#003F87',
    padding: 30,
    marginVertical: 20,
    borderRadius: 8,
    marginTop: 10,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  bookItem: {
    backgroundColor: 'white',
    padding: 12,
    marginVertical: 8,
    borderRadius: 4,
  },
  bookButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'darkgreen',
    textAlign: 'center',
  },
  details: {
    marginTop: 8,
    padding: 8,
    backgroundColor: 'lightgrey',
    borderRadius: 4,
  },
  bookText: {
    fontSize: 16,
    color: 'black',
  },
  noBooksText: {
    fontSize: 16,
    color: 'white',
  },
});
