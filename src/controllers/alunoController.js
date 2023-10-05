//import {FillAlunos }  from "../services/alunoServices.js";
import { validationResult } from "express-validator";
import loginController from "../controllers/loginController.js";

let getAlunoPage = (req, res) => {
    let user = req.user;
    return res.redirect("alunos");
    
};



module.exports = {
    getAlunoPage: getAlunoPage,

};

