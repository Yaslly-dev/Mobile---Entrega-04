import express, {Request, Response} from 'express';
import noticiasRoutes from './src/routes/noticiasRoutes'

const app = express()

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', noticiasRoutes);

app.listen(PORT, ()=>{
    console.log(`Servidor rodando com sucesso na porta ${PORT}!`);
})