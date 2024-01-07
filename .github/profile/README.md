# API Rest Em Bun

## Etapas Do Projeto

- Configuração da aplicação
- Criação de diretorios
  - mkdir api-rest-node-bun && cd api-rest-node-bun
- Inicialização do aplicativo
  - bun init
- Escolha padrão para inicialização do aplicativo.
- Instalação de dependências
  - bun add elysia @elysiajs/cookie prisma @prisma/client dotenv pg jsonwebtoken@8.5.1
- Instalação correspondentes
  - bun add -d @types/jsonwebtoken
- As dependências que foram instaladas:
  - Elysia: Elysia é uma estrutura web para Bun que simplifica o trabalho com Bun, semelhante ao que Express faz para Node.js.
  - Prisma: Prisma é um mapeador objeto-relacional (ORM) para JavaScript e TypeScript.
  - Dotenv: Dotenv é um pacote NPM que carrega variáveis ​​ambientais de um arquivo .env em process.env.
  - PG: PG é o driver nativo do PostgreSQL.
  - jsonwebtoken@8.5.1: Um pacote que implementa o padrão JWT (versão 8.5.1).
- Configurando o banco de dados
  - bunx prisma init --datasource-provider postgresql
- Criando modelos Prisma
  - Migração das model com prisma
    - bunx prisma migrate dev --name init
- Criação de serviços e controladores
  - mkdir controllers && mkdir services
- Implementando Lógica dos Serviços
- Implementando Lógica das Controllers
- Configurando seu servidor Bun-Elysia
- comando para iniciar app.
  - bun --watch index.ts