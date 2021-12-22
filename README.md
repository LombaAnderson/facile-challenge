# facile-challenge
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/LombaAnderson/facile-challenge/blob/main/LICENSE)

### Forma de testar
POST => http://18.230.78.187:3333/encripts
  ```json
  {
    "name":"Faz certo - que dá certo!"
  }
  ```
GET => http://18.230.78.187:3333/encripts/1

### Como usar:

- Clone projeto:
  ```bash
  git clone https://github.com/LombaAnderson/facile-challenge.git
  ```
- Acessar pasta
  ```bash
  cd facile-challenge
  ```

- Instalar dependencias
  ```bash
  yarn
  ```
  - ou

  ```bash
  npm install
  ```
- Configurar variaveis de ambiente
  - faça uma copia do arquivo `.env.example` e renomeie para `.env`
  - Adicione um valor a variável de ambiente `KEY_MESSAGE_ENCRYPT=`. Esse valor será usada para encriptar as mensagens
  - Exemplo
    ```.env
    KEY_MESSAGE_ENCRYPT="123456789"
    ```
- Com o postgres instalado crie um banco de dados com o nome de `encripts`
  - Faça um copia do arquivo `ormconfig.example.json` e renomeie para `ormconfig.json`. Informe o usuário e senha do seu banco de dados postgres e o nome do banco de dados criado. Segue abaixo um exemplo
    ```json
    {
      "type":"postgres",
      "port":"5432",
      "host":"localhost",
      "username":"postgres",
      "password":"postgres",
      "database":"encripts",
      "entities": ["./src/modules/**/entities/*.ts"],
      "migrations": ["./src/shared/infra/database/migrations/*.ts"],
      "cli": {
        "migrationsDir":"./src/shared/infra/database/migrations"
      }
    }
    ```


- Executar migration

  ```bash
  yarn typeorm migration:run
  ```

- Executar aplicação

  ```bash
  yarn dev
  ```

- Testando Endpoint CREATE de message
  - POST => http://localhost:3333/encripts

  - JSON
    ```bash
    {
      "name":"Mensagem original"
    }
    ```
  
- Testando Endpoint FindById de message
  - GET => http://localhost:3333/encripts/1
  - Return
    ```bash
    {
      "id": 1,
      "encripted_name": "Segunda mensagem"
    }
    ```
    
# Autor:
Anderson Lomba de Oliveira

Linkedin

https://www.linkedin.com/in/anderson-lomba-140279142/

Portfólio

https://www.lombanderson.epizy.com

