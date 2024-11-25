import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem } from "../controllers/postsController.js";

// Cria uma instância do middleware Multer
const upload = multer({ dest: "uploads/" });

// Define as rotas da aplicação
const routes = (app) => {
    // Configura o middleware para parsear JSON
    app.use(express.json());

    // Define a rota GET para listar todos os posts
    app.get("/posts", listarPosts);

    // Rota para criar um novo post
    app.post("/posts", postarNovoPost);

    //Rota para upload de imagens
    app.post("/upload", upload.single('imagem'), uploadImagem);
}

export default routes;