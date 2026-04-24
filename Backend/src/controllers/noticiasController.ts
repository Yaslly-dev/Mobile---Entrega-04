import {Request, Response} from 'express';
import { db } from '../db/db';
import {noticias} from '../db/schema';
import { eq } from 'drizzle-orm';

interface Noticia{
    id: number;
    titulo: string;
    descricao: string;
    conteudo: string;
    data_publicacao: Date;
    fonte: string;
    tags: string;   
}

export const listarNoticias = async (req: Request, res: Response) =>{

    try{

        const listaNoticias = await db.select().from(noticias);
        res.json(listaNoticias);
    }catch(error){
        res.status(500).json({mensagem: "Erro ao listar notícias. Contate o administrador."})
    }
    
};

export const criarNoticia = async (req: Request, res: Response) => {

    const {titulo}: {titulo:string} = req.body;
    const {descricao}: {descricao:string} = req.body;
    const {conteudo}: {conteudo:string} = req.body;
    const {data_publicacao}: {data_publicacao:Date} = req.body;
    const {fonte}: {fonte:string} = req.body;
    const {tags}: {tags:string} = req.body;

    try{
    const [novaNoticia] = await db.insert(noticias).values({titulo, descricao, conteudo, data_publicacao: new Date(),fonte,tags})
    .returning();
   
    res.status(201).json(novaNoticia);
}catch(error){
    res.status(500).json({mensagem: "Erro ao criar notícia. Contate o administrador.", error});
}
}

export const atualizarNoticia = async (req: Request, res: Response)=> {

    const {id} = req.params;
    
    const {titulo}: {titulo:string} = req.body;
    const {descricao}: {descricao:string} = req.body;
    const {conteudo}: {conteudo:string} = req.body;
    const {data_publicacao}: {data_publicacao:Date} = req.body;
    const {fonte}: {fonte:string} = req.body;
    const {tags}: {tags:string} = req.body;

    try{

        const noticiaAtualizada = await db.update(noticias).set({titulo, descricao, conteudo, fonte, tags}).where(eq(noticias.id, Number(id)))
        .returning();

        if (noticiaAtualizada.length === 0){
        return res.status(404).json({mensagem:"Notícia inexistente. Não foi possível atualizar."})
        } 
        return res.status(200).json(noticiaAtualizada[0]);
        } catch(error){
            res.status(500).json({mensagem: "Erro ao atualizar notícia. Contate o administrador.", error})
    }
}
export const deletarNoticia = async (req: Request, res: Response) => {

    const {id} = req.params;

    try{
        const noticiaExcluida = await db.delete(noticias).where(eq(noticias.id, Number(id)))
        .returning();

        if(noticiaExcluida.length === 0){

            return res.status(404).json({mensagem: "Notícia inexistente."});
        }
        
        res.status(200).json({mensagem: "Notícia excluída com sucesso!"});
    }catch(error){
        res.status(500).json({mensagem: "Erro ao deletar notícia. Contate o administrador."})
    }
}

