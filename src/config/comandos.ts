/*

Lembrete do uso de instruções mais usadas:

  Criar projeto:
    npx @nestjs/cli new <nome do projeto>

  Criar módulo:
    npx @nestjs/cli generate module <nome do módulo>

  Criar Controller:
    npx @nestjs/cli controller <nome do controller>

  Criar Serviço:
    npx @nestjs/cli generate service <nome do service>

Validadores de DTO (Data Transfer Object)

  > class-validator

  > class-trnsformer

  Instalação

    npm i <validador dto>

    Exemplo:

      npm i class-validator class-transformer

Partial Type

  Instalação:
  
    npm i @nestjs/mapped-types

ORM e NestJS

  Os ORMs que são mais facilmente integrados com o NestJS e são citados atualmente na
  documentação do Nest são:
    >>  MikroORM
    >>  Squelize
    >>  TypeORM         (Maior suporte e estrelas)
    >>  Knex.js
    >>  Prisma

  Prisma
    Instalação do Prisma:

      Modo Desenvolvimento:
        npm i -D prisma

    Iniciando um banco de dados em Prisma:
      npx prisma init

    Carregando automaticamente as tabelas do banco de dados via Prisma:
      npx prisma db pull

    A instrução abaixo é responsável por observar o arquivo schema.prisma e gerar as apis:

      npx prisma generate
    
*/