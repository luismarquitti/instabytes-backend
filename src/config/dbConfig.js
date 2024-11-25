import { MongoClient } from 'mongodb';

// Função assíncrona para conectar ao banco de dados MongoDB
export default async function conectarAoBanco(stringConexao) {
    let mongoClient;

    try {
        // Cria uma nova instância do MongoClient usando a string de conexão fornecida
        mongoClient = new MongoClient(stringConexao);
        console.log('Conectando ao cluster do banco de dados...');
        
        // Tenta conectar ao MongoDB
        await mongoClient.connect();
        console.log('Conectado ao MongoDB Atlas com sucesso!');

        // Retorna o cliente MongoDB conectado
        return mongoClient;
    } catch (erro) {
        // Em caso de erro, exibe uma mensagem de erro e encerra o processo
        console.error('Falha na conexão com o banco!', erro);
        process.exit();
    }
}