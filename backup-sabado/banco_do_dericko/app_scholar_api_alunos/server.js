require('dotenv').config();
const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();
const PORT = Number(process.env.PORT || 3000);

app.use(cors());
app.use(express.json());

// Teste da API e da conexão com o banco
app.get('/api/health', async (req, res) => {
  try {
    await pool.query('SELECT 1');
    res.json({ ok: true, mensagem: 'API e banco conectados.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, erro: 'Não foi possível conectar ao banco.' });
  }
});

// LISTAR ALUNOS
app.get('/api/alunos', async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT
        a.idAlunos,
        a.Nome,
        a.Data_de_Nascimento,
        a.idRuas,
        a.idInfoPessoal,
        i.CPF,
        i.Email,
        i.Telefone
      FROM alunos a
      LEFT JOIN info_pessoal i
        ON i.idInfoPessoal = a.idInfoPessoal
      ORDER BY a.idAlunos DESC
    `);

    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao consultar alunos.' });
  }
});

// BUSCAR UM ALUNO PELO ID
app.get('/api/alunos/:id', async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT
        a.idAlunos,
        a.Nome,
        a.Data_de_Nascimento,
        a.idRuas,
        a.idInfoPessoal,
        i.CPF,
        i.Email,
        i.Telefone
      FROM alunos a
      LEFT JOIN info_pessoal i
        ON i.idInfoPessoal = a.idInfoPessoal
      WHERE a.idAlunos = ?
    `, [req.params.id]);

    if (rows.length === 0) {
      return res.status(404).json({ erro: 'Aluno não encontrado.' });
    }

    res.json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao consultar o aluno.' });
  }
});

// CADASTRAR ALUNO
app.post('/api/alunos', async (req, res) => {
  const {
    Nome,
    Data_de_Nascimento,
    idRuas,
    CPF,
    Email,
    Telefone
  } = req.body;

  if (!Nome || !Data_de_Nascimento || !idRuas || !CPF || !Email || !Telefone) {
    return res.status(400).json({
      erro: 'Informe Nome, Data_de_Nascimento, idRuas, CPF, Email e Telefone.'
    });
  }

  let connection;

  try {
    connection = await pool.getConnection();
    await connection.beginTransaction();

    const [infoResult] = await connection.execute(
      `INSERT INTO info_pessoal (CPF, Email, Telefone)
       VALUES (?, ?, ?)`,
      [CPF, Email, Telefone]
    );

    const idInfoPessoal = infoResult.insertId;

    const [alunoResult] = await connection.execute(
      `INSERT INTO alunos
        (Nome, Data_de_Nascimento, idRuas, idInfoPessoal)
       VALUES (?, ?, ?, ?)`,
      [Nome, Data_de_Nascimento, idRuas, idInfoPessoal]
    );

    await connection.commit();

    res.status(201).json({
      mensagem: 'Aluno cadastrado com sucesso.',
      idAlunos: alunoResult.insertId,
      idInfoPessoal
    });
  } catch (error) {
    if (connection) {
      await connection.rollback();
    }

    console.error(error);
    res.status(500).json({
      erro: 'Erro ao cadastrar aluno.',
      detalhe: error.code || error.message
    });
  } finally {
    if (connection) {
      connection.release();
    }
  }
});

// ATUALIZAR ALUNO
app.put('/api/alunos/:id', async (req, res) => {
  const { id } = req.params;
  const {
    Nome,
    Data_de_Nascimento,
    idRuas,
    CPF,
    Email,
    Telefone
  } = req.body;

  if (!Nome || !Data_de_Nascimento || !idRuas || !CPF || !Email || !Telefone) {
    return res.status(400).json({
      erro: 'Informe Nome, Data_de_Nascimento, idRuas, CPF, Email e Telefone.'
    });
  }

  let connection;

  try {
    connection = await pool.getConnection();
    await connection.beginTransaction();

    const [alunoRows] = await connection.execute(
      `SELECT idInfoPessoal FROM alunos WHERE idAlunos = ?`,
      [id]
    );

    if (alunoRows.length === 0) {
      await connection.rollback();
      return res.status(404).json({ erro: 'Aluno não encontrado.' });
    }

    const idInfoPessoal = alunoRows[0].idInfoPessoal;

    await connection.execute(
      `UPDATE info_pessoal
       SET CPF = ?, Email = ?, Telefone = ?
       WHERE idInfoPessoal = ?`,
      [CPF, Email, Telefone, idInfoPessoal]
    );

    await connection.execute(
      `UPDATE alunos
       SET Nome = ?, Data_de_Nascimento = ?, idRuas = ?
       WHERE idAlunos = ?`,
      [Nome, Data_de_Nascimento, idRuas, id]
    );

    await connection.commit();

    res.json({ mensagem: 'Aluno atualizado com sucesso.' });
  } catch (error) {
    if (connection) {
      await connection.rollback();
    }

    console.error(error);
    res.status(500).json({
      erro: 'Erro ao atualizar aluno.',
      detalhe: error.code || error.message
    });
  } finally {
    if (connection) {
      connection.release();
    }
  }
});

// EXCLUIR ALUNO
app.delete('/api/alunos/:id', async (req, res) => {
  const { id } = req.params;
  let connection;

  try {
    connection = await pool.getConnection();
    await connection.beginTransaction();

    const [alunoRows] = await connection.execute(
      `SELECT idInfoPessoal FROM alunos WHERE idAlunos = ?`,
      [id]
    );

    if (alunoRows.length === 0) {
      await connection.rollback();
      return res.status(404).json({ erro: 'Aluno não encontrado.' });
    }

    const idInfoPessoal = alunoRows[0].idInfoPessoal;

    // A tabela alunos_responsaveis relaciona alunos e responsáveis.
    await connection.execute(
      `DELETE FROM alunos_responsaveis WHERE idAlunos = ?`,
      [id]
    );

    // Remove o aluno. Outras relações do banco podem impedir a exclusão
    // se houver matrículas associadas, conforme as FKs do banco.
    await connection.execute(
      `DELETE FROM alunos WHERE idAlunos = ?`,
      [id]
    );

    if (idInfoPessoal) {
      await connection.execute(
        `DELETE FROM info_pessoal WHERE idInfoPessoal = ?`,
        [idInfoPessoal]
      );
    }

    await connection.commit();

    res.json({ mensagem: 'Aluno excluído com sucesso.' });
  } catch (error) {
    if (connection) {
      await connection.rollback();
    }

    console.error(error);
    res.status(500).json({
      erro: 'Erro ao excluir aluno. Verifique se existem matrículas ou outras relações vinculadas.',
      detalhe: error.code || error.message
    });
  } finally {
    if (connection) {
      connection.release();
    }
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`API do App Scholar rodando em http://localhost:${PORT}`);
});
