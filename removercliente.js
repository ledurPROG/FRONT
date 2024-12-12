import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { getUsers, deleteUser } from './api/Api';
import { useNavigation } from '@react-navigation/native';

export default function RemoverUsuarios() {
  const [id, setId] = useState('');
  const [users, setUsers] = useState([]);
  const [expandedUser, setExpandedUser] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();
        setUsers(response);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleRemoveUser = async () => {
    if (!id) {
      alert('Por favor, insira um ID de usuário válido.');
      return;
    }

    try {
      await deleteUser(id);
      alert('Usuário removido com sucesso!');
      setId('');
      const updatedUsers = await getUsers();
      setUsers(updatedUsers);
    } catch (error) {
      console.error('Erro ao remover usuário:', error);
      alert('Erro ao remover usuário!');
    }
  };

  const toggleUserDetails = (userId) => {
    setExpandedUser(expandedUser === userId ? null : userId);
  };

  return (
    <View style={styles.body}>
      <View style={styles.menuContainer}>
        <Text style={styles.title}>REMOVER USUÁRIO</Text>

        <ScrollView>
          {users.length > 0 ? (
            users.map((user) => (
              <View key={user.id} style={styles.userItem}>
                <TouchableOpacity onPress={() => toggleUserDetails(user.id)}>
                  <Text style={styles.userButton}>{user.nome}</Text>
                </TouchableOpacity>

                {expandedUser === user.id && (
                  <View style={styles.detailsContainer}>
                    <Text style={styles.userText}>ID do usuário: {user.id}</Text>
                    <Text style={styles.userText}>Nome: {user.nome}</Text>
                    <Text style={styles.userText}>Telefone: {user.telefone}</Text>
                    <Text style={styles.userText}>Idade: {user.idade}</Text>
                  </View>
                )}
              </View>
            ))
          ) : (
            <Text style={styles.noUsersText}>Não há usuários para remover.</Text>
          )}
        </ScrollView>

        <TextInput
          style={styles.input}
          placeholder="ID do Usuário"
          value={id}
          onChangeText={setId}
          keyboardType="numeric"
        />

        <View style={styles.buttonContainer}>
          <Button title="Remover usuário" color="darkred" onPress={handleRemoveUser} />
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
  menuContainer: {
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
    marginBottom: 20,
    fontWeight: 'bold',
  },
  userItem: {
    backgroundColor: '#003F87',
    padding: 12,
    marginVertical: 8,
    borderRadius: 4,
  },
  userButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  detailsContainer: {
    marginTop: 8,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 4,
  },
  userText: {
    fontSize: 16,
    color: 'black',
  },
  noUsersText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginVertical: 20,
  },
  input: {
    padding: 10,
    borderColor: '#ccc',
    backgroundColor: 'lightgrey',
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 15,
    color: 'black',
    borderRadius: 4,
  },
  buttonContainer: {
    marginTop: 10,
  },
});
