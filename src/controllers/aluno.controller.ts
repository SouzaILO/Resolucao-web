import express from "express";
import { createAluno,getAlunos,getAlunoByMatricula,deleteAlunoByMatricula } from "../db/alunos.db";
import { json } from "body-parser";




/*
 Funtion to get all Alunos from database

*/ 

export const getAllAlunos = async (req: express.Request, res: express.Response) => {

    try{

        const Alunos = await getAlunos();

        return Alunos

    }catch(error){
        console.log(error)
        return res.sendStatus(400); 

    }


}


/*
 Function that generates a random number between 10000 and 19999 and checks if it already exists in the database,
 if it exists it generates another number and checks again, if it does not exist it returns the number generated

*/ 

function getRandomIntInclusive(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

const Matricula = () => {
    let random = getRandomIntInclusive(10000, 19999)
    console.log(random)
    let Matriculaexiste = getAlunoByMatricula(random)
    if(!Matriculaexiste){
        Matricula()
    }
    return random 
}


/*
  function to register a new student in the database, it checks if all fields are filled in, if not it returns an error,

*/ 

export const registerAluno = async (req: express.Request, res: express.Response) => {

    try {
        
        const {Nome ,email, endereco, Cidade , CEP, Telefone,Escola,Idade} = req.body;

        if(!Nome || !email || !endereco || !Cidade || !CEP || !Telefone || !Escola || !Idade){
            console.log("Preencha todos os campos");
            return res.redirect('/alunos');
            
        }
        let matriculaGen = Matricula()
        
        const alunos = await createAluno({
            Matricula: matriculaGen,
            Nome,
            email,            
            endereco,
            Cidade,
            CEP,
            Telefone,
            Escola,
            Idade
            });

        return res.redirect('/alunos');
    }catch(error){
        console.error(error);
        return res.redirect('/inicial');
    }
};

/*
  function to edit a student in the database, it checks if the student exists, if not it returns an error,

*/ 

export const EditarAluno = async (req: express.Request, res: express.Response) => {

    try{
            
        const {Nome ,email, endereco, Cidade , CEP, Telefone,Escola,Idade } = req.body;
        const {Matricula} = req.body;


       if(!Matricula){
           return res.sendStatus(400);
       }

        const Aluno = await getAlunoByMatricula(Number(Matricula));
       
        if(!Aluno){
            return res.sendStatus(400);
        }
        if(Nome){
            Aluno.Nome = Nome;
        }
        if(email){
            Aluno.email = email;
        }
        if(endereco){
            Aluno.endereco = endereco;
        }
        if(Cidade){
            Aluno.Cidade = Cidade;
        }
        if(CEP){
            Aluno.CEP = CEP;
        }
        if(Telefone){
            Aluno.Telefone = Telefone;
        }
        if(Escola){
            Aluno.Escola = Escola;
        }
        if(Idade){
            Aluno.Idade = Idade;
        }

        await Aluno.save(); 

        return res.redirect('/alunos');

}catch(error){
    console.log(error)
    return res.sendStatus(400);

}
    
};


/*

    function to delete a student in the database, it checks if the student exists, if not it returns an error

*/ 

export const deleteAluno = async (req: express.Request, res: express.Response) => {

    try{

        
        const {Matricula} = req.body;
        const deletedAluno = await deleteAlunoByMatricula(Matricula);
        

        return res.redirect('/alunos');

    }catch(error){
        console.log(error)
        return res.sendStatus(400);

    }

}