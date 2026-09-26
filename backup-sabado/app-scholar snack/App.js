import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
} from 'react-native';

export default function App() {
  const [telaAtual, setTelaAtual] = useState('Home');

  if (telaAtual == 'Home') {
    return (
      <View style={styles.containerHome}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Home</Text>

          <TouchableOpacity style={styles.btnTracinhos}>
            <Image
              source={require('./assets/tracinhos.png')}
              style={styles.tracinhos}
            />
          </TouchableOpacity>
        </View>

        <Image source={require('./assets/bg.png')} style={styles.bg} />

        <Image source={require('./assets/icon.png')} style={styles.logo} />

        <Text style={styles.titulo}>APP Scholar</Text>
        <Text style={styles.subtitulo}>Sistema acadêmico</Text>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.bdBtn}
            onPress={() => setTelaAtual('Alunos')}>
            <Text style={styles.text}>Alunos</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.bdBtn}
            onPress={() => setTelaAtual('Responsáveis')}>
            <Text style={styles.text}>Responsáveis</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.bdBtn}
            onPress={() => setTelaAtual('Professores')}>
            <Text style={styles.text}>Professores</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.bdBtn}
            onPress={() => setTelaAtual('Coordenadores')}>
            <Text style={styles.text}>Coordenadores</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.bdBtn}
            onPress={() => setTelaAtual('Avaliações')}>
            <Text style={styles.text}>Avaliações</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.bdBtn}
            onPress={() => setTelaAtual('Boletins')}>
            <Text style={styles.text}>Boletins</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.bdBtn}
            onPress={() => setTelaAtual('Disciplinas')}>
            <Text style={styles.text}>Disciplinas</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.bdBtn}
            onPress={() => setTelaAtual('Cursos')}>
            <Text style={styles.text}>Cursos</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.bdBtn}
            onPress={() => setTelaAtual('Turmas')}>
            <Text style={styles.text}>Turmas</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.bdBtn}
            onPress={() => setTelaAtual('Matrículas')}>
            <Text style={styles.text}>Matrículas</Text>
          </TouchableOpacity>
        </View>

        <BottomBar setTelaAtual={setTelaAtual} />
      </View>
    );
  }

  if (telaAtual == 'Alunos') {
    return (
      <TelaInterna
        titulo="Alunos"
        descricao="Gerenciar alunos"
        setTelaAtual={setTelaAtual}
        t1="Cadastrar"
        t2="Consultar"
        t3="Editar"
        tela1="CadastrarAluno"
      />
    );
  }
  if (telaAtual == 'CadastrarAluno') {
    return (
      <CadastrarAluno
        setTelaAtual={setTelaAtual}
        descricao="Dados do aluno"
        titulo="Aluno"
      />
    );
  }
  if (telaAtual == 'Responsáveis') {
    return (
      <TelaInterna
        titulo="Responsáveis"
        descricao="Gerenciar responsáveis"
        setTelaAtual={setTelaAtual}
        t1="Cadastrar"
        t2="Consultar"
        t3="Editar"
      />
    );
  }

  if (telaAtual == 'Professores') {
    return (
      <TelaInterna
        titulo="Professores"
        descricao="Gerenciar professores"
        setTelaAtual={setTelaAtual}
        t1="Cadastrar"
        t2="Consultar"
        t3="Editar"
      />
    );
  }

  if (telaAtual == 'Coordenadores') {
    return (
      <TelaInterna
        titulo="Coordenadores"
        descricao="Gerenciar coordenadores"
        setTelaAtual={setTelaAtual}
        t1="Cadastrar"
        t2="Consultar"
        t3="Editar"
      />
    );
  }

  if (telaAtual == 'Avaliações') {
    return (
      <TelaInterna
        titulo="Avaliações"
        descricao="Gerenciar avaliações"
        setTelaAtual={setTelaAtual}
        t1="Cadastrar"
        t2="Consultar"
        t3="Editar"
      />
    );
  }

  if (telaAtual == 'Boletins') {
    return (
      <TelaInterna
        titulo="Boletins"
        descricao="Gerenciar boletins"
        setTelaAtual={setTelaAtual}
        t1="Cadastrar"
        t2="Consultar"
        t3="Editar"
      />
    );
  }

  if (telaAtual == 'Disciplinas') {
    return (
      <TelaInterna
        titulo="Disciplinas"
        descricao="Gerenciar disciplinas"
        setTelaAtual={setTelaAtual}
        t1="Cadastrar"
        t2="Consultar"
        t3="Editar"
      />
    );
  }

  if (telaAtual == 'Cursos') {
    return (
      <TelaInterna
        titulo="Cursos"
        descricao="Gerenciar cursos"
        setTelaAtual={setTelaAtual}
        t1="Cadastrar"
        t2="Consultar"
        t3="Editar"
      />
    );
  }

  if (telaAtual == 'Turmas') {
    return (
      <TelaInterna
        titulo="Turmas"
        descricao="Gerenciar turmas"
        setTelaAtual={setTelaAtual}
        t1="Cadastrar"
        t2="Consultar"
        t3="Editar"
      />
    );
  }

  if (telaAtual == 'Matrículas') {
    return (
      <TelaInterna
        titulo="Matrículas"
        descricao="Gerenciar matrículas"
        setTelaAtual={setTelaAtual}
        t1="Cadastrar"
        t2="Consultar"
        t3="Editar"
      />
    );
  }

  if (telaAtual == 'Sobre') {
    return (
      <View style={styles.containerSobre}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Sobre</Text>
        </View>

        <View style={styles.containerSobreMain}>
          <Text style={styles.tituloInterno}>APP Scholar</Text>

          <Text style={styles.descricaoInterna}>
            Sistema acadêmico para gerenciamento de alunos, professores, cursos,
            turmas e informações escolares.
          </Text>
        </View>

        <BottomBar setTelaAtual={setTelaAtual} />
      </View>
    );
  }
}

function TelaInterna({
  titulo,
  descricao,
  t1,
  t2,
  t3,
  tela1,
  tela2,
  tela3,
  setTelaAtual,
}) {
  return (
    <View style={styles.containerSobre}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.btnVoltar}
          onPress={() => setTelaAtual('Home')}>
          <Image
            style={styles.backButton}
            source={require('./assets/back.png')}
          />
        </TouchableOpacity>

        <Text style={styles.headerText}>{titulo}</Text>
      </View>

      <View style={styles.containerSobreMain}>
        <Text style={styles.tituloInterno}>{descricao}</Text>

        <View style={styles.abasContainer}>
          <TouchableOpacity
            style={styles.aba}
            onPress={() => setTelaAtual(tela1)}>
            <Text style={styles.abaText}>{t1}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.aba}
            onPress={() => setTelaAtual(tela2)}>
            <Text style={styles.abaText}>{t2}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.aba}
            onPress={() => setTelaAtual(tela3)}>
            <Text style={styles.abaText}>{t3}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <BottomBar setTelaAtual={setTelaAtual} />
    </View>
  );
}

function CadastrarAluno({ descricao, setTelaAtual, titulo }) {
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [cpf, setCpf] = useState('');
  const [responsavel, setResponsavel] = useState('');
  const [endereco, setEndereco] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [curso, setCurso] = useState('');

  const cadastrarAluno = async () => {
    const dados = {
      nome: nome,
      data_nascimento: dataNascimento,
      cpf: cpf,
      telefone: telefone,
      email: email,

      responsavel: responsavel,
      endereco: endereco,
      curso: curso,
    };

    try {
      const resposta = await fetch(
        'http://192.168.15.8/app_scholar_api/cadastrar_aluno.php',
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json',
          },

          body: JSON.stringify(dados),
        }
      );

      const resultado = await resposta.json();

      console.log(resultado);

      if (resultado.sucesso) {
        Alert.alert('Sucesso!', 'Aluno cadastrado com sucesso!');
      } else {
        Alert.alert('Erro', resultado.erro || resultado.mensagem);
      }
    } catch (erro) {
      console.log('ERRO COMPLETO:', erro);

      Alert.alert('Erro', String(erro));
    }
  };

  return (
    <View style={styles.containerCadastrar}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.btnVoltar}
          onPress={() => setTelaAtual('Alunos')}>
          <Image
            style={styles.backButton}
            source={require('./assets/back.png')}
          />
        </TouchableOpacity>

        <Text style={styles.headerText}>{titulo}</Text>
      </View>

      <ScrollView
        style={{width: '100%'}}
        contentContainerStyle={styles.scrollCadastro}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.containerCadastrarMain}>
          <Text style={styles.tituloInterno}>{descricao}</Text>

          <View style={styles.inputsCadastro}>
            <Text style={styles.label}>Nome Completo</Text>

            <TextInput
              placeholder="Digite o nome completo"
              value={nome}
              onChangeText={setNome}
              style={styles.textInput}
            />

            <Text style={styles.label}>Data de nascimento</Text>

            <TextInput
              placeholder="aaaa-mm-dd"
              value={dataNascimento}
              onChangeText={setDataNascimento}
              style={styles.textInput}
            />

            <Text style={styles.label}>CPF</Text>

            <TextInput
              placeholder="00000000000"
              value={cpf}
              onChangeText={setCpf}
              style={styles.textInput}
            />

            <Text style={styles.label}>Responsável</Text>

            <TextInput
              placeholder="Nome do(a) responsável"
              value={responsavel}
              onChangeText={setResponsavel}
              style={styles.textInput}
            />

            <Text style={styles.label}>Endereço</Text>

            <TextInput
              placeholder="Digite o endereço do aluno"
              value={endereco}
              onChangeText={setEndereco}
              style={styles.textInput}
            />

            <Text style={styles.label}>Email</Text>

            <TextInput
              placeholder="Digite o email do aluno"
              value={email}
              onChangeText={setEmail}
              style={styles.textInput}
            />

            <Text style={styles.label}>Telefone</Text>

            <TextInput
              placeholder="(12) 99999-9999"
              value={telefone}
              onChangeText={setTelefone}
              style={styles.textInput}
            />

            <Text style={styles.label}>Curso</Text>

            <TextInput
              placeholder="Digite o curso"
              value={curso}
              onChangeText={setCurso}
              style={styles.textInput}
            />

            <TouchableOpacity
              style={styles.cadastroBTN}
              onPress={cadastrarAluno}>
              <Text>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <BottomBar setTelaAtual={setTelaAtual} />
    </View>
  );
}

function BottomBar({ setTelaAtual }) {
  return (
    <View style={styles.bottomBar}>
      <TouchableOpacity
        style={styles.bottomButton}
        onPress={() => setTelaAtual('Home')}>
        <Image
          style={styles.bottomButtonIMG}
          source={require('./assets/homeIcon.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.bottomButton}
        onPress={() => setTelaAtual('Sobre')}>
        <Image
          style={styles.bottomButtonIMG}
          source={require('./assets/aboutIcon.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

function consultaAluno() {
  const buscarAlunos = async () => {
    try {
      const resposta = await fetch(
        'http://192.168.15.8/app_scholar_api/alunos.php'
      );
      const dados = await resposta.json();
      setAlunos(dados);
    } catch (erro) {
      console.log('Erro:', erro);
    }
  };
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    height: 100,
    width: '100%',
    backgroundColor: '#5D7BE8',
    zIndex: 2,
  },

  headerText: {
    color: '#FFFFFF',
    fontSize: 25,
    top: 60,
  },

  tracinhos: {
    width: 40,
    height: 40,
  },

  btnTracinhos: {
    position: 'absolute',
    left: '4%',
    top: 50,
  },

  containerHome: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },

  bg: {
    position: 'absolute',
    width: '100%',
    height: 200,
    top: 100,
  },

  logo: {
    width: 150,
    height: 100,
    marginTop: 110,
    marginBottom: 10,
  },

  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#5D7BE8',
  },

  subtitulo: {
    fontSize: 18,
    marginBottom: 10,
    color: '#666',
  },

  buttonsContainer: {
    width: '90%',
    height: '50%',

    flexDirection: 'row',
    flexWrap: 'wrap',

    justifyContent: 'space-evenly',
    alignContent: 'space-evenly',
  },

  bdBtn: {
    width: '45%',
    height: '15%',

    backgroundColor: '#ffffff',

    borderRadius: 10,

    boxShadow: '0 3px 0 0 #D6D6D6',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8F8F8F',
  },

  containerSobre: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },

  containerSobreMain: {
    flex: 1,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 80,
    marginTop: '30%',
  },

  label: {
    fontSize: 13,
    marginBottom: 5,
    fontFamily: 'sans-serif',
  },
  tituloInterno: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#5D7BE8',
    marginBottom: 12,
    marginTop: -12,
    textAlign: 'center',
  },

  descricaoInterna: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 20,
  },

  btnVoltar: {
    position: 'absolute',
    left: 10,
    top: 48,
    zIndex: 3,
  },

  backButton: {
    width: 40,
    height: 40,
  },

  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,

    height: 80,

    backgroundColor: '#ffffff',

    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

    borderTopWidth: 1,
    borderTopColor: '#dddddd',
  },

  bottomButtonIMG: {
    width: 40,
    height: 40,
  },

  abasContainer: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width: '90%',
    height: 300,
  },

  aba: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    boxShadow: '0 3px 0 0 #D6D6D6',

    height: '25%',
    width: '100%',
    borderRadius: 10,
  },

  abaText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#8F8F8F',
  },

  // área do cadastro aluno -------------------------------------------------------------------------
  inputsCadastro: {
    width: '100%',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },

  containerCadastrar: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },

  containerCadastrarMain: {
    flex: 1,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingBottom: 80,
    paddingTop: 20,
  },

  cadastroBTN: {
    width: '100%',
    height: '8%',

    backgroundColor: '#5D7BE8',
    color: '#ffffff',
    fontSize: 18,
    fontFamily: 'sans-serif',
    borderRadius: 10,
    marginTop: 15,
   
    boxShadow: '0 3px 0 0 #D6D6D6',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: '#ffffff',
    color: '#8F8F8F',
    width: '100%',
    height: 30,
    boxShadow: '0 3px 0 0 #D6D6D6',

    borderRadius: 7,
    marginBottom: 10,
    padding: '0 0 0 100px',
  },
  scrollCadastro: {
    alignItems: 'center',
    paddingTop: 120,
    paddingBottom: 110,
  },
});
