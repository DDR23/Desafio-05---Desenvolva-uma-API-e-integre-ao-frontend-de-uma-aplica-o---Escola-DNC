## IMPORTANTE
Esse repositório é o backend do desafio 05. Desafio que consiste em um sistema simples de registro, edição e consulta de livros

Nesse `README.dm` é possivel encontrar informações sobre:
- Etapas de desenvolvimento do Desafio
- Instalações
- Funcionalidades
- Exemplos de uso

#### URL da API: https://api-desafio05escoladnc.vercel.app
#### URL da Aplicação Frontend: https://desafio05escoladnc.vercel.app

&nbsp;

---

# Desafio-05---Desenvolva-uma-API-e-integre-ao-frontend-de-uma-aplicação---Escola-DNC

🎯 Etapas de Desenvolvimento

### ETAPA-01 - Clone o front-end
Para iniciar o desenvolvimento desse desafio, você precisará clonar o front da aplicação presente neste repositório. É ele que você deverá conectar à sua API.

### ETAPA-02 - Crie um projeto Node para sua API
Comece a construção da sua API através de um projeto em Node.JS. Para isso você deverá iniciar um projeto em Node no seu VS Code. Estruture a API conforme a funcionalidade requerida:
- Cadastro de livros contendo: um ID único, um Título, o Número de páginas, Código ISBN e a editora.
- Edição de livros: podendo editar qualquer campo.
- Visualização de livros: todos os livros cadastrados precisam estar no front-end.
- Deletar livros: todos os livros podem ser deletados.

### ETAPA-03 - Teste de Rotas
Teste cada uma das rotas da API para garantir que estão funcionando. Ao finalizar a API garanta que todas as rotas dela estejam funcionais e realizando o que deveriam estar fazendo.

### ETAPA-04 - Integre sua API com o Front
Implementar a Service que irá executar a conexão com a API. Desenvolva a Service que irá utilizar as rotas da API e irá enviar os dados para cada uma das views utilizadas e desenvolva as funcionalidades em cada View.

### ETAPA-05 - Realize o deploy
Na etapa final você deverá subir o arquivo no github e disponibilizar ele através do Vercel! Assim, qualquer um poderá ver o que você construiu funcionando.

&nbsp;

&nbsp;

## Tecnologias usadas
- express.js
- mongodb

&nbsp;

## Instalações

&nbsp;
comandos para iniciar um projeto do zero

```bash
  npm init -y
```

```bash
  npm i express mongoose cors dotenv serve-favicon
```

```bash
  npm i -D nodemon
```

&nbsp;

&nbsp;
comandos para clonar esse projeto

```bash
  git clone https://github.com/DDR23/Desafio-05---BACKEND---Desenvolva-uma-API-e-integre-ao-frontend-de-uma-aplicacao---Escola-DNC
```
```bash
  npm i
```

&nbsp;
Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

```
NODE_ENV=
DB_USER=
DB_PASSWORD=
```

&nbsp;

## Funcionalidades
- puxa todos os livros cadastrados usando a rota (/books)
- puxa um livro especifico usando a rota (/books/:id)
- cria um livro usando a rota (/books/create)
- edita um livro usando a rota (/books/update/:id)
- apaga um livro usando a rota (/books/delete/:id)

&nbsp;

## Exemplos de uso:

&nbsp;
**GET** - para todos os livros
```http
https://api-desafio05escoladnc.vercel.app/books
```

&nbsp;

&nbsp;
**GET** - para um livros
```http
https://api-desafio05escoladnc.vercel.app/books/6598d9aabc35c1831047e13f
```
&nbsp;
Obs: lembre-se se subistituir o id "6598d9aabc35c1831047e13f" por um id valido

&nbsp;

&nbsp;
**POST** - para criar um livro
```http
https://api-desafio05escoladnc.vercel.app/books/create
```

&nbsp;
É necessário passar esse objeto no body de requisição
```json
  {
    "id": "4",
    "title": "Meu ultimo livro",
    "pages": "143",
    "isbn": "2938121",
    "publisher": "ddr23",
    "sumary": "Aqui nesse campo pode ser colocado uma descrição do conteúdo será visto no livro"
  }
```
&nbsp;
Obs: Nesse objeto de chave/valor apenas o valor pode ser alterado

&nbsp;

&nbsp;
**PUT** - para editar um livro
```http
https://api-desafio05escoladnc.vercel.app/books/update/6598d9aabc35c1831047e13f
```
&nbsp;
Obs: lembre-se se subistituir o id "6598d9aabc35c1831047e13f" por um id valido

&nbsp;
É necessário passar esse objeto no body de requisição
```json
  {
    "id": "4",
    "title": "Meu ultimo livro",
    "pages": "143",
    "isbn": "2938121",
    "publisher": "ddr23",
    "sumary": "Aqui nesse campo pode ser colocado uma descrição do conteúdo será visto no livro"
  }
```

&nbsp;
Obs: Nesse objeto de chave/valor apenas o valor pode ser alterado, podendo passar apenas uma chave/valor

&nbsp;
exemplo:
```json
  {
    "title": "Meu ultimo livro atualizado",
  }
```

&nbsp;

**DELETE** - para deletar um livro
```http
https://api-desafio05escoladnc.vercel.app/books/delete/6598d9aabc35c1831047e13f
```
&nbsp;
Obs: lembre-se se subistituir o id "6598d9aabc35c1831047e13f" por um id valido

&nbsp;

&nbsp;
Obs: O id que deve ser passado por parametro nas rotas "/book/:id", "/books/update/:id" e "/books/delete/:id" deve ser o ID gerado automaticamente pelo mongo, identificado como "_id" no body da requisição e deve ser algo similar a "6598d9aabc35c1831047e13f" por exemplo