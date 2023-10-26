import express from "express";
import { getUsers, deleteUserById, getUserById } from "../db/users.db";


/*

    Function to get all users from database

*/ 
export const getAllUsers = async (req: express.Request, res: express.Response) => {

    try{

        const users = await getUsers();

        return res.status(200).json(users);

    }catch(error){
        console.log(error)
        return res.sendStatus(400);

    }


}

/*

    Function to delete user

*/ 

export const deleteUser = async (req: express.Request, res: express.Response) => {

    try{

        
        const {id} = req.params;
        const deletedUser = await deleteUserById(id);
        

        return res.json(deletedUser);

    }catch(error){
        console.log(error)
        return res.sendStatus(400);

    }

}

export const updateUsername = async (req: express.Request, res: express.Response, next: express.NextFunction) => { 

    try{
            
            const { username } = req.body;
            const {id} = req.params;


           if(!username){
               return res.sendStatus(400);
           }

            const user = await getUserById(id);

            user.username = username;
            await user.save();

            return res.sendStatus(200);

    }catch(error){
        console.log(error)
        return res.sendStatus(400);

    }

}
