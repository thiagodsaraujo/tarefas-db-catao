# 🗃️ Microserviço Banco de Dados (MongoDB) - Tarefas (P1 - Sistemas de Informação)

Este repositório contém o microsserviço de banco de dados da aplicação de tarefas, utilizando **MongoDB**. Faz parte da atividade prática da disciplina **Desenvolvimento de Sistemas** da **UNIFACISA**, ministrada pelo professor @brunogamacatao.

- LINK BACK END (CÓDIGO ORIGINAL DO PROFESSOR): https://github.com/brunogamacatao/tarefas_back.git
- LINK FRONT-END (CÓDIGO ORIGINAL DO PROFESSOR): https://github.com/brunogamacatao/tarefas_front.git
---

## 🔗 Microsserviços Relacionados

- 🔧 **Backend (Express + Node.js)**  
  -- https://github.com/thiagodsaraujo/tarefas_back_catao  
  -- DockerHub: [thiagodsaraujo/tarefas_back_catao](https://hub.docker.com/r/thiagodsaraujo/tarefas_back_catao)

- 💻 **Frontend (React + Nginx)**  
  -- https://github.com/thiagodsaraujo/tarefas_front  
  -- DockerHub: [thiagodsaraujo/tarefas_front](https://hub.docker.com/r/thiagodsaraujo/tarefas_front)

- 🗃️ **Banco de Dados (MongoDB)** ← este repositório  
  -- DockerHub: [thiagodsaraujo/tarefas_db_mongo](https://hub.docker.com/r/thiagodsaraujo/tarefas_db_mongo)

---

## 📦 Tecnologias Utilizadas

- MongoDB
- Docker
- Script JS para popular o banco (init.js)

---

## 🚀 Etapas para Execução Completa da Aplicação

### Etapa 1: Subir o Banco de Dados MongoDB com dados iniciais

```bash
docker run -d --name tarefas_mongo \
  -p 27017:27017 \
  thiagodsaraujo/tarefas_db_mongo

### Etapa 2: Subir o Banco de Dados MongoDB com dados iniciais

docker run -d --name tarefas_back \
  -p 5000:5000 \
  -e URL_BANCO_DE_DADOS=mongodb://host.docker.internal:27017/tarefas \
  thiagodsaraujo/tarefas_back_catao

## Etapa 3: Subir o Frontend (interface React)

docker run -d --name tarefas_front \
  -p 3000:80 \
  thiagodsaraujo/tarefas_front
