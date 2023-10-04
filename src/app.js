require('dotenv').config({ path: '.env'});
import express from "express";
import configViewEngine from "./configs/viewEngine.js";
import initWebRoutes from "./routes/pages.js";
import bodyParser from "body-parser";
import cookieParser from 'cookie-parser';
import session from "express-session";
import connectFlash from "connect-flash";
import passport from "passport";

let app = express(); 

configViewEngine(app);



app.set('view engine', 'ejs');


//use cookie parser
app.use(cookieParser('secret'));

//config session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 // 86400000 1 day
    }
}));

// Enable body parser post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Config view engine
configViewEngine(app);

//Enable flash message
app.use(connectFlash());

//Config passport middleware
app.use(passport.initialize());
app.use(passport.session());

initWebRoutes(app);

app.listen(3000, () => { 
    console.log('Servidor rodando na porta 3000 : http://localhost:3000');
});  





