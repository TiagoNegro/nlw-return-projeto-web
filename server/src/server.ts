import express from 'express';
import  cors  from 'cors';
import { routes } from './routes';

const app = express();

/**
 * GET, POST, PUT, PATCH, DELETE
 * 
 * GET = Buscar informações
 * POST = Cadastrar informações
 * PUT = Atualizar informações de uma entidade
 * PATCH = Atualizar uma informação única de uma entidade
 * DELETE = Deletar uma informação
 */

/**
 * Método para quando o usuário acessar um endpoint específico
 * retornar alguma função, no caso a função vem com o request(req), 
 * pedido que o usuário faz, e uma response(res), resposta que o 
 * servidor retorná para o cliente.
 */

app.use(cors());
app.use(express.json());
app.use(routes);



/**
 * Função para execução do método watch do servidor
 */
app.listen(3333, () => {
  console.log('HTTP server running!');
});