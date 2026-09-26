-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 26/06/2026 às 17:13
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `bd_escola`
--
CREATE DATABASE IF NOT EXISTS `bd_escola` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `bd_escola`;

-- --------------------------------------------------------

--
-- Estrutura para tabela `alunos`
--

DROP TABLE IF EXISTS `alunos`;
CREATE TABLE `alunos` (
  `idAlunos` int(11) NOT NULL,
  `Nome` varchar(50) NOT NULL,
  `Data_de_Nascimento` date NOT NULL,
  `idRuas` int(11) NOT NULL,
  `idInfoPessoal` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `alunos_responsaveis`
--

DROP TABLE IF EXISTS `alunos_responsaveis`;
CREATE TABLE `alunos_responsaveis` (
  `idAlunos` int(11) DEFAULT NULL,
  `idResponsaveis` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `avaliacoes`
--

DROP TABLE IF EXISTS `avaliacoes`;
CREATE TABLE `avaliacoes` (
  `idAvaliacoes` int(11) NOT NULL,
  `idBoletins` int(11) NOT NULL,
  `Descricao` varchar(300) DEFAULT NULL,
  `Data` date DEFAULT NULL,
  `Valor` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `bairros`
--

DROP TABLE IF EXISTS `bairros`;
CREATE TABLE `bairros` (
  `idBairros` int(11) NOT NULL,
  `Nome` varchar(50) NOT NULL,
  `idCidades` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `boletins`
--

DROP TABLE IF EXISTS `boletins`;
CREATE TABLE `boletins` (
  `idBoletins` int(11) NOT NULL,
  `idMAtricula` int(11) NOT NULL,
  `Notas` decimal(4,2) DEFAULT NULL,
  `Media` decimal(4,2) DEFAULT NULL,
  `Situacao_Final` int(3) DEFAULT NULL,
  `Frequencia` decimal(3,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `boletins_disciplinas`
--

DROP TABLE IF EXISTS `boletins_disciplinas`;
CREATE TABLE `boletins_disciplinas` (
  `idBoletins` int(11) DEFAULT NULL,
  `idDisciplinas` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `casas`
--

DROP TABLE IF EXISTS `casas`;
CREATE TABLE `casas` (
  `idCasas` int(11) NOT NULL,
  `Numero` char(3) NOT NULL,
  `idRuas` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `cidades`
--

DROP TABLE IF EXISTS `cidades`;
CREATE TABLE `cidades` (
  `idCidades` int(11) NOT NULL,
  `Nome` varchar(50) NOT NULL,
  `idUF` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `coordenadores`
--

DROP TABLE IF EXISTS `coordenadores`;
CREATE TABLE `coordenadores` (
  `idCoordenadores` int(11) NOT NULL,
  `Nome` varchar(50) NOT NULL,
  `Formacao` varchar(30) NOT NULL,
  `idInfoPessoal` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `cursos`
--

DROP TABLE IF EXISTS `cursos`;
CREATE TABLE `cursos` (
  `idCursos` int(11) NOT NULL,
  `Nome_Curso` varchar(50) NOT NULL,
  `Carga_Horaria` int(11) NOT NULL,
  `Duracao` varchar(20) NOT NULL,
  `Descricao` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `cursos_disciplinas`
--

DROP TABLE IF EXISTS `cursos_disciplinas`;
CREATE TABLE `cursos_disciplinas` (
  `idCursos` int(11) DEFAULT NULL,
  `idDisciplinas` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `disciplinas`
--

DROP TABLE IF EXISTS `disciplinas`;
CREATE TABLE `disciplinas` (
  `idDisciplinas` int(11) NOT NULL,
  `Nome_Disciplina` varchar(20) NOT NULL,
  `Carga_Horaria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `disciplinas_professores`
--

DROP TABLE IF EXISTS `disciplinas_professores`;
CREATE TABLE `disciplinas_professores` (
  `idDisciplinas` int(11) DEFAULT NULL,
  `idProfessor` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `formacoes`
--

DROP TABLE IF EXISTS `formacoes`;
CREATE TABLE `formacoes` (
  `idFormacoes` int(11) NOT NULL,
  `Descricao` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `info_pessoal`
--

DROP TABLE IF EXISTS `info_pessoal`;
CREATE TABLE `info_pessoal` (
  `idInfoPessoal` int(11) NOT NULL,
  `CPF` char(11) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Telefone` char(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `matriculas`
--

DROP TABLE IF EXISTS `matriculas`;
CREATE TABLE `matriculas` (
  `idMatricula` int(11) NOT NULL,
  `idAlunos` int(11) NOT NULL,
  `idTurmas` int(11) NOT NULL,
  `Data_de_Matricula` int(11) NOT NULL,
  `Situacao` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `matriculas_cursos`
--

DROP TABLE IF EXISTS `matriculas_cursos`;
CREATE TABLE `matriculas_cursos` (
  `idMatriculas` int(11) DEFAULT NULL,
  `idCursos` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `professores`
--

DROP TABLE IF EXISTS `professores`;
CREATE TABLE `professores` (
  `idProfessor` int(11) NOT NULL,
  `Nome` varchar(50) NOT NULL,
  `idInfoPessoal` int(11) NOT NULL,
  `idFormacoes` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `responsaveis`
--

DROP TABLE IF EXISTS `responsaveis`;
CREATE TABLE `responsaveis` (
  `idResponsaveis` int(11) NOT NULL,
  `Nome` varchar(50) NOT NULL,
  `Parentesco` varchar(20) NOT NULL,
  `idInfoPessoal` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `ruas`
--

DROP TABLE IF EXISTS `ruas`;
CREATE TABLE `ruas` (
  `idRuas` int(11) NOT NULL,
  `Nome` varchar(50) NOT NULL,
  `CEP` char(8) NOT NULL,
  `idBairros` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `turmas`
--

DROP TABLE IF EXISTS `turmas`;
CREATE TABLE `turmas` (
  `idTurmas` int(11) NOT NULL,
  `Ano_Letivo` varchar(4) NOT NULL,
  `Turno` char(5) NOT NULL,
  `Sala` varchar(10) NOT NULL,
  `idCursos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `uf`
--

DROP TABLE IF EXISTS `uf`;
CREATE TABLE `uf` (
  `idUF` int(11) NOT NULL,
  `Nome` varchar(50) NOT NULL,
  `Sigla` char(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `alunos`
--
ALTER TABLE `alunos`
  ADD PRIMARY KEY (`idAlunos`),
  ADD KEY `idRuas` (`idRuas`),
  ADD KEY `idInfoPessoal` (`idInfoPessoal`);

--
-- Índices de tabela `alunos_responsaveis`
--
ALTER TABLE `alunos_responsaveis`
  ADD KEY `idAlunos` (`idAlunos`),
  ADD KEY `idResponsaveis` (`idResponsaveis`);

--
-- Índices de tabela `avaliacoes`
--
ALTER TABLE `avaliacoes`
  ADD PRIMARY KEY (`idAvaliacoes`),
  ADD KEY `idBoletins` (`idBoletins`);

--
-- Índices de tabela `bairros`
--
ALTER TABLE `bairros`
  ADD PRIMARY KEY (`idBairros`),
  ADD KEY `idCidades` (`idCidades`);

--
-- Índices de tabela `boletins`
--
ALTER TABLE `boletins`
  ADD PRIMARY KEY (`idBoletins`),
  ADD KEY `idMAtricula` (`idMAtricula`);

--
-- Índices de tabela `boletins_disciplinas`
--
ALTER TABLE `boletins_disciplinas`
  ADD KEY `idBoletins` (`idBoletins`),
  ADD KEY `idDisciplinas` (`idDisciplinas`);

--
-- Índices de tabela `casas`
--
ALTER TABLE `casas`
  ADD PRIMARY KEY (`idCasas`),
  ADD KEY `idRuas` (`idRuas`);

--
-- Índices de tabela `cidades`
--
ALTER TABLE `cidades`
  ADD PRIMARY KEY (`idCidades`),
  ADD KEY `idUF` (`idUF`);

--
-- Índices de tabela `coordenadores`
--
ALTER TABLE `coordenadores`
  ADD PRIMARY KEY (`idCoordenadores`),
  ADD KEY `idInfoPessoal` (`idInfoPessoal`);

--
-- Índices de tabela `cursos`
--
ALTER TABLE `cursos`
  ADD PRIMARY KEY (`idCursos`);

--
-- Índices de tabela `cursos_disciplinas`
--
ALTER TABLE `cursos_disciplinas`
  ADD KEY `idCursos` (`idCursos`),
  ADD KEY `idDisciplinas` (`idDisciplinas`);

--
-- Índices de tabela `disciplinas`
--
ALTER TABLE `disciplinas`
  ADD PRIMARY KEY (`idDisciplinas`);

--
-- Índices de tabela `disciplinas_professores`
--
ALTER TABLE `disciplinas_professores`
  ADD KEY `idDisciplinas` (`idDisciplinas`),
  ADD KEY `idProfessor` (`idProfessor`);

--
-- Índices de tabela `formacoes`
--
ALTER TABLE `formacoes`
  ADD PRIMARY KEY (`idFormacoes`);

--
-- Índices de tabela `info_pessoal`
--
ALTER TABLE `info_pessoal`
  ADD PRIMARY KEY (`idInfoPessoal`);

--
-- Índices de tabela `matriculas`
--
ALTER TABLE `matriculas`
  ADD PRIMARY KEY (`idMatricula`),
  ADD KEY `idAlunos` (`idAlunos`),
  ADD KEY `idTurmas` (`idTurmas`);

--
-- Índices de tabela `matriculas_cursos`
--
ALTER TABLE `matriculas_cursos`
  ADD KEY `idMatriculas` (`idMatriculas`),
  ADD KEY `idCursos` (`idCursos`);

--
-- Índices de tabela `professores`
--
ALTER TABLE `professores`
  ADD PRIMARY KEY (`idProfessor`),
  ADD KEY `idInfoPessoal` (`idInfoPessoal`),
  ADD KEY `idFormacoes` (`idFormacoes`);

--
-- Índices de tabela `responsaveis`
--
ALTER TABLE `responsaveis`
  ADD PRIMARY KEY (`idResponsaveis`),
  ADD KEY `idInfoPessoal` (`idInfoPessoal`);

--
-- Índices de tabela `ruas`
--
ALTER TABLE `ruas`
  ADD PRIMARY KEY (`idRuas`),
  ADD KEY `idBairros` (`idBairros`);

--
-- Índices de tabela `turmas`
--
ALTER TABLE `turmas`
  ADD PRIMARY KEY (`idTurmas`),
  ADD KEY `idCursos` (`idCursos`);

--
-- Índices de tabela `uf`
--
ALTER TABLE `uf`
  ADD PRIMARY KEY (`idUF`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `alunos`
--
ALTER TABLE `alunos`
  MODIFY `idAlunos` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `avaliacoes`
--
ALTER TABLE `avaliacoes`
  MODIFY `idAvaliacoes` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `bairros`
--
ALTER TABLE `bairros`
  MODIFY `idBairros` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `boletins`
--
ALTER TABLE `boletins`
  MODIFY `idBoletins` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `casas`
--
ALTER TABLE `casas`
  MODIFY `idCasas` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `cidades`
--
ALTER TABLE `cidades`
  MODIFY `idCidades` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `coordenadores`
--
ALTER TABLE `coordenadores`
  MODIFY `idCoordenadores` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de tabela `cursos`
--
ALTER TABLE `cursos`
  MODIFY `idCursos` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `disciplinas`
--
ALTER TABLE `disciplinas`
  MODIFY `idDisciplinas` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `formacoes`
--
ALTER TABLE `formacoes`
  MODIFY `idFormacoes` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `info_pessoal`
--
ALTER TABLE `info_pessoal`
  MODIFY `idInfoPessoal` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `matriculas`
--
ALTER TABLE `matriculas`
  MODIFY `idMatricula` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `professores`
--
ALTER TABLE `professores`
  MODIFY `idProfessor` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `responsaveis`
--
ALTER TABLE `responsaveis`
  MODIFY `idResponsaveis` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `ruas`
--
ALTER TABLE `ruas`
  MODIFY `idRuas` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `turmas`
--
ALTER TABLE `turmas`
  MODIFY `idTurmas` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `uf`
--
ALTER TABLE `uf`
  MODIFY `idUF` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `alunos`
--
ALTER TABLE `alunos`
  ADD CONSTRAINT `alunos_ibfk_1` FOREIGN KEY (`idRuas`) REFERENCES `ruas` (`idRuas`),
  ADD CONSTRAINT `alunos_ibfk_2` FOREIGN KEY (`idInfoPessoal`) REFERENCES `info_pessoal` (`idInfoPessoal`);

--
-- Restrições para tabelas `alunos_responsaveis`
--
ALTER TABLE `alunos_responsaveis`
  ADD CONSTRAINT `alunos_responsaveis_ibfk_1` FOREIGN KEY (`idAlunos`) REFERENCES `alunos` (`idAlunos`),
  ADD CONSTRAINT `alunos_responsaveis_ibfk_2` FOREIGN KEY (`idResponsaveis`) REFERENCES `responsaveis` (`idResponsaveis`);

--
-- Restrições para tabelas `avaliacoes`
--
ALTER TABLE `avaliacoes`
  ADD CONSTRAINT `avaliacoes_ibfk_1` FOREIGN KEY (`idBoletins`) REFERENCES `boletins` (`idBoletins`);

--
-- Restrições para tabelas `bairros`
--
ALTER TABLE `bairros`
  ADD CONSTRAINT `bairros_ibfk_1` FOREIGN KEY (`idCidades`) REFERENCES `cidades` (`idCidades`);

--
-- Restrições para tabelas `boletins`
--
ALTER TABLE `boletins`
  ADD CONSTRAINT `boletins_ibfk_1` FOREIGN KEY (`idMAtricula`) REFERENCES `matriculas` (`idMatricula`);

--
-- Restrições para tabelas `boletins_disciplinas`
--
ALTER TABLE `boletins_disciplinas`
  ADD CONSTRAINT `boletins_disciplinas_ibfk_1` FOREIGN KEY (`idBoletins`) REFERENCES `boletins` (`idBoletins`),
  ADD CONSTRAINT `boletins_disciplinas_ibfk_2` FOREIGN KEY (`idDisciplinas`) REFERENCES `disciplinas` (`idDisciplinas`);

--
-- Restrições para tabelas `casas`
--
ALTER TABLE `casas`
  ADD CONSTRAINT `casas_ibfk_1` FOREIGN KEY (`idRuas`) REFERENCES `ruas` (`idRuas`);

--
-- Restrições para tabelas `cidades`
--
ALTER TABLE `cidades`
  ADD CONSTRAINT `cidades_ibfk_1` FOREIGN KEY (`idUF`) REFERENCES `uf` (`idUF`);

--
-- Restrições para tabelas `coordenadores`
--
ALTER TABLE `coordenadores`
  ADD CONSTRAINT `coordenadores_ibfk_1` FOREIGN KEY (`idInfoPessoal`) REFERENCES `info_pessoal` (`idInfoPessoal`);

--
-- Restrições para tabelas `cursos_disciplinas`
--
ALTER TABLE `cursos_disciplinas`
  ADD CONSTRAINT `cursos_disciplinas_ibfk_1` FOREIGN KEY (`idCursos`) REFERENCES `cursos` (`idCursos`),
  ADD CONSTRAINT `cursos_disciplinas_ibfk_2` FOREIGN KEY (`idDisciplinas`) REFERENCES `disciplinas` (`idDisciplinas`);

--
-- Restrições para tabelas `disciplinas_professores`
--
ALTER TABLE `disciplinas_professores`
  ADD CONSTRAINT `disciplinas_professores_ibfk_1` FOREIGN KEY (`idDisciplinas`) REFERENCES `disciplinas` (`idDisciplinas`),
  ADD CONSTRAINT `disciplinas_professores_ibfk_2` FOREIGN KEY (`idProfessor`) REFERENCES `professores` (`idProfessor`);

--
-- Restrições para tabelas `matriculas`
--
ALTER TABLE `matriculas`
  ADD CONSTRAINT `matriculas_ibfk_1` FOREIGN KEY (`idAlunos`) REFERENCES `alunos` (`idAlunos`),
  ADD CONSTRAINT `matriculas_ibfk_2` FOREIGN KEY (`idTurmas`) REFERENCES `turmas` (`idTurmas`);

--
-- Restrições para tabelas `matriculas_cursos`
--
ALTER TABLE `matriculas_cursos`
  ADD CONSTRAINT `matriculas_cursos_ibfk_1` FOREIGN KEY (`idMatriculas`) REFERENCES `matriculas` (`idMatricula`),
  ADD CONSTRAINT `matriculas_cursos_ibfk_2` FOREIGN KEY (`idCursos`) REFERENCES `cursos` (`idCursos`);

--
-- Restrições para tabelas `professores`
--
ALTER TABLE `professores`
  ADD CONSTRAINT `professores_ibfk_1` FOREIGN KEY (`idInfoPessoal`) REFERENCES `info_pessoal` (`idInfoPessoal`),
  ADD CONSTRAINT `professores_ibfk_2` FOREIGN KEY (`idFormacoes`) REFERENCES `formacoes` (`idFormacoes`);

--
-- Restrições para tabelas `responsaveis`
--
ALTER TABLE `responsaveis`
  ADD CONSTRAINT `responsaveis_ibfk_1` FOREIGN KEY (`idInfoPessoal`) REFERENCES `info_pessoal` (`idInfoPessoal`);

--
-- Restrições para tabelas `ruas`
--
ALTER TABLE `ruas`
  ADD CONSTRAINT `ruas_ibfk_1` FOREIGN KEY (`idBairros`) REFERENCES `bairros` (`idBairros`);

--
-- Restrições para tabelas `turmas`
--
ALTER TABLE `turmas`
  ADD CONSTRAINT `turmas_ibfk_1` FOREIGN KEY (`idCursos`) REFERENCES `cursos` (`idCursos`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
