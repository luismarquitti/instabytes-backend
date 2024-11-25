import { getTodosPosts } from "../models/postsModels.js";

// Função assíncrona para listar todos os posts
export async function listarPosts (req, res) {
    // Obtém todos os posts do modelo
    const posts = await getTodosPosts();
    
    // Retorna os posts em formato JSON com status 200 (OK)
    res.status(200).json(posts);
}