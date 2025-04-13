db = db.getSiblingDB('tarefas');

db.tarefas.insertMany([
  {
    titulo: "Aprender Docker",
    descricao: "Entender como funcionam imagens e containers",
    feita: false
  },
  {
    titulo: "Finalizar atividade P1",
    descricao: "Criar microsserviços e publicar no DockerHub",
    feita: false
  },
  {
    titulo: "Publicar imagens no DockerHub",
    descricao: "Push de cada microsserviço",
    feita: true
  }
]);
