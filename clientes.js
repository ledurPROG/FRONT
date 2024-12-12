import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Inicio() {
  const navigation = useNavigation("");

  return (
    <View style={styles.body}>

      

      <View style={styles.menu}>

        <Text style={styles.title}>GERENCIAR USUÁRIOS</Text>

        <View style={styles.button}>
          <Button
            title="Ver cliente"
            color="#003F87"
            onPress={() => navigation.navigate('VerUsuarios')}
          />
        </View>

        <View style={styles.button}>
          <Button
            title="Adicionar novo cliente"
            color="#003F87"
            onPress={() => navigation.navigate('AdicionarUsuario')}
          />
        </View>

        <View style={styles.button}>
          <Button
            title="Remover cliente"
            color="#003F87"
            onPress={() => navigation.navigate('RemoverUsuario')}
          />
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
  menu: {
    backgroundColor: 'white',
    padding: 30,
    marginVertical: 20,
    borderRadius: 8,
    marginTop: 80,
  },
  title: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  button: {
    marginBottom: 15,
  },
});
