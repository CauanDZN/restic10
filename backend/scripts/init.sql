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

-- Reiniciar a sequência do ID da tabela pessoas para começar de 1
ALTER SEQUENCE pessoas_id_seq RESTART WITH 1;