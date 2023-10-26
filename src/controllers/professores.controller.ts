import express from "express";
import {createProfessor,getProfessor,getProfessorByMatricula,deleteProfessorByMatricula} from "../db/professores.db";
import { json } from "body-parser";




/*
 Funtion to get all Professores from database

*/ 

export const getAllProfessores = async (req: express.Request, res: express.Response) => {

    try{

        const Professor = await getProfessor();

        return Professor

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

const IDgenerator = () => {
    let random = getRandomIntInclusive(50000, 59999)
    let Matriculaexiste = getProfessorByMatricula(random)
    if(!Matriculaexiste){
        IDgenerator()
    }
    return random 
}


/*
  function to register a new student in the database, it checks if all fields are filled in, if not it returns an error,

*/ 

export const registerProfessores = async (req: express.Request, res: express.Response) => {

    try {
        
        const {Nome ,email, endereco, Cidade , CEP, Telefone,ContaBancaria,AgenciaBancaria} = req.body;

        if(!Nome || !email || !endereco || !Cidade || !CEP || !Telefone || !ContaBancaria || !AgenciaBancaria){
            console.log("Preencha todos os campos");
            return res.redirect('/professores');
            
        }
        let Idgen = IDgenerator()
        
        const Professores = await createProfessor({
            ID: Idgen,
            Nome,
            email,            
            endereco,
            Cidade,
            CEP,
            Telefone,
            ContaBancaria,
            AgenciaBancaria
            });

        return res.redirect('/Professores');
    }catch(error){
        console.error(error);
        return res.redirect('/inicial');
    }
};

/*
  function to edit a student in the database, it checks if the student exists, if not it returns an error,

*/ 

export const EditarProfessores = async (req: express.Request, res: express.Response) => {

    try{
            
        const {Nome ,email, endereco, Cidade , CEP, Telefone,ContaBancaria,AgenciaBancaria } = req.body;
        const {ID} = req.body;
        
        console.log(ID)

       if(!ID){
           return res.sendStatus(400);
       }

        const Professor = await getProfessorByMatricula(Number(ID));
       
        if(!Professor){
            return res.sendStatus(400);
        }
        if(Nome){
            Professor.Nome = Nome;
        }
        if(email){
            Professor.email = email;
        }
        if(endereco){
            Professor.endereco = endereco;
        }
        if(Cidade){
            Professor.Cidade = Cidade;
        }
        if(CEP){
            Professor.CEP = CEP;
        }
        if(Telefone){
            Professor.Telefone = Telefone;
        }
        if(ContaBancaria){
            Professor.ContaBancaria = ContaBancaria;
        }
        if(AgenciaBancaria){
            Professor.AgenciaBancaria = AgenciaBancaria;
        }

        await Professor.save(); 

        return res.redirect('/professores');

}catch(error){
    console.log(error)
    return res.sendStatus(400);

}
    
};


/*

    function to delete a student in the database, it checks if the student exists, if not it returns an error

*/ 

export const deleteProfessores = async (req: express.Request, res: express.Response) => {

    try{

        
        const {ID} = req.body;
        const deletedProfessores = await deleteProfessorByMatricula(ID);
        

        return res.redirect('/professores');

    }catch(error){
        console.log(error)
        return res.sendStatus(400);

    }

}