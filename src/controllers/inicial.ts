import express from "express";
import router from "router";


/*
     Function to get the inicial page,
     
*/


export const getInicial = async (req: express.Request, res: express.Response) => {
     return res.redirect('/inicial');
}
