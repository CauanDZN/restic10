const express = require('express');
const { Pool } = require('pg');

const app = express();
app.use(express.json());
const PORT = 3000;

const pool = new Pool({
  user: 'cauan',
  host: 'localhost',
  database: 'irede',
  password: 'cauan',
  port: 5432,
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
