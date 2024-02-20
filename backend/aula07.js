const express = require('express');
const { Pool } = require('pg');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3000;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'minhaSenha',
  port: 5432,
});

app.use(express.json());

const verificarToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token de autenticação não fornecido.' });
  }

  jwt.verify(token, 'segredo', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token de autenticação inválido.' });
    }
    req.pessoaId = decoded.id;
    next();
  });
};

app.post('/login', async (req, res) => {
  try {
    const { email } = req.body;

    if (!/\S+@\S+\.\S+/.test(email)) {
      return res.status(400).json({ message: 'Formato de email inválido.' });
    }

    const pessoaQuery = await pool.query('SELECT * FROM pessoas WHERE email = $1', [email]);
    const pessoa = pessoaQuery.rows[0];
    if (!pessoa) {
      return res.status(401).json({ message: 'Pessoa não encontrada.' });
    }

    const token = jwt.sign({ id: pessoa.id, email: pessoa.email }, 'seu_segredo', { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao autenticar pessoa.' });
  }
});

app.use((req, res, next) => {
  if (req.url !== '/login') {
    verificarToken(req, res, next);
  } else {
    next();
  }
});

app.get('/pessoas', async (req, res) => {
  try {
    const pessoasQuery = await pool.query('SELECT * FROM pessoas');
    const pessoas = pessoasQuery.rows;

    const pessoasComTelefones = await Promise.all(pessoas.map(async (pessoa) => {
      const telefonesQuery = await pool.query('SELECT numero FROM telefones WHERE pessoa_id = $1', [pessoa.id]);
      const telefones = telefonesQuery.rows.map(row => row.numero);
      return { ...pessoa, telefones };
    }));

    res.status(200).json(pessoasComTelefones);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao recuperar pessoas.' });
  }
});

app.post('/pessoas', async (req, res) => {
  try {
    const { nome, email, telefone } = req.body;

    const pessoaQuery = await pool.query('INSERT INTO pessoas (nome, email) VALUES ($1, $2) RETURNING id', [nome, email]);
    const pessoaId = pessoaQuery.rows[0].id;

    await pool.query('INSERT INTO telefones (numero, pessoa_id) VALUES ($1, $2)', [telefone, pessoaId]);

    res.status(201).json({ message: 'Pessoa adicionada com sucesso.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao adicionar pessoa.' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
