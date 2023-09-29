const express = require('express');

const app = express();  

const db = require('../models/db');


app.use(express.static(__dirname));


app.get('/', async (req,res) => {

    res.sendFile(__dirname + '/index.html');

});

app.get('/home.html', async (req,res) => {
    //take me to index.html
    res.sendFile(__dirname + '/home.html');
});

app.get('/inicial.html', async (req,res) => {
    //take me to index.html
    res.sendFile(__dirname + '/paginas/inicial.html');
});


app.listen(3002, () => { 
    console.log('Servidor rodando na porta 3002 : http://localhost:3002');
});  
