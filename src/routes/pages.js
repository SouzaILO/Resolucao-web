import express from "express";
import homePageController from "../controllers/homePageController.js";
import registerController from "../controllers/registerController.js";
import loginController from "../controllers/loginController.js";
import auth from "../validation/authValidation.js";
import passport from "passport";
import initPassportLocal from "../controllers/passportLocalController.js";

// Init all passport
initPassportLocal();

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', (req, res) => {
        res.render('index');
    });
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