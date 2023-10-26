import express, { response } from "express";
import { login,register } from "../controllers/authentication";
import { getInicial } from "../controllers/inicial";

export default (router: express.Router)=> {
    router.post("/auth/register", (req, res) => {
        register(req,res);
    });

    router.post("/auth/login", (req, res) => {
        login(req,res);
    });

    router.post("/logout", (req, res) => {
        res.clearCookie("IAGO-AUTH");
        res.redirect('/login');
    });
 
}