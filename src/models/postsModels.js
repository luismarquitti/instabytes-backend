import conectarAoBanco from "../config/dbConfig.js";

// Conecta ao banco de dados usando a string de conexão do ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para obter todos os posts
export async function getTodosPosts() {
    // Seleciona o banco de dados "imersao-instabyte"
    const db = conexao.db("imersao-instabyte");

    // Seleciona a coleção "posts" dentro do banco de dados
    const colecao = db.collection("posts");

    // Retorna todos os documentos da coleção como um array
    return colecao.find().toArray();
}

// Função assíncrona para criar um novo post
export async function criarPost(novoPost) {
    // Seleciona o banco de dados "imersao-instabyte"
    const db = conexao.db("imersao-instabyte");

    // Seleciona a coleção "posts" dentro do banco de dados
    const colecao = db.collection("posts");

    // Insere um novo documento na coleção
    return colecao.insertOne(novoPost);
}
