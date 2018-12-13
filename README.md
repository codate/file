# File

File management

### Utilização

**Pré-requisitos**

* NodeJS
* MongoDB

Após baixar o código fonte do git, executar o comanto abaixo na pasta raiz do projeto para instalar as dependências:

```bash
$ npm install
```

Para executar o projeto executar o comanto abaixo:

```bash
$ node --experimental-modules src\index.mjs 
```

**Variáveis de ambiente**

| Variável      | Descrição                                                      | Exemplo                          |
|---------------|----------------------------------------------------------------|----------------------------------|
| DB_URL        | String de conexão com o MongoDB.                               | mongodb://localhost:27017/filedb |
| FILE_MAX_SIZE | Tamanho máximo permitido para o upload de arquivos (em bytes). | 6000000                          |