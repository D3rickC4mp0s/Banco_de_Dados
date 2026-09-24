import React, { useState } from 'react';

import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

// Tela inicial da aplicação
export default function App() {
  const [telaAtual, setTelaAtual] = useState('Home');

  if (telaAtual === 'Home') {
    return (
      <View style={styles.container}>
        <Image source={require('./assets/logo.png')} style={styles.logo} />
        <Text style={styles.titulo}>APP Scholar</Text>

        <Text style={styles.subtitulo}>Sistema Acadêmico Mobile</Text>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => setTelaAtual('Dados Acadêmicos')}>
          <Text style={styles.textoBotao}>Dados Acadêmicos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => setTelaAtual('Sobre')}>
          <Text style={styles.textoBotao}>Sobre</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (telaAtual === 'Dados Acadêmicos') {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => setTelaAtual('Coordenadores')}>
          <Text style={styles.textoBotao}>Coordenadores</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => setTelaAtual('Professores')}>
          <Text style={styles.textoBotao}>Professores</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => setTelaAtual('Responsáveis')}>
          <Text style={styles.textoBotao}>Responsáveis</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => setTelaAtual('Matrículas')}>
          <Text style={styles.textoBotao}>Matrículas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => setTelaAtual('Boletins')}>
          <Text style={styles.textoBotao}>Boletins</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => setTelaAtual('Turmas')}>
          <Text style={styles.textoBotao}>Turmas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao2}
          onPress={() => setTelaAtual('Home')}>
          <Text style={styles.textoBotao}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (telaAtual === 'Sobre') {
    return(
      <View style={styles.container}>
        <Text style={styles.titulo}>Para que serve o APP Scholar?</Text>
        <Text style={styles.caixa}>O APP Scholar serve para armazenar informações sobre os alunos da escola. Onde podem ser inseridas novas informações relacionadas a professores, notas, coordenadores e entre outros.</Text>

        <TouchableOpacity
          style={styles.botao2}
          onPress={() => setTelaAtual('Home')}>
          <Text style={styles.textoBotao}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (telaAtual === 'Coordenadores') {
    return(
      <View style={styles.container}>
        <Text style={styles.subtitulo2}>Selecione o que deseja atualizar:</Text>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => setTelaAtual('Cadastrar_coordenador')}>
          <Text style={styles.textoBotao}>Cadastrar coordenador</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => setTelaAtual('Consultar_coordenadores')}>
          <Text style={styles.textoBotao}>Consultar coordenadores</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao2}
          onPress={() => setTelaAtual('Dados Acadêmicos')}>
          <Text style={styles.textoBotao}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (telaAtual === 'Professores') {
    return(
      <View style={styles.container}>
        <Text style={styles.subtitulo2}>Selecione o que deseja atualizar:</Text>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => setTelaAtual('Cadastrar_professor')}>
          <Text style={styles.textoBotao}>Cadastrar professor</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => setTelaAtual('Consultar_professores')}>
          <Text style={styles.textoBotao}>Consultar professores</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao2}
          onPress={() => setTelaAtual('Dados Acadêmicos')}>
          <Text style={styles.textoBotao}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (telaAtual === 'Responsáveis') {
    return(
      <View style={styles.container}>
        <Text style={styles.subtitulo2}>Selecione o que deseja atualizar:</Text>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => setTelaAtual('Cadastrar_responsavel')}>
          <Text style={styles.textoBotao}>Cadastrar responsável</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => setTelaAtual('Consultar_responsaveis')}>
          <Text style={styles.textoBotao}>Consultar responsáveis</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao2}
          onPress={() => setTelaAtual('Dados Acadêmicos')}>
          <Text style={styles.textoBotao}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (telaAtual === 'Matrículas') {
    return(
      <View style={styles.container}>
        <Text style={styles.subtitulo2}>Selecione o que deseja atualizar:</Text>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => setTelaAtual('Cadastrar_matricula')}>
          <Text style={styles.textoBotao}>Cadastrar matrícula</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => setTelaAtual('Consultar_matriculas')}>
          <Text style={styles.textoBotao}>Consultar matrículas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao2}
          onPress={() => setTelaAtual('Dados Acadêmicos')}>
          <Text style={styles.textoBotao}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (telaAtual === 'Boletins') {
    return(
      <View style={styles.container}>
        <Text style={styles.subtitulo2}>Selecione o que deseja atualizar:</Text>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => setTelaAtual('Cadastrar_boletins')}>
          <Text style={styles.textoBotao}>Cadastrar boletins</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => setTelaAtual('Consultar_boletins')}>
          <Text style={styles.textoBotao}>Consultar boletins</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao2}
          onPress={() => setTelaAtual('Dados Acadêmicos')}>
          <Text style={styles.textoBotao}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (telaAtual === 'Turmas') {
    return(
      <View style={styles.container}>
        <Text style={styles.subtitulo2}>Selecione o que deseja atualizar:</Text>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => setTelaAtual('Cadastrar_Turmas')}>
          <Text style={styles.textoBotao}>Cadastrar Turmas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => setTelaAtual('Consultar_Turmas')}>
          <Text style={styles.textoBotao}>Consultar Turmas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao2}
          onPress={() => setTelaAtual('Dados Acadêmicos')}>
          <Text style={styles.textoBotao}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

//estilização da tela inicial
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },

  caixa: {
    width: '80%',
    backgroundColor: 'd3d3d3',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },

  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },

  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign:'center',
    color: '#FACE07',
  },

  subtitulo: {
    fontSize: 18,
    marginBottom: 40,
    color: '#666',
  },

  subtitulo2: {
    fontSize: 18,
    marginBottom: 40,
    fontWeight: 'bold',
    textAlign:'center',
    color:'#F4C90B',
  },

  botao: {
    width: '80%',
    backgroundColor: '#FACE07',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },

  botao2: {
    width: '80%',
    borderWidth: 2,
    borderColor: '#FACE07',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },

  textoBotao: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#463901',
  },
});
