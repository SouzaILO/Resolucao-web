var sqlConnection = require('../db.js');

exports.login = (req, res, next) => {
    
    const { usuario, senha} = req.body;
    sqlConnection("SELECT senha FROM usuarios WHERE usuario = ?", [usuario,senha], async (error, results) => {
        if (error !== null) {
            console.log("[MYSQL] Error connecting to mysql:" + err+'\n');
            return res.render('home',
                {
                    message: 'Erro ao se conectar ao banco de dados'
                });                
        }

        if (results.length == 0) {
            return res.render('home', 
                {
                    message: 'Usuário ou senha incorretos'
                });
        }
        var pass = results[0].senha;

        if(pass == senha){
            return res.render('inicial', 
                {
                    message: 'Bem vindo '+usuario
                });
        }else{
            return res.render('home', 
                {
                    message: 'Usuário ou senha incorretos'
                });
        }
    }); 
    
}