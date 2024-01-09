# API Rest Em Bun

## Etapas Do Projeto

- Configuração geral
> Sistema operacional
```bash
codespace@codespaces-04d171 
--------------------------- 
OS: Ubuntu 20.04.6 LTS x86_64 
Host: Virtual Machine 7.0 
Kernel: 6.2.0-1018-azure 
Uptime: 39 mins 
Packages: 650 (dpkg) 
Shell: bash 5.0.17 
Terminal: vscode 
CPU: AMD EPYC 7763 (2) @ 3.242GHz
Memory: 2050MiB / 7929MiB 
```

> Instalando o sistema Bun

```bash
$ curl -fsSL https://bun.sh/install | bash
######################################################################## 100.0%
bun was installed successfully to ~/.bun/bin/bun 

Added "~/.bun/bin" to $PATH in "~/.bashrc" 

To get started, run: 

  source /home/codespace/.bashrc 
  bun --help 
``` 

> Criação de diretorios

```bash
$ mkdir api-rest-node-bun && cd api-rest-node-bun
```

> Inicialização do aplicativo

```bash
$ bun init
```
>> Possivel ocorrido.

```bash
$ bash: bun: command not found
```

>> Solução

```bash
$ vi ~/.bashrc

export BUN_INSTALL="$USER/.bun" 
export PATH="$BUN_INSTALL/bin:$PATH"
```

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