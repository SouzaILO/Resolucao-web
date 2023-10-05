import express from "express";
import homePageController from "../controllers/homePageController.js";
import registerController from "../controllers/registerController.js";
import loginController from "../controllers/loginController.js";
import AlunoController from "../controllers/alunoController.js";
import auth from "../validation/authValidation.js";
import passport, { use } from "passport";
import initPassportLocal from "../controllers/passportLocalController.js";
import findalunos from "../services/alunoServices.js";

// Init all passport
initPassportLocal();

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', (req, res) => {
        res.render('index');
    });
    //router.get('/alunos', loginController.checkLoggedIn ,async (req, res) => {
    router.get('/alunos' ,async (req, res) => {  

        res.render('aluno', {
            user: req.user,
            alunos: await findalunos.findalunos()
        });
       
    });


    //router.get("/alunos",loginController.checkLoggedIn, AlunoController.getAlunoPage);  
    router.post("/alunos",loginController.checkLoggedIn, AlunoController.getAlunoPage);


    router.get("/inicial", loginController.checkLoggedIn, homePageController.handleHelloWorld);  



    router.get("/login",loginController.checkLoggedOut, loginController.getPageLogin); 
    router.post("/login", passport.authenticate("local", {
        successRedirect: "/inicial",
        failureRedirect: "/login",
        successFlash: true,
        failureFlash: true
    }));

    router.get("/register", registerController.getPageRegister);
    router.post("/register", auth.validateRegister, registerController.createNewUser);
    router.post("/logout", loginController.postLogOut);
    return app.use("/", router); 





};


module.exports = initWebRoutes;