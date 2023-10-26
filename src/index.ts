import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './router';
import expressLayouts from 'express-ejs-layouts';



const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors({
    credentials: true,
    }));


app.use(compression());
app.use(cookieParser());


// EJS setup
app.use(express.static("./src/public"));
app.use(expressLayouts);
// Setting the folder for the views
app.set('views', __dirname + '/views');
// Setting the view engine
app.set('view engine', 'ejs');


const server = http.createServer(app);


server.listen(3100,()=> {

    console.log("Server running http://localhost:3100/login")

})

const MONGO_URI = 'mongodb+srv://iagolucas:volteibsb@websave.nvjskhg.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp'

mongoose.Promise = global.Promise;

mongoose.connect(MONGO_URI);

mongoose.connection.on('error', err => {
    console.log('Erro na conexão com o banco de dados: ' + err);
});

app.use('/',router()); 

