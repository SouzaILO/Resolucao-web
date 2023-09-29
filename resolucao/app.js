const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();  

const db = require('./models/db');
const connection = db; // db.sequelize
app.use(express.static(__dirname));


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
   


app.listen(3000, () => { 
    console.log('Servidor rodando na porta 3000 : http://localhost:3000');
});  


app.post('/auth', function(request, response) {
	// Capture the input fields
	let usuario = request.body.usuario; 
	let senha = request.body.senha;
    console.log(usuario);
    //console.log(response);
	// Ensure the input fields exists and are not empty
	if (usuario && senha) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		connection.query("SELECT * FROM usuarios WHERE usuario = '?' AND senha = '?' ", [usuario, senha], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				request.session.loggedin = true;
				request.session.usuario = usuario;
				// Redirect to home page
				response.redirect('/home');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send(' Username and/or Password!');
		response.end();
	}
});



