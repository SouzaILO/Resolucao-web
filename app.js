const express = require('express');
const path = require('path');
const app = express(); 
const dotenv = require('dotenv');


//global.sqlConnection = require('./db.js');

app.set('view engine', 'ejs');

dotenv.config ({ path: '.env'});  

app.use(express.urlencoded({extended: false}));
app.use(express.json());



app.use(express.static(__dirname));

//Define Routes
app.use('/', require('./routes/pages'));
app.use('/home', require('./routes/pages'));
app.use('/inicial', require('./routes/pages')); 
app.use('/auth', require('./routes/auth'));

app.listen(3000, () => { 
    console.log('Servidor rodando na porta 3000 : http://localhost:3000');
});  





