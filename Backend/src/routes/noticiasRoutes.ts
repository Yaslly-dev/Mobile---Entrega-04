import express from 'express';
import { listarNoticias, criarNoticia, deletarNoticia, atualizarNoticia } from '../controllers/noticiasController';

const router = express.Router();

router.get('/noticias', listarNoticias);
router.post('/noticias', criarNoticia);
router.put('/noticias/:id', atualizarNoticia)
router.delete('/noticias/:id', deletarNoticia);
export default router;