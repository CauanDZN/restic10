### 1. Como deletar um registro específico de uma tabela?

```sql
DELETE FROM Pessoas WHERE id_pessoa = 1;
```

### 2. Como deletar todos os registros de uma vez?

```sql
DELETE FROM Telefones;
```

### 3. Como deletar uma tabela específica?

```sql
DROP TABLE Pessoas;
```

### 4. Como deletar todas as tabelas de uma vez?

Não é possível deletar todas as tabelas de uma vez em um único comando SQL.

### 5. Como deletar uma base de dados específica?

```sql
DROP DATABASE agenda_telefonica;
```

### 6. Criando a base de dados "agenda_telefonica" e suas tabelas:

```sql
CREATE DATABASE agenda_telefonica;

\c agenda_telefonica;

CREATE TABLE Pessoas (
    id_pessoa SERIAL PRIMARY KEY,
    nome VARCHAR NOT NULL,
    idade INTEGER NOT NULL
);

CREATE TABLE Telefones (
    id_telefone SERIAL PRIMARY KEY,
    telefone VARCHAR UNIQUE NOT NULL,
    id_pessoa INTEGER REFERENCES Pessoas(id_pessoa) ON DELETE CASCADE
);
```

### 5. Inserindo cinco pessoas:

```sql
INSERT INTO Pessoas (nome, idade) VALUES
    ('João', 30),
    ('Maria', 25),
    ('José', 40),
    ('Ana', 35),
    ('Pedro', 28);
```

### 6. Deletando um telefone da primeira pessoa cadastrada:

```sql
DELETE FROM Telefones WHERE id_pessoa = 1 LIMIT 1;
```

### 7. Deletando a pessoa que não possui telefone cadastrado:

```sql
DELETE FROM Pessoas WHERE id_pessoa NOT IN (SELECT id_pessoa FROM Telefones);
```

### 8. Deletando uma pessoa que possui algum telefone cadastrado:

Para deletar uma pessoa que possui algum telefone cadastrado, você pode simplesmente deletar o registro da tabela Pessoas correspondente ao id_pessoa desejado.

### Pesquisa sobre a palavra reservada do SQL ON DELETE:

A palavra reservada `ON DELETE` é utilizada em declarações de restrição de chave estrangeira para especificar a ação a ser tomada quando um registro na tabela pai é excluído. As opções comuns para `ON DELETE` são:

- `CASCADE`: Ao excluir um registro na tabela pai, todos os registros correspondentes na tabela filha também serão excluídos.
- `SET NULL`: Define a chave estrangeira na tabela filha como NULL quando o registro correspondente na tabela pai é excluído.
- `RESTRICT`: Impede a exclusão de um registro na tabela pai se houver registros correspondentes na tabela filha.
- `NO ACTION`: Similar a `RESTRICT`, impede a exclusão de um registro na tabela pai se houver registros correspondentes na tabela filha.