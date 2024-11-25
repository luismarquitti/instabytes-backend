import fs from "fs";
import { getTodosPosts, criarPost } from "../models/postsModels.js";

// Função assíncrona para listar todos os posts
export async function listarPosts(req, res) {
    // Obtém todos os posts do modelo
    const posts = await getTodosPosts();

    // Retorna os posts em formato JSON com status 200 (OK)
    res.status(200).json(posts);
}

// Função assíncrona para criar um novo post
export async function postarNovoPost(req, res) {
    // Extrai o corpo da requisição
    const novoPost = req.body;

    // try catch para tratar erros
    try {
        // Chama a função do modelo para criar um novo post
        const postCriado = await criarPost(novoPost);
        // Retorna uma mensagem de sucesso com status 200 (Created)
        res.status(200).json(postCriado);
    } catch (erro) {
        // Exibe o erro no console
        console.error(erro.message);
        // Retorna uma mensagem de erro com status 500 (Internal Server Error)
        res.status(500).json({ "Erro": "Falha ao criar post!" });
    }
}

// Função para fazer upload de imagens
export async function uploadImagem(req, res) {
    // Cria objeto novoPost
    const novoPost = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    };

    // try catch para tratar erros
    try {
        // Chama a função do modelo para criar um novo post
        const postCriado = await criarPost(novoPost);
        // Renomeia a imagem e a move para a pasta uploads
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;
        fs.renameSync(req.file.path, imagemAtualizada);
        // Retorna uma mensagem de sucesso com status 200 (Created)
        res.status(200).json(postCriado);
    } catch (erro) {
        // Exibe o erro no console
        console.error(erro.message);
        // Retorna uma mensagem de erro com status 500 (Internal Server Error)
        res.status(500).json({ "Erro": "Falha ao criar post!" });
    }
}