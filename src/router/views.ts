import express from "express";
import { getUserBySessionToken } from "../db/users";
import { getAlunos } from "../db/alunos";



export default (router: express.Router)=> {
    router.get('/login', (req, res) => {
        res.render('login');
    });

    router.get('/inicial', (req, res) => {
        getUserBySessionToken(req.cookies["IAGO-AUTH"]).then((user) => {
            if(!user){
                return res.redirect('/login');
            }
            res.render('inicial', {user: user});
        });
    });

    router.post('/alunos', (req, res) => {
        res.redirect('/alunos');
    });

    router.get('/alunos', (req, res) => {

        getUserBySessionToken(req.cookies["IAGO-AUTH"]).then((user) => {
            if(!user){
                return res.redirect('/login');
            }
            getAlunos().then((alunos) => {
                res.render('aluno', { 
                    alunos: alunos,
                    user: user
                });
            });
        });
    });
}