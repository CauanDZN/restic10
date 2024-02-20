# Mini Projeto: Persistência de Dados em PostgreSQL e Refatoração da API em Node.js

## 1. Criando o esquema do banco de dados PostgreSQL:

```sql
-- Criar tabela para armazenar as informações das pessoas
CREATE TABLE pessoas (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);

-- Criar tabela para armazenar as informações dos números de telefone
CREATE TABLE telefones (
    id SERIAL PRIMARY KEY,
    numero VARCHAR(20) NOT NULL,
    pessoa_id INT REFERENCES pessoas(id)
);

-- Criar tabela intermediária para a relação muitos para muitos entre pessoas e telefones
CREATE TABLE pessoa_telefone (
    pessoa_id INT REFERENCES pessoas(id),
    telefone_id INT REFERENCES telefones(id),
    PRIMARY KEY (pessoa_id, telefone_id)
);
```

## 2. Refatorando a API para persistir os dados no banco de dados PostgreSQL

Nesta adaptação da API, estamos utilizando o pacote `pg` para interagir com o PostgreSQL. Em cada rota, fazemos consultas SQL ao banco de dados para executar as operações desejadas (listar pessoas, adicionar pessoa, etc.).