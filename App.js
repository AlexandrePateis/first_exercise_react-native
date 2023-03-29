import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');

  const handleSubmit = () => {
    console.log(nome, email, telefone, endereco);
  };

  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Your Job.com</Text>
      <Text style={styles.label}>Preencha o formulario abaixo que entraremos em contato assim que tivermos uma vaga disponível para o seu perfil.</Text>
      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite o nome"
      />

      <Text style={styles.label}>E-mail:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Digite o e-mail"
      />

      <Text style={styles.label}>Telefone:</Text>
      <TextInput
        style={styles.input}
        value={telefone}
        onChangeText={setTelefone}
        placeholder="Digite o telefone"
      />

      <Text style={styles.label}>Endereço:</Text>
      <TextInput
        style={styles.input}
        value={endereco}
        onChangeText={setEndereco}
        placeholder="Digite o endereço"
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 20,
  },
  title:{
    textAlign: 'center',
    fontSize: 40,
    marginTop: 42,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    height: 40,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 5,
    height: 40,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
