### Autenticação e Autorização na API

#### 1. Rota /login para autenticar uma pessoa:

- **Rota:** `/login`
- **Método:** POST
- **Status Code das Respostas:**
  - 200: Sucesso na autenticação.
  - 401: Falha na autenticação.
- **Requisição:** O email da pessoa deve ser enviado no corpo da requisição no formato JSON.
- **Resposta:**
  - Caso a pessoa tenha cadastro:
    ```json
    {
      "token": "token JWT assinado e com as informações da pessoa, o atributo iat e exp"
    }
    ```
  - Caso a pessoa não tenha cadastro:
    ```json
    {
      "message": "mensagem especificando o motivo do erro"
    }
    ```

#### 2. Adição de autorização em todas as rotas, exceto na de login:

- **Método:** Middleware aplicado em todas as rotas, exceto `/login`.
- **Status Code das Respostas:**
  - 401: Falha na autorização.
- **Requisição:** O token JWT assinado deve ser enviado no header da requisição em uma propriedade chamada `authorization`.
- **Resposta:**
  - Caso a pessoa não tenha autorização:
    ```json
    {
      "message": "mensagem especificando o motivo do erro"
    }
    ```