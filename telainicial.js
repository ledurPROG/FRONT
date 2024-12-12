import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function inicio() {
  const navigation = useNavigation("");

  return (
    <View style={styles.body}>
      <View style={styles.menu}>
        <Text style={styles.title}>Livrarias SENAI</Text>
        <View style={styles.buttongroup}>
        <View style={styles.button}>
          <Button
            title="Livros"
            color="#003D73"
            onPress={() => navigation.navigate('VerLivros')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Locar Livro"
            color="#003D73"
            onPress={() => navigation.navigate('EmprestarLivro')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Devolução"
            color="#003D73"
            onPress={() => navigation.navigate('DevolverLivro')}
          />
        </View>
       

       
        <View style={styles.button}>
          <Button
            title="Clientes"
            color="#003D73"
            onPress={() => navigation.navigate('Clientes')}
          />
        </View>
      </View>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#003D73',
    padding: 16,
  },
  menu: {
    backgroundColor: 'white',
    padding: 30,
    width: 600,
    height:350,
    marginLeft: 330,
    marginVertical: 20,
    borderRadius: 8,
    marginTop: 40,
  },
  title: {
    color: 'black',
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  button: {
    marginBottom: 15,
  },
  buttongroup:{
    gap:10,
  }
});
