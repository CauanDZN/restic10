const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;
const DATA_FILE = 'pessoas.json';

app.use(express.json());

app.get('/pessoas', (req, res) => {
  try {
      if (fs.existsSync(DATA_FILE)) {
          const pessoas = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
          res.status(200).json(pessoas);
      } else {
          res.status(200).json([]);
      }
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao recuperar pessoas.' });
  }
});

app.post('/pessoas', (req, res) => {
    try {
        const pessoas = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
        const novaPessoa = req.body;

        if (typeof novaPessoa.name !== 'string' || typeof novaPessoa.email !== 'string' || typeof novaPessoa.phone !== 'number') {
            return res.status(400).json({ message: 'Campos inválidos.' });
        }

        const emailExistente = pessoas.find(pessoa => pessoa.email === novaPessoa.email);
        if (emailExistente) {
            return res.status(400).json({ message: 'Email já cadastrado.' });
        }

        pessoas.push(novaPessoa);
        fs.writeFileSync(DATA_FILE, JSON.stringify(pessoas, null, 2));

        res.status(201).json(novaPessoa);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao adicionar pessoa.' });
    }
});

app.delete('/pessoas/:email', (req, res) => {
    try {
        const email = req.params.email;
        let pessoas = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));

        const index = pessoas.findIndex(pessoa => pessoa.email === email);
        if (index !== -1) {
            const pessoaRemovida = pessoas.splice(index, 1)[0];
            fs.writeFileSync(DATA_FILE, JSON.stringify(pessoas, null, 2));
            res.status(200).json(pessoaRemovida);
        } else {
            res.status(404).json({ message: 'Pessoa não encontrada.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao remover pessoa.' });
    }
});

app.put('/pessoas/:email', (req, res) => {
    try {
        const email = req.params.email;
        const novaInfo = req.body;
        let pessoas = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));

        const index = pessoas.findIndex(pessoa => pessoa.email === email);
        if (index !== -1) {
            pessoas[index] = { ...pessoas[index], ...novaInfo };
            fs.writeFileSync(DATA_FILE, JSON.stringify(pessoas, null, 2));
            res.status(200).json(pessoas[index]);
        } else {
            res.status(404).json({ message: 'Pessoa não encontrada.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao editar pessoa.' });
    }
});

app.get('/pessoas/find', (req, res) => {
    try {
        const query = req.query;
        let pessoas = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));

        const pessoasEncontradas = pessoas.filter(pessoa => {
            for (const key in query) {
                if (pessoa[key] !== query[key]) {
                    return false;
                }
            }
            return true;
        });

        if (pessoasEncontradas.length > 0) {
            res.status(200).json(pessoasEncontradas);
        } else {
            res.status(404).json({ message: 'Pessoa não encontrada.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao encontrar pessoa.' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
