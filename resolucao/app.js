const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();  


const db = require('./models/db');
app.use(express.static(__dirname));


export function Fnapp() {
    return app;
}

app.get('/', async (req,res) => {

    res.sendFile(__dirname + '/paginas/index.html');

});

app.get('/home.html', async (req,res) => {
    //take me to index.html
    res.sendFile(path.join(__dirname + '/paginas/home.html'));
});

app.get('/inicial.html', async (req,res) => {
    //take me to index.html
    res.sendFile(__dirname + '/paginas/inicial.html');
});

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));
  


app.listen(3002, () => { 
    console.log('Servidor rodando na porta 3002 : http://localhost:3002');
});  
