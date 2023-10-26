import express from "express";
import { registerProfessores, EditarProfessores, deleteProfessores  } from "../controllers/professores.controller";



export default (router: express.Router)=> {

    router.post("/professor/adicionar", (req, res) => {
        
        registerProfessores(req, res);
    });


    router.post("/professor/editar", (req, res) => {
        EditarProfessores(req, res);
    });
    router.post("/professor/DELETAR", (req, res) => {
        
        deleteProfessores(req, res);
    });

}