# Instanciando um servidor PostgreSQL com Docker e Conectando a uma Aplicação Node.js

## 1. Instalação do Docker

Certifique-se de ter o Docker instalado em sua máquina. Você pode baixar e instalar a partir do [site oficial do Docker](https://www.docker.com/get-started).

## 2. Baixar e Instalar a Imagem do PostgreSQL

Abra um terminal ou prompt de comando e execute o seguinte comando para baixar a imagem do PostgreSQL:

```bash
docker pull postgres
```

## 3. Criar e Iniciar um Contêiner PostgreSQL

Execute o seguinte comando para criar e iniciar um contêiner com o PostgreSQL:

```bash
docker run --name meu-postgres -e POSTGRES_PASSWORD=minhaSenha -d -p 5432:5432 postgres
```

- `--name meu-postgres`: Define o nome do contêiner como "meu-postgres".
- `-e POSTGRES_PASSWORD=minhaSenha`: Define a senha para o usuário "postgres" como "minhaSenha". Substitua "minhaSenha" por uma senha de sua escolha.
- `-d`: Indica que o contêiner será executado em segundo plano.
- `-p 5432:5432`: Mapeia a porta do contêiner PostgreSQL (5432) para a mesma porta no host.

Verifique se o contêiner PostgreSQL está em execução com o seguinte comando:

```bash
docker ps
```

## 4. Conectar a Aplicação Node.js ao Banco de Dados PostgreSQL

Modifique a configuração do `pool` em sua aplicação Node.js para conectar ao contêiner Docker:

```javascript
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'base_de_dados',
  password: 'minhaSenha',
  port: 5432,
});
```