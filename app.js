const express = require('express');

const app = express();  

app.get('/', async (req,res) => {

    res.send('Pagina Inicial   sadsadsa ');
});


app.listen(3000, () => { 
    console.log('Servidor rodando na porta 3000 : http://localhost:3000');
}); 
