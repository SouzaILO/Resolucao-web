import express from "express";
import { registerAluno,EditarAluno,deleteAluno } from "../controllers/aluno.controller";



export default (router: express.Router)=> {

    router.post("/aluno/adicionar", (req, res) => {

        registerAluno(req, res);
    });

    router.post("/aluno/editar", (req, res) => {
        EditarAluno(req, res);
    });
    router.post("/aluno/DELETAR", (req, res) => {
        deleteAluno(req, res);
    });

}