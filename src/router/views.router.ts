import express from "express";
import { getUserBySessionToken } from "../db/users.db";
import { getProfessor } from "../db/professores.db";
import { getAlunos } from "../db/alunos.db";



export default (router: express.Router)=> {

        
/*

    router settings for login page

*/ 
    router.get('/login', (req, res) => {
        res.render('login');
    });

    
/*

    router settings for inicial page

*/ 

    router.get('/inicial', (req, res) => {
        getUserBySessionToken(req.cookies["IAGO-AUTH"]).then((user) => {
            if(!user){
                return res.redirect('/login');
            }
            res.render('inicial', {user: user});
        });
    });

/*

    router settings for alunos page

*/ 

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

/*

    router settings for professores page

*/ 

    router.post('/professores', (req, res) => {
        res.redirect('/professores');
    });

    router.get('/professores', (req, res) => {

        getUserBySessionToken(req.cookies["IAGO-AUTH"]).then((user) => {
            if(!user){
                return res.redirect('/login');
            }
            getProfessor().then((professor) => {
                res.render('professores', { 
                    professor: professor,
                    user: user
                });
            });
        });
    });


    /*

    router settings for professores page

*/ 

router.post('/agenda', (req, res) => {
    res.redirect('/agenda');
});

router.get('/agenda', (req, res) => {

    getUserBySessionToken(req.cookies["IAGO-AUTH"]).then((user) => {
        if(!user){
            return res.redirect('/login');
        }
        getProfessor().then((professor) => {
            getAlunos().then((alunos) => {
                let todos_professores =[];
                    for(let i = 0; i < professor.length; i++){ 
                        todos_professores.push(professor[i].Nome);
                     }
                let todos_Alunos =[];
                     for(let i = 0; i < alunos.length; i++){ 
                        todos_Alunos.push(alunos[i].Nome);
                      }                    
                res.render('agenda', { 
                    alunos: alunos,
                    professor: professor,
                    user: user,
                    todos_Alunos: todos_Alunos,
                    todos_professores:todos_professores,
                });
            });
        });
    });
});

}


