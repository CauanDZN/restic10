### 1. Consulta de inserção para adicionar registros:

```sql
INSERT INTO Pessoas (nome, idade) VALUES
    ('Calisto Silva', 30),
    ('Allan Silva', 25),
    ('David Dauli', 28),
    ('Adailton Aveiro', 17);
```

### 2. Consulta de seleção para recuperar todas as linhas da tabela pessoas:

```sql
SELECT * FROM Pessoas;
```

### 3. Consulta de seleção para recuperar apenas os nomes das pessoas:

```sql
SELECT nome FROM Pessoas;
```

### 4. Consulta de seleção para recuperar a soma, média, menor e maior idade das pessoas:

```sql
SELECT 
    SUM(idade) AS soma_idades,
    AVG(idade) AS media_idades,
    MIN(idade) AS menor_idade,
    MAX(idade) AS maior_idade
FROM Pessoas;
```

### 5. Consulta de seleção para recuperar todas as pessoas cujo nome começa com a letra 'A':

```sql
SELECT * FROM Pessoas WHERE nome LIKE 'A%';
```

### 6. Consulta de seleção para recuperar todas as pessoas cujo nome tenha a substring 'av', independentemente da caixa:

```sql
SELECT * FROM Pessoas WHERE LOWER(nome) LIKE '%av%';
```

### 7. Consulta de seleção para recuperar todas as pessoas cuja idade é maior ou igual a 25:

```sql
SELECT * FROM Pessoas WHERE idade >= 25;
```

### 8. Consulta de atualização para adicionar 5 anos à idade de todas as pessoas:

```sql
UPDATE Pessoas SET idade = idade + 5;
```

### 9. Consulta de atualização para adicionar 2 anos à idade de uma pessoa específica:

```sql
UPDATE Pessoas SET idade = idade + 2 WHERE nome = 'Cauan Victor';
```

### 10. Consulta de exclusão para remover uma pessoa específica:

```sql
DELETE FROM Pessoas WHERE nome = 'Cauan Victor';
```

### 11. Consulta de seleção para recuperar o nome, idade e a quantidade de números de telefones de todas as pessoas que possuem mais de 24 anos. Resultado em ordem decrescente por idade:

```sql
SELECT 
    nome, 
    idade, 
    (SELECT COUNT(*) FROM Telefones WHERE Telefones.id_pessoa = Pessoas.id_pessoa) AS quantidade_telefones 
FROM Pessoas 
WHERE idade > 24 
ORDER BY idade DESC;
```

### 12. Consulta de seleção para mostrar registros de forma paginada:

Para a página 1:

```sql
SELECT * FROM Pessoas LIMIT 2 OFFSET 0;
```

Para a página 2:

```sql
SELECT * FROM Pessoas LIMIT 2 OFFSET 2;
```

E assim por diante...

### 13. Pesquisa sobre a funcionalidade HAVING:

A palavra reservada `HAVING` é utilizada em conjunto com a cláusula `GROUP BY` para filtrar resultados de agregações baseadas em condições. Enquanto o `WHERE` é usado para filtrar linhas antes da agregação, o `HAVING` é usado para filtrar grupos após a agregação.

Por exemplo, suponha que você queira encontrar a soma da idade para cada grupo de pessoas com a mesma idade, mas apenas para grupos com uma soma de idade superior a 100. Você usaria o `HAVING` para isso:

```sql
SELECT idade, SUM(idade) AS soma_idade
FROM Pessoas
GROUP BY idade
HAVING SUM(idade) > 100;
```