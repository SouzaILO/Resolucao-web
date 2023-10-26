import express from "express";
import { getUserByEmail, createUser,getUserByUs } from "../db/users";
import {random, authentication} from "../helpers/index";
import { get } from "lodash";
import { getInicial } from "./inicial";


/*

    Function to login,
     it checks if the fields are filled in,
      if the user exists, if the password is correct, if everything is correct it generates a session token and saves it in the database and in the cookie

*/ 

export const login = async (req: express.Request, res: express.Response) => {
    try {
      var Response;
      const { username, password } = req.body;
      if (!username || !password) {
        return {message: "Senha ou usuario incorreto"};
      }
  
      const user = await getUserByUs(username).select('+authentication.salt +authentication.password');
  
      if (!user) {
        return {message: "Usuario n existe"};
      }
  
      const expectedHash = authentication( password,user.authentication.salt,);
      
      if (user.authentication.password != expectedHash) {
        return {message: "Senha incorreta"};
      }
  
      const salt = random();
      user.authentication.sessionToken = authentication(salt, user._id.toString());
  
      await user.save();
      var expires = (new Date(new Date().getTime() + 15 * 60 * 1000)); 

      res.cookie('IAGO-AUTH', user.authentication.sessionToken, { domain: 'localhost', path: '/', expires: expires }); 

      getInicial(req,res);

    }catch (error) {
      console.log(error);
      return {message: "Erro ao logar"};
  };
}

/*

    Function to register a new user in the database,

*/ 


export const register = async (req: express.Request, res: express.Response) => {


    try {
        
        const {email, password, username} = req.body;

        if(!email || !password || !username){
            return res.sendStatus(400)
            
        }

        const existingUser = await getUserByEmail(email);

        if(existingUser){
          
            return res.sendStatus(400);

        }
        const existingUserus = await getUserByUs(username);

        if(existingUserus){
            
            return res.sendStatus(400);
        }


        const salt = random();

        const user = await createUser({
            username,
            email,            
            authentication:{
                password: authentication(password, salt),
                salt
                }
        });

        console.log(user);
        return res.sendStatus(200);
    }catch(error){
        console.error(error);
        return res.sendStatus(400);
    }
};