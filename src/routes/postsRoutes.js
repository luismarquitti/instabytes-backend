import express from "express";
import { listarPosts } from "../controllers/postsController.js";

// Define as rotas da aplicação
const routes = (app) => {
    // Configura o middleware para parsear JSON
    app.use(express.json());
    
    // Define a rota GET para listar todos os posts
    app.get("/posts", listarPosts);
}

export default routes;